# Session Handoff — 2026-04-21 (toolset architecture session)

## Completed This Session
1. **Reconciled 4-reviewer panel on sgs-site-clone** — Sonnet + Flash + Cerebras + Gemini-Pro-thinking-only. Unanimous lens-6 motivation_meaning FAIL. Output_consistency 4.5 → reconciled 3.2. Ecosystem_awareness floor stands at 2.0 (dead `/site-clone` ref in load-bearing routing guidance, not typo).
2. **Opus-authored regrade with direct file read** (per captured lesson 151 — read scripts, not just SKILL.md). Final grade B (3.88), grade_cap lens 6. 18-cell matrix = 4/18 full + 3/18 partial + 11/18 absent (worse than panel estimates). Gap register grew from Sonnet's 10 → 20 unified items.
3. **Compiled 13 opportunities** across 4 reviewers + Opus direct-read. Killed opp #12 (re-clone quarterly) + L3 (QA regression monitoring) per user review. Kept L1 £500 audit, L2 library auto-growth, L4 competitive intel (price TBD), L5 mockup-to-block validator.
4. **Research-buddies Round 1+2** (Nerd Sonnet + Practical Opus) — definitive reframe: **SGS build-website is a design-system transpiler, not a cloner.** Reference class is Figma-to-code (Builder.io/Locofy/Anima ~60-70% static), NOT raw cloners. Gutenberg block recovery forces dynamic-blocks-default architecture.
5. **Lens-6 redesign approved** — `motivation_meaning` → `values_alignment`. Root cause, not band-aid. Generic-slop catcher. Source-of-truth files per target type. 18 files carry lens-count/motivation_meaning references — all need rename.
6. **Pure-text edits applied in-session** (hook disabled by user): autopilot 4-row domain-table append (both copies — playwright, animation-harvest, sgs-discover, sgs-extraction now visible); deleted dead `/site-clone` ref in sgs-site-clone frontmatter; rewrote stale Opportunity Skills section → See Also; deleted dead `trend-detection.md` ref in sgs-extraction; fixed `design-tokens.json` → `dembrandt-tokens.json` divergence (scripts were truth).
7. **Master spec Section 5+6 rewritten** at `C:/Users/Bean/Projects/small-giants-wp/docs/plans/2026-04-21-toolset-spec-from-sgs-studio-session.md` — reconciled score matrix, 7-item remediation priority, 18-cell regrade for both sgs-site-clone and sgs-extraction.
8. **Scratch briefs gitignored** — 12 `.recon-brief-*.md` + `.review-brief-*.md` files per-session artefacts.
9. **Identified LLM→dumb swap opportunities** for build-website pipeline: k-means OKLCH replaces Gemini Vision palette pass (better quality); DOM-heuristic slot-mapping replaces LLM inference (~85% same, hybrid fallback); per-section SSIM replaces Vision failure localisation (math for WHERE, LLM only for WHY); template REPORT.md replaces LLM-narrated.
10. **Plan revised with user** — next session in THIS project dedicated to bulk skill updates via Sonnet. small-giants-wp then consumes updated toolset. Full scope committed: every gap + every opportunity minus the 2 killed.

## Current State
- **Branch:** main at ce53a5b (unchanged — no commits yet this session)
- **Tests:** no test suite (Next.js site project; no tests configured)
- **Build:** n/a (no source changes this session — only docs + external skill edits)
- **Uncommitted changes:** `.gitignore`, `CONVERSATION-HANDOFF.md`, `NEXT-SESSION-PROMPT.md`
- **External edits (outside this repo):** `C:/Users/Bean/.agents/skills/autopilot/SKILL.md` + `.claude` copy, `sgs-site-clone/SKILL.md`, `sgs-extraction/SKILL.md` — user-global skill files, not tracked here
- **lifecycle-gate.py hook:** DISABLED by user during this session — re-enable before shipping any skill changes OR keep off until bulk-edit session finishes

