# CLAUDE.md — Zimba Tours Website

## Project Overview

Zimba Tours is a premium travel booking website for a Tanzanian adventure tourism company based in Arusha. It features Kilimanjaro expeditions, wildlife safaris, day trips, and a Stripe-integrated booking system. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (utility-first, no CSS modules or styled-components)
- **Icons**: lucide-react (all icons come from this library)
- **Payments**: Stripe (server SDK + @stripe/stripe-js client)
- **Package Manager**: npm

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint (Next.js core-web-vitals + TypeScript rules)
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (Header + Footer wrapper)
│   ├── page.tsx          # Homepage
│   ├── booking/page.tsx  # Booking form (client component)
│   ├── api/              # API routes (Stripe checkout)
│   └── [section]/page.tsx  # Content pages (kilimanjaro, safaris, day-trips, about, safety)
├── components/           # Shared React components (Header, Footer)
└── data/                 # Static typed data files (routes, tiers, trips, equipment)
```

## Architecture Principles

### Server vs Client Components
- **Default to server components.** All page files are server-rendered unless they need interactivity.
- Only add `"use client"` when the component requires `useState`, `useEffect`, event handlers, or browser APIs.
- Currently only `Header.tsx` and `booking/page.tsx` are client components.

### Data Layer
- Product data (routes, safari tiers, day trips, equipment) lives in `src/data/` as typed constant arrays.
- Each data file exports a TypeScript interface and a corresponding const array.
- To add a new product/option, add an entry to the relevant data file — pages render from these arrays automatically.
- Import data using the `@/` path alias: `import { kilimanjaroRoutes } from "@/data/kilimanjaro"`.

### No External State Management
- State is local to components via `useState`. There is no global store, context provider, or state management library.
- Keep it this way unless a clear cross-component state need arises.

## Coding Conventions

### TypeScript
- Strict mode is on. Do not use `any` or `// @ts-ignore`.
- Define interfaces in the data files where they're used (e.g., `KilimanjaroRoute` in `kilimanjaro.ts`).
- Use `Readonly<>` for component props: `({ children }: Readonly<{ children: React.ReactNode }>)`.
- Use the `@/*` path alias for all `src/` imports.

### Component Patterns
- **Naming**: PascalCase for components, camelCase for functions/variables.
- **File-per-page**: Each route has a single `page.tsx` that contains all section markup.
- **Helper components**: Small presentational helpers (e.g., `DifficultyBadge`) can be defined in the same file as their page — no need for separate files unless reused across pages.
- **Export pattern**: `export default function ComponentName()` — always named, never anonymous arrow default exports.
- **Icons**: Always import from `lucide-react`. Consistent sizing: `h-4 w-4` (inline), `h-5 w-5` (buttons), `h-6 w-6` (features), `h-8 w-8` (cards), `h-12 w-12` (section headers).

### Styling Rules
- **100% Tailwind utility classes.** No inline `style` attributes, CSS modules, or styled-components.
- **Brand colors**: Use the established palette — do not introduce new color families.
  - `amber-600` — Primary brand / CTAs / active states
  - `stone-*` — Text, backgrounds, borders (stone-900 headings, stone-600 body, stone-50/white backgrounds)
  - `sky-*` — Kilimanjaro-themed sections
  - `green-*` — Safari-themed sections, success states
  - `red-*` — Error/danger states only
- **Layout**: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8` for all content containers.
- **Cards**: `rounded-2xl border border-stone-200` with `hover:border-amber-300 hover:shadow-lg transition-all`.
- **Buttons (primary)**: `rounded-lg bg-amber-600 px-8 py-4 text-base font-semibold text-white hover:bg-amber-500 transition-colors`.
- **Buttons (secondary)**: `rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors`.
- **Form inputs**: `rounded-lg border border-stone-300 px-4 py-3 text-stone-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none`.
- **Section spacing**: `py-24` for major sections, `py-12` for sub-sections, `mb-6` between elements.
- **Responsive**: Mobile-first. Use `sm:`, `md:`, `lg:` breakpoints. Grids collapse to single column on mobile.
- **Hero sections**: Gradient backgrounds (`bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900`), with `pt-32` to account for the fixed header.

### Page Structure Pattern
Every content page follows this layout:
1. **Hero section** — Gradient background, icon, heading, description
2. **Content sections** — Alternating white/stone-50 backgrounds
3. **Cards/grid** — Product cards in responsive grid layouts
4. **CTA section** — Dark background with booking link

### API Routes
- API routes use Next.js Route Handlers (`route.ts`) with `NextResponse`.
- The Stripe checkout route includes a fallback mode when `STRIPE_SECRET_KEY` is not set — preserve this pattern for local development.

## Environment Variables

Required in `.env.local` (never commit):
```
STRIPE_SECRET_KEY=sk_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Things to Avoid

- Do not add new npm dependencies without clear justification.
- Do not introduce CSS-in-JS, CSS modules, or Sass — stick to Tailwind utilities.
- Do not add a global state library (Redux, Zustand, etc.) unless cross-component state is truly needed.
- Do not create separate component files for one-off presentational elements — keep them in the page file.
- Do not add images to the repo — the site uses gradients, icons, and CSS patterns intentionally.
- Do not change the color palette or introduce new color families without discussion.
- Do not remove the Stripe fallback mode in the checkout API route.
