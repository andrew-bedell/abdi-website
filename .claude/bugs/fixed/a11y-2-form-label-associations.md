# A11Y-2: Form Inputs Missing Label Associations

## Severity: Medium (Accessibility)
## Status: Fixed

### Description
All `<label>` elements on the booking form lacked `htmlFor` attributes and all `<input>`/`<select>`/`<textarea>` elements lacked `id` attributes. Labels existed visually but were not programmatically associated with their inputs, making the form harder to use with screen readers.

### Fix
Added `htmlFor`/`id` pairs to all form controls:
- `package` (package select)
- `guests` (guest count select)
- `safari-days` (safari days select)
- `full-name` (name input)
- `email` (email input)
- `start-date` (date input)
- `notes` (notes textarea)

Also added a `sr-only` label for the package select (which uses the section heading "2. Select Package" as its visible label).

### File
- `src/app/booking/page.tsx`
