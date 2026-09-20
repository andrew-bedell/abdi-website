'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { Service } from '@/lib/catalog-types';
import { servicePrice } from '@/lib/catalog-types';
export default function ExperienceInquiry({ service }: { service: Service }) {
  const [busy, setBusy] = useState(false), [error, setError] = useState(''), [done, setDone] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); event.stopPropagation(); setBusy(true); setError('');
    const form = event.currentTarget, data = new FormData(form);
    (form.elements.namedItem('message') as HTMLInputElement).value = `Experience: ${service.name}\nPage: /experiences/${service.slug}\nListed price: ${servicePrice(service)}\nPreferred date: ${data.get('preferred_date')}\nGuests: ${data.get('guests')}\nNotes: ${data.get('notes')}`;
    try {
      const kit = (window as Window & { siteKit?: { submitLead: (form: HTMLFormElement) => Promise<unknown> } }).siteKit;
      if (!kit) throw new Error('Online requests are temporarily unavailable. Please email zimbatoursafari@gmail.com.');
      await kit.submitLead(form); setDone(true);
    } catch (e) { setError(e instanceof Error ? e.message : 'Please try again.'); } finally { setBusy(false); }
  }
  const style = 'mt-2 block w-full rounded-lg border border-stone-300 bg-white px-4 py-3';
  return <section className="mx-auto max-w-2xl px-5 pt-28 pb-20">
    <Link href={`/experiences/${service.slug}`} className="text-amber-800 underline underline-offset-4">Back to {service.name}</Link>
    <h1 className="mt-6 text-3xl font-bold">Ask about {service.name}</h1>
    <p className="mt-4 text-stone-600">{servicePrice(service)}. Abdi will confirm availability and final pricing. No payment is taken here.</p>
    {done ? <p role="status" className="mt-10 rounded-xl bg-green-50 p-6">Your request has been received. Abdi will contact you to discuss your trip.</p> : <form onSubmit={submit} data-lead-form data-lead-source="Experience inquiry" className="mt-10 space-y-6">
      <input type="hidden" name="message" /><input name="hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="block">Your name<input className={style} name="full_name" required autoComplete="name" maxLength={160} /></label>
      <label className="block">Email address<input className={style} name="email" type="email" required autoComplete="email" /></label>
      <div className="grid gap-6 sm:grid-cols-2"><label>Preferred date<input className={style} name="preferred_date" type="date" /></label><label>Number of guests<input className={style} name="guests" type="number" min="1" max="100" defaultValue="2" required /></label></div>
      <label className="block">Tell us about your plans<textarea className={style} name="notes" rows={4} maxLength={4000} /></label>
      <label className="flex items-start gap-3"><input className="mt-1" type="checkbox" name="privacy_acknowledged" required value="true" /><span>I agree to the <Link className="underline" href="/privacy">privacy policy</Link> and to being contacted about this request.</span></label>
      {error && <p role="alert" className="text-red-700">{error}</p>}
      <button disabled={busy} className="rounded-lg bg-amber-700 px-6 py-3 font-semibold text-white hover:bg-amber-800 disabled:opacity-60">{busy ? 'Sending request…' : 'Send inquiry'}</button>
    </form>}
  </section>;
}
