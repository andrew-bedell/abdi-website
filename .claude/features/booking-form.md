# Booking Form

## Status: Built

Interactive client-side booking form at `/booking`.

### Capabilities
- **Query param pre-population**: Reads `?route=`, `?safari=`, `?trip=` from URL and pre-selects the adventure type and package. Validates params against actual data constants before pre-filling.
- **Adventure type selector**: Three toggle buttons (Kilimanjaro, Safari, Day Trip) that filter the package dropdown.
- **Dynamic package dropdown**: Populated from static data constants based on selected adventure type.
- **Guest/days configuration**: 1-8 guests, 2-14 days (safari only).
- **Personal details**: Name, email, date, optional notes — all with proper label/input associations (htmlFor/id).
- **Real-time price estimation**: Calculates total and deposit as user adjusts inputs.
  - Kilimanjaro: `route.priceMin × guests`, 25% deposit
  - Safari: `tier.pricePerDay × safariDays × guests`, 25% deposit
  - Day trips: `trip.price × guests`, full payment
- **Error handling**: Displays error banner for failed submissions instead of false success screen.
- **Success state**: Confirmation message with "Back to Home" link.
- **Suspense boundary**: Wraps `useSearchParams` for Next.js static generation compatibility.

### Submission Flow
1. POST to `/api/create-checkout-session`
2. If Stripe configured → redirect to Stripe checkout URL
3. If no Stripe → show confirmation (fallback mode)
4. On error → display error message, preserve form state

## Files
- `src/app/booking/page.tsx`
