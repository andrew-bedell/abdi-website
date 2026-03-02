# CQ-4: Stripe Success/Cancel Query Params Not Handled

## Severity: Low (Code Quality)
## Status: Open (deferred until Stripe integration)

### Description
The Stripe checkout session defines success and cancel redirect URLs:
```
success_url: `${baseUrl}/booking?success=true`
cancel_url: `${baseUrl}/booking?canceled=true`
```

But the booking page never reads `?success=true` or `?canceled=true` from the URL. After Stripe payment completes (or is cancelled), the user lands back on a blank booking form with no feedback.

### Fix
When Stripe integration is built:
1. Read `success` and `canceled` search params on the booking page
2. Show a success confirmation when `?success=true`
3. Show a "payment cancelled" message with option to retry when `?canceled=true`

### File
- `src/app/booking/page.tsx`
- `src/app/api/create-checkout-session/route.ts` (lines 42-43)

### Resolved By
- [stripe-integration.md](../planned/stripe-integration.md)
