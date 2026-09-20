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

## Discovery Platform integration

The existing public site is https://www.zimbatourstanzania.com (Vercel project `abdi-website`). The booking page now submits inquiries using Discovery's hosted site-kit, which preserves attribution, consent, deduplication and tenant-configured Turnstile. This is not payment processing or a confirmed booking. The old demo checkout endpoint returns 410 instead of pretending to save a request.

Provision the paused business through the Discovery operator dashboard, record its generated identifiers in `discovery-manifest.json`, and configure `NEXT_PUBLIC_DISCOVERY_SITE_KEY` for the appropriate Vercel environment. Git deployments use `git:VERCEL_GIT_COMMIT_SHA` as the installed release marker; other previews need `NEXT_PUBLIC_DISCOVERY_RELEASE_REVISION` set to an immutable candidate identifier. Seed `discovery-content.json` through `/api/content/define` for the correct business. Invite Abdi at `zimbatoursafari@gmail.com` as that business's owner.

An absent key shows a recoverable contact message and does not claim that an inquiry was saved. Keep the existing production deployment until preview verification, required provider connections, owner sign-in and the Platform launch/activation gates are complete. Secrets for email and advertising remain in Platform, never this project. No paid-media setup is included in this integration.

Run `npm run lint` and `npm run build`, then check the home, booking and privacy pages at desktop/mobile widths. Verify a rejected CRM request cannot show success and an accepted request creates exactly one submission with all trip details. Use labeled controlled test data only after authorization.

## Discovery Platform service catalog

Abdi manages services, galleries, groups, and navigation in Discovery Platform's
**Services & navigation** screen (`#/catalog`). This repository renders the published
catalog at `/experiences`, `/experiences/[slug]`, and `/experiences/groups/[slug]`.
The inquiry URL `/booking?experience=[slug]` uses the existing site-kit CRM flow.

Publish Platform's service-catalog migration and API **before** releasing this client.
The public API must recognize the existing site key and active tenant; no activation
gates are bypassed. Drafts are private. An intentionally empty publication is never
replaced by old trips. Before first publication, the original catalog in
`src/data/catalog.json` supplies the starting content. Existing category routes
switch to managed listings after publication. Do not change the original seed's
pricing independently after adoption: Platform owns published service data.

`DISCOVERY_PLATFORM_URL` optionally overrides the server-side catalog API origin for
local tests; normal production uses `https://platform.discoverymarketing.io`.
See the Platform repository's `docs/service-catalog.md` for release order and tests.
