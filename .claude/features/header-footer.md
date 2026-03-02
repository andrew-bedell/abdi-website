# Header & Footer

## Status: Built

### Header (`src/components/Header.tsx`)
- Fixed top navigation with glass-morphism background (`bg-white/95 backdrop-blur-sm`)
- Logo: Mountain icon + "Zimba Tours" text, links to homepage
- Desktop nav: Kilimanjaro, Safaris, Day Trips, Safety, About
- Right side: Contact phone link + "Book Now" CTA button
- Mobile: Hamburger menu toggle with `aria-expanded` and `aria-label` for accessibility
- Mobile drawer: Full navigation links + Book Now button, closes on link click
- Client component (uses `useState` for mobile menu toggle)

### Footer (`src/components/Footer.tsx`)
- Dark theme (`stone-900` background)
- 4-column responsive grid:
  1. Branding: Logo, company description
  2. Adventures: Links to Kilimanjaro, Safaris, Day Trips, Safety
  3. Company: About, Book Now, KPAP Certified
  4. Contact: Location (Arusha, Tanzania), email, phone
- Bottom bar: Copyright + certification badges (KPAP, Zero Waste, AMREF)

### Root Layout (`src/app/layout.tsx`)
- Wraps all pages with Header + Footer
- Defines global metadata (title, description, keywords)

## Files
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/app/layout.tsx`
