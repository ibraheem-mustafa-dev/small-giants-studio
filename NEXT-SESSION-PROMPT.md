You are a senior skill architect specialising in AI coding assistant tooling and meta-skill optimisation infrastructure (DSPy + ProTeGi + TextGrad + Sakana patterns). Continue from yesterday's optimisation-toolkit audit.

Resume command: `CLAUDE_CODE_ENABLE_AWAY_SUMMARY=1 claude -p --resume "small-giants-studio-2026-04-27-ssb-optimisation-toolkit"`

## Where You Are

**Plan:** SSB subproject — cross-cutting optimisation-toolkit (Phase 4, lean)
**Current phase:** Audit + spec — 161 SKILL.md files classified, 6 brains identified, DSPy installed, meta-rule QC'd. Spec writing next.
**Progress:** Audit ~70% (3/5 Pro batches done; 87/161 multi-role classifications complete). Spec 0%. Toolkit build 0%.
**Next task:** Aggregate remaining Pro batches → spec → first utility.

Read `CONVERSATION-HANDOFF.md` and the SSB subproject docs (`C:/Users/Bean/.openclaw/.claude/subprojects/ssb/state.md`, `decisions.md`) for full context.

## Skills to Invoke

| Skill | When to use |
|-------|-------------|
| `/brainstorming` | Designing toolkit module shapes + adoption-hook patterns |
| `/gap-analysis` | Grade the toolkit spec before writing code (>= B required) |
| `/lifecycle` | If editing any existing skill to add adoption hooks |
| `/research` / `/research-check` | Quick fact-checks on DSPy MIPROv2 + TextGrad + ProTeGi specifics |
| `/strategic-plan` | Phase the toolkit build + consumer adoption order |
| `/qc-inline` | QC the meta-rule revision before committing it |
| `/skillscore` | Score the toolkit utilities + each adoption hook |
| `/skill-optimiser` | Use existing 7-step OPTIMISE flow if any utility design needs iteration |

## MCP Servers & Tools

| Tool | What to use it for |
|------|-------------------|
| Local-search hook (`python ~/.claude/hooks/local-search.py "query"`) | Relevance lookups against blub.db |
| Direct sqlite3 on `blub.db` | Reading skill_registry, embeddings, lesson_edges, gap-analysis history |
| Gemini CLI (`gemini -p ... --model gemini-3-pro-preview`) | Re-run Pro batches 3+4 if not complete; run new Pro batches as needed |
| `python C:/Users/Bean/.claude/hooks/tg-cli.py send` | Telegram updates while Bean is away from PC |

## Agents to Delegate To

| Agent | When |
|-------|------|
| `general-purpose` | Aggregating Pro batch results into final multi-role table |
| `feature-dev:code-architect` | Toolkit utility module designs |
| `feature-dev:code-reviewer` | Review toolkit utility code before wiring to consumers |

## Research Approach

Past relevant research is at `C:/Users/Bean/.openclaw/workspace/memory/research/2026-04-27-self-improving-llm-classifier-orchestrator.md` + `2026-04-27-orchestrator-worker-llm-frameworks-gh.md`. Both already vetted via /research-buddies — cite directly without re-running. Use `/research-check` only for new edge cases (e.g. DSPy 3.2.0 API specifics if they bite).

---

## Task 1: Verify + aggregate Pro multi-role classification

Check `C:/Users/Bean/Projects/small-giants-studio/.scratch/skill-batches/result-v2-{1..5}.txt`. If batches 3 or 4 still missing pipe-format lines (≥ 25), re-dispatch with same command shape:
```bash
cat CLASSIFY_PROMPT_V2.md batch-N.md | gemini -p "Classify every skill in this bundle per the rules. ONE pipe-delimited line per skill, exactly the format specified. No preamble, no summary, no headers." -y --model gemini-3-pro-preview > result-v2-N.txt
```

Then update `aggregate.py` to handle the new 12-column multi-role pipe format and produce a final table grouped by primary_role with secondary_roles surfaced. Output to `all-skills-classified-v2.json`.

## Task 2: Re-test /search--local at higher params + finalise meta-rule

Run /search--local across the same 20 qualification queries but at `limit=50` instead of 15. Recompute the miss rate. If still >50% miss vs Flash, the revised meta-rule stands. Otherwise weaken wording. Final rule goes to correction ledger + POST to `/api/corrections` (the API requires a `learning` field — check schema in `skill_registry` or sample existing `learning` rows).

## Task 3: Spec the optimisation-toolkit + build first utility

Use `/strategic-plan` to phase the build. Write spec to `~/.openclaw/.claude/subprojects/ssb/specs/2026-04-27-optimisation-toolkit-v1.md`. Then build `dspy_signature.py` (foundational utility) at `~/.agents/skills/shared-references/optimisation-toolkit/dspy_signature.py`. Wire to skill-writer as a `--optimise` flag against a held-out corpus of 5-10 hand-picked "good" SKILL.md files. Validate: skill-writer runs the optimised prompt, output passes `/skillscore` ≥ 90% AND `/gap-analysis` ≥ B. If yes → architecture validated; build the other 5 utilities.

## Guardrails

- Do NOT build anything that competes with skill-optimiser, gap-analysis, or lifecycle. The toolkit is shared utilities used BY them.
- Do NOT label this as a new subproject. SSB Phase 4 (lean), not standalone.
- Read full SKILL.md content for any audit decisions, never just descriptions (lesson 151).
- Time estimates: default LOW. Toolkit core is ~4 hrs, per-consumer wire is ~90 min. Do not quote weeks.
- Pro batches 3+4 may complete on their own — check first before re-dispatching.
- Symlink at `~/.agents/skills/seo-audit/` is a real Windows SymbolicLink, not a junction. Do not delete or rename without recreating the link.
- Bean specifically chose Opus this session — adversarial-design + system-level evaluation work warrants it.
