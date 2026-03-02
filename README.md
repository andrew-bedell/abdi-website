# Zimba Tours

Premium Kilimanjaro expeditions and luxury safari experiences in Tanzania. Built with Next.js, TypeScript, Tailwind CSS, and Stripe.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stripe Integration

Copy `.env.example` to `.env.local` and add your Stripe API keys:

```bash
cp .env.example .env.local
```

The booking system supports:
- Stripe Checkout for secure payments
- Multi-currency support
- Deposit-based booking (25% deposit, balance due 30-60 days before departure)
- Apple Pay and Google Pay

## Pages

- `/` - Homepage with hero, services overview, and trust signals
- `/kilimanjaro` - Route comparison table and detailed route cards
- `/safaris` - Safari tiers, Great Migration calendar, and destinations
- `/day-trips` - Arusha day trips and cultural immersions
- `/safety` - Equipment specs, vehicle details, KPAP certification
- `/about` - About Abdi and Zimba Tours values
- `/booking` - Dynamic booking form with Stripe checkout