## Known Issues / Blockers
- **Lifecycle-gate hook disabled globally** — any SKILL.md edit in any session will currently go through without skillscore/gap-analysis enforcement. Re-enable in `~/.claude/settings.json` after bulk updates ship
- **Gemini Pro 3.1 reviewer unreliable** — hit 5× 503 loop on sgs-site-clone dispatch, never emitted final JSON. Use `/gemini-pro` skill (has retry ladder) for future dispatches, not raw `gemini` CLI
- **`/uimax` is read-only today** — INGEST command doesn't exist. Blocks Stage 8 of build-website + OE of sgs-extraction. Must build INGEST before skill remediations that depend on it
- **blub.db dashboard API (localhost:5050) intermittent** — write direct to SQLite at `C:/Users/Bean/.openclaw/workspace/tools/blub-dashboard-v2/data/blub.db` if API fails

## Next Priorities (in order)
1. **Bulk skill updates session** — run the phased plan below (Phase 0-10) using Sonnet as primary model. All architectural decisions locked; Sonnet executes per brief.
2. **Then hand back to small-giants-wp** — updated toolset consumed for client migration/build work. Rewrite the HANDOFF-FROM-SGS-STUDIO file to drop Task 2 bundle (now done here) and focus on consume-toolset work.
3. **Resume website design overhaul** (current_mission.md Phase 1 Foundation ~20%) only after toolset phases land.
4. **Re-enable lifecycle-gate.py** once bulk edits complete.
5. **Commit scratch-brief-cleanup** — briefs gitignored but still on disk; delete or leave per preference.

## Files Modified
| File path | What changed |
|---|---|
| `C:/Users/Bean/Projects/small-giants-studio/.gitignore` | Added `.recon-brief-*.md` + `.review-brief-*.md` patterns |
| `C:/Users/Bean/Projects/small-giants-studio/CONVERSATION-HANDOFF.md` | This file |
| `C:/Users/Bean/Projects/small-giants-studio/NEXT-SESSION-PROMPT.md` | Rewritten for bulk-skill-updates focus |
| `C:/Users/Bean/Projects/small-giants-wp/docs/plans/2026-04-21-toolset-spec-from-sgs-studio-session.md` | Section 5 sgs-extraction 18-cell regrade added; Section 6 rewritten with reconciled 4-reviewer matrix + 7-item remediation priority + 18-cell regrade (10/18 originally, corrected 4/18 post-direct-read) |
| `C:/Users/Bean/.agents/skills/autopilot/SKILL.md` (+ `.claude` mirror) | Domain-table appended 4 rows: playwright, animation-harvest, sgs-discover, sgs-extraction |
| `C:/Users/Bean/.agents/skills/sgs-site-clone/SKILL.md` | Deleted dead `/site-clone` ref in frontmatter; rewrote stale Opportunity Skills section to See Also |
| `C:/Users/Bean/.agents/skills/sgs-extraction/SKILL.md` | Deleted dead `trend-detection.md` ref; fixed `design-tokens.json` → `dembrandt-tokens.json` (script was truth) |

