import { cache } from 'react';
import { unstable_rethrow } from 'next/navigation';
import initialCatalog from '@/data/catalog.json';
import type { Catalog } from './catalog-types';

// Public, published records only. An empty published catalog must never resurrect old trips.
export const getCatalog = cache(async (): Promise<{ catalog: Catalog; managed: boolean; publishedAt: string | null }> => {
  const siteKey = process.env.DISCOVERY_CATALOG_SITE_KEY || process.env.NEXT_PUBLIC_DISCOVERY_SITE_KEY;
  if (siteKey) {
    try {
      const origin = process.env.DISCOVERY_PLATFORM_URL || 'https://platform.discoverymarketing.io';
      const response = await fetch(`${origin}/api/site/catalog?site_key=${encodeURIComponent(siteKey)}`, { cache: 'no-store', signal: AbortSignal.timeout(5000) });
      if (!response.ok) throw new Error(`Catalog returned ${response.status}`);
      const data = await response.json();
      if (data.catalog !== null) {
        if (!data.catalog || !Array.isArray(data.catalog.services) || !Array.isArray(data.catalog.groups) || !Array.isArray(data.catalog.navigation)) throw new Error('Invalid catalog response');
        return { catalog: data.catalog as Catalog, managed: true, publishedAt: data.publishedAt || null };
      }
    } catch (error) {
      unstable_rethrow(error);
      // Do not serve stale legacy prices or archived services during a Platform outage.
      console.error('Published catalog unavailable:', error instanceof Error ? error.message : 'unknown error');
      throw new Error('Experiences are temporarily unavailable. Please try again shortly.');
    }
  }
  return { catalog: initialCatalog as Catalog, managed: false, publishedAt: null };
});
