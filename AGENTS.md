# Zimba Tours public website

This Next.js repository owns https://www.zimbatourstanzania.com, an English-language safari and Kilimanjaro inquiry website for Abdi. Discovery Platform owns CRM, content editing, analytics and provider credentials.

Before integration edits read discovery-manifest.json and the Platform AGENTS.md, docs/api-contract.md, docs/runbooks/client-rollout.md and docs/retrofit-playbook.md in /Users/andrewbedell/repos/Discovery Platform.

- Preserve the exact provisioned site key, allowed origins and release revision. An unset key is not a working connection.
- Booking inquiries use the current site-kit submitLead API and POST /api/lead, preserving trip details, attribution, consent, deduplication, honeypot and Turnstile support. Never report success without CRM acceptance.
- This is an inquiry flow, not payment or confirmed inventory. The retired checkout route must not fake success.
- Keep editable content keys stable and retain local fallback content. Keep /privacy and contact details accessible.
- Provider secrets, especially Resend keys, belong in Platform's tenant secret store, never this repository or Vercel project.
- Tenant configuration changes happen through Platform; contract changes require coordinated review. Infrastructure changes require explicit identity verification.
- Run npm run lint and npm run build. Verify affected routes and form behavior on desktop and mobile in Chrome for Testing or an isolated in-app browser, never personal Chrome.
- Obtain authorization for production mutations, deployment, real/synthetic leads, email and advertising. Do not bypass Platform activation gates. Report local, preview, live and verified status separately.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Service catalog

Discovery Platform owns the service catalog and navigation editor. Public pages read
`GET /api/site/catalog` with the existing site key. Never ship an editor or provider
credential in this public repository. Preserve the distinction between a null
(unadopted) catalog and an intentionally empty publication. Do not resurrect legacy
services/prices when the API fails. Publish the Platform migration/API before client
changes that depend on it. Service inquiries remain CRM requests, not checkout.