## Notes for Next Session
- **Model split:** Sonnet for all skill edits (architectural decisions are done, execution per brief). Opus ONLY for values_alignment lens spec wording (new framework, judgement-sensitive) and `/qc` reviewer-score merge algorithm (complex logic). Cheap models (Cerebras/Flash) for tight-brief section edits (REPORT.md template slots, dead-ref cleanups). Python scripts for find-replace + schema migrations + deterministic algorithms.
- **Captured lesson 151 HARD GATE:** for any skill wrapping scripts (sgs-extraction, design-extract, wp-pattern-gen) — READ the scripts during grading, not just SKILL.md. Doc-vs-script divergence is a categorical failure.
- **Plan divergence flagged:** `current_mission.md` plan covers the website design overhaul; this session worked on toolset layer. No edit to plan file — resume from Phase 1 Foundation after toolset work completes.
- **Dynamic blocks are the default** for build-website output — Gutenberg's markup-recovery validator nukes any static-block output that doesn't match canonical `save()` exactly. Research confirmed (WordPress Developer Handbook + issues #7604, #21703).
- **Two-threshold fidelity approved**: brand-recognition ≥70% (weighted composite: 40% colour / 30% typography / 20% layout rhythm / 10% imagery) + edit-readiness ≥95% (canonical blocks + zero custom CSS). Four-way divergence handling documented in master spec Section 6.

## Next Session Prompt

~~~
Read CONVERSATION-HANDOFF.md and CLAUDE.md first, then the master spec at `C:/Users/Bean/Projects/small-giants-wp/docs/plans/2026-04-21-toolset-spec-from-sgs-studio-session.md` for full architectural context. This session executes the BULK SKILL UPDATES — all architectural decisions are locked.

## Skills to Invoke

| Skill | When to use |
|-------|-------------|
| `/brainstorming` | When a remediation surfaces a micro-decision not already locked in the master spec |
| `/gap-analysis` | ONLY for non-skill/non-pipeline targets (website/design/research/plan/custom) — skill + pipeline target types migrate to /skill-optimiser + /pipeline-optimiser this session |
| `/lifecycle` | MANDATORY for every skill edit — start pipeline, run skillscore, run skill-optimiser DESIGN-mode (was gap-analysis), fix, ship |
| `/research` | Only if a remediation surfaces a new evidence need. Most research completed last session |
| `/strategic-plan` | Use at session start to lock the phase order + dispatch map |
| `/skillscore` | BEFORE every rubric grading on every skill edit — per correction ledger (non-negotiable) |
| `/skill-optimiser` | DESIGN-mode after skillscore passes (canonical for skill target type once this session ships Task 1) |
| `/delegate` | Before every Agent dispatch — pick model per shared routing table |
| `/batch-gap-analysis` | For parallel rubric grading across the 7-skill bulk |
| `/handoff` | End-of-session continuity |

## MCP Servers & Tools

| Tool | What to use it for |
|------|-------------------|
| `mcp__ide__getDiagnostics` | Pre-commit Problems-panel check |
| SQLite direct: `C:/Users/Bean/.openclaw/workspace/tools/blub-dashboard-v2/data/blub.db` | Knowledge + correction writes if dashboard API down |
| `python ~/.claude/hooks/search.py "query"` | Unified web search (fallback if research needed mid-task) |
| `playwright` MCP | Only if verifying a UI-observable side-effect of a skill edit |
| `gemini-pro` CLI via `/gemini-pro` skill | For any Gemini Pro dispatch — handles 503 retry ladder |

## Agents to Delegate To

| Agent | When |
|-------|------|
| Sonnet subagents (via Agent tool `model: "sonnet"`) | Execute per-skill remediation briefs — architectural decisions done, subagent writes the edit |
| Haiku subagents (via Agent tool `model: "haiku"`) | Dead-ref cleanups, targeted section rewrites with precise briefs |
| `wp-sgs-developer` | If any SGS WordPress plugin/theme edit surfaces (shouldn't this session) |
| `research-pipeline` | Only if a phase surfaces a new research need |

---

## Phased execution plan (ordered for dependency + efficiency + delegation)

### Phase 0 — Python-script deterministic batch (~15 min, zero LLM cost, zero risk)
- **Python script**: 18-file `motivation_meaning` → `values_alignment` find-replace across `.agents/skills/{research-check,research-buddies,research-couple,research-council,deep-research,sgs-email-branding,vps-deploy,vps-deploy/references/manifest-sync-runbook,cloudflare-vps-webhook,subagent-driven-development,dispatching-parallel-agents,gap-analysis,skill-writer,delegate,cloudflare-toolkit,batch-gap-analysis}/SKILL.md` + `gap-analysis/scripts/validator.py` + `shared-references/sgs-skillscore.py`
- **Python script**: `/sgs-update` run to migrate sgs-db schema — add `animations`, `sections_detected`, `block_opportunities`, `extraction_cache` tables
- **Python script**: new `~/.claude/hooks/ethics-gate.py` module (robots.txt parse + rate-limit token bucket + UA setter + log to blub.db)
- **Delegate**: none — deterministic, no judgement needed

### Phase 1 — `/gap-analysis` skill fix (Sonnet, ~30 min)
Remove `skill` + `pipeline` target_types (migrated to optimisers). Update `validator.py`: enforce 6 lenses (not 5), block `grade_cap_applied: null` when any lens = fail, HARD GATE on script-reading per lesson 151. Replace `motivation_meaning` with `values_alignment` verdict function + source-of-truth paths per target type (SGS brand guide / client brand / Bean's rules). Wire new lens into personas evaluator.
- **Delegate**: Sonnet subagent with master spec Section 6 + values_alignment spec from handoff context

### Phase 2 — `/skill-optimiser` + `/pipeline-optimiser` DUAL-MODE (Sonnet, ~45 min each, parallelisable)
Add DESIGN mode to each (pre-hoc rubric: 18-cell matrix + 3-paths + 5-goals + 6-lens + categorical floors). Auto-select: if `dispatch_log` rows exist for target → POST-USE mode, else → DESIGN mode. Mark these as canonical for their target types.
- **Delegate**: Sonnet subagent × 2 in parallel

### Phase 3 — `/lifecycle` cascade update (Sonnet, ~30 min)
skillscore → skill-optimiser DESIGN-mode (was gap-analysis). Rename forced-hook marker file: `.pending-gap-analysis-{session_id}.json` → `.pending-skill-optimiser-{session_id}.json`. Pipeline equivalent for pipeline edits. Update SKILL.md to describe new flow.
- **Delegate**: Sonnet subagent

### Phase 4 — `/build-website` rename (Python script + follow-up edit, ~30 min)
- **Python script**: rename directory `sgs-site-clone/` → `build-website/`. Find-replace `sgs-site-clone` → `build-website` across 14+ files (other skills that reference it, autopilot table, master spec, HANDOFFs). Update blub.db: keep historical `pipeline_runs.name` as-is; new runs use new name. Rename `~/.claude/pipeline-state/sgs-site-clone/` → `~/.claude/pipeline-state/build-website/`
- **Delegate**: python script; no LLM

### Phase 5 — `/build-website` remediation (Sonnet, ~90 min)
Architectural edits to SKILL.md per master spec Section 6: Stage 1 OR → AND-parallel (wp-site-extraction + design-ref + sgs-extraction + publish schema contract); new Stage 1.5 interaction-sweep; Stage 2 hreflang/canonical/JSON-LD/Twitter Card extraction; Stage 4 partial-success skip-and-warn + DOM-heuristic slot-mapping (LLM→dumb swap); Stage 5 ethics-gate dispatch + non-empty-target guard + pre-flight block validation linter + DOM-order content-to-slot (LLM→dumb); Stage 6 dual-threshold replaces single 70% + per-section SSIM failure localisation (LLM→dumb) + k-means OKLCH palette reduction (LLM→dumb); new Stage 7.5 /site-reviewer smoke; new Stage 8 /uimax INGEST; tiered service-model note (Quick/Bespoke/Exploration); REPORT.md template voice rewrite per Practical's draft.
- **Delegate**: Sonnet subagent with complete Practical+Nerd research output + master spec Section 6 embedded in brief

### Phase 6 — `/sgs-extraction` remediation (Sonnet, ~60 min)
Every Role A gap + Role B gap + Role C gap per master spec Section 5: html-capture.js Cloudflare retry + Stage 0.5 ethics gate + multi-viewport (375+1440) + Stage 3.5 `/a11y-audit` mandatory dispatch + Stage 0 blub.db 24h freshness cache + scripted manifest (not LLM) + output-dir UUID suffix + JS error boundaries + /uimax INGEST post-success + extraction-manifest.json consumer contract + Stage 6 /clone-patterns chain. Opportunities: OE1 blub.db extraction cache, OE3 axe-core a11y baseline (HIGH showpiece), OE4 /clone-patterns chain. OE2 Cloudflare stealth ladder = parked unless live blocker.
- **Delegate**: Sonnet subagent

### Phase 7 — Remaining 4 skill remediations (Sonnet, ~30 min each, parallelisable)
`/animation-harvest` (split Path A standalone + Path B → new /scroll-animation-originator), `/email-html-builder`, `/playwright`, `/sgs-discover` (URL-only + /uimax feedback + block-gap detection + industry matching + mood-board memory). Apply gap-analysis findings from last session JSONs at `C:/Users/Bean/.openclaw/workspace/memory/research/gap-analysis/2026-04-20-154111/`.
- **Delegate**: 4× Sonnet subagents in parallel

### Phase 8 — NEW skills build (Sonnet, ~45 min each)
`/interaction-sweep` (Stage 1.5 enabler + standalone skill, Playwright CDP events), `/extract-design-tokens` (L1 enabler — £500 audit product + standalone skill), `/uimax INGEST` command (unblocks Stage 8 + sgs-extraction OE), `/qc` (delegated review panel, Cerebras chunk-loop pattern embedded), `/qc-inline` (main-thread review mirror), shared `/ethics-gate` skill wrapper around the hook module from Phase 0.
- **Delegate**: Sonnet subagents, one per skill

### Phase 9 — LLM→dumb swap implementation (mixed delegation, ~60 min)
- **Python**: k-means OKLCH colour quantisation in `design-extract.py` as new default palette-reduction path (keep Vision fallback on low-confidence classifier); DOM-heuristic component detection; positional DOM-order slot-mapping in `wp-pattern-gen.py`; per-section SSIM math module. All deterministic algorithms — no LLM inference at runtime.
- **Sonnet**: wire the swaps into each skill's SKILL.md (brief edits per skill)
- **Delegate**: Python scripts for algorithms; Sonnet for skill-level wiring

### Phase 10 — Regrade + handoff (Opus ~30 min + docs)
- **Opus**: regrade `build-website` + `sgs-extraction` via new `/skill-optimiser` DESIGN-mode (values_alignment lens + 18-cell matrix). Post 2 new eval rows to blub.db. Update master spec Sections 5/6/7/8 to reflect shipped remediations.
- Rewrite `C:/Users/Bean/Projects/small-giants-wp/HANDOFF-FROM-SGS-STUDIO-2026-04-21.md` — drop Task 2 bundle (now done here), keep consume-toolset + migration-work focus.
- `/handoff` for this session.

## Research Approach
Research completed last session + this session. Only new research if a phase surfaces unexpected evidence need — use `/research-check` for quick lookups. Do NOT re-run the research-buddies pixel-perfect analysis (locked).

## Guardrails
- `/skillscore` BEFORE every rubric grading — non-negotiable per correction ledger
- Re-enable `lifecycle-gate.py` in `~/.claude/settings.json` before the final commit of the session
- Never run `/build-website` (renamed `/sgs-site-clone`) against production client sites during remediation testing
- Scratch `.recon-brief-*.md` + `.review-brief-*.md` files are gitignored — safe to leave or delete
- Captured lesson 151 HARD GATE still applies — read scripts, not just SKILL.md, for any graded skill that wraps scripts
- blub.db dashboard may be down — write direct to SQLite if API fails
- Sonnet fine for all phases except Phase 10 regrade (needs Opus judgement on values_alignment lens). Cerebras usable for small targeted edits only — NOT full SKILL.md rewrites (captured lesson from this session).
~~~
