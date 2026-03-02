# Stripe Checkout API

## Status: Built (with fallback mode)

API route at `/api/create-checkout-session` that handles booking form submissions.

### Behavior
- **With `STRIPE_SECRET_KEY` configured**: Creates a real Stripe Checkout Session and returns the redirect URL.
- **Without Stripe key (fallback)**: Returns a success response for local development and demo purposes.

### Stripe Session Details
- Payment method: card
- Mode: payment (one-time)
- Customer email pre-filled
- Line item: dynamically named based on booking type
- Metadata: bookingType, packageId, guests, safariDays, customerName, preferredDate
- Success/cancel URLs using `NEXT_PUBLIC_BASE_URL` env var

### Known Issues
See `.claude/bugs/` for open issues related to this route:
- Client-sent price amount (SEC-1)
- No server-side input validation (SEC-2)
- Success/cancel query params not handled (CQ-4)
- Localhost fallback in redirect URLs (SEC-5)

These will be addressed when the full booking API (`/api/bookings`) is built with database integration.

## Files
- `src/app/api/create-checkout-session/route.ts`
