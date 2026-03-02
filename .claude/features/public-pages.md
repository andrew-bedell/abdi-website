# Public Pages

## Status: Built

Six content pages accessible to all visitors:

### Homepage (`/`)
- Hero section with primary CTAs (Book Now, Meet Abdi)
- Stats banner (98% summit success, 500+ summits, 6 routes, 5 national parks)
- Services overview cards (Kilimanjaro, Safaris, Day Trips)
- "Why Choose Zimba Tours" value propositions
- Founder showcase and testimonial section

### Kilimanjaro Expeditions (`/kilimanjaro`)
- Sky-blue themed hero
- Route comparison table (6 routes: Lemosho, Machame, Marangu, Northern Circuit, Rongai, Umbwe)
- Detailed route cards with difficulty badges, success rates, pricing, highlights
- "Book Now" links with `?route={id}` query params
- "Included in Every Expedition" section (12 inclusions)

### Wildlife Safaris (`/safaris`)
- Green themed hero
- 5 safari tier cards (Platinum, Gold, Silver, Photographic, Family)
- Great Migration Calendar (12-month migration patterns)
- 5 National Parks destination cards
- Safari vehicle specifications

### Day Trips (`/day-trips`)
- Amber themed hero
- 4 day trip cards (Materuni Waterfall, Chemka Hot Springs, Arusha City Tour, Maasai Boma)
- "Book Now" links with `?trip={id}` query params
- Custom day trips promotion section

### Safety & Equipment (`/safety`)
- Emergency response and medical safety (AMREF, satellite comms, medical gear)
- Altitude sickness awareness section
- Equipment standards table (tent, sleeping bag, pad, mess tent, chairs, stove)
- Safari vehicle specs table
- KPAP certification and ethical practices

### About (`/about`)
- Abdi's biographical narrative
- 6 company values cards
- Naturalist guide curriculum (6 training subjects)

## Files
- `src/app/page.tsx`
- `src/app/kilimanjaro/page.tsx`
- `src/app/safaris/page.tsx`
- `src/app/day-trips/page.tsx`
- `src/app/safety/page.tsx`
- `src/app/about/page.tsx`
- `src/app/[section]/page.tsx` (catch-all for content sections)
