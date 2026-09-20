// Run after a build with DISCOVERY_CATALOG_SITE_KEY set. Connected navigation and
// pages must render per request, never freeze a publication into static output.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const manifest=JSON.parse(await readFile(new URL('../.next/prerender-manifest.json',import.meta.url),'utf8'));
for(const route of ['/','/about','/safety','/privacy','/booking','/experiences','/safaris','/kilimanjaro','/day-trips']) {
  assert.equal(Object.hasOwn(manifest.routes,route),false,route+' must not be statically published when the catalog is connected');
}
console.log('Connected homepage, navigation and service pages remain dynamic.');
