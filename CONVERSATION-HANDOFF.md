# Session Handoff — 2026-03-28

## Completed This Session
1. Fixed CSP to allow LinkedIn + Evertreen iframes (`next.config.ts` frame-src + connect-src for formspree)
2. Full site review across all 8 pages — content grading against 4 target personas, brand voice audit, dark mode assessment, accessibility check
3. Replaced JPEG favicon with brand SVG icon (`app/icon.svg`, `public/icon.svg`, layout, manifest)
4. Built scroll reveal system — `useScrollReveal` hook + `ScrollReveal` component with 5 animation directions, stagger delays, reduced-motion support
5. Added micro-interaction delight — button lift/press, animated checkmark on contact form, service card hover lift, dark mode toggle rotation, console easter egg
6. Fixed 15+ user-reported issues: CTA capitalisation, nav hovers, footer links, partner logo monochrome, mobile overflow, hamburger animation, mobile tap feedback, card contrast, sustainability banner, footer font sizes, header logo size
7. Added charity/social enterprise language to homepage problem section
8. About page: pull-quote visual break, forest widget removed (kept on sustainability via showForest prop), community banner gradient fixed
9. Diagnosed Vercel auto-deploy cancellation — deployed via `npx vercel --prod` CLI workaround
10. Updated design overhaul plan — Phase 2 (Motion) mostly complete

## Current State
- **Branch:** main at be8986d
- **Tests:** no test suite
- **Build:** passes cleanly (Next.js 16.1.6 Turbopack)
- **Uncommitted changes:** `.claude/plans/current_mission.md` (gitignored)
- **Live URL:** https://smallgiantsstudio.co.uk (deployed via CLI)
- **Vercel auto-deploy:** broken — use `npx vercel --prod` to deploy

## Known Issues / Blockers
- Gemini API keys expired/rate-limited — cannot generate service illustrations until renewed at https://aistudio.google.com/apikey
- Vercel auto-deploy cancelled on every git push — likely spend management limit or deployment protection in Dashboard
- Inner pages (Services, About, Contact) lack images — user described them as "supermarket with nothing on shelves"
- Plan Phase 1 (Foundation) not started: display font, accent orange, warm background
- Plan Phase 3 (Imagery) blocked by Gemini key
- Plan Phase 4 (Layout Breaking) not started: varied layouts, diagonal edges, asymmetric designs

## Next Priorities (in order)
1. Renew Gemini API key, generate 6 service illustrations + pain point icons, wire into pages
2. Fix Vercel auto-deploy — check Dashboard > Project Settings > Git for deployment pauses
3. Design overhaul Phase 1 (display font for headings, accent orange refinement) and Phase 4 (break template layouts with images between text blocks)
4. Add stat counter animation to Problem section (count up from 0 to 33)
5. Write 2-3 blog posts for /insights before re-adding to nav

## Files Modified
| File | What changed |
|------|-------------|
| next.config.ts | CSP: linkedin, evertreen frame-src; formspree connect-src |
| app/globals.css | Dark mode colours, scroll reveal CSS, delight animations, mobile tap, card contrast |
| app/layout.tsx | SVG favicon, overflow-x-hidden, console easter egg |
| app/page.tsx | ScrollReveal wrappers on homepage sections |
| app/icon.svg + public/icon.svg | New brand SVG favicon |
| public/manifest.json | SVG icon reference |
| app/services/page.tsx | CTA capitalisation, FAQ accordion animation |
| app/about/page.tsx | Pull-quote break, community gradient, forest removed |
| app/sustainability/page.tsx | Banner gradient matched |
| components/ui/Button.tsx | Hover brighten + glow, lift/press physics |
| components/ui/Logo.tsx | Size bumped h-10/h-12 to h-12/h-14 |
| components/ui/ScrollReveal.tsx | New scroll-triggered reveal component |
| components/ui/ThemeToggle.tsx | Hover rotation + active scale |
| components/hooks/useScrollReveal.ts | New IntersectionObserver hook |
| components/layout/Header.tsx | Insights removed, pill hover, animated menu, CTA updated |
| components/layout/Footer.tsx | Insights removed, underline hover, larger mobile fonts |
| components/sections/Hero.tsx | Hero stagger, mobile SVG labels, button contrast |
| components/sections/Problem.tsx | Charity + social enterprise language |
| components/sections/Services.tsx | Card lift, "Learn more" always visible |
| components/sections/Community.tsx | showForest prop, monochrome removed |
| components/sections/ContactForm.tsx | Animated checkmark on success |

## Notes for Next Session
- Deploy via `npx vercel --prod` not git push — auto-deploy is broken
- Design plan at `.claude/plans/current_mission.md` — Phase 2 mostly done, Phases 1/3/4 remain
- User dislikes: monochrome effects, darker-on-hover buttons, pages without images, invisible mobile hover states
- Content review graded site C+ overall — main gap is zero case studies or quantified results
- `site-review-2026-03-27/` has before-fix screenshots for comparison

## Next Session Prompt

~~~
Read CONVERSATION-HANDOFF.md and CLAUDE.md for full context, then work through these priorities:

## Skills to Invoke

| Skill | When to use |
|-------|-------------|
| `/internal-debate` | Deciding display font pairing for headings |
| `/gap-analysis` | Grade site after each batch of changes |
| `/skill-agent-pipeline` | Before any skill/agent/pipeline changes |
| `/research` | Auto-routes to right research tier |
| `/strategic-plan` | Plan Phase 4 layout-breaking implementation |
| `/nano-banana-pro` | Generate service illustrations once Gemini key renewed |
| `/frontend-design` | Build new page layouts with images and visual breaks |
| `/interactive-design` | Stat counter animation for Problem section |
| `/design-review` | Verify changes after each batch |

## MCP Servers and Tools

| Tool | What to use it for |
|------|-------------------|
| Playwright | Screenshot verification at 375px, 768px, 1440px |
| Firecrawl | Research display fonts and competitor sites for design inspiration |
| Context7 | Next.js 16 / Tailwind v4 docs |

## Agents to Delegate To

| Agent | When |
|-------|------|
| design-reviewer | After completing visual changes |
| performance-auditor | After adding images — check bundle size and CWV |
| test-and-explain | After all design work to verify nothing broke |

## Task 1: Generate Service Illustrations
Renew Gemini API key at https://aistudio.google.com/apikey. Use `/nano-banana-pro` for 6 flat illustrations (teal+orange, 800x600): Digital Transformation, Marketing Strategy, Website Development, CRM & Operations, AI & Automation, SEO & Digital Marketing. Save to `public/images/services/`. Wire into `app/services/page.tsx` and `components/sections/Services.tsx`.

## Task 2: Design Overhaul Phase 1
From `.claude/plans/current_mission.md` — add display font for headings (use `/internal-debate`), refine accent orange to warmer amber/gold, update background warmth.

## Task 3: Break Template Layouts (Phase 4)
Add images and visual elements between text-heavy sections on About, Services, Contact. Vary layouts — not every section centred text + card grid. User said inner pages are "a supermarket with nothing on shelves."

## Guardrails
- Deploy via `npx vercel --prod` — git push auto-deploy broken
- Build must pass: `npm run build`
- All animations respect `prefers-reduced-motion`
- No American spellings
- Test at 375px mobile
~~~
