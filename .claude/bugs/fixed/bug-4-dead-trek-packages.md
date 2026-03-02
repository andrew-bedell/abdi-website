# BUG-4: Dead trekPackages Export

## Severity: Low (Code Quality)
## Status: Fixed

### Description
`src/data/kilimanjaro.ts` exported a `trekPackages` array that duplicated a subset of `kilimanjaroRoutes` data with different prices and fewer fields. It was never imported anywhere — pure dead code.

### Fix
Removed the entire `trekPackages` export (5 objects, ~30 lines).

### File
- `src/data/kilimanjaro.ts`
