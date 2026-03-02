# Static Data Layer

## Status: Built

Typed constant arrays in `src/data/` serving as the source of truth for product information. These rarely change and don't need a database.

### Kilimanjaro Routes (`src/data/kilimanjaro.ts`)
- 6 routes: Lemosho, Machame, Marangu, Northern Circuit, Rongai, Umbwe
- Fields: id, name, tagline, duration, days, successRate, difficulty, landscape, priceRange, priceMin, priceMax, description, highlights[]
- TypeScript interface: `KilimanjaroRoute`

### Safari Tiers (`src/data/safaris.ts`)
- 5 tiers: Platinum Migration, Gold Big Five, Silver Expedition, Photographic Private, Family Adventure
- Fields: id, name, focusArea, accommodation, pricePerDay, description, highlights[]
- Migration calendar: 5 seasonal entries with location, significance, Zimba focus
- Safari parks: 5 national park cards (Serengeti, Ngorongoro, Tarangire, Manyara, Arusha)
- TypeScript interfaces: `SafariTier`, `MigrationMonth`, `SafariPark`

### Day Trips (`src/data/day-trips.ts`)
- 4 trips: Materuni Waterfall, Chemka Hot Springs, Arusha City Tour, Maasai Boma Visit
- Fields: id, name, duration, price, highlights[], description, includes[]
- TypeScript interface: `DayTrip`

### Equipment & Safety (`src/data/equipment.ts`)
- Expedition gear: 6 items with brand/model and critical features
- Vehicle features: 6 specs with technical details and benefits
- Safety features: 6 categories with descriptions
- TypeScript interfaces: `GearItem`, `VehicleFeature`, `SafetyFeature`

## Files
- `src/data/kilimanjaro.ts`
- `src/data/safaris.ts`
- `src/data/day-trips.ts`
- `src/data/equipment.ts`
