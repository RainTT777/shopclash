import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://clashshop.net',
  output: 'static',
  devToolbar: { enabled: false },
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/vpn/demo-') && !page.includes('/compare/demo-') })],
  vite: { plugins: [tailwindcss()] },
  markdown: { shikiConfig: { theme: 'github-light' } }
});
