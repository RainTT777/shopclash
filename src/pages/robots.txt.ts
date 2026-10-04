import type { APIRoute } from 'astro';
import { site } from '../lib/site';
export const GET: APIRoute = () => new Response(`User-agent: *\nAllow: /\n\nDisallow: /404.html\nDisallow: /vpn/demo-vpn/\nDisallow: /vpn/demo-shield/\nDisallow: /compare/demo-vpn-vs-demo-shield/\n\nSitemap: ${site.url}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
