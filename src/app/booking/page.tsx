"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Mountain, Binoculars, Sun, ArrowRight, CreditCard, Shield } from "lucide-react";
import { kilimanjaroRoutes } from "@/data/kilimanjaro";
import { safariTiers } from "@/data/safaris";
import { dayTrips } from "@/data/day-trips";

type BookingType = "kilimanjaro" | "safari" | "day-trip";

function getInitialState(searchParams: URLSearchParams): {
  type: BookingType;
  packageId: string;
} {
  const route = searchParams.get("route");
  if (route && kilimanjaroRoutes.some((r) => r.id === route)) {
    return { type: "kilimanjaro", packageId: route };
  }
  const safari = searchParams.get("safari");
  if (safari && safariTiers.some((t) => t.id === safari)) {
    return { type: "safari", packageId: safari };
  }
  const trip = searchParams.get("trip");
  if (trip && dayTrips.some((t) => t.id === trip)) {
    return { type: "day-trip", packageId: trip };
  }
  return { type: "kilimanjaro", packageId: "" };
}

export default function BookingPage() {
  return (
    <Suspense>
      <BookingForm />
    </Suspense>
  );
}

function BookingForm() {
  const searchParams = useSearchParams();
  const initial = getInitialState(searchParams);
  const [bookingType, setBookingType] = useState<BookingType>(initial.type);
  const [selectedPackage, setSelectedPackage] = useState(initial.packageId);
  const [guests, setGuests] = useState(2);
  const [safariDays, setSafariDays] = useState(3);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const getEstimate = (): number => {
    if (bookingType === "kilimanjaro") {
      const route = kilimanjaroRoutes.find((r) => r.id === selectedPackage);
      return route ? route.priceMin * guests : 0;
    }
    if (bookingType === "safari") {
      const tier = safariTiers.find((t) => t.id === selectedPackage);
      return tier ? tier.pricePerDay * safariDays * guests : 0;
    }
    if (bookingType === "day-trip") {
      const trip = dayTrips.find((t) => t.id === selectedPackage);
      return trip ? trip.price * guests : 0;
    }
    return 0;
  };

  const getDeposit = (): number => {
    const total = getEstimate();
    if (bookingType === "day-trip") return total;
    return Math.round(total * 0.25);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingType,
          packageId: selectedPackage,
          guests,
          safariDays: bookingType === "safari" ? safariDays : undefined,
          name,
          email,
          date,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmitError(data.error || "Something went wrong. Please try again.");
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitError("Unable to connect. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <section className="pt-32 pb-20 min-h-screen bg-stone-50">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-12 border border-stone-200">
              <Mountain className="h-16 w-16 text-amber-600 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-stone-900 mb-4">
                Booking Request Received
              </h1>
              <p className="text-stone-600 mb-2">
                Thank you, {name}! Your booking request has been submitted.
              </p>
              <p className="text-stone-500 text-sm mb-8">
                Abdi will personally review your request and contact you at{" "}
                <strong>{email}</strong> within 24 hours to confirm your
                adventure and arrange payment via our secure Stripe portal.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-8 py-3 text-sm font-semibold text-white hover:bg-amber-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800 pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Book Your Adventure
            </h1>
            <p className="text-lg text-stone-300">
              Secure your spot with a 25% deposit. Balance due 30-60 days before
              departure. Secure multi-currency payment via Stripe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-stone-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            {/* Adventure Type */}
            <div className="bg-white rounded-2xl border border-stone-200 p-8 mb-6">
              <h2 className="text-lg font-semibold text-stone-900 mb-6">
                1. Choose Your Adventure
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setBookingType("kilimanjaro");
                    setSelectedPackage("");
                  }}
                  className={`p-4 rounded-xl border-2 text-center transition-all ${
                    bookingType === "kilimanjaro"
                      ? "border-amber-500 bg-amber-50"
                      : "border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <Mountain
                    className={`h-8 w-8 mx-auto mb-2 ${
                      bookingType === "kilimanjaro"
                        ? "text-amber-600"
                        : "text-stone-400"
                    }`}
                  />
                  <p className="text-sm font-medium text-stone-900">
                    Kilimanjaro
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBookingType("safari");
                    setSelectedPackage("");
                  }}
                  className={`p-4 rounded-xl border-2 text-center transition-all ${
                    bookingType === "safari"
                      ? "border-amber-500 bg-amber-50"
                      : "border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <Binoculars
                    className={`h-8 w-8 mx-auto mb-2 ${
                      bookingType === "safari"
                        ? "text-amber-600"
                        : "text-stone-400"
                    }`}
                  />
                  <p className="text-sm font-medium text-stone-900">Safari</p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBookingType("day-trip");
                    setSelectedPackage("");
                  }}
                  className={`p-4 rounded-xl border-2 text-center transition-all ${
                    bookingType === "day-trip"
                      ? "border-amber-500 bg-amber-50"
                      : "border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <Sun
                    className={`h-8 w-8 mx-auto mb-2 ${
                      bookingType === "day-trip"
                        ? "text-amber-600"
                        : "text-stone-400"
                    }`}
                  />
                  <p className="text-sm font-medium text-stone-900">
                    Day Trip
                  </p>
                </button>
              </div>
            </div>

            {/* Package Selection */}
            <div className="bg-white rounded-2xl border border-stone-200 p-8 mb-6">
              <h2 className="text-lg font-semibold text-stone-900 mb-6">
                2. Select Package
              </h2>
              <label htmlFor="package" className="sr-only">Select a package</label>
              <select
                id="package"
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
              >
                <option value="">Select a package...</option>
                {bookingType === "kilimanjaro" &&
                  kilimanjaroRoutes.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} &mdash; {r.duration} &mdash; from $
                      {r.priceMin.toLocaleString()}/person
                    </option>
                  ))}
                {bookingType === "safari" &&
                  safariTiers.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} &mdash; ${t.pricePerDay.toLocaleString()}/person/day
                    </option>
                  ))}
                {bookingType === "day-trip" &&
                  dayTrips.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} &mdash; {t.duration} &mdash; $
                      {t.price}/person
                    </option>
                  ))}
              </select>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-stone-700 mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </div>

                {bookingType === "safari" && (
                  <div>
                    <label htmlFor="safari-days" className="block text-sm font-medium text-stone-700 mb-2">
                      Number of Days
                    </label>
                    <select
                      id="safari-days"
                      value={safariDays}
                      onChange={(e) => setSafariDays(Number(e.target.value))}
                      className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                    >
                      {[2, 3, 4, 5, 6, 7, 8, 9, 10, 14].map((n) => (
                        <option key={n} value={n}>
                          {n} days
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Personal Details */}
            <div className="bg-white rounded-2xl border border-stone-200 p-8 mb-6">
              <h2 className="text-lg font-semibold text-stone-900 mb-6">
                3. Your Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-stone-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="start-date" className="block text-sm font-medium text-stone-700 mb-2">
                  Preferred Start Date
                </label>
                <input
                  id="start-date"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="notes" className="block text-sm font-medium text-stone-700 mb-2">
                  Additional Notes (optional)
                </label>
                <textarea
                  id="notes"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none resize-none"
                  placeholder="Special requirements, dietary needs, fitness level..."
                />
              </div>
            </div>

            {/* Price Summary */}
            {selectedPackage && (
              <div className="bg-white rounded-2xl border border-stone-200 p-8 mb-6">
                <h2 className="text-lg font-semibold text-stone-900 mb-4">
                  Price Estimate
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Estimated Total</span>
                    <span className="font-medium text-stone-900">
                      ${getEstimate().toLocaleString()} USD
                    </span>
                  </div>
                  {bookingType !== "day-trip" && (
                    <div className="flex justify-between">
                      <span className="text-stone-600">
                        Deposit (25%)
                      </span>
                      <span className="font-medium text-stone-900">
                        ${getDeposit().toLocaleString()} USD
                      </span>
                    </div>
                  )}
                  <div className="pt-3 border-t border-stone-100 flex justify-between">
                    <span className="font-semibold text-stone-900">
                      {bookingType === "day-trip"
                        ? "Amount Due"
                        : "Deposit Due Now"}
                    </span>
                    <span className="font-bold text-lg text-amber-600">
                      ${getDeposit().toLocaleString()} USD
                    </span>
                  </div>
                </div>
                {bookingType !== "day-trip" && (
                  <p className="text-xs text-stone-400 mt-3">
                    Balance of ${(getEstimate() - getDeposit()).toLocaleString()}{" "}
                    due 30-60 days before departure.
                  </p>
                )}
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6 mb-6">
                <p className="text-sm text-red-700">{submitError}</p>
              </div>
            )}

            {/* Submit */}
            <div className="bg-white rounded-2xl border border-stone-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-5 w-5 text-green-600" />
                <p className="text-sm text-stone-600">
                  Secure payment processed via Stripe. We accept credit cards,
                  Apple Pay, and Google Pay in multiple currencies.
                </p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !selectedPackage}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-8 py-4 text-base font-semibold text-white hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CreditCard className="h-5 w-5" />
                {isSubmitting
                  ? "Processing..."
                  : `Proceed to Payment \u2014 $${getDeposit().toLocaleString()}`}
                {!isSubmitting && <ArrowRight className="h-5 w-5" />}
              </button>
              <p className="text-xs text-stone-400 text-center mt-4">
                By proceeding, you agree to our booking terms. Abdi will
                confirm your booking within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
