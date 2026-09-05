# 02. Query Deserves a Page (QDP)

**The gate every candidate URL passes through.** Nothing in this method gets a page before it
passes QDP. Named after Query Deserves Freshness; the logic is the same shape.

> Google asks: *should we construct an index for this query?*
> We ask: *should we create a page for this query?*
> **Whenever Google constructs an index, we create a page for that index.**

If you parse the query wrongly, you dilute ranking signals and cause micro-cannibalisation.
Every unnecessary page raises the cost of retrieval and lowers the signal per document.

---

## 1. The four metrics

Score each candidate query **1 or 0**:

| # | Metric | Approved when |
|---|---|---|
| 1 | **Search demand** | The query has real, sustained demand — not a theoretical combination |
| 2 | **Different entities** | The query introduces at least one entity the parent does not already own |
| 3 | **Low similarity** | The query is not dominated by the same highest-weighted term as its siblings |
| 4 | **Pattern** | The query carries a repeatable attribute set (price, review, problems, solutions, repair, maintenance, cost, near me, how to…), as interrogative queries or incomplete phrases |

**Verdict rule *(setting)*: 3 of 4 approved → own page. 2 or fewer → segment inside the
parent.**

Notes on how the metrics behave in practice:

- **Demand is a near-gate.** Without it you almost never reach 3.
- **Pattern is almost always approved** wherever a product, service or entity class carries
  standard attribute queries. It rarely decides anything on its own.
- **Low similarity is the metric that usually kills a page.** See §2.
- A candidate can pass on 3/4 with similarity failing — that is the normal shape of a
  cross-brand or cross-model page set.

### Worked verdicts

| Candidate set | 1 Demand | 2 Entities | 3 Similarity | 4 Pattern | Verdict |
|---|:--:|:--:|:--:|:--:|---|
| "Glock holster" | ✓ | ✓ | ✓ | ✓ | Own page |
| "Nylon Glock holster" | ✗ | ✗ | ✗ | ✓ | Segment under "Glock holster" |
| "Glock 19 / 20 / 21 holster" | ✗ | ✓ | ✗ | ✓ | One shared page |
| "Glock 18" vs "Glock 18X" | ✓ | ✓ | ✓ | ✓ | Separate pages |
| Cross-brand "[brand] 1911" set | ✓ | ✓ | ✗ | ✓ | Own pages (3/4) |
| "Direct flights to Istanbul" | ✓ | ✓ | ✗ | ✓ | Borderline — see §2 |
| "[service] [city] [subdistrict]" | ✗ | ✗ | ✗ | ✓ | Heading on the city page |
| "New York to Erzurum flights" | ✗ | ✓ | ✗ | ✓ | Segment; route has ~50 searches/year |

## 2. Query similarity is weighted, not string-based

Similarity is computed from **term weights**, informed by NLP — not string overlap. BERT
weights "Nike" above "running" and "shoes" in *Nike running shoes* (Bendersky & Najork,
end-to-end query term weighting).

**The rule that follows, and it governs the whole build:**

> The heaviest term in the query must be the heaviest term in the document — in its
> vocabulary, its triples and its annotations. **The heaviest term belongs in the subject
> position of the triples.**

If the heaviest term were different, the topical map, sentence structure and triples would all
change. So term weighting is done **before** the map, not after.

**The similarity failure pattern:** when the highest-weighted term appears in *every* query in
the candidate set, metric 3 fails for all of them. "1911" in a firearms model set. "Istanbul"
in *direct flights to Istanbul*. "Los Angeles" in *Los Angeles car accident attorney* — until
you know the weight of "Los Angeles", you cannot decide whether it deserves a page.

### How to find the heaviest term (working method)

No public tool exposes Google's weights. Use converging proxies and record the call:

1. **Term-removal SERP diff.** Search the full query, then remove one term at a time. The term
   whose removal changes the result set most is the heaviest.
2. **Title and H1 saturation.** Which term appears in nearly every ranking title? Heavy.
3. **Entity status.** Is the term a resolvable named entity (brand, model, city, person) with
   a Knowledge Panel? Named entities usually outweigh descriptors and modifiers.
4. **Autosuggest anchoring.** The term that stays fixed while others rotate in autosuggest is
   the anchor.
5. **Standalone vs compound demand.** A term with heavy standalone demand usually carries the
   weight in the compound.

Record the verdict as: `heaviest term = X (evidence: 1,3,4)`. It becomes the triple subject
in every brief for that node (06 §2).

## 3. Google's side: what triggers an index

Demand is not the only trigger. The engine can construct an index because of the nature of the
document cluster *(claim)*:

- **Index size** — the number of documents available for the query group.
- **Index PageRank** — the authority of the documents that would populate it. A high-PageRank
  source or existing topical authority can **force** an index to be constructed. This is why
  expansion nodes are planned as *post-authority* nodes, not pre-authority ones.
- **Index vocabulary** — a high-PageRank cluster with many URLs must have a **uniform
  vocabulary**. If vocabularies inside the cluster differ too much, Google may redistribute
  those documents to other existing indexes for other queries.

**Two vocabulary rules that look contradictory and are not:**

| Scope | Rule |
|---|---|
| **Inside your own cluster** (your pages on one query group) | Keep vocabulary **uniform**, so the cluster holds one index and does not get redistributed |
| **Against the competitors' ranking cluster** | Engineer measurable **distance** — unique terms, unique data, an uncommon component — so you are not read as a clone of the incumbent representative |

