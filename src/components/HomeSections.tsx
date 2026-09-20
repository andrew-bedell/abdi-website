import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HomeStats, HomeOverview, HomeWhy, HomeTestimonial, HomeCTA } from './ExistingHomeSections';
import { servicePrice, type Catalog, type HomePageReference, type HomeSection } from '@/lib/catalog-types';

const existing = { stats: HomeStats, overview: HomeOverview, why: HomeWhy, testimonial: HomeTestimonial, cta: HomeCTA };
const defaults: HomeSection[] = (Object.keys(existing) as (keyof typeof existing)[]).map(block => ({ id: `home-${block}`, kind: 'existing', block, title: '', visible: true }));
const pages: Record<string, { name: string; description: string }> = {
  '/about': { name: 'Meet Abdi', description: 'Meet the founder and local team behind your Tanzanian adventure.' },
  '/safety': { name: 'Safety & equipment', description: 'Learn how we prepare and care for you on your expedition.' },
  '/kilimanjaro': { name: 'Kilimanjaro expeditions', description: 'Explore routes to the summit of Africa’s highest mountain.' },
  '/safaris': { name: 'Wildlife safaris', description: 'Discover Tanzania’s national parks and wildlife experiences.' },
  '/day-trips': { name: 'Day trips & culture', description: 'Explore waterfalls, coffee tours and cultural experiences around Arusha.' },
  '/experiences': { name: 'All experiences', description: 'Find your next adventure in Tanzania.' },
  '/booking': { name: 'Plan your trip', description: 'Tell us about your adventure and plan the details with our team.' },
};
function resolvePage(item: HomePageReference, catalog: Catalog) {
  if (item.type === 'service') {
    const s = catalog.services.find(s => s.id === item.target && s.status === 'published');
    return s ? { name: s.name, description: s.description, href: `/experiences/${s.slug}`, photo: s.photos[0], price: servicePrice(s) } : null;
  }
  if (item.type === 'group') {
    const g = catalog.groups.find(g => g.id === item.target);
    return g ? { name: g.name, description: g.description, href: `/experiences/groups/${g.slug}`, photo: catalog.services.find(s => s.status === 'published' && s.groupIds.includes(g.id) && s.photos.length)?.photos[0], price: null } : null;
  }
  const page = pages[item.target];
  return page ? { ...page, href: item.target, photo: undefined, price: null } : null;
}
export default function HomeSections({ catalog }: { catalog: Catalog }) {
  return (catalog.homeSections ?? defaults).filter(section => section.visible).map(section => {
    if (section.kind === 'existing') {
      const Component = existing[section.block];
      return Component ? <div key={section.id} data-home-section={section.id}><Component /></div> : null;
    }
    const links = section.items.map(item => resolvePage(item, catalog)).filter(item => item !== null);
    if (!links.length) return null;
    return <section key={section.id} data-home-section={section.id} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">{section.title}</h2>
          {section.description && <p className="text-lg text-stone-600 max-w-2xl mx-auto whitespace-pre-line">{section.description}</p>}
        </div>
        <div className={section.layout === 'feature' ? 'max-w-4xl mx-auto' : 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'}>
          {links.map(page => <Link key={page.href} href={page.href} className={`group block overflow-hidden rounded-2xl border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all ${section.layout === 'feature' && page.photo ? 'md:grid md:grid-cols-2' : ''}`}>
            {/* Owner-uploaded images use the same trusted HTTPS catalog URLs as service pages. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {page.photo && <img src={page.photo.url} alt={page.photo.alt} loading="lazy" className="w-full h-full aspect-[3/2] object-cover" />}
            <div className="p-8">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">{page.name}</h3>
              {page.description && <p className="text-stone-600 mb-4 line-clamp-4">{page.description}</p>}
              {page.price && <p className="font-semibold text-stone-900 mb-4">{page.price}</p>}
              <span className="inline-flex items-center gap-1 text-amber-700 font-medium text-sm">Explore {page.name}<ArrowRight aria-hidden="true" className="h-4 w-4" /></span>
            </div>
          </Link>)}
        </div>
      </div>
    </section>;
  });
}
