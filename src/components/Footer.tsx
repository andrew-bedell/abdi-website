import Link from "next/link";
import { Mountain, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8 text-amber-500" />
              <span className="text-xl font-bold text-white">Zimba Tours</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Premium Kilimanjaro expeditions and luxury safari experiences in
              Tanzania. Led by founder Abdi from our base in Arusha.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Adventures
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/kilimanjaro"
                  className="hover:text-amber-400 transition-colors"
                >
                  Kilimanjaro Treks
                </Link>
              </li>
              <li>
                <Link
                  href="/safaris"
                  className="hover:text-amber-400 transition-colors"
                >
                  Wildlife Safaris
                </Link>
              </li>
              <li>
                <Link
                  href="/day-trips"
                  className="hover:text-amber-400 transition-colors"
                >
                  Day Trips
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="hover:text-amber-400 transition-colors"
                >
                  Safety & Equipment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-400 transition-colors"
                >
                  About Abdi
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="hover:text-amber-400 transition-colors"
                >
                  Book Now
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="hover:text-amber-400 transition-colors"
                >
                  KPAP Certified
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-500 flex-shrink-0" />
                Arusha, Tanzania
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-500 flex-shrink-0" />
                info@zimbatours.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-500 flex-shrink-0" />
                +255 700 000 000
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Zimba Tours. All rights reserved.
          </p>
          <p className="text-xs text-stone-500">
            KPAP Partner &middot; Zero Waste Policy &middot; AMREF Flying
            Doctors
          </p>
        </div>
      </div>
    </footer>
  );
}
