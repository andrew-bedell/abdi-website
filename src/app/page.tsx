import Link from "next/link";
import {
  Mountain,
  Binoculars,
  Sun,
  Shield,
  Star,
  ArrowRight,
  Users,
  Award,
  MapPin,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-medium mb-4 tracking-wider uppercase text-sm">
              Premium Adventures from Arusha, Tanzania
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Conquer Kilimanjaro.
              <br />
              <span className="text-amber-400">Explore the Serengeti.</span>
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed mb-10 max-w-2xl">
              Led by founder Abdi, Zimba Tours delivers premium Kilimanjaro
              expeditions and luxury safari experiences with uncompromising
              safety, ethical practices, and personal attention to every detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kilimanjaro"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-8 py-4 text-base font-semibold text-white hover:bg-amber-500 transition-colors"
              >
                <Mountain className="h-5 w-5" />
                Climb Kilimanjaro
              </Link>
              <Link
                href="/safaris"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Binoculars className="h-5 w-5" />
                Explore Safaris
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-amber-600 text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold">98%</p>
              <p className="text-amber-100 text-sm mt-1">Summit Success Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-amber-100 text-sm mt-1">Successful Summits</p>
            </div>
            <div>
              <p className="text-3xl font-bold">6</p>
              <p className="text-amber-100 text-sm mt-1">Kilimanjaro Routes</p>
            </div>
            <div>
              <p className="text-3xl font-bold">5</p>
              <p className="text-amber-100 text-sm mt-1">National Parks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Your Gateway to Tanzania
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              From the summit of Africa&apos;s highest peak to the vast plains
              of the Serengeti, Zimba Tours crafts unforgettable experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/kilimanjaro"
              className="group p-8 rounded-2xl border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all"
            >
              <Mountain className="h-12 w-12 text-amber-600 mb-6" />
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Kilimanjaro Expeditions
              </h3>
              <p className="text-stone-600 mb-4">
                Six carefully curated routes from 6 to 9 days, with premium
                gear, expert guides, and industry-leading safety protocols.
              </p>
              <span className="inline-flex items-center gap-1 text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                Explore Routes <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/safaris"
              className="group p-8 rounded-2xl border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all"
            >
              <Binoculars className="h-12 w-12 text-amber-600 mb-6" />
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Wildlife Safaris
              </h3>
              <p className="text-stone-600 mb-4">
                From the Great Migration to the Ngorongoro Crater, experience
                deep ecological immersion with expert naturalist guides.
              </p>
              <span className="inline-flex items-center gap-1 text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                View Safaris <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/day-trips"
              className="group p-8 rounded-2xl border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all"
            >
              <Sun className="h-12 w-12 text-amber-600 mb-6" />
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Day Trips & Culture
              </h3>
              <p className="text-stone-600 mb-4">
                Discover Arusha&apos;s hidden gems. From Materuni Waterfall to
                authentic Maasai village visits and local coffee experiences.
              </p>
              <span className="inline-flex items-center gap-1 text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                Discover More <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Zimba Tours */}
      <section className="py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                Why Choose Zimba Tours?
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                Founded by Abdi in the heart of Arusha, Zimba Tours combines
                deep local expertise with international safety standards. Every
                expedition is personally overseen to ensure an experience that
                is safe, ethical, and truly transformative.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Shield className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900">
                      Safety First
                    </h3>
                    <p className="text-stone-600 text-sm mt-1">
                      AMREF Flying Doctors enrollment, Gamow bags, pulse
                      oximeters, and WFR-certified guides on every expedition.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Award className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900">
                      KPAP Certified
                    </h3>
                    <p className="text-stone-600 text-sm mt-1">
                      Fair wages, proper meals, and quality gear for all porters.
                      Our ethical commitment is at the core of everything we do.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900">
                      Personal Touch
                    </h3>
                    <p className="text-stone-600 text-sm mt-1">
                      Abdi is personally involved in every expedition, ensuring
                      no detail is overlooked and every client feels at home.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900">
                      Local Expertise
                    </h3>
                    <p className="text-stone-600 text-sm mt-1">
                      Based in Arusha at the gateway to the Northern Circuit,
                      with guides who have 50+ successful Kilimanjaro summits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-stone-200 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <Mountain className="h-24 w-24 text-amber-600 mx-auto mb-6" />
                <p className="text-2xl font-bold text-stone-800">
                  Abdi &mdash; Founder
                </p>
                <p className="text-stone-600 mt-2">
                  Leading expeditions since day one
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Trust */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <blockquote className="text-2xl text-stone-800 font-medium leading-relaxed mb-6">
              &ldquo;Abdi and the Zimba Tours team made our Kilimanjaro summit
              an experience we will never forget. The attention to safety, the
              quality of the gear, and the warmth of the team were beyond
              anything we expected.&rdquo;
            </blockquote>
            <p className="text-stone-500">
              &mdash; A Zimba Tours Client, Lemosho Route
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready for Your Tanzanian Adventure?
          </h2>
          <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">
            Whether it&apos;s the summit of Kilimanjaro or the plains of the
            Serengeti, your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-8 py-4 text-base font-semibold text-white hover:bg-amber-500 transition-colors"
            >
              Book Your Adventure
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Meet Abdi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
