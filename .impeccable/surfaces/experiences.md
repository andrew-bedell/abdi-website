# Experiences and inquiry

## Overview

Mode: **Persuade**. Visitors browse published experiences, inspect an individual trip, and send Abdi an inquiry. The surface extends the established Zimba Tours website; it preserves amber, stone, white, and system typography rather than introducing a new identity.

Implementation authority: `src/components/Header.tsx`, `ExperienceListing.tsx`, `ExperienceInquiry.tsx`, `src/app/experiences/[slug]/page.tsx`, and `src/app/globals.css`. No global `DESIGN.md` is introduced or replaced by this local brief.

## Colors

Amber carries links and inquiry actions. Stone provides headings, supporting text, borders, and quiet aside fills over white. The active group pill is dark stone with white text. Inquiry confirmation uses a pale green surface; errors use red text. Global focus and caret use amber, with an amber selection highlight.

## Typography

Inherit the existing system-ui, Apple system, Segoe UI, Roboto, sans-serif stack. Listing and detail headings grow from 4xl to 5xl at the small breakpoint; inquiry headings use 3xl. Detail descriptions use large text, generous line height, and preserved line breaks. Compact labels, navigation, and supporting text remain subordinate to trip names and prices.

## Layout

The fixed white header is 64px tall with a centered maximum-width navigation area. Desktop navigation begins at the large breakpoint, shows five top-level entries, and places additional entries under More. Nested native disclosure menus include an Explore link, configured children, and public services for group entries. Dropdowns scroll within 65vh. Below the large breakpoint, the toggle opens a vertically scrollable menu bounded to 80vh; its inquiry discovery action spans the available width.

Listings use a centered 7xl container with 20px side padding, increasing to 32px at the small breakpoint, and 112px top clearance. Group pills wrap. Experience articles use one column, two at the small breakpoint, and three at the large breakpoint, with dividing rules rather than boxed cards. Optional cover images use 4:3 crops.

Details use a 6xl container. The title and metadata stack above the price/inquiry aside on narrow screens, becoming a flexible title column beside a 320px aside at the large breakpoint. An optional 16:9 cover precedes the description; additional owner-uploaded photos form a single-column gallery that becomes two columns at the small breakpoint.

The inquiry uses a narrower 2xl container. Name, email, notes, consent, and submit action stack; preferred date and guest count share two columns at the small breakpoint.

## Elevation & Depth

White surfaces and stone rules establish structure. The price aside uses a stone fill. Desktop dropdowns use the existing shadow treatment; listings and detail content stay visually flat.

## Shapes

Photos and the price aside have rounded-xl corners; inputs and primary actions use rounded-lg corners. Group filters are outlined pills, with a filled active state.

## Components

- Header disclosure controls work through native details/summary. Escape and outside clicks close menus; Escape returns focus to the active disclosure summary. Navigating closes the menu. The mobile toggle exposes its expanded state and controlled region.
- Listing articles show an optional cover, linked name, optional duration, a shortened first description paragraph, price, and exploration link. An empty group has a text explanation and a Browse all experiences link.
- Details show only published services; missing/private slugs return not-found. Group links and the All experiences link provide navigation context. The price aside leads to the service-specific inquiry.
- Imagery comes only from catalog owner uploads. Missing photos omit image regions. Do not invent replacement safari photographs or placeholders. Listing images are decorative duplicates of the linked title; detail and gallery images use supplied descriptions.
- Inquiry copy says availability and final pricing require confirmation and no payment is taken. Submit changes to Sending request and disables while pending. Accepted submission replaces the form with a status message; failures appear as an alert. If the site kit is unavailable, the message supplies Abdi's email. Required consent links to the privacy policy.
- Global visible focus and reduced-motion handling remain intact.

## Do's and Don'ts

- Preserve the amber/stone system and published-only catalog content.
- Preserve the inquiry contract: a request is not a payment, reservation, or inventory confirmation.
- Keep optional imagery optional and grounded in owner uploads.
- Review disposition supplied by the parent review: ship for captured navigation and detail surfaces at desktop and mobile sizes. Listings, inquiry, and photos were not visually captured; their description here is source-grounded, not a claim of visual verification.
