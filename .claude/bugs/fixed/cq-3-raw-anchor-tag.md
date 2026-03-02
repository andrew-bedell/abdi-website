# CQ-3: Raw <a> Tag Instead of Next.js <Link>

## Severity: Low (Code Quality)
## Status: Fixed

### Description
The booking success screen used a raw `<a href="/">` for the "Back to Home" button instead of Next.js `<Link>`. This caused a full page reload instead of client-side navigation.

### Fix
Replaced `<a href="/">` with `<Link href="/">` from `next/link`.

### File
- `src/app/booking/page.tsx`
