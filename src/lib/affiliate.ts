const links: Record<string, string | undefined> = {
  'demo-vpn': import.meta.env.AFFILIATE_DEMO_VPN_URL,
  'demo-shield': import.meta.env.AFFILIATE_DEMO_SHIELD_URL
};

export function getAffiliateUrl(key: string | undefined, fallback: string): string {
  if (!key) return fallback;
  return links[key] || fallback;
}
