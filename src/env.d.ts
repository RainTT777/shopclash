/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_ANALYTICS_PROVIDER?: string;
  readonly PUBLIC_ANALYTICS_SITE_ID?: string;
  readonly PUBLIC_ANALYTICS_ENDPOINT?: string;
  readonly AFFILIATE_DEMO_VPN_URL?: string;
  readonly AFFILIATE_DEMO_SHIELD_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
