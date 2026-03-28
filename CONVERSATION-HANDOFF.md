# Session Handoff — 2026-03-28

## Completed This Session
1. Fixed CSP to allow LinkedIn + Evertreen iframes and Formspree connect-src in `next.config.ts`
2. Full site review (all 8 pages, light+dark mode) — content grading against 4 personas, brand voice audit, accessibility, dark mode assessment. Screenshots in `site-review-2026-03-27/`
3. Replaced JPEG favicon with brand SVG icon (`app/icon.svg`, `public/icon.svg`)
4. Built scroll reveal system (`useScrollReveal` hook + `ScrollReveal` component) with hero stagger entrance and section reveals on homepage
5. Added micro-interaction delight: button lift/press, contact form animated checkmark, service card hover lift, dark mode toggle rotation, console easter egg
6. Fixed 20+ user-reported UX issues: CTA capitalisation, nav hovers (pill-style), footer underline hovers, partner logo monochrome removed, mobile overflow, hamburger animation, mobile tap feedback, card contrast, sustainability banner gradient, footer font sizes, header logo size, "Learn more" always visible
7. Generated 6 service illustrations via Gemini 2.5 Flash Image API (3 rounds: coded SVGs, then PNGs with fake transparency, then final PNGs with solid white backgrounds). Wired into `Services.tsx` and `app/services/page.tsx`
8. About page: pull-quote visual break, LinkedIn recommendations social proof section, duplicate community section removed, forest widget removed (kept on sustainability via `showForest` prop)
9. Hero subtitle turns orange in dark mode (`dark:text-accent-400`)
10. Deployed 10+ times via `npx vercel --prod` (auto-deploy from git is broken)

## Current State
- **Branch:** main at b226c86
- **Tests:** no test suite
- **Build:** passes cleanly
- **Uncommitted changes:** none (`.claude/plans/current_mission.md` is gitignored)
- **Live URL:** https://smallgiantsstudio.co.uk
- **Deploy method:** `npx vercel --prod` (git auto-deploy cancelled by Vercel)

## Known Issues / Blockers
- Vercel auto-deploy from git push is cancelled — use CLI workaround. Check Dashboard > Project Settings > Git
- Services page has 6 identical alternating dark/light blocks — layout feels mechanical
- Inner pages (About, Contact) still need more visual variety beyond text blocks
- No case studies or quantified results anywhere (content gap)
- Design overhaul plan Phases 1 and 4 not started (display font, layout breaking)

## Next Priorities (in order)
1. Design overhaul Phase 1: add display font for headings, refine accent orange to warmer amber/gold, update background warmth
2. Design overhaul Phase 4: break template layouts on Services/About/Contact — vary section designs, add asymmetry, use illustrations between text blocks
3. Services page redesign: stop the 6-block zebra stripe — use varied layouts per service
4. Stat counter animation for Problem section (count up from 0 to 33)
5. Write 2-3 blog posts for /insights, then re-add to nav

