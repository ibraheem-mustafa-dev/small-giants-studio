# SGS Website (Next.js) — Session Handoff — 2026-03-16

## Completed This Session

### SEO & Deploy Fixes
1. **OG tags fixed** — Every subpage now has explicit `openGraph: { title, description }` in its metadata export. Root cause: Next.js doesn't auto-populate `og:title`/`og:description` from page-level `title`/`description` when the parent layout defines an `openGraph` object. Commit `0b9193a`, pushed to main.
2. **Layout OG defaults** — Added explicit `title` and `description` to the layout's `openGraph` object so the homepage also gets proper OG tags.
3. **Vercel CDN stale** — All 4 verification checks failed (OG, security headers, noindex, sitemap). The source code was correct (from commit `cce293c`) but the Vercel CDN was serving a 28-day-old cached version (`Age: 2472995`). The new push should force a fresh build.

### Dark Mode Assessment
4. **Full dark mode audit** — Grade B+. 22 screenshots across all 7 pages at 3 breakpoints. Report: `~/site-reviews/sgs-dark-mode-assessment-2026-03-15.md`
   - Body text contrast: 16.30:1 (excellent)
   - Critical: LinkedIn embeds render as white rectangles (CSP blocks iframes)
   - Major: Evertreen widget only appears on click, 500px blank area on desktop
   - Minor: Card/bg contrast only 1.22:1 (slate-800 vs slate-900), orange CTA 3.88:1

### Design Overhaul — V1 (Improve Current)
5. **Branch:** `feature/design-overhaul-motion-typography` — PR #1 open
6. **Font:** Instrument Serif for all headings (replacing Inter everywhere)
7. **Colours:** Background warmed #FAFAFA → #FAF8F5. Accent hover #8B4305 → #C4650A/#D97012
8. **Animation system:**
   - `components/hooks/useScrollReveal.ts` — IntersectionObserver + `prefers-reduced-motion`
   - `components/ui/ScrollReveal.tsx` — 5 animation types + stagger delay
   - `@keyframes` in globals.css
9. **ScrollReveal on ALL sections:** Hero, Problem, USPs, Services, Testimonials, CTA, FishTank, MidCTA, Community, About, Services page
10. **Button physics:** hover lift + shadow + glow + active press
11. **Nav underlines:** Animated `::after` with `scale-x-0` → `scale-x-100`
12. **Mobile menu:** Smooth `max-height` + `opacity` transition
13. **Hero enlarged:** text-4xl → text-7xl responsive
14. **Card hover lifts:** All card elements site-wide
15. **Stat numbers enlarged:** text-5xl/6xl

### Design Overhaul — V2 (Editorial Redesign)
16. **Branch:** `feature/v2-editorial-redesign` — worktree at `~/Projects/small-giants-studio-v2`
17. **Font:** Fraunces (variable, light 300) for headings
18. **Colour system rewrite:** parchment (#F7F3EE), near-black (#1C1917), teal (#0D9488), amber (#D97706)
19. **Grain overlay:** SVG noise at ~4% opacity
20. **Hero rewrite:** full viewport, content at bottom, massive Fraunces type, editorial rule, pill CTA
21. **Services rewrite:** numbered editorial list (01-06), teal → amber hover on numbers
22. **Testimonials rewrite:** one massive pull-quote + two secondary (Feldon, Tajinder, Luke)
23. **CTA:** near-black, Fraunces, amber pill button, dramatic clamp() padding
24. **Sharp cards** (radius 0), **pill buttons** (999px), **4 section background treatments**

### AI-Generated Illustrations (Both Versions)
25. **11 images** via nano-banana in `public/images/generated/`:
   - hero-v1.png, hero-v2.png (landscape, brand metaphor)
   - 6 service illustrations (interconnected nodes, funnel, gears, dashboard, browser layers, magnifying lens)
   - 3 pain point illustrations (compressed clock, juggling hats, dimming flame)
   - cta-texture.png (topographic lines)
26. **Wired into V1:** Hero bg, Problem stat cards, Services cards, CTA texture, Services page
27. **Wired into V2:** Hero bg (12% multiply blend), stat cards, editorial list (hover reveal), CTA (7% screen blend)

### Design Research
28. **600-line document:** `~/.claude/plans/sgs-website-design-research.md` — 5 techniques, 5 anti-patterns, animation strategy, typography/colour recommendations, 20+ sources

## Current State

- **main:** OG fix pushed (0b9193a)
- **V1 branch:** PR #1 open, builds clean, 17 files changed
- **V2 branch:** committed, worktree at `~/Projects/small-giants-studio-v2`
- **User feedback:** "Not the biggest fan of either" — needs refinement from project directory
- **Vercel:** awaiting CDN refresh

## Known Issues

1. Design quality needs refinement from within project directory
2. Vercel CDN may still serve stale version
3. LinkedIn embeds broken on /insights (CSP)
4. Evertreen widget dark mode issue
5. V2 worktree needs cleanup: `git worktree remove ../small-giants-studio-v2`

## Next Priorities

1. **Refine design from project directory** — `/frontend-design`, `/bolder`, `/animate`, `/critique`
2. **Verify Vercel deploy** — Playwright check after CDN refresh
3. **Fix LinkedIn embeds** — Add linkedin.com to CSP frame-src
4. **Fix Evertreen widget** — dark mode rendering

## Next Session Prompt

```
/superpowers:using-superpowers

The SGS Next.js website has two design branches: V1 (PR #1, Instrument Serif + animations) and V2 (editorial redesign, Fraunces + parchment). Neither satisfied the user — need refinement with full project context. OG tags fixed, Vercel CDN may be stale. 11 AI illustrations wired in. Design research at ~/.claude/plans/sgs-website-design-research.md.

IMPORTANT: Run this session FROM the project directory (~/Projects/small-giants-studio), not from System32. Design feedback and preferences are stored at ~/.claude/projects/C--Windows-System32/memory/feedback_design_preferences.md — read that file before making any design decisions.

Read CONVERSATION-HANDOFF.md for full context, then:

1. **Refine design** — Review both branches visually. Use `/critique`, `/bolder`, `/animate`, `/frontend-design`. User wants something that DEMANDS RESPECT. Read ~/.claude/projects/C--Windows-System32/memory/feedback_design_preferences.md first for accumulated design feedback.
2. **Verify Vercel deploy** — Playwright check for OG tags, security headers, noindex, sitemap.
3. **Fix LinkedIn embeds** — Add linkedin.com to CSP frame-src in next.config.ts.
4. **Fix Evertreen widget** — Dark mode rendering on /sustainability.

V2 worktree: ~/Projects/small-giants-studio-v2. Clean up with git worktree remove when done.
```
