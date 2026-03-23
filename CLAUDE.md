# CLAUDE.md — Small Giants Studio Website

## Project Overview
Website for Small Giants Studio — a Birmingham-based digital transformation consultancy founded by Ibraheem Mustafa. Serves UK SMEs, charities, and social enterprises.

**Domain:** smallgiantsstudio.co.uk
**Stack:** Next.js 16 + Tailwind CSS v4 (deployed to Vercel)
**Status:** Phases 1-5 complete. Two redesign branches in progress (V1 improve + V2 editorial).

---

## Git

**Remote:** `github.com/ibraheem-mustafa-dev/small-giants-studio` (private). See global CLAUDE.md for workflow rules.

## Critical Rules

- **UK English everywhere** — colour, behaviour, analyse, organisation. Never American spellings.
- **Never use personal phone number** — work number only: 07424 449555
- **Contact email:** hello@smallgiantsstudio.co.uk
- **Other emails:** ibraheem@smallgiantsstudio.co.uk (client comms), admin@smallgiantsstudio.co.uk (backend)
- **Old business name was MA Growth Digital Ltd** — replace with Small Giants Studio Ltd if seen anywhere
- **WCAG 2.2 AA accessible** — 44px minimum touch targets, accessible contrast ratios throughout
- **Mobile-first responsive** — test at mobile (375px), tablet (768px), desktop (1440px)
- **Dark mode support**
- **No corporate jargon** — never use "leverage", "synergy", "game-changer", "solutions"

---

## Reference Documents

All brand, voice, and positioning docs live in `/docs/`. **Read these before any content or design work:**

- `docs/Small_Giants_Studio_Brand_Positioning_Guide.md` — Brand bible: USPs, messaging, target audiences, elevator pitches
- `docs/LinkedIn_Writing_Style_Guide_Ibraheem_Mustafa.md` — Voice, tone, language patterns
- `docs/LinkedIn_Voice_Analysis_Ibraheem_Mustafa.md` — Evidence from actual posts
- `docs/About_The_Company.txt` — Full company description
- `docs/UK_Digital_Transformation_Consultant_Positioning.md` — Market research, competitor gaps, website must-haves

### Screenshots & Logos in `/docs/screenshots/`
- LinkedIn launch post, company page, Evertreen partnership post
- LinkedIn recommendations screenshot — use these as social proof/testimonials on the site
- Partner logos: Evertreen, Muslims in Construction, AME
- Small Giants Studio logo
- Ibraheem's profile photo — use for hero section and about page

---

## Site Structure

| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | ⬜ Review needed |
| About | `/about` | ⬜ Review needed |
| Services | `/services` | ⬜ Review needed |
| Case Studies / Work | `/work` | ⬜ Review needed |
| Blog / Insights | `/insights` | ⬜ Review needed |
| Contact | `/contact` | ⬜ Review needed |
| Privacy Policy | `/privacy` | ⬜ Review needed |
| Terms | `/terms` | ⬜ Review needed |

---

## Partnerships (Display on Homepage + Footer)

1. **Evertreen** — https://evertreen.com — Tree planting partner. Logo in `/docs/screenshots/Evertreen-logo.svg`
2. **Muslims in Construction** — https://muslimsincontruction.co.uk — Built their website. Logo in `/docs/screenshots/Muslims-In-Construction-logo-4-1-green-V2.png`
3. **Association of Muslim Engineers (AME)** — https://ame.org.uk — Help with events. Logo in `/docs/screenshots/cropped-AME_logo_final-01-e1741955008221.png`

---

## Commands to Use

### During Build
- `/frontend-design` — For building polished UI components and pages
- `/writing-plans` — Before starting any major page or feature
- `/brainstorming` — Explore design direction and layout options
- `/commit` — Commit with clear messages as you go

### Review & QA
- `/ui-ux-pro-max` — Visual design and UX critique
- `/writing-clearly-and-concisely` — Tighten website copy
- `/vercel-react-best-practices` — Next.js code quality and performance
- `/verification-before-completion` — Confirm everything works
- `/deploy-check` — Pre-launch checks
- `/requesting-code-review` — After completing each major feature

### If Things Break
- `/systematic-debugging` — Structured debugging, not guesswork

### Session Management
- `/handoff` — End of session summary
- Update this CLAUDE.md after every major milestone

---

## Current Design Work (2026-03-17)

Two redesign branches exist — user wasn't satisfied with either. Both need refinement from THIS project directory with full context.

