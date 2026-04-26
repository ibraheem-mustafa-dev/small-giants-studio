## Where You Are

**Plan:** SSB subproject — insights-generation redesign (parallel to Phase 3 planning-upgrade)
**Current phase:** Layer A build (spec is locked at v2)
**Progress:** 0/9 units complete (U01-U09)
**Next task:** /subagent-driven-development orchestration of Layer A

---

Read CONVERSATION-HANDOFF.md and the spec at `C:/Users/Bean/.openclaw/.claude/subprojects/ssb/specs/2026-04-25-insights-generation-redesign.md` before any action. Spec is locked, all 5 open questions decided. Layer A build only — do not re-design.

## Skills to Invoke

| Skill | When to use |
|-------|-------------|
| `/brainstorming` | Only if a build-time constraint forces a real architectural call (rare — spec is locked) |
| `/gap-analysis` | After Layer A ships — grade the BUILD output, not the spec |
| `/lifecycle` | If editing any skill / agent / pipeline file (not expected) |
| `/research` | Only if a library API change surfaces (Gemini SDK signature drift, etc.) |
| `/strategic-plan` | Skip — phasing already in spec |
| `/subagent-driven-development` | PRIMARY ORCHESTRATOR — runs Layer A units across parallel cold subagents |
| `/dispatching-parallel-agents` | When fan-out exceeds 2 branches |
| `/subagent-prompt` | For crafting cold subagent prompts (use spec sections as paste-blocks) |
| `/delegate` | BEFORE EVERY agent dispatch — picks Cerebras / Flash / Sonnet per unit |
| `/qc` | Final verification gate after all units ship |
| `/rebuild-dashboard` | When dashboard edits land |

## MCP Servers & Tools

| Tool | What to use it for |
|------|-------------------|
| Playwright (browser_navigate / browser_take_screenshot) | Verify dashboard `/insights` after rebuild |
| Direct sqlite3 on `C:/Users/Bean/.openclaw/workspace/tools/blub-dashboard-v2/data/blub.db` | Run U01 migration, verify schemas |
| `python ~/.claude/hooks/local-search.py` | Internal lookup before any new build |

## Agents to Delegate To (free-model routing per unit)

| Unit | Model | Rationale |
|------|-------|-----------|
| U01 migration SQL | **Cerebras** | Mechanical SQL, schema in spec |
| U02 mock fixture | **Cerebras** | Copy JSON shape from spec |
| U03 producer skeleton | **Sonnet** | Multi-file Python with arg-parsing + DB |
| U04 LLM classification + 3 prompts | **Sonnet** | Load-bearing; prompts already specified |
| U05 fertility recompute + JSON writer | **Cerebras** | Formula in spec, mechanical |
| U06 dashboard TSX edits | **Sonnet** | Concrete diffs in spec, TSX needs care |
| U07 APScheduler stub | **Cerebras** | YAML flow + flag-disabled config |
| U08 `--review` terminal | **Sonnet** | UX-ish, small surface |
| U09 regression harness | **Cerebras** | Test runner is mechanical |

## Research Approach
None required — spec is build-ready. If a library API surprise surfaces, use `/research-check` for a 5-minute focused lookup.

---

## Task 1: /subagent-driven-development orchestration of Layer A

Plan branches:
- **Branch A (Cerebras parallel):** U01 + U02 + U05 + U07 + U09
- **Branch B (Sonnet sequential):** U03 → U04 → U08
- **Branch C (Sonnet, after U02):** U06

Use /subagent-prompt to craft each cold subagent's prompt (paste relevant spec sections; they have no conversation context). Use /delegate before each Agent dispatch and announce the routing decision.

## Task 2: Run the 20-pair regression harness

After U04 + U09 land, ask Bean to hand-grade 20 pairs (paste pairs to him; he marks each with the expected edge type). Pipe through `python insights_producer.py --dry-run --regression`. Pass gate: ≥14/20 correct. Fail: tune prompts based on miss patterns + re-run.

## Task 3: /qc + /rebuild-dashboard verification

Run /qc on the producer + dashboard changes (NOT the spec — spec is locked). Then /rebuild-dashboard. Screenshot http://localhost:5050/insights showing typed edges in the Map view + cross-cutting shimmer in the All-Lessons table when contradicts edges exist.

## Guardrails

- Spec is LOCKED — do not re-research, do not re-design, do not change the 5 producer defaults without asking Bean
- Mock-first — `fixtures/mock-graph-output.json` ships BEFORE the producer
- Dashboard edits build against the mock, not the live producer
- The 3 LLM prompts in the spec are character-for-character contracts — copy, do not paraphrase
- No /gap-analysis on the spec — only on the build output
- /delegate per unit before every Agent dispatch
- The 20-pair regression harness is the ship gate. Below 14/20 → tune + retry. Do not lower the gate
