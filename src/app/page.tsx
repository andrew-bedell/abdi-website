import { getCatalog } from '@/lib/catalog';
import { HomeHero } from '@/components/ExistingHomeSections';
import HomeSections from '@/components/HomeSections';

export default async function Home() {
  const { catalog, publishedAt } = await getCatalog();
  return <div data-catalog-published-at={publishedAt || undefined}>
    <HomeHero />
    <HomeSections catalog={catalog} />
  </div>;
}