| Branch | Font | Palette | Style |
|---|---|---|---|
| `feature/design-overhaul-motion-typography` (PR #1) | Instrument Serif | Warm teal/amber on cream (#FAF8F5) | Improved current — scroll animations, button physics, card hovers |
| `feature/v2-editorial-redesign` (worktree at `~/Projects/small-giants-studio-v2`) | Fraunces (light) | Parchment (#F7F3EE) / near-black (#1C1917) / teal+amber | Editorial magazine — numbered services, massive pull-quote, grain texture, sharp cards |

**Animation system:** `components/hooks/useScrollReveal.ts` + `components/ui/ScrollReveal.tsx` — IntersectionObserver with prefers-reduced-motion support, 5 animation types.

**Generated illustrations:** 11 images in `public/images/generated/` — hero, 6 services, 3 pain points, CTA texture. Wired into both versions.

**Design research:** `~/.claude/plans/sgs-website-design-research.md` (600 lines — typography, animation strategy, anti-generic patterns, 20+ reference sites).

**Design preferences:** Read `~/.claude/projects/C--Windows-System32/memory/feedback_design_preferences.md` before making design decisions. User hates: generic AI look, darker orange, monotone palettes, weak hover effects, text-only pages.

## Completed Phases

Phases 1-5 all done (Feb 2026). See git history for details. Key milestones: SEO infrastructure, voice/identity pass, compliance/UX, visual overhaul, JSON-LD schemas.

## Current Issues (2026-03-17)

### Active
1. **LinkedIn embeds broken on /insights** — CSP blocks iframes. Fix: add `linkedin.com` to `frame-src` in `next.config.ts`
2. **Evertreen widget** — only renders on click in dark mode, 500px blank area on desktop
3. **Vercel CDN stale** — OG fix pushed (0b9193a) but CDN was serving 28-day-old cache. May need manual redeploy.
4. **Design quality** — V1 and V2 need refinement from project directory. User wants something that "demands respect"
5. **No Google Analytics** — can't track visitors or conversions
6. **V2 worktree** — `~/Projects/small-giants-studio-v2` needs cleanup when done: `git worktree remove`

### Dark Mode (B+ grade, assessed 2026-03-15)
- Body text contrast: 16.30:1 (excellent)
- Card/bg contrast: 1.22:1 (too low — slate-800 vs slate-900)
- Orange CTA: 3.88:1 (fails normal text AA)
- Focus indicators: outline width defaults to 0px
- Full report: `~/site-reviews/sgs-dark-mode-assessment-2026-03-15.md`

### Resolved (Phases 1-5, Feb 2026)
All items from the original audit (contact form, case studies, SEO, voice, identity, touch targets, cookie consent, error states, dark mode toggle, sitemaps, JSON-LD, canonical URLs) were resolved in Phases 1-5. See git history for details.
32. **No pricing signals** — market research says "50% of UK SMEs avoid consultants due to perceived over-inflated costs." Even a general indicator would help.
33. **Remove unused Button `sm` size** — 36px height violates WCAG. It's never used. `components/ui/Button.tsx:24`
34. **Search Console verification codes empty** — `app/layout.tsx:76-78` has placeholder comment.

### Low (Nice to have)
35. **Fish tank SVG text labels may be unreadable on mobile** — check mobile screenshots.
36. **Image alt text could be more keyword-rich** — e.g. hero headshot alt could include "digital transformation consultant".
37. **Breadcrumb schema not implemented** — would improve SERP appearance.
38. **Blog article schema not prepared** — when real posts are added, Article schema will be needed.
39. **No preload hints for critical resources** — hero image and fonts could benefit.
40. **No company registration number** in privacy/terms pages.

---

## What's Next (Prioritised — work top to bottom)

### Phase 1: Launch-blockers — DONE (9 Feb 2026)
- [x] Connect contact form to Formspree (ID: xeeloran), remove console.log
- [x] Fix or remove fabricated case studies on /work — replaced with coming soon
- [x] Fix or remove broken Calendly link on /contact — removed booking section
- [x] Create OG image — auto-generates via `app/opengraph-image.tsx`
- [x] Favicons — using sgs-logo.jpg (functional, not ideal)
- [x] Fix services page CSS grid bug (removed `lg:flex-row-reverse`)

### Phase 2: Voice and identity — DONE (9 Feb 2026)
- [x] Copy pass on all pages — add warmth, vulnerability, playful asides per voice guides
- [x] Add Islamic phrases naturally to about page and community section
- [x] Add BFG framing to homepage CTA and about page story
- [x] Add "Small Giants" name explanation to about page
- [x] Fix hero "worldwide" to "across the UK"
- [x] Add work-life balance USP to homepage (7th USP card)
- [x] Add budget-conscious messaging to services page

### Phase 3: Compliance, UX, and infrastructure — DONE (9 Feb 2026)
- [x] Implement cookie consent banner (GDPR) — `components/ui/CookieConsent.tsx`
- [x] Create `app/error.tsx` error boundary
- [x] Create `app/loading.tsx` loading state
- [x] `public/manifest.json` exists and is valid
- [x] Fix all 44px touch target violations (carousel dots, mobile menu, removed `sm` button size)
- [x] Implement dark mode toggle — `components/ui/ThemeToggle.tsx` in Header, inline script prevents flash
- [x] /insights already simplified to "coming soon" page (done in Phase 1)

### Phase 4.5: Visual & Content Overhaul — DONE (9 Feb 2026)
- [x] Dark mode colour fixes in globals.css (bg-primary-50/100 overrides, text-muted)
- [x] Horizontal logo (sgs-horizontal-logo.png) in Logo.tsx with light variant inversion
- [x] Button "white" variant added, all CTA buttons updated
- [x] WCAG dark: text overrides across 15+ files (text-primary-700 → dark:text-primary-300)
- [x] Header nav text bumped to text-base (was text-sm)
- [x] Evertreen SVG fill changed from white to #008636
- [x] 6th "What I Believe" value added ("Your business, your way")
- [x] Community: replaced "Birmingham Muslims in Tech" with Evertreen partnership
- [x] /work page simplified to cleaner "coming soon" card
- [x] SEO service updated to "SEO, GEO & Digital Marketing" with AI discoverability
- [x] Both LinkedIn profiles on contact page, footer, and insights page
- [x] Contact form: "AI/Chatbot" source option + interest multi-choice checkboxes
- [x] Fish tank SVG animation (swimming fish, bubbles, seaweed, shimmer)
- [x] Hero replaced headshot with coded SVG animation (small figure + giant silhouette)

### Phase 5: SEO Infrastructure — DONE (10 Feb 2026)
- [x] `app/sitemap.ts` — all pages with priorities, /work deprioritised to 0.3
- [x] `app/robots.ts` — allows all, blocks /api/, links to sitemap
- [x] JSON-LD: LocalBusiness (with geo + priceRange), Person, Service, FAQPage, BreadcrumbList
- [x] Keyword-rich meta titles on all pages (contact, work, insights, about, services)
- [x] Canonical URLs on all pages via `alternates.canonical`
- [x] Breadcrumbs with BreadcrumbList schema on all sub-pages
- [x] FAQ section + FAQPage schema on services page (6 questions)
- [x] Pricing signals section on services page (fixed-price, budget-scaled, no inflated licences)
- [x] Geo coordinates (52.4862, -1.8904) + priceRange in LocalBusiness schema
- [x] Birmingham/West Midlands strengthened across services meta description + schema
- [x] Internal cross-links: contact → services/about, insights → services/contact
- [x] Image alt text keyword-rich (headshot, logo, partner logos)
- [x] Logo preload hint in layout head
- [x] /work removed from Header and Footer navigation
- [x] React 19 lint fixes: useSyncExternalStore for CookieConsent + ThemeToggle, removed useEffect from Header
- [x] ESLint passes clean (0 errors, 0 warnings)

### Phase 5b: Design & UX Improvements — DONE (10 Feb 2026)
- [x] Mid-page CTA after Fish Tank section (`components/sections/MidCTA.tsx`) — catches visitors at emotional peak
- [x] Services section redesign — featured full-width Digital Transformation card + compact 5-col grid below
- [x] SVG labels hidden on mobile (<640px) for hero node labels and fish tank labels — prevents unreadable text
- [x] UI/UX audit completed: storytelling, animation, colour, typography, dark mode, mobile, conversion flow

### Phase 4: Content and polish
- [ ] Replace /work with real case studies (needs client permission) or remove page
- [ ] Write real blog posts for /insights
- [ ] Add company registration number to privacy/terms (needs number)
- [ ] LinkedIn feed integration on /work page (embed personal posts)
- [ ] Run `/ui-ux-pro-max` for visual design critique
- [ ] Run `/writing-clearly-and-concisely` to tighten copy
- [ ] Run `/verification-before-completion` before deploying
- [ ] Deploy to Vercel

### Post-launch: Remaining SEO
- [ ] Set up Google Search Console + add verification code (needs account)
- [ ] Set up Google Business Profile — Birmingham (needs account)
- [ ] Add Google Analytics 4 (needs tracking ID)

### Post-launch: LinkedIn API feed
- [ ] LinkedIn API app created at developers.linkedin.com (needs Community Management API approval)
- [ ] Build OAuth flow + token refresh for reading company page posts
- [ ] n8n automation alternative once API access confirmed
- [ ] For now: using oEmbed with curated post URLs on /insights page

### Separate project
- [ ] Custom booking system (prompt in CONVERSATION-HANDOFF.md)

---

## Assets Still Needed
- [x] Professional photo of Ibraheem (in `/docs/screenshots/`)
- [x] OG image — auto-generated via `app/opengraph-image.tsx`
- [x] Favicons — using sgs-logo.jpg
- [ ] Custom booking system (separate project — prompt in CONVERSATION-HANDOFF.md)
- [ ] Real case studies with client permission (for /work page)
- [ ] Real blog posts (for /insights page)
- [ ] Google Analytics 4 tracking ID (post-launch)
- [ ] Google Business Profile setup (post-launch)
- [x] Company registration number — 16959564 (added to privacy, terms, footer)
