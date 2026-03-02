# SEC-1: Client-Sent Price in Stripe Checkout

## Severity: High (Security)
## Status: Open (deferred until Stripe integration)

### Description
The booking form previously sent `amount: getDeposit()` to the API route, and the Stripe checkout route used this client-sent value directly as the payment amount (`unit_amount: amount * 100`). An attacker could modify the request to pay any amount.

The client-side `amount` field was removed from the form submission in the BUG-2 fix, but the API route (`/api/create-checkout-session`) still reads `amount` from the request body and passes it to Stripe.

### Fix
When building the full Stripe integration, calculate the price server-side:
1. Look up the package in `src/data/` constants using `bookingType` + `packageId`
2. Calculate total from the constant's price and the guest/days count
3. Calculate deposit (25% for Kilimanjaro/safari, 100% for day trips)
4. Never use a client-sent amount

### File
- `src/app/api/create-checkout-session/route.ts` (line 29)

### Resolved By
- [stripe-integration.md](../planned/stripe-integration.md)
