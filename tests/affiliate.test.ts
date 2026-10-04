import { describe, expect, it } from 'vitest';
import { getAffiliateUrl } from '../src/lib/affiliate';

describe('getAffiliateUrl', () => {
  it('falls back to the verified official URL when no affiliate URL is configured', () => {
    expect(getAffiliateUrl(undefined, 'https://example.com/')).toBe('https://example.com/');
  });

  it('falls back for unknown affiliate keys', () => {
    expect(getAffiliateUrl('unknown', 'https://example.org/')).toBe('https://example.org/');
  });
});
