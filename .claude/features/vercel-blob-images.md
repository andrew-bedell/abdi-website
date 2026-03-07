# Vercel Blob Image Hosting
## Status: Built
## Implementation Date: 2026-03-02

### Description
Added real photography of Abdi (the founder) to the website using Vercel Blob for image storage. 8 photos are hosted on Vercel Blob and displayed across all pages — hero background images on every page and portrait photos replacing icon placeholders on the Homepage and About page.

Images are served via Vercel Blob CDN (`967aobxlmqad6imy.public.blob.vercel-storage.com`) and never enter the git repo. The Next.js `<Image>` component handles optimization, lazy loading, and responsive sizing.

### Files
- `next.config.ts` — Added `images.remotePatterns` for Vercel Blob domain
- `src/data/images.ts` — Centralized image URL mapping (8 images with semantic names)
- `src/app/page.tsx` — Hero background image + "Why Zimba Tours" founder card photo
- `src/app/about/page.tsx` — Hero background image + main Abdi portrait
- `src/app/kilimanjaro/page.tsx` — Hero background image
- `src/app/safaris/page.tsx` — Hero background image
- `src/app/day-trips/page.tsx` — Hero background image
- `src/app/safety/page.tsx` — Hero background image

### Image Placement
| Image Key | Location | Description |
|-----------|----------|-------------|
| `aboutPortrait` | About page portrait card | Main Abdi photo with bottom gradient text overlay |
| `homepageFounder` | Homepage "Why Zimba Tours" card | Founder card with bottom gradient text overlay |
| `heroHomepage` | Homepage hero | Full-width background behind gradient overlay |
| `heroAbout` | About page hero | Full-width background behind gradient overlay |
| `heroKilimanjaro` | Kilimanjaro page hero | Full-width background behind gradient overlay |
| `heroSafaris` | Safaris page hero | Full-width background behind gradient overlay |
| `heroDayTrips` | Day Trips page hero | Full-width background behind gradient overlay |
| `heroSafety` | Safety page hero | Full-width background behind gradient overlay |

### Technical Pattern
- Hero sections: `<Image fill>` with `object-cover` positioned absolutely, gradient overlay div on top with Tailwind opacity modifiers (`/80`, `/70`), content with `relative z-10`
- Portrait cards: `<Image fill>` in `overflow-hidden rounded-2xl` container, bottom gradient overlay for text readability
- Image URLs centralized in `src/data/images.ts` for easy swapping

### Notes
- No `@vercel/blob` SDK needed — images are already uploaded and referenced by direct URL
- To swap an image, update the URL in `src/data/images.ts`
- Admin upload UI is a future enhancement (requires admin-auth and admin-dashboard features)
