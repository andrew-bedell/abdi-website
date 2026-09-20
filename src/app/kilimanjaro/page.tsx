import Legacy from '@/components/LegacyKilimanjaro';
import { getCatalog } from '@/lib/catalog';
import ExperienceListing from '@/components/ExperienceListing';
export default async function Page() {
  const { catalog, managed } = await getCatalog();
  if (!managed) return <Legacy />;
  const group = catalog.groups.find(g => g.id === 'kilimanjaro');
  return <ExperienceListing catalog={catalog} group={group} />;
}
