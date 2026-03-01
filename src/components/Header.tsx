"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Mountain, Phone } from "lucide-react";

const navigation = [
  { name: "Kilimanjaro", href: "/kilimanjaro" },
  { name: "Safaris", href: "/safaris" },
  { name: "Day Trips", href: "/day-trips" },
  { name: "Safety", href: "/safety" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Mountain className="h-8 w-8 text-amber-600" />
            <span className="text-xl font-bold text-stone-900">
              Zimba Tours
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+255700000000"
              className="flex items-center gap-1.5 text-sm text-stone-600 hover:text-amber-600"
            >
              <Phone className="h-4 w-4" />
              Contact
            </a>
            <Link
              href="/booking"
              className="rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700 transition-colors"
            >
              Book Now
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-stone-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-base font-medium text-stone-600 hover:text-amber-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-stone-100">
              <Link
                href="/booking"
                className="block w-full text-center rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
