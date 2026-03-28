## Where You Are

Plan: .claude/plans/current_mission.md
Current phase: Phase 1 (Foundation) + Phase 4 (Layout Breaking)
Progress: Phase 2 mostly complete (6/7 items) — estimated 25%
Next task: Add display font for headings (Phase 1, item 1)

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
| `/nano-banana-pro` | Generate illustrations for About/Contact pages |
| `/frontend-design` | Build new varied page layouts |
| `/interactive-design` | Stat counter animation for Problem section |
| `/innovative-design` | Route design decisions (bolder, polish) |
| `/design-review` | Verify changes after each batch |
| `/research-check` | Quick lookup on display font options |

## MCP Servers and Tools

| Tool | What to use it for |
|------|-------------------|
| Playwright | Screenshot verification at 375px, 768px, 1440px |
| Firecrawl | Research display fonts and competitor sites |
| Context7 | Next.js 16 / Tailwind v4 docs |

## Agents to Delegate To

| Agent | When |
|-------|------|
| design-reviewer | After completing visual changes |
| performance-auditor | After adding images — check bundle size and CWV |
| test-and-explain | After all design work to verify nothing broke |

## Task 1: Design Overhaul Phase 1 — Typography and Colour
Add display font for headings (use `/internal-debate`). Refine accent orange to warmer amber/gold. Update background warmth. See `.claude/plans/current_mission.md` Phase 1.

## Task 2: Break Template Layouts (Phase 4)
Redesign Services page (break 6-block zebra stripe). Vary About/Contact layouts. Add illustrations between text blocks. Use `/frontend-design`.

## Task 3: Stat Counter Animation
Count-up animation for Problem section stats using IntersectionObserver. Use `/interactive-design`.

## Guardrails
- Deploy via `npx vercel --prod` — git auto-deploy broken
- Build must pass: `npm run build`
- All animations respect `prefers-reduced-motion`
- No American spellings
- Test at 375px mobile
- Read memory file `feedback_design_session_2026_03_28.md` for user preferences
