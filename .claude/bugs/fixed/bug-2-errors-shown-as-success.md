# BUG-2: Errors Shown as Success in Booking Submission

## Severity: High
## Status: Fixed

### Description
Both the `catch` block and the `else` branch of the submission handler called `setSubmitted(true)`, showing the success screen even when the request failed. Users had no idea their booking wasn't received.

Also removed client-sent `amount` from the request body (was a security issue — see SEC-1).

### Fix
- Added `submitError` state and `setSubmitError()` calls for non-ok responses and network errors
- Added error banner UI (`rounded-2xl border border-red-200 bg-red-50`) above submit button
- Checks `response.ok` before treating the response as successful
- Removed `amount: getDeposit()` from the POST body

### File
- `src/app/booking/page.tsx`
