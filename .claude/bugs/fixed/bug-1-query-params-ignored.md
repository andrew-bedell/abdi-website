# BUG-1: Booking Page Ignores URL Query Parameters

## Severity: Medium
## Status: Fixed

### Description
Public pages linked to the booking page with query params (`?route=lemosho`, `?safari=gold`, `?trip=materuni`) but the booking page never read them. Users always landed on a blank form regardless of which "Book Now" button they clicked.

### Fix
Added `useSearchParams()` to read `route`, `safari`, and `trip` params. Validates each against the actual data constants before pre-populating `bookingType` and `selectedPackage`. Wrapped in `<Suspense>` for Next.js static generation compatibility.

### File
- `src/app/booking/page.tsx`
