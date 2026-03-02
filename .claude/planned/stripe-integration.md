# Stripe Payment Integration

## Priority: Medium (after database is in place)

### Description
Full Stripe integration into the booking flow. Currently the checkout route exists with a fallback mode — this feature completes the payment pipeline.

### Implementation Steps
1. Refactor `/api/create-checkout-session` to calculate price server-side from `src/data/` constants (never trust client-sent amount)
2. Add server-side input validation (bookingType, packageId, guests must be valid)
3. Create Customer and Booking records in database before redirecting to Stripe
4. Handle Stripe webhook for payment confirmation → update Booking status to CONFIRMED
5. Handle success/cancel redirect query params on booking page
6. Use `NEXT_PUBLIC_BASE_URL` for redirect URLs (remove localhost fallback)

### Resolves Bugs
When completed, this feature resolves:
- `.claude/bugs/sec-1-client-sent-price.md`
- `.claude/bugs/sec-2-no-input-validation.md`
- `.claude/bugs/cq-4-stripe-params-unhandled.md`
- `.claude/bugs/sec-5-localhost-fallback.md`

### Dependencies
- `stripe` (already installed)

### Environment Variables
```
STRIPE_SECRET_KEY=sk_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Depends On
- [database-prisma.md](../planned/database-prisma.md) — Need Booking/Customer models to persist before payment
