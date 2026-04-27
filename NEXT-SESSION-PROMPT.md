You are a senior AI/ML engineer specialising in retrieval-augmented systems, typed knowledge graph analysis, and dashboard data visualisation. Your immediate job is fixing the producer to pass the regression gate, then layering meta-analysis on top so the producer is *insightful* not just a graph builder.

## Where You Are

**Plan:** SSB subproject — insights-generation Layer A → Layer A.5 (meta-analysis layer added on Bean's request 2026-04-27)
**Current phase:** Layer A built, regression gate FAILED on producer's gemini-2.5-flash classifier (best 10/20). Path to pass: model swap + direction fix.
**Progress:** 9/9 build units complete. Gate verification done. Bean's blind grades captured at fixtures/regression-pairs.json + fixtures/regression-predictions.json.
**Next task:** Swap the classifier model + fix spawns direction logic. THEN add Layer A.5 meta-analyses for actual insights.

---

Read CONVERSATION-HANDOFF.md and CLAUDE.md for full context. The spec is locked at `C:/Users/Bean/.openclaw/.claude/subprojects/ssb/specs/2026-04-25-insights-generation-redesign.md` — do not re-design. Layer A is built and the producer runs on BGE-M3 (1024 dims).

## Skills to Invoke

| Skill | When to use |
|-------|-------------|
| `/brainstorming` | If gate fails and prompt-tuning needs design discussion |
| `/gap-analysis` | After Layer A passes the regression gate — grade the BUILD output (NOT the spec) |
| `/lifecycle` | Only if any skill / agent file is edited |
| `/research` | If tuning needs source comparison |
| `/strategic-plan` | When planning Layer B units (U10-U14) |
| `/qc` | Mandatory verification gate after regression gate passes |
| `/rebuild-dashboard` | Mandatory after producer ships its first real run |
| `/research-check` | Quick lookups (Ollama version notes, model quirks) |

## MCP Servers & Tools

| Tool | What to use it for |
|------|-------------------|
| Playwright (browser_navigate / browser_take_screenshot) | Verify `/insights` after rebuild — typed edges, filter panel, stale dimming |
| Direct sqlite3 via Python on `C:/Users/Bean/.openclaw/workspace/tools/blub-dashboard-v2/data/blub.db` | Inspect lesson_edges after first real run |
| Telegram CLI `python C:/Users/Bean/.claude/hooks/tg-cli.py send` | Send Bean status updates while he is away from PC |

## Agents to Delegate To

| Agent | When |
|-------|------|
| `general-purpose` | Cross-model re-classification on 20 pairs (compact-prompt, after prompt tune) |
| `research-pipeline` | If deeper research needed for prompt design |

## Research Approach

If the producer fails the gate and prompt-tuning is needed:
1. Read Bean's blind grades from `fixtures/regression-pairs.json` (`expected` field) — or chat history if Bean replied directly
2. Diff against `fixtures/regression-predictions.json` (private file with 4-model predictions)
3. Categorise misses by edge type — which type does Producer over/under-detect?
4. For each miss category, add ONE worked example to the few-shot block
5. Re-run on same 20 pairs and verify accuracy improves

---

## Bean's grading results (already computed, persisted in fixtures/regression-predictions.json)

| Classifier | Type-only | Type+Direction | Status |
|--|--|--|--|
| Producer v1 (gemini-2.5-flash, spec-canonical) | 9/20 | 9/20 | FAIL |
| Producer v2-v4 (tuned variants) | 9-10/20 | 8-10/20 | FAIL |
| **Gemini Flash CLI (gemini-3-flash-preview)** | **15/20** | **13/20** | **TYPE PASS** |
| Claude sonnet | 11/20 | 9/20 | FAIL |
| Cerebras (Qwen) | 8/20 | 8/20 | FAIL |

**Conclusion: the fix is the MODEL, not the prompt.** No prompt variant passed on `gemini-2.5-flash`. `gemini-3-flash-preview` (used by the Gemini CLI) hits 15/20 type-only — clears the gate.

## Task 1: Swap classifier model + fix spawns direction logic

**1a. Swap model.** In `insights_producer.py`:
```python
CLASSIFICATION_MODEL = "gemini-3-flash-preview"   # was: gemini-2.5-flash
```
Verify the model name is callable via `google.genai` API (it may need `models/gemini-3-flash-preview` prefix). If not directly available, fall back to `gemini-2.5-pro` for classification.

**1b. Fix spawns direction notation bug.** Current code generates `A→B` when A is *newer* — but for spawns, natural reading is `A→B = A spawned B = A is the origin (older)`. Inverted from natural reading. Code is at the direction-prediction block in `main()`:
```python
if edge_type == 'spawns':
    # spawns: older lesson is the origin, newer is the spawn
    prediction = f"spawns A->B" if a['created_at'] < b['created_at'] else f"spawns B->A"
elif edge_type == 'supersedes':
    # supersedes: newer replaces older (natural reading already correct)
    prediction = f"supersedes A->B" if a['created_at'] > b['created_at'] else f"supersedes B->A"
```
This fix alone takes Bean's strict gate from 13/20 to ~15/20 on Gemini-3-Flash.

**1c. Re-run regression on the 20 fixed pairs.** Verify ≥14/20 strict. If still below, surface miss patterns and ask Bean.

## Task 2: Run producer for real (write typed edges, populate the Map view)

So far ONLY `--dry-run` has been used. The cluster JSON at `workspace/memory/insight-graph-lessons-clusters.json` is from 2026-04-25 and has 576 `member-of` edges, ZERO typed edges. The dashboard Map view shows clusters but no typed lesson-to-lesson edges.

Run the producer fresh:
```bash
python C:/Users/Bean/.agents/skills/capture-lesson/scripts/insights_producer.py --max-cost 0.05
```
Verify:
- `lesson_edges` table populated with typed edges
- New cluster JSON written
- Bean opens http://localhost:5050/insights → **Graphs tab** → typed edges render in the Cluster Map (colours per type, dashed for supersedes, etc.)

Run `/rebuild-dashboard` if the bundle is stale.

## Task 3: Build Layer A.5 — meta-analysis dashboard widgets

This is the **value-add layer** Bean asked for on 2026-04-27. Pure SQL queries against `lesson_edges` + `learning` tables, no LLM cost. Each becomes a small widget on `/insights`.

| Widget | SQL shape | What it tells Bean |
|--|--|--|
| **Contradiction heatmap by category** | `GROUP BY category, COUNT(WHERE edge_type='contradicts')` | Where understanding is evolving |
| **Lesson library health** | counts of: connected, isolated (0 edges), stale, synthesis-derived | Corpus health metrics |
| **Top-10 fertility leaderboard** | `ORDER BY (edge_count + recurrence/5) DESC LIMIT 10` | Spine of the knowledge base |
| **Lonely lessons** | lessons with 0 edges + status='active' | Archival candidates / under-explored areas |
| **Duplicate detector** | pairs with cosine ≥ 0.95 + same direction | Catches lesson 79=66 duplicates automatically |
| **Captured-twice anti-pattern counter** | count of rule+incident pairs (heuristic: spawns + same-day captures) | Signals to capture-lesson skill that future captures should combine rule + incident in ONE entry |
| **Stale chain navigator** | `WITH RECURSIVE supersedes_chain` | Surface "current canonical" lesson per topic |
| **Recurring incident detector** | lessons with `recurrence_count >= 3` | Rule isn't being enforced — needs structural fix |
| **Category density over time** | `GROUP BY week, category` over `created_at` | Which categories grow each week |
| **Cross-cutting bridges** | lessons connecting 2+ categories via typed edges | Most valuable rules — surface them |

Build pattern: one Python script (`scripts/insights_metrics.py`) that runs the queries and outputs a compact JSON consumed by a new dashboard widget at `/insights/metrics` route. ~30-60 min total.

## Task 4: Lesson corrections from Bean's grading session

Bean flagged 3 lessons that need updating:

1. **Lesson 134** — captured the wrong 6th lens content. Should be **end-goal alignment + brand alignment**, not motivation/purpose. Rewrite the rule body via `/capture-lesson` with the corrected framing.
2. **Lesson 133** — wrong conclusion. Multi-stage handoffs CAN auto-run on "go". The real distinction is **reasoning/strategic tasks need human input regardless of trigger**. Rewrite.
3. **Lessons 79, 140, 141, 142** — corpus pollution. Move 140-142 to a `gap_corrections` table (they're not retrievable rules). Mark 79 as `supersedes` target by 66 (or merge).

## Task 5: Layer B priority decision

After Layer A + A.5 ship and the gate clears, decide Layer B priority order:
- U10: synthesis review terminal flow expansion
- U11: active-learning feedback loop (corrections feed back to next run's prompts)
- U12: dashboard "Contradictions only" toggle + diamond synthesis nodes
- U13: `--metrics` flag for accuracy delta over time
- U14: cycle detection for `supersedes` and `depends`
- **NEW: cluster-level synthesis** (one LLM call per dense cluster proposing a higher-order theme — not just triangles). Bean wants this.
- **NEW: tension surfacing** (Decide mode — when contradicts edges exist, run "resolve" prompt). The original Insight Graph product vision.

## Task 3: /qc + /rebuild-dashboard verification

Run `/qc` on the producer + dashboard changes (NOT the spec). Then `/rebuild-dashboard`. Visual check at http://localhost:5050/insights via Playwright: typed edges render with EDGE_STYLE colours, filter panel works, stale lessons dimmed.

## Guardrails

- Spec is LOCKED — do not re-design, do not change the 5 producer defaults
- The 3 LLM prompts are character-for-character contracts — only ADD few-shot examples, never change SYSTEM blocks
- The 14/20 gate is the ship gate. Below = tune + re-run. Do not lower the gate.
- Embedding model swap (BGE-M3 → nomic) is a 3-line change — do not revert without explicit reason
- Bean's grades are ground truth, not cross-model consensus
- `OLLAMA_FLASH_ATTENTION=false` env var (User scope) is REQUIRED for BGE-M3 to work — if a future session runs on a fresh machine, set it before starting Ollama
