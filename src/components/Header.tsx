'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Mountain } from 'lucide-react';
import type { Catalog, MenuItem } from '@/lib/catalog-types';
import { menuHref } from '@/lib/catalog-types';

export default function Header({ catalog }: { catalog: Catalog }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  function close() { setMobileOpen(false); header.current?.querySelectorAll('details').forEach(el => { el.open = false; }); }
  useEffect(() => {
    const key = (event: KeyboardEvent) => { if (event.key === 'Escape') { const details = (document.activeElement as HTMLElement)?.closest('details'); details?.querySelector('summary')?.focus(); close(); } };
    const click = (event: MouseEvent) => { if (header.current && !event.composedPath().includes(header.current)) close(); };
    document.addEventListener('keydown', key); document.addEventListener('click', click);
    return () => { document.removeEventListener('keydown', key); document.removeEventListener('click', click); };
  }, []);
  function item(n: MenuItem, nested = false): React.ReactNode {
    const children = catalog.navigation.filter(child => child.parentId === n.id);
    const services = n.type === 'group' ? catalog.services.filter(s => s.status === 'published' && s.groupIds.includes(n.target) && !children.some(c => c.type === 'service' && c.target === s.id)) : [];
    const linkClass = 'block rounded px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-amber-800';
    if (!children.length && !services.length) return <Link key={n.id} className={linkClass} href={menuHref(n, catalog)} onClick={close}>{n.label}</Link>;
    return <details key={n.id} className={nested ? 'border-t border-stone-100' : 'relative'}>
      <summary className={`${linkClass} cursor-pointer`}>{n.label}</summary>
      <div className={nested ? 'pl-3' : 'max-h-[65vh] overflow-y-auto rounded-lg border border-stone-200 bg-white p-2 lg:absolute lg:top-full lg:left-0 lg:w-72 lg:shadow-lg'}>
        <Link href={menuHref(n, catalog)} onClick={close} className={linkClass}>Explore {n.label}</Link>
        {children.map(child => item(child, true))}
        {services.map(s => <Link key={s.id} href={`/experiences/${s.slug}`} className={linkClass} onClick={close}>{s.name}</Link>)}
      </div>
    </details>;
  }
  const top = catalog.navigation.filter(n => !n.parentId);
  return <header ref={header} className="fixed inset-x-0 top-0 z-50 border-b border-stone-200 bg-white">
    <nav className="mx-auto max-w-7xl px-4 sm:px-6" aria-label="Main navigation">
      <div className="flex h-16 items-center justify-between gap-4">
        <Link href="/" onClick={close} className="flex shrink-0 items-center gap-2"><Mountain className="h-8 w-8 text-amber-600" /><span className="text-xl font-bold">Zimba Tours</span></Link>
        <div className="hidden items-center lg:flex">{top.slice(0, 5).map(n => item(n))}{top.length > 5 && <details className="relative"><summary className="cursor-pointer px-3 py-2 text-sm font-medium">More</summary><div className="absolute right-0 max-h-[65vh] w-72 overflow-auto rounded-lg border border-stone-200 bg-white p-3">{top.slice(5).map(n => item(n, true))}</div></details>}</div>
        <Link href="/experiences" className="hidden shrink-0 rounded-lg bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-800 lg:block">Find your trip</Link>
        <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="p-2 lg:hidden" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} aria-controls="mobile-navigation">{mobileOpen ? <X /> : <Menu />}</button>
      </div>
      {mobileOpen && <div id="mobile-navigation" className="max-h-[80vh] overflow-y-auto border-t border-stone-200 py-4 lg:hidden">{top.map(n => item(n, true))}<Link className="mt-4 block rounded-lg bg-amber-700 px-5 py-3 text-center font-semibold text-white" href="/experiences" onClick={close}>Find your trip</Link></div>}
    </nav>
  </header>;
}
