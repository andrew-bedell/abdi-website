import Legacy from '@/components/LegacyDayTrips';
import { getCatalog } from '@/lib/catalog';
import ExperienceListing from '@/components/ExperienceListing';
export default async function Page() {
  const { catalog, managed } = await getCatalog();
  if (!managed) return <Legacy />;
  const group = catalog.groups.find(g => g.id === 'day-trips');
  return <ExperienceListing catalog={catalog} group={group} />;
}
