# SEC-5: Localhost Fallback in Stripe Redirect URLs

## Severity: Low (Security / Deployment)
## Status: Open (deferred until Stripe integration)

### Description
The Stripe checkout session uses a localhost fallback for redirect URLs:
```ts
success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/booking?success=true`
```

If `NEXT_PUBLIC_BASE_URL` is not set in production, Stripe would redirect users to `http://localhost:3000` after payment — a broken experience.

### Fix
When building Stripe integration:
1. Require `NEXT_PUBLIC_BASE_URL` to be set (throw on startup if missing in production)
2. Or derive the base URL from the request headers (`request.headers.get("host")`)
3. Remove the hardcoded localhost fallback

### File
- `src/app/api/create-checkout-session/route.ts` (lines 42-43)

### Resolved By
- [stripe-integration.md](../planned/stripe-integration.md)
