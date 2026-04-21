## Where You Are

Plan: `.claude/plans/current_mission.md` (SGS Website Design Overhaul — Phase 1 Foundation ~20%) — **NOT this session's scope**.
This session: **bulk skill updates (toolset layer)** per `CONVERSATION-HANDOFF.md`. Dedicated Sonnet-execution session — all architectural decisions locked in last session's research + master spec.
Next task: Phase 0 Python-script batch (lens-6 rename + sgs-db schema migration + ethics-gate module).

## Session Start

Read in order:
1. This file
2. `CONVERSATION-HANDOFF.md` — full phase plan + delegation strategy
3. Master spec: `C:/Users/Bean/Projects/small-giants-wp/docs/plans/2026-04-21-toolset-spec-from-sgs-studio-session.md` — Sections 5+6 are the execution surface

Start with: "Invoking /strategic-plan to lock the Phase 0-10 dispatch map, then starting Phase 0 python-script batch."

---

Read CONVERSATION-HANDOFF.md and CLAUDE.md first, then master spec at `C:/Users/Bean/Projects/small-giants-wp/docs/plans/2026-04-21-toolset-spec-from-sgs-studio-session.md` for full architectural context. This session executes the BULK SKILL UPDATES — architectural decisions locked.

## Skills to Invoke

| Skill | When to use |
|-------|-------------|
| `/brainstorming` | Micro-decisions not already locked in the master spec |
| `/gap-analysis` | ONLY for non-skill/non-pipeline targets — skill + pipeline migrate to /skill-optimiser + /pipeline-optimiser this session (Task 1) |
| `/lifecycle` | MANDATORY for every skill edit — pipeline → skillscore → skill-optimiser DESIGN-mode → fix → ship |
| `/research` | Only if a remediation surfaces new evidence need |
| `/strategic-plan` | Session start — lock the phase order + dispatch map |
| `/skillscore` | BEFORE every rubric grading — non-negotiable |
| `/skill-optimiser` | DESIGN-mode after skillscore passes (canonical for skill target type once Phase 1-2 ship) |
| `/delegate` | Before every Agent dispatch — pick model via shared routing |
| `/batch-gap-analysis` | Parallel rubric grading across the 7-skill bulk |
| `/handoff` | End-of-session continuity |

## MCP Servers & Tools

| Tool | What to use it for |
|------|-------------------|
| `mcp__ide__getDiagnostics` | Pre-commit Problems-panel check |
| SQLite direct: `C:/Users/Bean/.openclaw/workspace/tools/blub-dashboard-v2/data/blub.db` | If dashboard API down |
| `python ~/.claude/hooks/search.py "query"` | Unified web search for unexpected research |
| `/gemini-pro` skill | Any Gemini Pro dispatch — handles 503 retry ladder |

## Agents to Delegate To

| Agent | When |
|-------|------|
| Sonnet subagent (`model: "sonnet"`) | Every per-skill remediation brief — architectural decisions done |
| Haiku subagent (`model: "haiku"`) | Dead-ref cleanups, targeted section rewrites |
| `wp-sgs-developer` | If any SGS WP plugin/theme surface touched |
| `research-pipeline` | Only if new research need surfaces |

---

## Phased execution plan

### Phase 0 — Python scripts (~15 min, zero LLM, zero risk)
Find-replace `motivation_meaning` → `values_alignment` across 18 files. `/sgs-update` to migrate sgs-db schema (new tables: animations, sections_detected, block_opportunities, extraction_cache). New `~/.claude/hooks/ethics-gate.py` module (robots.txt + rate-limit + UA). **Delegation: Python only.**

### Phase 1 — `/gap-analysis` slim (Sonnet ~30 min)
Remove skill + pipeline target_types. Fix validator: 6-lens enforcement, grade_cap logic, script-reading HARD GATE (lesson 151). Replace motivation_meaning with values_alignment verdict function + per-target source-of-truth paths.

### Phase 2 — `/skill-optimiser` + `/pipeline-optimiser` DUAL-MODE (2× Sonnet parallel, ~45 min)
Add DESIGN mode. Auto-select on dispatch_log presence. Make canonical.

### Phase 3 — `/lifecycle` cascade (Sonnet ~30 min)
skillscore → skill-optimiser DESIGN-mode. Rename marker file. Update SKILL.md.

### Phase 4 — `/build-website` rename (Python ~30 min)
Mechanical: directory rename + find-replace across 14+ files + pipeline-state path + autopilot table. Keep blub.db pipeline_runs history under old name. **Delegation: Python only.**

### Phase 5 — `/build-website` remediation (Sonnet ~90 min)
Stage 1 AND-parallel + Stage 1.5 interaction-sweep + Stage 2 SEO completeness + Stage 4 partial-success + Stage 5 ethics gate + non-empty target guard + Stage 6 dual-threshold + Stage 7.5 /site-reviewer smoke + Stage 8 /uimax INGEST + REPORT.md voice rewrite + dynamic-blocks default + service tiers.

### Phase 6 — `/sgs-extraction` remediation (Sonnet ~60 min)
Full Role A + B + C gap set + OE1 cache + OE3 a11y baseline (HIGH showpiece) + OE4 /clone-patterns chain. OE2 Cloudflare stealth parked.

### Phase 7 — Remaining 4 skill remediations (4× Sonnet parallel, ~30 min each)
`/animation-harvest` (Path A/B split), `/email-html-builder`, `/playwright`, `/sgs-discover`. Apply last-session gap-analysis findings from `C:/Users/Bean/.openclaw/workspace/memory/research/gap-analysis/2026-04-20-154111/`.

### Phase 8 — NEW skills (Sonnet ~45 min each)
`/interaction-sweep`, `/extract-design-tokens`, `/uimax` INGEST command, `/qc`, `/qc-inline`, `/ethics-gate` wrapper.

### Phase 9 — LLM→dumb swap implementation (mixed)
**Python**: k-means OKLCH palette reduction in `design-extract.py`, DOM-heuristic component detection, positional slot-mapping in `wp-pattern-gen.py`, per-section SSIM math. **Sonnet**: wire swaps into each skill's SKILL.md.

### Phase 10 — Regrade + handoff (Opus ~30 min + docs)
**Opus**: regrade build-website + sgs-extraction via new /skill-optimiser DESIGN-mode. Post to blub.db. Update master spec Sections 5/6/7/8. Rewrite wp HANDOFF to drop Task 2 bundle. `/handoff`.

## Research Approach
Most research done. Use `/research-check` only if unexpected evidence need.

## Guardrails
- `/skillscore` BEFORE every rubric grading
- Re-enable `lifecycle-gate.py` before final commit (disabled this session)
- Don't run `/build-website` against production sites during testing
- Captured lesson 151 — read scripts, not just SKILL.md
- Cerebras usable for small targeted edits ONLY — not full SKILL.md rewrites
- Scratch briefs gitignored — leave or delete
