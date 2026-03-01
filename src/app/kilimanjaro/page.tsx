import Link from "next/link";
import { Mountain, Clock, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { kilimanjaroRoutes } from "@/data/kilimanjaro";

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors: Record<string, string> = {
    Medium: "bg-green-100 text-green-800",
    "Medium-High": "bg-sky-100 text-sky-700",
    High: "bg-amber-100 text-amber-800",
    Extreme: "bg-red-500 text-white",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors[difficulty] || "bg-stone-100 text-stone-700"}`}
    >
      {difficulty}
    </span>
  );
}

export default function KilimanjaroPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-sky-900 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sky-400 font-medium mb-4 tracking-wider uppercase text-sm">
              5,895 Meters &middot; The Roof of Africa
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Kilimanjaro Expeditions
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed">
              Six carefully curated routes to the summit of Africa&apos;s
              highest peak. Each expedition features premium gear, expert guides,
              daily medical monitoring, and Abdi&apos;s personal oversight.
            </p>
          </div>
        </div>
      </section>

      {/* Acclimatization Note */}
      <section className="bg-sky-50 border-b border-sky-100 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sky-800 text-sm">
            <strong>Our Approach:</strong> Zimba Tours prioritizes longer
            itineraries (7-9 days) to maximize the &ldquo;climb high, sleep
            low&rdquo; principle. Daily pulse oximetry and medical monitoring
            ensure safety at every altitude checkpoint. &ldquo;Pole pole&rdquo;
            &mdash; slowly, slowly.
          </p>
        </div>
      </section>

      {/* Route Comparison Table */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">
            Compare All Routes
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-stone-200">
                  <th className="py-4 pr-4 font-semibold text-stone-900">Route</th>
                  <th className="py-4 px-4 font-semibold text-stone-900">Duration</th>
                  <th className="py-4 px-4 font-semibold text-stone-900">Success Rate</th>
                  <th className="py-4 px-4 font-semibold text-stone-900">Difficulty</th>
                  <th className="py-4 px-4 font-semibold text-stone-900">Landscape</th>
                  <th className="py-4 pl-4 font-semibold text-stone-900">Price (USD)</th>
                </tr>
              </thead>
              <tbody>
                {kilimanjaroRoutes.map((route) => (
                  <tr key={route.id} className="border-b border-stone-100 hover:bg-stone-50">
                    <td className="py-4 pr-4 font-medium text-stone-900">{route.name}</td>
                    <td className="py-4 px-4 text-stone-600">{route.duration}</td>
                    <td className="py-4 px-4">
                      <span className="font-semibold text-green-700">{route.successRate}%</span>
                    </td>
                    <td className="py-4 px-4">
                      <DifficultyBadge difficulty={route.difficulty} />
                    </td>
                    <td className="py-4 px-4 text-stone-600">{route.landscape}</td>
                    <td className="py-4 pl-4 font-medium text-stone-900">{route.priceRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-400 mt-4">
            Prices are per person for groups of 2-4. Solo climbers and larger
            groups receive custom quotes.
          </p>
        </div>
      </section>

      {/* Route Detail Cards */}
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-12">
            Route Details
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {kilimanjaroRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-white rounded-2xl p-8 border border-stone-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">
                      {route.name}
                    </h3>
                    <p className="text-amber-600 font-medium text-sm">
                      {route.tagline}
                    </p>
                  </div>
                  <DifficultyBadge difficulty={route.difficulty} />
                </div>

                <p className="text-stone-600 text-sm mb-6">
                  {route.description}
                </p>

                <div className="flex gap-6 mb-6 text-sm">
                  <div className="flex items-center gap-1.5 text-stone-500">
                    <Clock className="h-4 w-4" />
                    {route.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-500">
                    <TrendingUp className="h-4 w-4" />
                    {route.successRate}% success
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-500">
                    <Mountain className="h-4 w-4" />
                    5,895m
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {route.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-stone-600">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                  <p className="text-lg font-bold text-stone-900">
                    {route.priceRange}
                  </p>
                  <Link
                    href={`/booking?route=${route.id}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700 transition-colors"
                  >
                    Book Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">
            Included in Every Expedition
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Professional WFR-certified mountain guides",
              "Premium four-season Mountain Hardwear tents",
              "North Face Inferno -20\u00b0F sleeping bags",
              "Pulse oximeters and daily medical monitoring",
              "Emergency Gamow bags and oxygen cylinders",
              "Mountain chef with high-altitude nutrition",
              "AMREF Flying Doctors evacuation coverage",
              "All TANAPA park and camping fees",
              "Airport transfers from Kilimanjaro (JRO)",
              "Pre-climb briefing with Abdi in Arusha",
              "Satellite communication on the mountain",
              "Certificate of achievement at summit",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Reach the Roof of Africa?</h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            Secure your spot with a 20-30% deposit. Balance due 30-60 days
            before your climb. Secure payment via Stripe.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-8 py-4 text-base font-semibold text-white hover:bg-amber-500 transition-colors"
          >
            Book Your Expedition <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
