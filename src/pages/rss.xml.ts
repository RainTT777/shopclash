import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../lib/site';
const esc=(value:string)=>value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export const GET: APIRoute = async () => { const posts=(await getCollection('posts')).sort((a,b)=>b.data.publishedAt.valueOf()-a.data.publishedAt.valueOf()); const items=posts.map((p)=>`<item><title>${esc(p.data.title)}</title><link>${site.url}/guides/${p.id}/</link><guid>${site.url}/guides/${p.id}/</guid><pubDate>${p.data.publishedAt.toUTCString()}</pubDate><description>${esc(p.data.summary)}</description></item>`).join(''); return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${site.name}</title><link>${site.url}</link><description>${esc(site.description)}</description><language>zh-CN</language>${items}</channel></rss>`,{headers:{'Content-Type':'application/rss+xml; charset=utf-8'}}); };
