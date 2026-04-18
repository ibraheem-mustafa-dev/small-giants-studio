# Next Session — 2026-04-18 Handoff

## Where You Are

Session 2026-04-18 did cross-project work: cloudflare-toolkit rewrite, booking-system fix, blub dashboard fix, phased-rollout framework design, 4 lessons captured. SGS Design Overhaul mission was NOT touched — it remains paused at Phase 3 (Imagery) per `.claude/plans/current_mission.md`.

**Primary next-session track:** validate + improve the phased-rollout scaffolding design so Opportunity B (cf.sh via Blub chat) can start building.

Read CONVERSATION-HANDOFF.md and `A:/.openclaw/workspace/memory/research/2026-04-18-phased-rollout-scaffolding-design.md` for full context.

## Skills to Invoke

| Skill | When to use |
|-------|-------------|
| `/brainstorming` | If deep-research or gap-analysis surfaces new decision forks |
| `/gap-analysis` | Task 2 — grade the phased-rollout spec with 6-lens check |
| `/lifecycle` | Task 4a if picked up — propagate 6th lens into gap-analysis / sgs-skillscore / skill-writer |
| `/research` | Auto-routes — ADHD research if Task 4b greenlit |
| `/strategic-plan` | After improvement pass — plan pre-build work order |
| `/deep-research` | Task 1 — high-stakes validation; Task 4b ADHD research |

## MCP Servers & Tools

| Tool | What to use it for |
|------|-------------------|
| Firecrawl + Brave via `python ~/.claude/hooks/search.py` | Deep-research source gathering |
| blub dashboard `/api/knowledge` | Persist research (POST now works with array `tags`) |
| Workspace memory `A:/.openclaw/workspace/memory/research/` | Durable location for outputs |

## Agents to Delegate To

| Agent | When |
|-------|------|
| research-pipeline | If Task 1 scope broadens |
| general-purpose (Sonnet) | Parallel researchers for Task 4b |

## Tasks

### Task 1 — Deep-research on phased-rollout framework design

Validate `A:/.openclaw/workspace/memory/research/2026-04-18-phased-rollout-scaffolding-design.md` against failure modes, adjacent implementations (GitOps progressive delivery, Google SRE rollout patterns, ChatOps case studies), and build-cost realism. Use `/deep-research` tier.

### Task 2 — Gap-analysis on the spec

Run `/gap-analysis` target_type=plan on the same file. Apply the **6-lens check** (motivation/purpose lens added 2026-04-18). Surface every gap + opportunity with priority-ordered remediations attached.

### Task 3 — Improve the spec

Rewrite targeted sections based on Task 1 + 2 output. Merge findings inline. Address every gap-analysis finding with remediation attached (per pre-script-remediations-for-quality-scores lesson, 2026-04-18).

### Task 4a — (optional) Propagate 6th lens

Update gap-analysis / sgs-skillscore / skill-writer to include motivation/purpose lens. All via `/lifecycle`.

### Task 4b — (optional, Bean-greenlit) ADHD collaboration research

If confirmed: `/deep-research` on ADHD + AI collaboration, 5 layers (clinical, lived experience, practical systems, AI-collab specific, Bean-specific pattern). Output: `A:/.openclaw/workspace/memory/research/2026-04-XX-adhd-collaboration-for-bean.md`.

## Guardrails

- Do NOT touch SGS Website Design Overhaul — cross-project track only.
- Do NOT commit to blub-dashboard-v2 (5+ unrelated WIP files present).
- Apply **6-lens** check, not 5.
- Invoke `/autopilot` first (auto-injected by SessionStart anyway).
