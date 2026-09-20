/* eslint-disable @next/next/no-img-element -- Platform uploads are already optimized WebP images. */
import Link from 'next/link';
import type { Catalog, Group } from '@/lib/catalog-types';
import { servicePrice } from '@/lib/catalog-types';

export default function ExperienceListing({ catalog, group }: { catalog: Catalog; group?: Group }) {
  const services = catalog.services.filter(s => s.status === 'published' && (!group || s.groupIds.includes(group.id)));
  return <section className="mx-auto max-w-7xl px-5 pt-28 pb-20 sm:px-8">
    <Link href="/experiences" className="text-sm text-amber-800 underline underline-offset-4">All experiences</Link>
    <h1 className="mt-6 text-4xl font-bold sm:text-5xl">{group?.name || 'Explore Tanzania'}</h1>
    <p className="mt-5 max-w-2xl text-lg text-stone-600">{group?.description || 'Find your next experience, from safari parks and mountain trails to local excursions.'}</p>
    <nav aria-label="Experience groups" className="my-10 flex flex-wrap gap-3">{catalog.groups.map(g => <Link key={g.id} href={`/experiences/groups/${g.slug}`} aria-current={g.id === group?.id ? 'page' : undefined} className={`rounded-full border px-4 py-2 text-sm ${g.id === group?.id ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-300 hover:border-amber-700'}`}>{g.name}</Link>)}</nav>
    {services.length ? <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{services.map(s => <article key={s.id} className="border-b border-stone-200 pb-7">
      {s.photos[0] && <Link href={`/experiences/${s.slug}`} tabIndex={-1} aria-hidden="true"><img className="mb-5 aspect-[4/3] w-full rounded-xl object-cover" src={s.photos[0].url} alt="" loading="lazy" /></Link>}
      <h2 className="text-2xl font-semibold"><Link className="hover:text-amber-800" href={`/experiences/${s.slug}`}>{s.name}</Link></h2>
      {s.duration && <p className="mt-2 text-sm text-stone-600">{s.duration}</p>}
      <p className="mt-4 line-clamp-3 text-stone-600">{s.description.split('\n')[0]}</p>
      <p className="mt-5 font-semibold">{servicePrice(s)}</p>
      <Link href={`/experiences/${s.slug}`} className="mt-4 inline-block text-sm font-semibold text-amber-800 underline underline-offset-4">Explore this experience</Link>
    </article>)}</div> : <p className="my-16 text-stone-600">There are no experiences in this group yet. <Link className="underline" href="/experiences">Browse all experiences</Link>.</p>}
  </section>;
}
