import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const root = resolve('dist');
if (!existsSync(root)) throw new Error('dist/ 不存在，请先运行 npm run build');

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function targetFor(pathname) {
  const clean = decodeURIComponent(pathname).replace(/^\//, '').replace(/\/$/, '');
  if (!clean) return join(root, 'index.html');
  if (extname(clean)) return join(root, clean);
  const htmlFile = join(root, `${clean}.html`);
  if (existsSync(htmlFile)) return htmlFile;
  return join(root, clean, 'index.html');
}

const errors = [];
const htmlFiles = walk(root).filter((file) => file.endsWith('.html'));
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/href=["']([^"']+)["']/g)) {
    const href = match[1];
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
    const url = new URL(href, 'https://clashshop.net');
    if (url.hostname !== 'clashshop.net') continue;
    if (!existsSync(targetFor(url.pathname))) errors.push(`${relative(root, file)} -> ${url.pathname}`);
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(match[1]); } catch (error) { errors.push(`${relative(root, file)} -> JSON-LD 无效: ${error.message}`); }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`已检查 ${htmlFiles.length} 个 HTML 文件：内部链接和 JSON-LD 均有效。`);