## Files Modified
| File | What changed |
|------|-------------|
| next.config.ts | CSP: linkedin, evertreen frame-src; formspree connect-src |
| app/globals.css | Dark mode colours, scroll reveal CSS, delight animations, mobile tap, card contrast (#F5F5F5 bg, #D4DBE5 border) |
| app/layout.tsx | SVG favicon, overflow-x-hidden, console easter egg |
| app/page.tsx | ScrollReveal wrappers on homepage sections |
| app/icon.svg + public/icon.svg | Brand SVG favicon |
| public/manifest.json | SVG icon reference |
| app/services/page.tsx | CTA capitalisation, FAQ accordion, .png image refs |
| app/about/page.tsx | Pull-quote, LinkedIn recommendations, community section removed, unused data removed |
| app/sustainability/page.tsx | Banner gradient matched |
| components/ui/Button.tsx | Hover brighten+glow, lift/press physics |
| components/ui/Logo.tsx | Size bumped h-12/h-14 |
| components/ui/ScrollReveal.tsx | New scroll-triggered reveal component |
| components/ui/ThemeToggle.tsx | Hover rotation, active scale |
| components/hooks/useScrollReveal.ts | New IntersectionObserver hook |
| components/layout/Header.tsx | Insights removed, pill hover, animated menu |
| components/layout/Footer.tsx | Insights removed, underline hover, larger mobile fonts |
| components/sections/Hero.tsx | Stagger entrance, mobile SVG labels, button contrast, dark mode orange subtitle |
| components/sections/Problem.tsx | Charity + social enterprise language |
| components/sections/Services.tsx | Card lift, "Learn more" visible, .png refs |
| components/sections/Community.tsx | showForest prop, monochrome removed |
| components/sections/ContactForm.tsx | Animated checkmark |
| public/images/services/*.png | 6 Gemini-generated illustrations (solid white bg) |
| public/images/linkedin-recommendations.jpg | LinkedIn social proof screenshot |
| public/images/about-personal.png | Work-life balance illustration |

## Notes for Next Session
- Deploy via `npx vercel --prod` not git push
- Design plan at `.claude/plans/current_mission.md` — Phase 2 mostly done, Phases 1/3/4 remain
- User dislikes: monochrome on hover, darker-on-hover buttons, pages without images, invisible mobile states, template-like layouts. Full list in memory file `feedback_design_session_2026_03_28.md`
- Gemini image gen: API key is in CC memory file `feedback_design_session_2026_03_28.md`. Use model `gemini-2.5-flash-image` via direct urllib calls (not Gemini CLI)
- Service illustrations have solid white backgrounds — if layout changes put them on coloured backgrounds, regenerate with matching bg or use CSS mix-blend-mode

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
| `/nano-banana-pro` | Generate additional illustrations for About/Contact pages |
| `/frontend-design` | Build new varied page layouts |
| `/interactive-design` | Stat counter animation for Problem section |
| `/innovative-design` | Route design decisions (bolder, polish sub-skills) |
| `/design-review` | Verify changes after each batch |
| `/research-check` | Quick lookup on display font options |

## MCP Servers and Tools

| Tool | What to use it for |
|------|-------------------|
| Playwright | Screenshot verification at 375px, 768px, 1440px |
| Firecrawl | Research display fonts and competitor consultancy sites |
| Context7 | Next.js 16 / Tailwind v4 docs |

## Agents to Delegate To

| Agent | When |
|-------|------|
| design-reviewer | After completing visual changes |
| performance-auditor | After adding images — check bundle size and CWV |
| test-and-explain | After all design work to verify nothing broke |

## Task 1: Design Overhaul Phase 1 — Typography and Colour
Add a display font for headings (use `/internal-debate` to decide between options — research via `/research-check`). Refine the accent orange to a warmer amber/gold. Update background warmth. Read `.claude/plans/current_mission.md` for full Phase 1 spec.

## Task 2: Break Template Layouts (Phase 4)
Redesign the Services page to break the 6-block zebra stripe. Vary About and Contact page layouts. Add illustrations between text-heavy sections. User described inner pages as "a supermarket with nothing on shelves" — the illustrations helped but layouts still feel repetitive. Use `/frontend-design` for the actual building.

## Task 3: Stat Counter Animation
Add count-up animation to the Problem section stats (33 hours, Multiple hats, Can't switch off) using IntersectionObserver. Use `/interactive-design` for implementation guidance.

## Guardrails
- Deploy via `npx vercel --prod` — git push auto-deploy broken
- Build must pass: `npm run build`
- All animations respect `prefers-reduced-motion`
- No American spellings
- Test at 375px mobile — user reported overflow issues previously
- Read `~/.claude/projects/c--Users-Bean-Projects-small-giants-studio/memory/feedback_design_session_2026_03_28.md` for full user preferences
~~~
