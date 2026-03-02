import Image from "next/image";
import Link from "next/link";
import { Shield, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { expeditionGear, vehicleFeatures, safetyFeatures } from "@/data/equipment";
import { abdiImages } from "@/data/images";

export default function SafetyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-stone-900 via-sky-900 to-stone-800 pt-32 pb-20">
        <Image
          src={abdiImages.heroSafety}
          alt="Abdi reviewing safety equipment before an expedition"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-sky-900/70 to-stone-800/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sky-400 font-medium mb-4 tracking-wider uppercase text-sm">
              Your Safety is Our Priority
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Safety &amp; Equipment
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed">
              From AMREF Flying Doctors evacuation coverage to pulse oximeters
              and Gamow bags, Zimba Tours maintains the highest safety standards
              in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">
            Emergency Response &amp; Medical Safety
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-stone-200 hover:border-sky-200 transition-colors"
              >
                <Shield className="h-8 w-8 text-sky-600 mb-4" />
                <h3 className="font-semibold text-stone-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMS Warning */}
      <section className="py-8 bg-amber-50 border-y border-amber-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-1">
                Altitude Sickness Awareness
              </h3>
              <p className="text-sm text-amber-800">
                Our guides are trained to recognize Acute Mountain Sickness
                (AMS), High Altitude Pulmonary Edema (HAPE), and High Altitude
                Cerebral Edema (HACE). We initiate evacuation protocols long
                before any condition becomes life-threatening. The &ldquo;pole
                pole&rdquo; (slowly, slowly) approach with longer itineraries
                maximizes acclimatization and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mountain Gear */}
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            Expedition Equipment Standards
          </h2>
          <p className="text-stone-600 mb-8">
            High-altitude environments require gear that can withstand
            temperatures as low as -30&deg;C and winds exceeding 100 km/h. Every
            piece of Zimba Tours equipment meets or exceeds these standards.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-stone-200">
                  <th className="py-4 pr-4 font-semibold text-stone-900">
                    Gear Item
                  </th>
                  <th className="py-4 px-4 font-semibold text-stone-900">
                    Brand / Model
                  </th>
                  <th className="py-4 pl-4 font-semibold text-stone-900">
                    Critical Feature
                  </th>
                </tr>
              </thead>
              <tbody>
                {expeditionGear.map((gear) => (
                  <tr
                    key={gear.name}
                    className="border-b border-stone-100 hover:bg-white"
                  >
                    <td className="py-4 pr-4 font-medium text-stone-900">
                      {gear.name}
                    </td>
                    <td className="py-4 px-4 text-stone-600">{gear.brand}</td>
                    <td className="py-4 pl-4 text-stone-600">
                      {gear.feature}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Safari Vehicles */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            Safari Vehicle Specifications
          </h2>
          <p className="text-stone-600 mb-8">
            Customized Toyota Land Cruisers, modified for the rugged terrain of
            the Tanzanian bush.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-stone-200">
                  <th className="py-4 pr-4 font-semibold text-stone-900">
                    Feature
                  </th>
                  <th className="py-4 px-4 font-semibold text-stone-900">
                    Technical Spec
                  </th>
                  <th className="py-4 pl-4 font-semibold text-stone-900">
                    Benefit to Client
                  </th>
                </tr>
              </thead>
              <tbody>
                {vehicleFeatures.map((v) => (
                  <tr
                    key={v.feature}
                    className="border-b border-stone-100 hover:bg-stone-50"
                  >
                    <td className="py-4 pr-4 font-medium text-stone-900">
                      {v.feature}
                    </td>
                    <td className="py-4 px-4 text-stone-600">{v.spec}</td>
                    <td className="py-4 pl-4 text-stone-600">{v.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* KPAP & Ethics */}
      <section className="py-16 bg-green-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">
            KPAP Certification &amp; Ethical Practices
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Porters are paid a fair wage exceeding the industry minimum",
              "Three nutritious meals per day provided on the mountain",
              "Load limits strictly enforced at 20kg maximum per porter",
              "High-quality clothing and sleeping gear for all crew members",
              "Transparent tipping process ensuring gratuities reach recipients",
              "Zero Waste mountain policy \u2014 all trash carried off",
              "Elimination of single-use plastics across all operations",
              "Refillable stainless steel water bottles for all clients",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Travel with Confidence
          </h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            Your safety is our top priority. Book your adventure knowing that
            every detail has been meticulously planned.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-8 py-4 text-base font-semibold text-white hover:bg-amber-500 transition-colors"
          >
            Book Your Adventure <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
