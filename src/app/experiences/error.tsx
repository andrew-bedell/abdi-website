'use client';
export default function Error({ reset }: { reset: () => void }) {
  return <section className="mx-auto max-w-3xl px-5 pt-32 pb-20"><h1 className="text-3xl font-bold">Experiences are temporarily unavailable</h1><p className="my-6">Please try again or email <a className="underline" href="mailto:zimbatoursafari@gmail.com">zimbatoursafari@gmail.com</a> for current trips and prices.</p><button className="rounded-lg bg-amber-700 px-5 py-3 text-white" onClick={reset}>Try again</button></section>;
}
