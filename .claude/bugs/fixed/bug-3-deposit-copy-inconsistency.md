# BUG-3: Deposit Percentage Copy Inconsistency

## Severity: Low
## Status: Fixed

### Description
The Kilimanjaro page CTA said "20-30% deposit" but the booking page said "25% deposit" and the code calculated exactly 25% (`Math.round(total * 0.25)`). Confusing for users comparing pages.

### Fix
Changed Kilimanjaro page copy from "20-30%" to "25%" to match the actual calculation.

### File
- `src/app/kilimanjaro/page.tsx`
