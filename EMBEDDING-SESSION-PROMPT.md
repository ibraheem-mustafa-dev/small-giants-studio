# Embedding Retrieval Setup — Full Optimal Version

## Role
You are a retrieval engineer pairing with Bean. Bean is a non-coder business owner — explain every design choice in plain English as you go. At the end of the session Bean should understand retrieval concepts well enough to maintain and extend this later. Teach as you build.

## GOAL
Replace keyword-only retrieval with **hybrid BM25 + dense + (sparse) retrieval** across OpenClaw + Claude Code. Result: searches against corrections, learnings, past gap-analysis reports, workspace memory, and blub.db knowledge return semantically relevant results for any query phrasing — not just exact keywords.

## CONSTRAINTS
- **Fully local** — no API dependency, Ollama only
- **Pluggable backend** — must support swapping nomic ↔ bge-m3 ↔ future models via one env var, with model-namespaced embedding tables so dimension changes do not break existing data
- **Integrated with BOTH OpenClaw and Claude Code** — same index, same API surface, no duplication
- **blub.db is the single source of truth** — embedding index lives alongside the existing tables

## INSTALLED (use these, do not reinstall)
- Ollama
- `nomic-embed-text:latest` — 137M params, 768d, 8k ctx
- `bge-m3:latest` — 560M params, 1024d dense, 8k ctx, **supports hybrid dense + sparse + multi-vector from one model pass** (this is the key feature — most embedding models only give dense, bge-m3 gives all three)
- SQLite + FTS5 already in blub.db (currently uses default rank, NOT `bm25()` — easy free win)
- blub.db at: `C:/Users/Bean/.openclaw/workspace/tools/blub-dashboard-v2/data/blub.db`

## CORE CONCEPTS (explain these to Bean as you reach each one)

### Chunking — biggest quality lever
Long documents must be split into smaller pieces (chunks) before embedding. Strategy matters more than model choice.

**Required strategy:**
1. **Markdown-aware primary**: split on H1/H2/H3 boundaries when present. Respect markdown structure.
2. **Sliding window fallback**: for chunks over 700 tokens after markdown split, further split into 500-token windows with 50-token overlap. Overlap prevents semantic continuity loss across chunk boundaries.
3. **Per-chunk metadata stored**: `source_table`, `source_id`, `chunk_index`, `section_header` (if markdown-split), `char_range`, `token_count`, `indexed_at`, `model_name` (for namespacing), `content_hash` (dedup).

Explain to Bean: "A 3000-word correction ledger entry is not one thing to match — it is 6 distinct ideas. Chunking is how we index each idea separately."

### Hybrid retrieval — three complementary signals
Three search methods, different strengths:

| Method | Strength | Weakness |
|---|---|---|
| **BM25 (via FTS5 bm25())** | Exact keywords, rare technical terms, proper nouns | Blind to paraphrases |
| **Dense embeddings (cosine sim)** | Semantic similarity, paraphrases, conceptual queries | Blind to rare specific terms like "error 429" |
| **Sparse (bge-m3 lexical)** | Middle ground — weighted tokens, good for long-tail | Requires bge-m3 specifically |

Fuse with **Reciprocal Rank Fusion (RRF)** at k=60:

```
score(doc) = sum across methods of ( 1 / (60 + rank_in_that_method) )
```

Simple, proven, no tuning needed. Typical hybrid retrieval beats any single method by 10-15% precision-at-5.

Explain to Bean: "Three search methods voting. A doc that ranks well in all three wins. A doc that only ranks in one method but loses in others gets filtered out. Robust against any single method's weakness."

### Pre-filter before rank
Never rank the whole corpus — narrow first. Filter by metadata (`category`, `source_table`, date range) BEFORE running vector math. Order-of-magnitude speedup at scale, and more relevant top results because noise is pre-excluded.

### Query expansion / rewriting
One-shot LLM rewrite of user query before search. Example: user types "slow search" → LLM expands to "search performance, retrieval latency, slow queries, indexing speed". Then search with both original + expanded. Cheap (one Ollama-local call per query with a tiny model) and adds 10-15% precision on average.

### Model namespacing
Embeddings from different models have different dimensions (nomic=768, bge-m3=1024). They cannot be compared directly. Schema must include `model_name` per row. When swapping models, reindex under new namespace — old and new coexist during transition.

## DELIVERABLES

### 1. `~/.claude/hooks/embed.py` — CLI + Python module
Commands:
- `embed.py index <source> [--limit N]` — index a source (table name, file path, or glob). Respects chunking strategy. Writes to `embeddings` table with model namespacing.
- `embed.py query "<text>" [--category X] [--date-from Y] [--limit K] [--method hybrid|bm25|dense]` — hybrid retrieval by default. Returns top K chunks with source pointers + RRF scores + deduped (one chunk per source doc, best chunk only).
- `embed.py reindex [--model <name>]` — idempotent full rebuild under a model namespace. Walks all source tables.
- `embed.py expand "<query>"` — show query expansion output (for debugging).
- `embed.py benchmark` — runs the benchmark script (see deliverable 7).

Backend selection via `EMBED_BACKEND` env var (default `bge-m3`). Each backend is a Python class implementing: `embed_dense(texts)`, optional `embed_sparse(texts)`, `dims()`, `name()`.

