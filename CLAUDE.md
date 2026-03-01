# CLAUDE.md — Zimba Tours Website

## Project Overview

Zimba Tours is a full-stack travel booking platform for a Tanzanian adventure tourism company based in Arusha. It features Kilimanjaro expeditions, wildlife safaris, day trips, a customer booking flow with calendar date selection, and an admin backend where the business owner (Abdi) manages customers, guides, and trip assignments. Built with Next.js (App Router), TypeScript, Tailwind CSS, Prisma, and PostgreSQL.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (utility-first, no CSS modules or styled-components)
- **Icons**: lucide-react (all icons come from this library)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js (Auth.js v5) — credentials-based admin login
- **Calendar**: react-day-picker (customer-facing date selection)
- **Payments**: Stripe (deferred — not yet integrated into booking flow)
- **Package Manager**: npm

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint (Next.js core-web-vitals + TypeScript rules)

# Database
npx prisma migrate dev    # Run migrations in development
npx prisma migrate deploy # Run migrations in production
npx prisma generate       # Regenerate Prisma client after schema changes
npx prisma studio         # Open visual database browser (localhost:5555)
npx prisma db seed        # Seed database with initial admin user
```

## Project Structure

```
prisma/
├── schema.prisma         # Database schema (models, relations, enums)
├── migrations/           # Auto-generated SQL migration files
└── seed.ts               # Seed script (creates initial admin user)
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (Header + Footer wrapper)
│   ├── page.tsx          # Homepage
│   ├── booking/page.tsx  # Booking form with calendar date picker (client component)
│   ├── api/              # API routes
│   │   ├── auth/[...nextauth]/route.ts  # NextAuth handler
│   │   ├── bookings/route.ts            # Booking CRUD
│   │   └── admin/                       # Admin-only API routes
│   │       ├── customers/route.ts       # Customer management
│   │       ├── guides/route.ts          # Guide management
│   │       └── assignments/route.ts     # Guide-customer assignment
│   ├── admin/            # Admin panel (protected by auth)
│   │   ├── layout.tsx    # Admin layout with sidebar navigation
│   │   ├── page.tsx      # Dashboard — overview of upcoming/current/past bookings
│   │   ├── customers/page.tsx   # Customer list with filters (upcoming, current, past)
│   │   ├── guides/page.tsx      # Guide management (add/edit employees)
│   │   └── assignments/page.tsx # Assign guides to customer bookings
│   ├── login/page.tsx    # Admin login page
│   └── [section]/page.tsx  # Content pages (kilimanjaro, safaris, day-trips, about, safety)
├── components/           # Shared React components
│   ├── Header.tsx        # Public site header
│   ├── Footer.tsx        # Public site footer
│   └── admin/            # Admin-specific reusable components (tables, forms, filters)
├── lib/                  # Shared utilities
│   ├── prisma.ts         # Prisma client singleton (prevents hot-reload connection exhaustion)
│   └── auth.ts           # NextAuth configuration and helpers
└── data/                 # Static typed data files (routes, tiers, trips, equipment)
```

## Architecture Principles

### Server vs Client Components
- **Default to server components.** All page files are server-rendered unless they need interactivity.
- Only add `"use client"` when the component requires `useState`, `useEffect`, event handlers, or browser APIs.
- Client components: `Header.tsx`, `booking/page.tsx`, admin pages with interactive tables/forms.
- Admin pages that only display data should remain server components — fetch data directly with Prisma in the page.

### Data Layer — Two Sources of Truth
1. **Static product data** stays in `src/data/` as typed constant arrays (routes, safari tiers, day trips, equipment). These rarely change and don't need a database.
2. **Dynamic operational data** lives in PostgreSQL via Prisma (bookings, customers, guides, assignments). This is everything that changes at runtime.
- Import static data using the `@/` path alias: `import { kilimanjaroRoutes } from "@/data/kilimanjaro"`.
- Import Prisma client from `@/lib/prisma` for database operations.

### Database Models
The core models and their relationships:
- **User** — Admin/employee accounts (Abdi + guides). Has `role` field (`ADMIN` | `GUIDE`).
- **Customer** — People who book trips. Stores name, email, phone, nationality.
- **Booking** — A customer's trip booking. Links to Customer, stores trip type (kilimanjaro/safari/day-trip), package ID, selected date, number of guests, status (`PENDING` | `CONFIRMED` | `IN_PROGRESS` | `COMPLETED` | `CANCELLED`), and deposit/payment info.
- **Assignment** — Links a Guide (User) to a Booking. Allows Abdi to assign guides to upcoming trips.

### Authentication & Authorization
- NextAuth.js with credentials provider (email + password).
- Only admin users can log in. No public user accounts.
- Admin routes (`/admin/*`) are protected by middleware — unauthenticated users redirect to `/login`.
- API routes under `/api/admin/*` require a valid session — return 401 otherwise.
- Abdi's account is `ADMIN` role, guides are `GUIDE` role. Guides can view their assignments; only admins can manage everything.

### No External State Management
- State is local to components via `useState`. There is no global store, context provider, or state management library.
- Keep it this way unless a clear cross-component state need arises.
- Admin pages should leverage server components and URL search params for filtering/pagination where possible.

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
- Public API routes (e.g., `/api/bookings`) validate input server-side — never trust client-sent prices or IDs without verification against `src/data/` constants.
- Admin API routes (`/api/admin/*`) must check for a valid NextAuth session and appropriate role before processing.
- The Stripe checkout route includes a fallback mode when `STRIPE_SECRET_KEY` is not set — preserve this pattern for local development.

### Booking Flow
1. Customer selects trip type and package on public pages → clicks "Book Now" → lands on `/booking`.
2. Booking page pre-populates from URL query params (`?type=kilimanjaro&package=lemosho`).
3. Customer fills out details, selects date via calendar (react-day-picker), submits.
4. Server validates all inputs, calculates price server-side from `src/data/` constants, creates `Customer` and `Booking` records in database.
5. (Future) Stripe payment is processed before confirming the booking.
6. Abdi sees the new booking in his admin dashboard and assigns a guide.

### Admin Panel Patterns
- Admin layout uses a persistent sidebar for navigation (Dashboard, Customers, Guides, Assignments).
- Tables use server components where possible — data is fetched via Prisma in the page component.
- Filtering (by status, date range, trip type) uses URL search params so pages are shareable and bookmarkable.
- Actions (assign guide, update status) use server actions or API routes with optimistic UI updates.
- Admin styling uses the same Tailwind brand palette — `amber-600` for active states, `stone-*` for structure.

## Environment Variables

Required in `.env.local` (never commit):
```
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/zimba_tours

# Authentication
NEXTAUTH_SECRET=<random-32-char-string>
NEXTAUTH_URL=http://localhost:3000

# Stripe (deferred — not yet active in booking flow)
STRIPE_SECRET_KEY=sk_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## New Dependencies (Justified)

These are the approved new dependencies for the full-stack features:
- **prisma** + **@prisma/client** — Database ORM. Type-safe queries, migration system, essential for the data layer.
- **next-auth** — Authentication. Purpose-built for Next.js, handles sessions, JWT, middleware protection.
- **react-day-picker** — Calendar date picker. Lightweight, accessible, Tailwind-compatible. Used on booking page.
- **bcryptjs** + **@types/bcryptjs** — Password hashing for admin accounts. Standard, no-dependency alternative to bcrypt.

Do not add additional dependencies beyond these without clear justification.

## Things to Avoid

- Do not add new npm dependencies beyond the approved list above without clear justification.
- Do not introduce CSS-in-JS, CSS modules, or Sass — stick to Tailwind utilities.
- Do not add a global state library (Redux, Zustand, etc.) unless cross-component state is truly needed.
- Do not create separate component files for one-off presentational elements — keep them in the page file.
- Do not add images to the repo — the site uses gradients, icons, and CSS patterns intentionally.
- Do not change the color palette or introduce new color families without discussion.
- Do not remove the Stripe fallback mode in the checkout API route.
- Do not expose Prisma client in client components — all database access must happen server-side (server components, API routes, or server actions).
- Do not create public-facing user accounts — authentication is admin/guide only.
- Do not store plain-text passwords — always hash with bcryptjs.
- Do not trust client-submitted prices — always calculate server-side from `src/data/` constants.
