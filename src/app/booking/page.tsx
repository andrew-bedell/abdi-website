import { notFound } from 'next/navigation';
import LegacyBooking from '@/components/LegacyBooking';
import ExperienceInquiry from '@/components/ExperienceInquiry';
import { getCatalog } from '@/lib/catalog';
import ExperienceListing from '@/components/ExperienceListing';
export default async function BookingPage({ searchParams }: { searchParams: Promise<{ experience?: string }> }) {
  const { experience } = await searchParams;
  const { catalog, managed } = await getCatalog();
  if (experience) {
    const service = catalog.services.find(s => s.slug === experience && s.status === 'published');
    if (!service) notFound();
    return <ExperienceInquiry service={service} />;
  }
  if (managed) return <ExperienceListing catalog={catalog} />;
  return <LegacyBooking />;
}