### 2. FTS5 bm25() upgrade
Audit `local-search.py` and any other blub.db search entry points. Switch queries to `ORDER BY bm25(docs)` where currently using default rank. Add column weights where title/heading matters more than body (typical weight: `bm25(docs, 3.0, 1.0)` = title boosted 3x over body).

### 3. Schema additions to blub.db

```sql
CREATE TABLE embeddings (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    source_table    TEXT NOT NULL,
    source_id       TEXT NOT NULL,
    chunk_index     INTEGER NOT NULL,
    section_header  TEXT,
    char_start      INTEGER NOT NULL,
    char_end        INTEGER NOT NULL,
    token_count     INTEGER NOT NULL,
    content_hash    TEXT NOT NULL,
    content         TEXT NOT NULL,
    model_name      TEXT NOT NULL,
    vector_dense    BLOB NOT NULL,
    vector_sparse   TEXT,
    category        TEXT,
    source_date     TEXT,
    indexed_at      TEXT NOT NULL DEFAULT (datetime('now')),
    UNIQUE(source_table, source_id, chunk_index, model_name)
);
CREATE INDEX idx_embeddings_source ON embeddings(source_table, source_id);
CREATE INDEX idx_embeddings_category ON embeddings(category);
CREATE INDEX idx_embeddings_model ON embeddings(model_name);
```

### 4. Hybrid retrieval function with RRF

```python
def hybrid_search(query, k=10, filters={}):
    expanded = expand_query(query)
    bm25_hits   = fts5_search(expanded, k=30, filters=filters)
    dense_hits  = cosine_search(expanded, k=30, filters=filters)
    sparse_hits = sparse_search(expanded, k=30, filters=filters)
    fused = rrf_fuse([bm25_hits, dense_hits, sparse_hits], k=60)
    deduped = dedup_by_source_doc(fused)
    return deduped[:k]
```

### 5. Integration points
- **OC**: any skill or flow calls `python ~/.claude/hooks/embed.py query "..."` via Bash/shell-exec block
- **CC**: same script, also wire into `local-search.py` as a new tier (existing tiers stay — hybrid becomes the default tier with the others as fallbacks)
- **Dashboard**: expose `/api/search/hybrid` on blub-dashboard-v2 that wraps `embed.py query`, so the web UI benefits too

### 6. Idempotent reindex script
Walk every row in source tables (`knowledge`, `corrections`, `gap_analysis_reports`, `automation_flows`, anything else with searchable text). For each row: chunk content, embed every chunk, upsert by (`source_table`, `source_id`, `chunk_index`, `model_name`). Skips unchanged chunks via `content_hash` check.

### 7. Benchmark script
Takes 10 representative test queries (mix of exact-keyword, semantic, and proper-noun queries). Reports precision-at-5 for each method independently and hybrid-fused. Output:

```
| Query | BM25 only | Dense only | Sparse only | Hybrid RRF |
|---|---|---|---|---|
| "nomic embedding quality" | 3/5 | 5/5 | 4/5 | 5/5 |
```

Target: hybrid greater-than-or-equal to any single method on at least 8 of 10 queries.

### 8. Reindex trigger design
Add a simple watch: blub.db writes to `knowledge`/`corrections`/etc. trigger a debounced reindex of just the affected rows (not full rebuild). Implementation: add `embeddings_dirty` flag column to source tables, flip it on INSERT/UPDATE trigger, have a cron (every 5 min) call `embed.py reindex --only-dirty`. Cheap, near-realtime.

## APPROACH — session flow

Walk Bean through each step:

1. **Read current state** — blub.db schema, local-search.py, any existing search hooks
2. **Design review with Bean** — present schema + architecture, explain each choice in plain English, confirm before writing any code
3. **Benchmark FIRST** — write the benchmark script (deliverable 7) before anything else. 10 test queries covering the query types above. This is TDD for retrieval.
4. **Ship BM25 upgrade first** — switching FTS5 to `bm25()` is a 2-line change that gives measurable improvement immediately. Do this before embeddings. Run benchmark to prove it helped.
5. **Build the embedding layer** — schema, embed.py CLI, hybrid search, RRF fusion, dedup
6. **Initial reindex** — run `embed.py reindex` on existing blub.db content. Measure total time + total chunks.
7. **Run benchmark again** — prove each method independently + hybrid fused. Target: hybrid wins.
8. **Wire integrations** — local-search.py, dashboard endpoint
9. **Set up incremental reindex** — triggers + cron
10. **Teach Bean** — summarise what was built, show him the 3 query types (exact / semantic / hybrid), let him run a few queries live

## OUT OF SCOPE (do not build unless Bean asks)
- API-based embedding models (OpenAI, Gemini) — he wants local
- Multi-language indexing
- Re-ranking models (cross-encoder rerankers) — future upgrade, RRF is plenty for now
- Vector database migration (Qdrant, Chroma) — SQLite is fine at this scale

## START BY
Read blub.db schema (`sqlite3 path/to/blub.db ".schema"`) and local-search.py. Present a concrete design document to Bean before writing any code. Do NOT write anything until design is approved.
