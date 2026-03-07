import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Award,
  Users,
  Shield,
  Heart,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { abdiImages } from "@/data/images";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800 pt-32 pb-20">
        <Image
          src={abdiImages.heroAbout}
          alt="Abdi in the Tanzanian wilderness"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-amber-900/70 to-stone-800/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-medium mb-4 tracking-wider uppercase text-sm">
              Our Story
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Meet Abdi
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed">
              The founder and guiding force behind Zimba Tours. Every expedition
              carries his personal commitment to safety, authenticity, and the
              transformative power of Tanzania&apos;s wilderness.
            </p>
          </div>
        </div>
      </section>

      {/* About Abdi */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden min-h-[500px]">
              <Image
                src={abdiImages.aboutPortrait}
                alt="Abdi, founder and lead guide of Zimba Tours"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-2xl font-bold">Abdi</p>
                <p className="text-stone-200 mt-1">Founder &amp; Lead Guide</p>
                <p className="text-stone-300 text-sm mt-0.5">Arusha, Tanzania</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">
                A Lifetime in the Mountains and on the Plains
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Born and raised in the shadow of Mount Kilimanjaro, Abdi has
                  dedicated his life to sharing the extraordinary beauty of
                  Tanzania with travelers from around the world. His deep
                  knowledge of the mountain&apos;s routes, the Serengeti&apos;s
                  ecosystems, and the rich cultural heritage of the region is the
                  foundation of Zimba Tours.
                </p>
                <p>
                  Abdi&apos;s philosophy is simple: every client deserves an
                  experience that is safe, ethical, and transformative. This
                  means personally overseeing every expedition, ensuring that
                  guides are the best-trained in the industry, and that the
                  communities and environments we operate in benefit from our
                  presence.
                </p>
                <p>
                  From the logistics hub in Arusha, where he meticulously
                  reviews every itinerary and inspects every piece of equipment,
                  to the summit of Uhuru Peak, Abdi is hands-on at every stage.
                  When you book with Zimba Tours, you are not booking with a
                  corporation &mdash; you are partnering with a guide who has
                  staked his reputation on your experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-12 text-center">
            The Zimba Tours Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-stone-200">
              <Shield className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                Safety Above All
              </h3>
              <p className="text-sm text-stone-600">
                AMREF Flying Doctors enrollment, WFR-certified guides, Gamow
                bags, pulse oximeters, and satellite communication on every
                expedition. We never compromise on safety.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200">
              <Heart className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                Ethical Operations
              </h3>
              <p className="text-sm text-stone-600">
                KPAP-certified partner ensuring fair wages, nutritious meals,
                proper gear, and enforced load limits for all porters.
                Transparent tipping ensures gratuities reach the right people.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200">
              <Leaf className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                Sustainability
              </h3>
              <p className="text-sm text-stone-600">
                Zero Waste mountain policy with all trash carried off. No
                single-use plastics &mdash; refillable stainless steel bottles
                and large-capacity water dispensers in all vehicles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200">
              <Users className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                Community First
              </h3>
              <p className="text-sm text-stone-600">
                Porters receive three nutritious meals daily on the mountain.
                Load limits of 20kg maximum per porter are strictly enforced.
                High-quality clothing and sleeping gear provided to all crew.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200">
              <Award className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                Excellence in Guiding
              </h3>
              <p className="text-sm text-stone-600">
                Senior guides with 50+ successful Kilimanjaro summits. Safari
                naturalists trained in geology, ornithology, mammalian behavior,
                ethnobotany, and conservation biology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200">
              <Mountain className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                Personal Touch
              </h3>
              <p className="text-sm text-stone-600">
                Abdi is personally involved in every expedition. From the
                pre-climb briefing in Arusha to the equipment inspection, no
                detail is overlooked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Training */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            Naturalist Guide Curriculum
          </h2>
          <p className="text-stone-600 mb-8 max-w-3xl">
            Zimba Tours guides undergo rigorous training to provide a superior
            client experience. Our safari guides are not just drivers &mdash;
            they are educators, storytellers, and conservationists.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Geology of the Rift Valley",
                desc: "Understanding the tectonic forces that shaped East Africa",
              },
              {
                title: "Ornithology",
                desc: "Identification and behavior of over 1,000 Tanzanian bird species",
              },
              {
                title: "Mammalian Behavior",
                desc: "Social structures of lions, elephants, and primates",
              },
              {
                title: "Ethnobotany",
                desc: "Traditional plant uses by the Maasai and Hadzabe people",
              },
              {
                title: "Conservation Biology",
                desc: "Human-wildlife conflict and the future of national parks",
              },
              {
                title: "Trophic Cascade Ecology",
                desc: "Migration impact on soil fertility and symbiotic relationships",
              },
            ].map((subject) => (
              <div
                key={subject.title}
                className="p-5 rounded-xl border border-stone-200"
              >
                <h3 className="font-semibold text-stone-900 text-sm mb-1">
                  {subject.title}
                </h3>
                <p className="text-xs text-stone-500">{subject.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Journey with Abdi
          </h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            Every Zimba Tours adventure begins with a personal conversation.
            Tell us your dream, and we will make it happen.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-8 py-4 text-base font-semibold text-white hover:bg-amber-500 transition-colors"
          >
            Get in Touch <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
