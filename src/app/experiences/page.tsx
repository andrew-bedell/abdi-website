import { getCatalog } from '@/lib/catalog';
import ExperienceListing from '@/components/ExperienceListing';
export const metadata = { title: 'Experiences | Zimba Tours' };
export default async function ExperiencesPage() { const { catalog } = await getCatalog(); return <ExperienceListing catalog={catalog} />; }
