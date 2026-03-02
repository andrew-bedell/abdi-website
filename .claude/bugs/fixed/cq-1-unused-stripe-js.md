# CQ-1: Unused @stripe/stripe-js Dependency

## Severity: Low (Code Quality)
## Status: Fixed

### Description
`@stripe/stripe-js` (the client-side Stripe library) was listed in `package.json` dependencies but never imported anywhere in the codebase. The server-side `stripe` package is used in the API route, but the client-side SDK was dead weight adding to bundle size.

### Fix
Removed `@stripe/stripe-js` from `package.json` and ran `npm install` to update the lock file.

### File
- `package.json`
