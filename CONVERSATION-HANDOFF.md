---
recommended_model: sonnet
session_date: 2026-04-26 to 2026-04-27
primary_subproject: ssb (insights-generation Layer A + A.5)
---

# Session Handoff — 2026-04-27

## Late-session work (2026-04-27, "do it now" sprint)

11. **Classifier model swapped from `gemini-2.5-flash` to `gemini-3-flash-preview`** + `system_instruction` config refactor (proper Gemini API role separation). Result vs Bean's grades: still 9-10/20 type-only, ~7/20 strict — same ballpark as 2.5-flash. The Gemini Flash CLI's earlier 15/20 was an artefact of CLI-internal scaffolding, not directly replicable via API. Honest call: stop chasing the gate via prompt tuning, lock in improvements, focus value-add on Layer A.5.

12. **Spawns direction logic fixed.** Code now uses different rules for spawns vs supersedes:
    - supersedes: newer is the source (replaces older) — natural reading
    - spawns: older is the source (origin that produced newer) — matches Bean's natural reading
    The previous code conflated both as "newer is source" which inverted spawns notation.

13. **Layer A.5 shipped — `insights_metrics.py`** (~340 lines, no LLM cost). Pure SQL on `lesson_edges` + `learning` + `lesson_embeddings`. 11 widgets to `workspace/memory/insights-metrics.json`: library_health, edge_type_distribution, contradiction_heatmap, fertility_leaderboard (top-10), lonely_lessons, duplicate_candidates (cosine ≥0.95), captured_twice_pattern, stale_chains (recursive supersedes CTE), recurring_incidents (recurrence ≥3), category_density_over_time, cross_cutting_bridges. First run already surfaced: lesson-16 has recurrence=21 (rule isn't being enforced), lesson-68 just says "audit" (broken entry), 25 captured-twice anti-pattern pairs detected.

14. **Lesson corrections from Bean's grading session applied:**
    - **Lesson 134** rewritten: 6th lens is **end-goal alignment + brand alignment**, not motivation/purpose. Original framing inverted cause and effect.
    - **Lesson 133** rewritten: multi-stage handoffs CAN auto-run on `go` — the actual rule is reasoning/strategic tasks need human input regardless of trigger.
    - **Lesson 79** marked `status='stale'`, supersedes edge (66→79) added to lesson_edges with `classified_by='human-review'`.
    - **Lessons 140, 141, 142** moved to `category='gap_correction_bookkeeping'` + `status='stale'` so they no longer pollute the producer's input.

15. **Layer B priority order updated.** New top-priority units bumped above original U10-U14: cluster-level synthesis (one LLM call per dense cluster proposing higher-order theme rule) + tension surfacing (Decide mode from original Insight Graph vision). Original U10-U14 deferred to Layer B.5/B.6.

16. **Producer real-run started** (`--max-pairs 75 --max-cost £0.05`). Heavy 503 rate limiting on gemini-3-flash-preview. 12 typed edges written so far (8 connects, 3 spawns, 1 human-review supersedes). Will continue in background; next session can re-run with `--resume` if interrupted.

# Session Handoff — 2026-04-26

## Completed This Session

1. **Layer A FULLY BUILT — 9 units U01-U09 shipped via parallel subagent dispatch.** SQL migration (4 new tables: lesson_embeddings, lesson_edges, synthesis_nodes, edge_corrections — `learning.status` already existed). Mock fixture JSON. Producer skeleton (`insights_producer.py`, ~1378 lines, all CLI flags). Edge classification loop with 3 verbatim prompts (CLASSIFICATION/DIRECTION/SYNTHESIS). Fertility recompute + JSON writer. Dashboard edge styles + filter panel + stale dimming. APScheduler stub (disabled). `--review` terminal flow. Regression harness skeleton.

2. **BGE-M3 NaN bug diagnosed and fixed.** Ollama 0.13.5+ auto-enables flash attention for bert architecture, causing F32→F16 K/V tensor overflow → deterministic NaN in ~30% of embedding outputs. Fixed via `OLLAMA_FLASH_ATTENTION=false` (User-scope env var, persists). Verified 20/20 OK vs 7/20 before. Producer now running on BGE-M3 (1024 dims) at COSINE_THRESHOLD=0.75. Research persisted: `workspace/memory/research/2026-04-26-ollama-bge-m3-nan-bug.md`, blub.db id 12723.

3. **/research-check ran on the BGE-M3 bug.** Default-tier dispatch (2 Sonnet agents). Found root cause + workaround + backup path (FlagEmbedding direct PyTorch). Documented in research markdown and decisions.md.

4. **Cosmin similarity recalibrated for BGE-M3.** 75 pairs above 0.75 threshold (vs 115 with nomic, 410 with Gemini). Distribution across bins: 0.75-0.80 (24), 0.80-0.85 (19), 0.85-0.90 (23), 0.90+ (9). Diverse enough for regression testing.

5. **20 regression pairs sampled + classified by 4 models.** Sampled 5 pairs from each similarity bin (20 total). All 4 models classified independently:
    - Producer (gemini-2.5-flash via API): 9 connects / 9 spawns / 1 depends / 1 none
    - Gemini Flash (gemini-3-flash-preview CLI): 13 spawns / 4 connects / 2 supersedes / 1 none
    - Claude (sonnet-4-6): 15 spawns / 3 connects / 2 none
    - Cerebras (qwen-3-235b): 15 connects / 3 spawns / 1 depends / 1 contradicts
    Consensus: 1 unanimous (pair 6), 10 strong (3/4), 9 split (2/4). Saved to `fixtures/regression-predictions.json` (private).

6. **20-pair blind grading sheet on Telegram.** Sent to Bean (msg 170 + cross-model summary msg 171). File at `subprojects/ssb/2026-04-26-regression-gate-pairs.md` for Bean to fill in via either chat reply or markdown file edit.

7. **Producer connection hardened.** Added `busy_timeout=30000` to `get_db_connection()` after a transient SQLite "database is locked" error during reembed (caused by orphan Python process holding the DB).

8. **Prompt-tuning experiments v2-v4 attempted, reverted to v1.** Ran /research-check (default tier, 2 Sonnet agents) on typed-relationship classification best practices. Found c-ICL (EMNLP 2024) + Chain-of-Thought (Wadhwa 2023, ~5pt F1 gain) as the two well-supported patterns. Built three prompt variants (CoT-only, CoT + 2 worked examples, CoT + 3 examples with strict supersedes constraint). Against Claude-proxy ground truth: v1=8/20, v3=9/20, v4=7/20. No consistent improvement; tuning oscillated between over-spawns and over-supersedes. Reverted to v1 (spec-canonical). All 4 variant predictions saved in `regression-predictions.json` for grading against Bean's actual ground truth. Research persisted: `workspace/memory/research/2026-04-26-typed-relationship-llm-prompt-patterns.md`, blub.db id 12747.

9. **Bean blind-graded 20 pairs (2026-04-26 evening).** All 4 producer variants on gemini-2.5-flash failed the gate (best 10/20). Gemini Flash CLI on `gemini-3-flash-preview` hit 15/20 type-only — passes. Three bugs surfaced: spawns direction notation inverted from natural reading; producer + Claude proxy share spawns B→A bias; date-of-capture ≠ date-of-incident breaks temporal logic. Three lesson corrections flagged: 134's 6th-lens content wrong (should be end-goal + brand alignment, not motivation/purpose), 133's conclusion wrong (auto-go is fine for non-strategic tasks), 79/140/141/142 are corpus pollution.

10. **Layer A.5 scope confirmed (2026-04-27).** Bean asked for deeper analysis beyond pair classification. Agreed plan: 10 cheap SQL meta-analyses on `lesson_edges` + `learning` (contradiction heatmap, fertility leaderboard, lonely-lessons report, duplicate detector, captured-twice anti-pattern counter, stale chain navigator, recurring incident detector, category density over time, cross-cutting bridges, library health metrics). Plus two higher-cost LLM additions for Layer B: cluster-level synthesis (theme rules for whole clusters, not just triangles) + tension surfacing (Decide mode from original Insight Graph vision). Layer A.5 = 30-60 min build, no LLM cost.

## Current State

- **Branch:** main at 6c8ed4d (small-giants-studio repo — session work was in OC + .agents, not this repo)
- **Tests:** no test suite (per project CLAUDE.md); 20-pair regression gate awaiting Bean's blind grades
- **Build:** producer dry-run ends cleanly: 166 embedded, 75 pairs above 0.75, 5 sample classifications all valid edge types
- **Uncommitted:** `.gitignore` (added .scratch/ + data/), CONVERSATION-HANDOFF.md (this), NEXT-SESSION-PROMPT.md (about to write)

## Known Issues / Blockers

- **Cerebras can't read large JSON files (>50KB input budget).** Fix: passed compact form (16KB) instead — works. Document this in cerebras skill if not already there.
- **Gemini Flash CLI is workspace-sandboxed** to `C:/Users/Bean/Projects/small-giants-studio` and `C:/Users/Bean/.gemini/tmp/small-giants-studio`. Cannot read `C:/Users/Bean/.agents/` directly. Workaround: pipe content via stdin OR copy file into project workspace.
- **Producer's CLASSIFICATION prompt under-detects `spawns`** (per cross-model comparison). On 9 of 11 rule+incident pairs, Producer called `connects` while Claude + Gemini Flash both called `spawns`. Spec needs a worked example.

## Bean's grading result (2026-04-26 evening)

All four producer variants on `gemini-2.5-flash` FAILED the 14/20 gate (best 10/20). But **Gemini Flash CLI (`gemini-3-flash-preview`) hits 15/20 type-only / 13/20 strict** against Bean's grades — the fix is the model, not the prompt.

Bean's grading also surfaced three real bugs:
- Spawns direction notation inverted from natural reading (code uses `A→B` = A is newer; natural reading = A spawned B = A is origin/older). Strict gate drops from 15→13 because of this.
- Producer + Claude proxy both biased toward `spawns B→A` (mechanical date-based logic).
- Date-of-capture ≠ date-of-incident (rule lessons captured before detailed incident write-ups break the temporal logic).

Three lesson corrections also flagged (134's 6th-lens content wrong, 133's conclusion wrong, 79/140/141/142 are corpus pollution).

## Next Priorities (in order)

1. **Swap classifier model + fix spawns direction logic.** `CLASSIFICATION_MODEL = "gemini-3-flash-preview"`. Invert spawns date check (older→newer is the origin direction). Re-run on 20 pairs. Expected gate: ≥14/20 strict.
2. **Run producer for real (NOT dry-run).** Cluster JSON at `workspace/memory/insight-graph-lessons-clusters.json` is still from 2026-04-25 — zero typed edges written. Bean's seeing only the table view because the Map view has nothing typed to draw. After this run + dashboard rebuild, Map view populates.
3. **Build Layer A.5 — meta-analysis widgets.** New 30-60 min layer Bean requested 2026-04-27. Pure SQL queries on `lesson_edges` + `learning`, no LLM cost. 10 cheap widgets give corpus-level insights (contradiction heatmap, fertility leaderboard, lonely-lessons report, duplicate detector, captured-twice anti-pattern counter, stale chain navigator, etc.). This is what makes Layer A actually *insightful* not just a graph.
4. **Lesson corrections** — rewrite 134 (6th lens = end-goal + brand alignment) and 133 (auto-go is fine for non-strategic tasks). Move 79/140/141/142 out of `learning` into `gap_corrections` table.
5. **Layer B priority decision** — cluster-level synthesis (one LLM call per dense cluster) + tension-surfacing (Decide mode from original Insight Graph vision) are the two Bean wants prioritised over the original Layer B units.

## Files Modified

| File path | What changed |
|---|---|
| `C:/Users/Bean/.agents/skills/capture-lesson/scripts/insights_producer.py` | NEW (1378 lines): full producer with embedding cache, classification loop, fertility recompute, review flow |
| `C:/Users/Bean/.agents/skills/capture-lesson/scripts/run_regression.py` | NEW: regression harness skeleton |
| `C:/Users/Bean/.agents/skills/capture-lesson/scripts/migrations/2026-04-25_add_typed_edges.sql` | NEW: SQL migration for 4 typed-edge tables |
| `C:/Users/Bean/.agents/skills/capture-lesson/fixtures/mock-graph-output.json` | NEW: dashboard mock fixture |
| `C:/Users/Bean/.agents/skills/capture-lesson/fixtures/regression-pairs.json` | NEW: 20 pairs for regression gate (blind to Bean) |
| `C:/Users/Bean/.agents/skills/capture-lesson/fixtures/regression-predictions.json` | NEW: 4-model predictions (private — Bean grades blind) |
| `C:/Users/Bean/.openclaw/workspace/tools/blub-dashboard-v2/src/components/ClusterMap.tsx` | EDGE_STYLE map, edge type styling, synthesis diamond, stale dimming |
| `C:/Users/Bean/.openclaw/workspace/tools/blub-dashboard-v2/src/components/ClusterDashboard.tsx` | Filter panel, edge filtering, stale dimming in table |
| `C:/Users/Bean/.openclaw/workspace/tools/blub-dashboard-v2/src/app/api/insights/route.ts` | edge_types/hide_stale/min_confidence query params |
| `C:/Users/Bean/.openclaw/.claude/subprojects/automation-engine/flows/insights-producer-weekly.yaml` | NEW: disabled APScheduler flow |
| `C:/Users/Bean/.openclaw/.claude/subprojects/ssb/state.md` | current_step + last_updated bumped |
| `C:/Users/Bean/.openclaw/.claude/subprojects/ssb/decisions.md` | +2 entries (BGE-M3 switch, cosine threshold 0.75) |
| `C:/Users/Bean/.openclaw/.claude/subprojects/ssb/2026-04-26-regression-gate-pairs.md` | NEW: blind grading sheet (sent to Bean's Telegram) |
| `C:/Users/Bean/.openclaw/workspace/memory/research/2026-04-26-ollama-bge-m3-nan-bug.md` | NEW: research finding |
| `c:/Users/Bean/Projects/small-giants-studio/.gitignore` | Added .scratch/ + data/ |
| Ollama env (Windows User scope) | OLLAMA_FLASH_ATTENTION=false (persists across reboots) |

## Notes for Next Session

- **Spec is LOCKED.** Do not re-research, do not re-design. The 5 producer defaults are unchanged. Embedding model is the only deviation (BGE-M3 vs Gemini).
- **Producer's bias:** under-detects `spawns`. On rule+incident pairs (which are the dominant pattern in Bean's lesson library), the Producer's prompt requires a more explicit worked example. Don't rewrite the prompt body wholesale — add ONE example to `[FEW-SHOT EXAMPLES]`.
- **Cerebras + Gemini Flash both have workspace constraints.** Cerebras hangs on >50KB inputs. Gemini Flash CLI sandboxes to project root. For cross-model verification, copy/compact files into the project workspace OR pipe via stdin.
- **Producer NEVER mentions OLLAMA_FLASH_ATTENTION in code paths.** It's set globally as a User-scope env var. If a future session ships the producer to a different machine, that env var is required — comment in producer constants block documents this.
- **Pair 6 is the unanimous-strong-spawns pair.** All 4 models agreed. Use it as the worked example if tuning the CLASSIFICATION prompt: lesson 67 (rule "quality scores must ship with remediations") + lesson 136 (incident "Pre-script remediations for every quality score").

## Next Session Prompt

~~~
You are a senior AI/ML engineer specialising in retrieval-augmented systems and prompt engineering for typed knowledge graphs. Your immediate job is verifying the insights-generation producer hits its regression gate (≥14/20) and tuning the CLASSIFICATION prompt if it doesn't.

Read CONVERSATION-HANDOFF.md and CLAUDE.md for full context. The spec is locked at `C:/Users/Bean/.openclaw/.claude/subprojects/ssb/specs/2026-04-25-insights-generation-redesign.md` — do not re-design. Layer A is built and the producer runs on BGE-M3.

## Skills to Invoke

| Skill | When to use |
|-------|-------------|
| `/brainstorming` | If gate fails and prompt-tuning needs design discussion |
| `/gap-analysis` | After Layer A passes the regression gate — grade the BUILD output (NOT the spec) |
| `/lifecycle` | Only if any skill / agent file is edited |
| `/research` | If a tuning question needs source comparison (e.g. "how do retrieval models distinguish spawns from connects") |
| `/strategic-plan` | When planning Layer B units (U10-U14) |
| `/qc` | Mandatory verification gate after the regression gate passes |
| `/rebuild-dashboard` | Mandatory after producer ships its first real run |
| `/research-check` | Quick lookups (e.g. Ollama version notes, Gemini Flash quirks) |

## MCP Servers & Tools

| Tool | What to use it for |
|------|-------------------|
| Playwright (browser_navigate / browser_take_screenshot) | Verify `/insights` after rebuild — typed edges visible, filter panel works, stale dimming |
| Direct sqlite3 via Python on `C:/Users/Bean/.openclaw/workspace/tools/blub-dashboard-v2/data/blub.db` | Inspect lesson_edges after first real run |
| Telegram CLI `python C:/Users/Bean/.claude/hooks/tg-cli.py send` | Send Bean grading prompts or status updates while he is away from PC |

## Agents to Delegate To

| Agent | When |
|-------|------|
| `general-purpose` | Compact-prompt cross-model classification on 20 pairs (when re-running after prompt tune) |
| `research-pipeline` | If a deeper research call is needed for prompt design |

## Research Approach

If the producer fails the gate and prompt-tuning is needed:
1. Read Bean's actual blind grades from chat or `regression-pairs.json` (after Bean fills in `expected` field)
2. Diff against `regression-predictions.json` (private) — focus on misses
3. Categorise misses by edge type (which type does the producer over/under-detect?)
4. For each miss category, propose ONE worked example to add to the few-shot block
5. Re-run on the 20 pairs and verify accuracy improves

---

## Task 1: Compute the regression gate result

Run a comparison script that reads Bean's grades from `fixtures/regression-pairs.json` (the `expected` field he fills in) against `fixtures/regression-predictions.json` (private file with all 4 model predictions). Compute Producer accuracy: count where Producer's prediction matches Bean's expected (type + direction). Pass if ≥14/20.

Use Bean's grades as the source of truth. The cross-model consensus is informational only — do not weight it.

## Task 2: If gate fails, tune the CLASSIFICATION prompt

The prompt body is in `insights_producer.py` constants near the top OR in `classify_edge_type()` function. Add ONE worked example to the `[FEW-SHOT EXAMPLES]` block that distinguishes the misclassified edge type. Most likely fix (based on cross-model evidence): a `spawns B->A` example using lesson 67 + lesson 136 (pair 6 — unanimous strong consensus).

After tuning, re-run on the same 20 pairs and verify accuracy ≥14/20. Only then proceed to Task 3.

## Task 3: /qc + /rebuild-dashboard verification

Run `/qc` on the producer + dashboard changes (NOT the spec — spec is locked). Then `/rebuild-dashboard`. Visual check at http://localhost:5050/insights via Playwright: typed edges render with the EDGE_STYLE colours from `ClusterMap.tsx`, filter panel checkboxes work, stale lessons are dimmed in the table.

## Guardrails

- Spec is LOCKED — do not re-design, do not change the 5 producer defaults
- The 3 LLM prompts in the spec are character-for-character contracts — only ADD few-shot examples, never change the SYSTEM block
- The 14/20 gate is the ship gate. Below = tune + re-run. Do not lower the gate.
- Embedding model swap is a one-line change — do not switch back to nomic without explicit reason
- Bean's grades are ground truth, not the cross-model consensus
~~~
