# A11Y-1: Mobile Menu Button Missing Accessible Labels

## Severity: Medium (Accessibility)
## Status: Fixed

### Description
The mobile hamburger/close button had no `aria-label` or `aria-expanded`. Screen readers announced it as an unlabeled button.

### Fix
Added `aria-expanded={mobileMenuOpen}` and `aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}`.

### File
- `src/components/Header.tsx`
