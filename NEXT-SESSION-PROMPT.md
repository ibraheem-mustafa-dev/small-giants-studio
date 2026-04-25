## Where You Are

Plan: `.claude/plans/current_mission.md` (SGS Website Design Overhaul — Phase 1 Foundation, ~20%) — NOT this session's scope.

This session's actual scope = Phase 8a Task 3 remediation (27 gaps across 3 new skills) + design-brain architecture spec (just written, awaiting fixes + execution decision).

Read `CONVERSATION-HANDOFF.md` and `CLAUDE.md` first. Master toolset specs at `C:/Users/Bean/Projects/small-giants-wp/docs/plans/`:
- `2026-04-21-toolset-spec-from-sgs-studio-session.md` — toolset master
- `2026-04-24-design-brain-architecture.md` — design-brain rebuild spec (just written)

## Skills to Invoke

| Skill | When to use |
|-------|-------------|
| `/brainstorming` | Architectural micro-decisions; design-brain rebuild design questions |
| `/gap-analysis` | Re-grade after gap fixes — regression guard |
| `/lifecycle` | MANDATORY before any skill/agent/pipeline edit (gate currently disabled) |
| `/research` | If a fix surfaces evidence need; auto-routes |
| `/strategic-plan` | Re-plan if scope direction changes |
| `/phase-planner` | FIRST on Task 2 — sequence the 27 gap fixes |
| `/skillscore` | After every SKILL.md edit (auto-fires) |
| `/dispatching-parallel-agents` | Parallelise gap remediation |
| `/delegate` | Before every Agent dispatch |

## MCP Servers & Tools

| Tool | Purpose |
|------|---------|
| `mcp__ide__getDiagnostics` | Pre-commit Problems-panel check |
| `python ~/.claude/hooks/local-search.py "query"` | Internal records search |
| `python ~/.claude/hooks/search.py "query"` | Unified web search |
| SQLite at `C:/Users/Bean/.openclaw/workspace/tools/blub-dashboard-v2/data/blub.db` | Direct fallback if dashboard down |

## Agents to Delegate To

| Agent | When |
|-------|------|
| Sonnet subagent | Most gap remediation, B-priority structural fixes |
| Sonnet adversarial peer-review | MANDATORY before locking any architectural change |
| Haiku subagent | Tight section rewrites, dead-ref cleanups |
| Opus | Reserve for Phase 10 regrade only |

## Task 1: 2 cosmetic fixes to design-brain spec (~5 min)
File: `c:/Users/Bean/Projects/small-giants-wp/docs/plans/2026-04-24-design-brain-architecture.md`
- Line 81: "3-4 reviewers" → "4 reviewers"
- Line 36: NN/g → "Nielsen Norman Group (NN/g)"
- Line 42: MCP → "Model Context Protocol (MCP)"
- Line 133: LCP → "Largest Contentful Paint (LCP)"
- Line 512: OKLCH → "OKLCH (modern colour-space format)"

## Task 2: `/phase-planner` for Phase 8a remediation
Sequence the 27 gap fixes across `/interactivity-capture` (9), `/ethics-gate` (8), `/qc` (10). Reports at `~/.claude/gap-analysis/reports/2026-04-24-{interactivity-capture,ethics-gate,qc}.json`. **DEFER `/ethics-gate` gaps 4+5** — slated for CDP rearchitecture rebuild that absorbs them.

## Task 3: Execute Phase 8a remediation
Per phase-planner output. Multi-Sonnet parallel via `/dispatching-parallel-agents`. After each: re-run `/gap-analysis` for regression guard.

## Task 4: Build `/qc-inline` skill (~45min-1h)
Sequential dependency on /qc gap fixes. Single-skill inline variant of /qc.

## Task 5: Decide on design-brain rebuild start
Ask Bean after Task 3 completes: dive into Phase 1 cleanup (~3-4h, low risk) next session OR park for dedicated session?

## Guardrails
- `lifecycle-gate.py` currently disabled — re-enable carefully when done
- `/skillscore` BEFORE every rubric grading
- Regression guard: pre-fix ≥4 must stay ≥3.5 post-fix
- Lesson-151 HARD GATE: read scripts before grading wrappers
- Never run `/build-website` on prod client sites during testing
- Bean is non-technical: research-then-recommend, NOT multiple-choice menus on technical detail
