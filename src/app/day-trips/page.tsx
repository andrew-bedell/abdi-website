import Image from "next/image";
import Link from "next/link";
import { Sun, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { dayTrips } from "@/data/day-trips";
import { abdiImages } from "@/data/images";

export default function DayTripsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-stone-900 via-amber-800 to-stone-800 pt-32 pb-20">
        <Image
          src={abdiImages.heroDayTrips}
          alt="Abdi leading a cultural day trip near Arusha"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-amber-800/70 to-stone-800/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-300 font-medium mb-4 tracking-wider uppercase text-sm">
              Arusha &amp; Surroundings
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Day Trips &amp; Cultural Immersions
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed">
              Discover the hidden gems around Arusha. From thundering waterfalls
              to geothermal springs and authentic Maasai cultural experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Day Trip Cards */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {dayTrips.map((trip) => (
              <div
                key={trip.id}
                className="rounded-2xl border border-stone-200 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">
                      {trip.name}
                    </h3>
                    <p className="text-amber-600 text-sm font-medium">
                      {trip.highlights}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-400 text-sm">
                    <Clock className="h-4 w-4" />
                    {trip.duration}
                  </div>
                </div>

                <p className="text-stone-600 text-sm mb-6">
                  {trip.description}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                    Includes
                  </p>
                  <ul className="space-y-2">
                    {trip.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-stone-600"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                  <p className="text-2xl font-bold text-stone-900">
                    ${trip.price}
                    <span className="text-sm font-normal text-stone-400">
                      {" "}
                      / person
                    </span>
                  </p>
                  <Link
                    href={`/booking?trip=${trip.id}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700 transition-colors"
                  >
                    Book <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Sun className="h-12 w-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              Custom Day Trips Available
            </h2>
            <p className="text-stone-600 mb-8">
              Looking for something different? Abdi can arrange custom day trips
              tailored to your interests, including bird watching, village
              homestays, coffee farm tours, and more. Contact us to discuss your
              ideal Arusha experience.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-8 py-4 text-base font-semibold text-white hover:bg-amber-500 transition-colors"
            >
              Contact Us <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
