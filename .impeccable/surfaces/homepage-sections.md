# Homepage sections

## Overview

This local extension supports incremental homepage updates after launch through Discovery Platform. The client-owned Zimba presentation remains authoritative: existing amber/stone design and existing block content are retained verbatim. Implementation authority is `src/components/HomeSections.tsx` and `src/components/ExistingHomeSections.tsx`; this brief does not replace a global design system.

The opening hero stays first and outside the reorderable list. The remaining existing blocks—trip highlights, overview, reasons to choose Zimba, testimonial, and invitation—can be ordered or hidden alongside new page collections and featured pages. An absent homepage configuration preserves the original block order; an explicitly empty configuration leaves the hero without these subsequent blocks.

## Colors

Retain Zimba’s white surfaces, stone text and borders, amber links and hover accents, and existing dark stone/amber hero. Discovery sage and paper belong to the administration interface and must not recolor the public website.

## Typography

Retain the client’s existing typography. New section headings use bold responsive 3xl/4xl sizing; introductions use large stone-muted text. Page titles use semibold xl sizing, with descriptions and prices beneath them. These are extensions of the existing website, not a new identity.

## Layout

New sections use generous vertical spacing, a centered max-width content container, and a centered heading/introduction. Collections stack on small screens, use two columns at medium widths, and three at large widths with consistent gaps. Featured pages occupy a narrower centered area; a feature with a photograph becomes two columns from medium widths. Cards without photographs retain the text presentation without a fabricated placeholder image. Existing blocks retain their original responsive layouts.

## Elevation & Depth

New page links use a fine stone border, amber border hover, and a modest hover shadow. Preserve the existing block-specific surface changes and hero depth.

## Shapes

New page links use the existing rounded card language (2xl corners) with clipped images. Uploaded photographs use a 3:2 crop and cover sizing.

## Components

- Platform owns section order, visibility, collection/feature choice, heading, introduction, and page references. It allows up to 25 sections, 1–12 pages per collection, and one page per feature. The hero is fixed.
- Service references resolve the current published service title, description, address, cover photograph, and price. Group references resolve the current group title, description, address, and the first available public member photograph. Supported static page references use the website’s local title and description mapping; they do not scrape arbitrary page content.
- Page links include an “Explore” label with the page name and a decorative arrow. Images use supplied alternative text and lazy loading. Descriptions are visually limited to four lines.
- Hidden sections, unavailable references, and private services do not render. Page sections with no resolved public links do not leave an empty heading behind.
- Save draft preserves live content. Publish website delivers services, navigation, and homepage configuration together; connected pages update on the next load. Automatic delivery follows this explicit publication action. Editing alone does not publish.

## Do's and Don'ts

- Preserve the existing hero, block markup, client colors, and responsive presentation when extending content placement.
- Keep service and group references connected to source records so future content changes flow through without website regeneration.
- Do not turn this bounded section builder into arbitrary layout or brand editing.
- Do not interpret absent configuration as a request to erase the original homepage.

## Local extension evidence

The supplied reviewer disposition is **ship**, with no material fixes, for eight desktop/mobile captures stored in the Platform checkout at `/Users/andrewbedell/repos/discovery-platform-home-sections/.impeccable/review/homepage-*.png`. The site and section pairs cover the local public presentation; editor and controls pairs use an isolated editor harness. This is bounded local visual evidence, not confirmation of an authenticated production dashboard, production deployment, or live publishing. No global `DESIGN.md` is changed by this handoff.