Uniform internally, deviant externally. State both in every brief.

## 4. What a "no" verdict becomes

A failed QDP is not a deleted topic. It is a topic represented at a smaller unit. Choose the
unit by what the query wants:

| Query wants | Represent as |
|---|---|
| A definition or distinction | A heading + definitional block on the parent |
| A comparison | A row in a comparison table, or a tab |
| An attribute value | A structured information card field, verbalised |
| A price or range | A price block / cost table segment |
| A task | A control inside the parent's functional component (filter, preset, tab) |
| An answer to a question | A single self-contained passage + FAQ entry |
| An experience | A forum thread on the forum subdomain, not a page on the money site |

All of these are **visual semantics** representations (05). The rule: *some queries deserve
representation at page level; others deserve it at heading, sentence, table, list, form,
calculator, converter or filter level.*

## 5. Duplication is query-specific, and some overlap is wanted

Two documents can read as exact duplicates, near-duplicates, or fully unique **depending on
the query** (Google's query-specific duplicate documents patent). Overlap is not purely a
liability:

- **Some overlap is required.** It is what relates documents to each other and justifies the
  internal link and its anchor text ("link description"). Two pages with zero shared context
  cannot legitimately link.
- **Above the threshold, they become near or exact duplicates** and the signal splits.

**Consequence:** engineer overlap deliberately. Target enough shared context to justify the
link, not enough to merge the documents. If you open a page set, the answer to *"can we reuse
the same templated sentences, paragraphs, lists, tables, images and structured data?"* must be
**no** — otherwise the QDP verdict was wrong and you should have built segments.

Working boilerplate ceiling: content similarity under ~6% *(setting)*.

## 6. Diagnostics — how to see your own duplication the way Google does

| Diagnostic | How | Reads as |
|---|---|---|
| **Programmable Search Engine** | Build a PSE restricted to your own site; query the canonical term | How Google prioritises *your* pages against each other for that query |
| **PSE + competitors** | Add 3+ competitor domains to the same PSE | Relative prioritisation — the site Google evaluates more favourably supplies most of the first 20 results |
| **`site:domain intitle:[term]`** | Sweep the term across your own index | Surfaces near-duplicate title clusters instantly |
| **GSC Pages report** | Read "Crawled — currently not indexed" and "Discovered — currently not indexed" | See below |
| **Relevance confusion test** | Ask: for `cancer`, `cancer symptoms`, `cancer treatment Istanbul` — which single page of ours is most relevant? If you cannot answer, Google cannot either | Micro-cannibalisation |

**"Discovered — currently not indexed" is the single most important quality signal in GSC**
for any project, local or location-agnostic. It means Google saw the URL and decided it was
not worth the crawl. Large "Crawled — currently not indexed" segments mean it looked and found
nothing unique enough to deserve an index. Treat both as the headline number in any audit
(09 §3, 12 §5).

## 7. Query themes: one query, several indexes

Google classifies documents by **query theme** and generates a **different set of ranking
criteria for each theme** *(claim; layout-aware document understanding patent)*. For some
themes popularity is weighted heavily; for others relevance or quality carries more.

A source that ranks across **every theme and context** of a seed query gains higher topical
authority than one that ranks in a single theme. For *electricity*: supply, safety, physics,
tariffs, providers, careers. For *best milk*: nutrition, allergy, taste, price, sustainability
— asking about allergy triggers a different theme with different criteria.

**Method — extract the themes and their attributes:**

1. Ask Google AI Mode: *"What are the most important attributes for [occupation / product /
   service] in [location]?"* → returns the attribute set.
2. Ask: *"What are the best [service providers] in [city] based on [attribute], [attribute],
   [attribute]?"* → returns the item list for that theme.
3. **Change the attribute combination and re-ask.** A different combination makes Google check
   a different index, with different criteria and often a different item list.
4. Automate steps 2–3 across combinations. Record which attributes move the list.
5. Align the map, the on-page EAV statements and the external topical map (10 §6) to the
   attribute combinations that decide selection.

Record per money node: the themes, the attributes each theme weights, and whether you cover
the theme as a page, a section or not at all. This feeds the map matrix in 03 §7.

## 8. QDP scoring sheet (deliverable)

One row per candidate query. This attaches to the topical map.

| Candidate query | Parent node | Heaviest term | Evidence | 1 Demand | 2 Entities | 3 Similarity | 4 Pattern | Score | Verdict | If segment: unit + location | Notes |
|---|---|---|---|:--:|:--:|:--:|:--:|:--:|---|---|---|

Rules for filling it:
- Never leave "heaviest term" blank. It drives the triples.
- "If segment" must name the exact unit (H2, card field, tab, FAQ, table row) and the parent
  URL. A segment without a home is a page in disguise.
- Post-authority nodes: mark verdict as `page (post-authority)` with the trigger condition
  (e.g. "reopen when the parent holds top-3 for its canonical query").
- Re-score the whole sheet after every core update. Topic boundaries move.

## 9. Failure modes this file prevents

- A page for every city × service × district combination that no query deserves.
- A page for every product model where one heavy term dominates the whole set.
- Route, itinerary, parameter and filter pages generated combinatorially.
- Pages for locations that do not have the thing being searched (cities with no airport).
- Deciding page-worthiness on search volume alone, or on keyword-tool difficulty.
- Deciding it on string similarity instead of weighted similarity.
- Treating the QDP sheet as a one-off rather than a document re-scored at every core update.
