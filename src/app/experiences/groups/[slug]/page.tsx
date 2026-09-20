import { notFound } from 'next/navigation';
import { getCatalog } from '@/lib/catalog';
import ExperienceListing from '@/components/ExperienceListing';
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params; const { catalog } = await getCatalog(); const group = catalog.groups.find(g => g.slug === slug);
  return { title: group ? `${group.name} | Zimba Tours` : 'Experience group not found' };
}
export default async function GroupPage({ params }: Props) {
  const { slug } = await params; const { catalog } = await getCatalog(); const group = catalog.groups.find(g => g.slug === slug);
  if (!group) notFound();
  return <ExperienceListing catalog={catalog} group={group} />;
}
