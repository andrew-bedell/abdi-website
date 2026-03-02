# PostgreSQL Database with Prisma ORM

## Priority: High (foundation for all backend features)

### Description
Set up the data layer for dynamic operational data — bookings, customers, guides, and assignments.

### Schema Models
- **User** — Admin/employee accounts. Fields: id, name, email, password (hashed), role (ADMIN | GUIDE). Abdi is ADMIN, guides are GUIDE.
- **Customer** — People who book trips. Fields: id, name, email, phone, nationality, createdAt.
- **Booking** — A customer's trip booking. Links to Customer. Fields: tripType (kilimanjaro/safari/day-trip), packageId, selectedDate, guests, safariDays, status (PENDING | CONFIRMED | IN_PROGRESS | COMPLETED | CANCELLED), depositAmount, totalAmount, notes.
- **Assignment** — Links a Guide (User) to a Booking. Allows Abdi to assign guides to upcoming trips.

### Implementation Steps
1. Install `prisma` and `@prisma/client`
2. Create `prisma/schema.prisma` with models above
3. Create `src/lib/prisma.ts` singleton (prevents hot-reload connection exhaustion)
4. Run `npx prisma migrate dev` to create initial migration
5. Create `prisma/seed.ts` for initial admin user (Abdi)
6. Update booking form submission to write Customer + Booking records

### Dependencies
- `prisma` (dev dependency)
- `@prisma/client`
- `bcryptjs` + `@types/bcryptjs` (for password hashing in seed)

### Environment Variables
```
DATABASE_URL=postgresql://user:password@localhost:5432/zimba_tours
```
