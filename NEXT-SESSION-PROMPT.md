## Where You Are

Plan: .claude/plans/current_mission.md
Current phase: Phase 1 (Foundation) + Phase 3 (Imagery) + Phase 4 (Layout Breaking)
Progress: Phase 2 mostly complete (6/7 items done) — estimated 25%
Next task: Generate 6 service illustrations (blocked on Gemini API key renewal)

---

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
