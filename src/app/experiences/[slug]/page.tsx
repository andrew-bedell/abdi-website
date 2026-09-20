/* eslint-disable @next/next/no-img-element -- Platform uploads are already optimized WebP images. */
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCatalog } from '@/lib/catalog';
import { servicePrice } from '@/lib/catalog-types';
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params; const { catalog } = await getCatalog(); const service = catalog.services.find(s => s.slug === slug && s.status === 'published');
  return { title: service ? `${service.name} | Zimba Tours` : 'Experience not found', description: service?.description.slice(0, 160), alternates: { canonical: `https://www.zimbatourstanzania.com/experiences/${slug}` } };
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params; const { catalog } = await getCatalog(); const service = catalog.services.find(s => s.slug === slug && s.status === 'published');
  if (!service) notFound();
  return <article className="mx-auto max-w-6xl px-5 pt-28 pb-20 sm:px-8">
    <Link href="/experiences" className="text-sm text-amber-800 underline underline-offset-4">All experiences</Link>
    <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1fr_320px]">
      <div><h1 className="text-4xl font-bold sm:text-5xl">{service.name}</h1>{service.duration && <p className="mt-5 text-lg text-stone-600">{service.duration}</p>}
        <div className="mt-5 flex flex-wrap gap-3">{catalog.groups.filter(g => service.groupIds.includes(g.id)).map(g => <Link className="text-sm text-amber-800 underline underline-offset-4" key={g.id} href={`/experiences/groups/${g.slug}`}>{g.name}</Link>)}</div>
      </div>
      <aside className="rounded-xl bg-stone-100 p-6"><p className="text-xl font-semibold">{servicePrice(service)}</p><p className="my-4 text-sm text-stone-600">Contact Abdi to confirm availability and your trip details.</p><Link className="block rounded-lg bg-amber-700 px-5 py-3 text-center font-semibold text-white hover:bg-amber-800" href={`/booking?experience=${encodeURIComponent(service.slug)}`}>Ask about this experience</Link></aside>
    </div>
    {service.photos[0] && <img className="mt-12 aspect-[16/9] w-full rounded-xl object-cover" src={service.photos[0].url} alt={service.photos[0].alt} fetchPriority="high" />}
    <div className="mt-12 max-w-3xl whitespace-pre-line text-lg leading-8 text-stone-700">{service.description}</div>
    {service.photos.length > 1 && <section aria-label="Photo gallery" className="mt-12 grid gap-6 sm:grid-cols-2">{service.photos.slice(1).map((p, i) => <img key={`${p.url}-${i}`} className="aspect-[4/3] w-full rounded-xl object-cover" src={p.url} alt={p.alt} loading="lazy" />)}</section>}
  </article>;
}
