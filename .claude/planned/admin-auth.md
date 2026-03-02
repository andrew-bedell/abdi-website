# NextAuth Admin Authentication

## Priority: High (required before admin panel)

### Description
Admin-only authentication using NextAuth.js (Auth.js v5) with credentials provider. No public user accounts — only Abdi (ADMIN) and guides (GUIDE) can log in.

### Implementation Steps
1. Install `next-auth`
2. Create `src/lib/auth.ts` with NextAuth configuration:
   - Credentials provider (email + password)
   - Password verification with bcryptjs
   - Session includes user role
3. Create `src/app/api/auth/[...nextauth]/route.ts` handler
4. Create `src/app/login/page.tsx` — admin login form
5. Add middleware to protect `/admin/*` routes (redirect to `/login` if unauthenticated)
6. Protect `/api/admin/*` API routes (return 401 without valid session)

### Authorization Rules
- ADMIN role: Full access to everything (manage customers, guides, assignments, bookings)
- GUIDE role: Can view their own assignments only

### Dependencies
- `next-auth`

### Environment Variables
```
NEXTAUTH_SECRET=<random-32-char-string>
NEXTAUTH_URL=http://localhost:3000
```

### Depends On
- [database-prisma.md](../planned/database-prisma.md) — User model must exist
