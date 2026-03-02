# SEC-2: No Server-Side Input Validation in API Route

## Severity: Medium (Security)
## Status: Open (deferred until Stripe integration)

### Description
The `/api/create-checkout-session` route destructures the request body and passes values directly to Stripe without validating:
- `bookingType` is a valid type ("kilimanjaro" | "safari" | "day-trip")
- `packageId` exists in the corresponding data constants
- `guests` is a reasonable number (1-8)
- `safariDays` is valid when applicable (2-14)
- `email` is a valid email format
- `date` is a valid future date

### Fix
Add server-side validation before processing. Return 400 with descriptive error for invalid inputs.

### File
- `src/app/api/create-checkout-session/route.ts`

### Resolved By
- [stripe-integration.md](../planned/stripe-integration.md)
