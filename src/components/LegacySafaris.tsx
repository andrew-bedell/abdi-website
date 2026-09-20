import Link from "next/link";
import {
  Binoculars,
  MapPin,
  ArrowRight,
  CheckCircle,
  Calendar,
} from "lucide-react";
import { safariTiers, migrationCalendar, safariParks } from "@/data/safaris";

export default function SafarisPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-900 via-green-900 to-stone-800 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-green-400 font-medium mb-4 tracking-wider uppercase text-sm">
              The Northern Circuit &middot; Tanzania
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Wildlife Safari Experiences
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed">
              Deep ecological immersion in the Serengeti, Ngorongoro Crater,
              Tarangire, and beyond. Expert naturalist guides provide insights
              that go far beyond identification.
            </p>
          </div>
        </div>
      </section>

      {/* Safari Tiers */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            Safari Packages
          </h2>
          <p className="text-stone-600 mb-12">
            Choose the experience that matches your style. All packages include
            expert naturalist guides and customized Toyota Land Cruisers.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariTiers.map((tier) => (
              <div
                key={tier.id}
                className="rounded-2xl border border-stone-200 p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-stone-900 mb-1">
                  {tier.name}
                </h3>
                <p className="text-amber-600 text-sm font-medium mb-2">
                  {tier.focusArea}
                </p>
                <p className="text-xs text-stone-400 mb-4">
                  {tier.accommodation}
                </p>
                <p className="text-stone-600 text-sm mb-6">{tier.description}</p>

                <ul className="space-y-2 mb-6">
                  {tier.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-stone-600">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                  <div>
                    <span className="text-2xl font-bold text-stone-900">
                      ${tier.pricePerDay.toLocaleString()}
                    </span>
                    <span className="text-stone-400 text-sm"> / person / day</span>
                  </div>
                </div>
                <Link
                  href={`/booking?safari=${tier.id}`}
                  className="mt-4 w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700 transition-colors"
                >
                  Book Safari <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Great Migration Calendar */}
      <section className="py-16 bg-green-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-8 w-8 text-green-700" />
            <h2 className="text-2xl font-bold text-stone-900">
              The Great Migration Calendar
            </h2>
          </div>
          <p className="text-stone-600 mb-8 max-w-3xl">
            Over 1.5 million wildebeest, 200,000 zebras, and 300,000
            Thompson&apos;s gazelles in continuous movement. Zimba Tours
            dynamically adjusts itineraries using satellite tracking to position
            you at the heart of the action.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-green-200">
                  <th className="py-4 pr-4 font-semibold text-stone-900">
                    Months
                  </th>
                  <th className="py-4 px-4 font-semibold text-stone-900">
                    Location
                  </th>
                  <th className="py-4 px-4 font-semibold text-stone-900">
                    Significance
                  </th>
                  <th className="py-4 pl-4 font-semibold text-stone-900">
                    Zimba Tours Focus
                  </th>
                </tr>
              </thead>
              <tbody>
                {migrationCalendar.map((m) => (
                  <tr key={m.months} className="border-b border-green-100">
                    <td className="py-4 pr-4 font-medium text-stone-900">
                      {m.months}
                    </td>
                    <td className="py-4 px-4 text-stone-600">{m.location}</td>
                    <td className="py-4 px-4 text-stone-600">
                      {m.significance}
                    </td>
                    <td className="py-4 pl-4 text-green-700 font-medium">
                      {m.focus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* National Parks */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">
            Our Destinations
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {safariParks.map((park) => (
              <div
                key={park.name}
                className="p-6 rounded-xl border border-stone-200 hover:border-green-300 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-stone-900">{park.name}</h3>
                </div>
                <p className="text-sm text-stone-600 mb-3">
                  {park.description}
                </p>
                <p className="text-xs text-green-700 font-medium">
                  {park.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Specs */}
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Binoculars className="h-8 w-8 text-amber-600" />
            <h2 className="text-2xl font-bold text-stone-900">
              Our Safari Vehicles
            </h2>
          </div>
          <p className="text-stone-600 mb-8">
            Customized Toyota Land Cruisers engineered for the rugged Tanzanian
            bush and maximum client comfort.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { feature: "Full-Length Pop-up Roof", benefit: "360\u00b0 unobstructed viewing" },
              { feature: "Heavy-Duty Suspension", benefit: "Smooth ride on corrugated roads" },
              { feature: "Long-Range VHF Radio", benefit: "Real-time wildlife spotting" },
              { feature: "220V Inverters & USB", benefit: "Constant camera gear charging" },
              { feature: "On-board Electric Fridge", benefit: "Chilled beverages and snacks" },
              { feature: "Ergonomic Seating", benefit: "All-day comfort on game drives" },
            ].map((v) => (
              <div key={v.feature} className="bg-white p-5 rounded-xl border border-stone-200">
                <h3 className="font-semibold text-stone-900 mb-1">
                  {v.feature}
                </h3>
                <p className="text-sm text-stone-500">{v.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience the Serengeti with Zimba Tours
          </h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            Secure your safari with a deposit. Multi-currency payment via
            Stripe. Flexible itinerary adjustments based on migration patterns.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-8 py-4 text-base font-semibold text-white hover:bg-amber-500 transition-colors"
          >
            Book Your Safari <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
