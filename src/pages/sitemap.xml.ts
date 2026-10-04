import type { APIRoute } from 'astro';
import { site } from '../lib/site';
import { scienceArticles } from '../lib/science-articles';

const staticPages = [
  '/', '/science/', '/help/', '/tools/', '/faq/', '/methodology/', '/about/',
  '/contact/', '/privacy/', '/disclaimer/', '/affiliate-disclosure/'
];

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (char) => ({
  '<':'&lt;', '>':'&gt;', '&':'&amp;', "'":'&apos;', '"':'&quot;'
}[char] ?? char));

export const GET: APIRoute = () => {
  const lastmod = '2026-10-04';
  const urls = [
    ...staticPages.map((path) => ({ path, priority: path === '/' ? '1.0' : '0.7', changefreq: path === '/' ? 'daily' : 'weekly' })),
    ...scienceArticles.map((article) => ({ path: `/science/${article.slug}/`, priority: '0.8', changefreq: 'monthly' }))
  ];
  const entries = urls.map(({ path, priority, changefreq }) => `<url><loc>${escapeXml(new URL(path, site.url).toString())}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
