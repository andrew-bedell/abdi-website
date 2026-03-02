# Vercel Blob Image Hosting
## Status: Planned
## Priority: Medium

### Description
Add real photography to the website using Vercel Blob for image storage. Currently the site uses only gradients, icons, and CSS patterns. Adding photos of Kilimanjaro, safaris, wildlife, and Arusha will significantly improve visual appeal and customer trust.

Vercel Blob provides edge-cached, globally distributed file storage that integrates natively with Next.js. Images are uploaded once and served via a CDN URL — they never enter the git repo.

### Implementation Steps

1. **Install dependency**
   - `npm install @vercel/blob`
   - This is a new dependency beyond the current approved list (justified: official Vercel SDK for blob storage, required for image hosting without repo bloat)

2. **Configure environment variables**
   - Add `BLOB_READ_WRITE_TOKEN` to `.env.local` (obtained from Vercel dashboard → Storage → Blob → Create Store)
   - Update `.env.example` with placeholder

3. **Configure Next.js image remote patterns**
   - Update `next.config.ts` to allow Vercel Blob domains in `images.remotePatterns`:
     ```ts
     images: {
       remotePatterns: [
         {
           protocol: 'https',
           hostname: '*.public.blob.vercel-storage.com',
         },
       ],
     }
     ```

4. **Create admin upload API route**
   - `src/app/api/admin/upload/route.ts`
   - POST endpoint accepting multipart form data
   - Uses `@vercel/blob` `put()` to upload and return the public URL
   - Protected by NextAuth session check (admin only)
   - Validates file type (JPEG, PNG, WebP only) and size (max 5MB)

5. **Create admin image management page** (optional, after admin dashboard is built)
   - `src/app/admin/images/page.tsx`
   - Upload interface, gallery of uploaded images, copy URL button, delete capability
   - Uses `list()` and `del()` from `@vercel/blob`

6. **Create reusable image component**
   - Helper component using Next.js `<Image>` with Vercel Blob URLs
   - Consistent sizing, lazy loading, blur placeholder support
   - Define in the page file where first used (or `src/components/` if reused across pages)

7. **Update public pages with images**
   - Hero sections: Replace gradient-only backgrounds with gradient overlays on top of photos
   - Trip cards: Add thumbnail images to Kilimanjaro route cards, safari tier cards, day trip cards
   - About page: Add team/location photos
   - Keep gradient overlays for text readability — images go behind, not instead of gradients

8. **Store image URL references**
   - Option A: Add optional `imageUrl` fields to static data types in `src/data/` files (e.g., `KilimanjaroRoute.imageUrl`)
   - Option B: Create a simple `src/data/images.ts` mapping file that maps page/section IDs to Vercel Blob URLs
   - Option A preferred — keeps image URLs co-located with the data they describe

### Dependencies
- `@vercel/blob` (new dependency — Vercel's official blob storage SDK)

### Environment Variables
- `BLOB_READ_WRITE_TOKEN` — Vercel Blob store read/write token

### Depends On
- `admin-auth.md` — Upload route needs auth protection
- `admin-dashboard.md` — Image management page lives in admin panel

### Notes
- Images should be optimized before upload (WebP preferred, reasonable resolution)
- The Next.js `<Image>` component handles responsive sizing and lazy loading automatically
- Vercel Blob free tier includes 1GB storage — sufficient for a tourism site's photo library
- Upload can initially be done via API (curl/Postman) before the admin UI is built
