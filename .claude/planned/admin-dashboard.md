# Admin Dashboard

## Priority: High

### Description
Protected admin panel at `/admin` with sidebar navigation and overview of business operations. Only accessible to authenticated users with ADMIN or GUIDE roles.

### Pages
1. **Dashboard** (`/admin/page.tsx`) — Overview of upcoming, current, and past bookings with summary stats.
2. **Customers** (`/admin/customers/page.tsx`) — Customer list with filters (upcoming, current, past). View booking history per customer.
3. **Guides** (`/admin/guides/page.tsx`) — Guide management. Add/edit guide accounts. View each guide's assigned bookings.
4. **Assignments** (`/admin/assignments/page.tsx`) — Assign guides to customer bookings. Drag-and-drop or dropdown assignment UI.

### Layout
- `src/app/admin/layout.tsx` — Persistent sidebar navigation (Dashboard, Customers, Guides, Assignments)
- Admin styling uses the same Tailwind brand palette (amber-600 active states, stone-* structure)

### Data Fetching
- Use server components where possible — fetch data directly with Prisma in page components
- Filtering via URL search params (status, date range, trip type) for shareable/bookmarkable pages
- Actions via server actions or API routes with optimistic UI updates

### API Routes
- `/api/admin/customers/route.ts` — Customer CRUD
- `/api/admin/guides/route.ts` — Guide management
- `/api/admin/assignments/route.ts` — Guide-customer assignment

### Depends On
- [database-prisma.md](../planned/database-prisma.md)
- [admin-auth.md](../planned/admin-auth.md)
