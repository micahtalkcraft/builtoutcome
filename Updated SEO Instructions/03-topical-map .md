# 03. Topical Map

The planned graph of pages and segments. **A node is finished only when its entities,
attributes, heaviest term, queries, QDP score, page type, functional element, centerpiece
plan and social asset are all defined.** Anything less is a keyword list.

---

## 1. The strategy spine (decide before any URL)

| Input | What it is |
|---|---|
| **Source Context** | Site purpose + primary focus + how it makes money. The lens every topic is framed through |
| **Central Entity** | The one thing present on every page. Ideally Wikidata-resolvable |
| **Central Search Intent** | Source Context unified with Central Entity as the dominant need. Drives the predicates you densify |
| **Central Search Activity** | The real-world activity behind it (research → compare → book → attend) |
| **Semantic Brand Identity** | Founder, mission, staff, expertise, address, market position. Feeds 10 |
| **Heaviest term of the money query** | From 02 §2. Becomes the triple subject site-wide |

A single tight source context wins: ranking signal is finite across a site's topics and any
one site's SERP share is capped *(claim)*. Test every later topic idea against the spine.
Anything that cannot connect through a contextual bridge dilutes the source — and under the
decision tree (01 §3) irrelevant expansion can erase an earned ranking state, not merely
dilute it.

Expansion beyond the spine is only safe through a genuine **roof context**.

## 2. Choose the coverage mode

State this explicitly in the spine document:

- **Attribute mode** — process every attribute of the central entity. Use when the entity is
  singular and deep (one clinic, one product line, one service).
- **Template mode** — process every variation of a query template. Use when demand is spread
  across a repeatable pattern (`[service] in [city]`, `Can X cause Y?`, `flight ticket
  [location]`, `[brand] cruise line`).
- **Both** — the normal shape of a strong project. Attributes give depth; templates give the
  generalisation the decision tree rewards (01 §3).

## 3. Borders

- **Core section** — topics nearest mission and conversion. Most depth, most internal links,
  **flat URLs**.
- **Outer section** — minor and tangential attributes. Widens coverage, gathers the
  impressions that trigger re-ranking, funnels relevance to the core. **Nested URLs**.
- **Roof context** (optional) — the higher concept that would permit later adjacent expansion.
- **Will-not-cover list** — written explicitly, kept current. Ranking for irrelevant queries
  dissolves core relevance and risks the erasure path in 01 §3.

## 4. Expansion and filtering

Expand from the Central Entity in **exactly three directions**, and stop when you leave the
Central Search Intent:

1. More entities of the same type.
2. More attributes of existing entities.
3. Deeper context on one attribute.

Filter candidates with **RPP** — Relevance, Prominence, Popularity *of the attribute*. Never
filter by search volume; volume sequences the build, it does not decide inclusion. Include
zero-volume connective nodes that close gaps in the graph.

**Then run QDP (02) on every survivor.** RPP decides whether the topic belongs in the map.
QDP decides whether it gets a URL. They are different questions and both are required.

## 5. EAV per node

For each node, produce:

**5a. Attribute table**

| Attribute | Composite / simple | Direct / indirect | Single / multi-valued | Salience rank | Component that renders it |
|---|---|---|---|---|---|

**5b. Predicate and measurement table** — the form that actually feeds writing and schema:

| Entity | Predicate | Contextual phrase | Measurement unit or sign |
|---|---|---|---|
| Attorney | is certified in | personal injury trial law | Board certification (Y/N) |
| Attorney | has proven | track record of trial verdicts vs settling | Number of jury verdicts won |
| Law firm | maintains | low caseloads by refusing mass marketing | Active cases per attorney |
| Clinic | is accredited by | national health authority licensing | Accreditation body + licence no. |
| Hotel | is located within | walking distance of the old town | Metres to landmark |

Why this form: it forces a **measurable value** onto every attribute, which is what satisfies
numeric density (07 §5), gives schema real property values (07 §7), and gives the external
map something specific to claim (10 §6).

Grounding *(claim; phrase-based indexing)*: there are good and bad phrases to carry with
certain co-occurrences. **Exaggerating co-occurrence raises the Gibberish Score** — state each
relation once, well, with new information, rather than repeating it in variations.

**5c. Questions per prioritised attribute** — including predicate variants
("how does X work" / "how does X function" / "what does X do"), which return different AI
Overviews and different citations.

**5d. Component per priority attribute** — from the library in 05 §5.

## 6. The map matrix (run on money nodes before finalising)

Two layers, both required:

**Source types.** Chart which source types currently rank and with what angle. For
"PHP developer": a developer forum, a university page, a jobs site, a directory — each ranks
through a different source context, internal-link pattern and anchor language. Note category
quotas: where only N of your source type surface, name the type escape.

**Query themes.** From 02 §7: the themes the seed query splits into, which attributes each
theme weights, and which theme the current processing favours. Build the map to cover **every
plausible theme**, as sections, page types or supporting nodes, so a reinterpretation at the
next update does not require a rebuild.

Re-read the matrix after each core update. Adapt the map's emphasis, not its spine.

## 7. The map table (deliverable)

One row per node. Columns:

| # | Column | Notes |
|---|---|---|
| 1 | Node ID | |
| 2 | Section | core / outer / roof |
| 3 | Role | money / supporting / connective / quality node |
| 4 | Canonical query | best summative version after augmentation |
| 5 | Query network (top 5) | |
| 6 | **Heaviest term** | from 02 §2 — becomes the triple subject |
| 7 | **QDP score** | e.g. `3/4 (similarity fail)` |
| 8 | **QDP verdict** | own page / segment in [parent] / page (post-authority) |
| 9 | Dominant intent | |
| 10 | Augmented context | from 04 |
| 11 | Query theme(s) covered | from 02 §7 |
| 12 | Contextual bridge target | no orphans |
| 13 | RPP score | |
| 14 | Volume | sequencing only |
| 15 | Page type | against the live SERP's result-type mix |
| 16 | Layout pattern | blueprint name from 05 |
| 17 | Primary functional element | must be real and working |
| 18 | Centerpiece note | the ~400-character opening plan |
| 19 | Social asset | subreddit / YouTube / LinkedIn / none |
| 20 | **Quality node?** | Y = linked directly from the homepage (08 §2) |
| 21 | Conquest order | |
| 22 | Target attribution | the sentence you want AI answers to generate |
| 23 | Status | |

## 8. Social assets per node

Social channels are ranked surfaces and the brand is judged as a web entity across them
(10 §7). Treat them as map inventory, not marketing side work. Per node decide which gets a
subreddit thread, a YouTube video, a LinkedIn asset — alongside or instead of a page. Video is
weighted as non-commodity content in several industries; an active channel connected in Search
Console has produced click growth with no new uploads *(setting)*.

## 9. Network rules

1. One macro context per URL.
2. Every page connects via a contextual bridge; no orphans.
3. Core flat, outer nested, outer relevance flowing to core through in-content links.
4. Query-network borders symmetric with page borders.
5. Main attribute dense in the core; minor attributes in the outer.
6. The best answer is reserved for the canonical page; supporting pages give a partial answer
   plus a link.
7. Publish sub-topics first, biggest money topics last — unless inverting for runway (12 §4).
8. Maintain momentum; a half-built network underperforms a small complete one.
9. Include zero-volume gap-closers; exclude micro-query fragmentation; fold below-threshold
   groups into parents.
10. Information gain and a cluster-deviation plan on every page.
11. Consistent style and author identity across the network.
12. Each node's dominant intent satisfied above the fold.
13. Every node carries a real working functional element matched to its search activity.
14. Keep the will-not-cover list current.

## 10. Deliverables

1. One-page strategy spine (including coverage mode and heaviest term).
2. QDP scoring sheet (02 §8).
3. Topical map table (§7).
4. Map matrix for money nodes — source types and query themes (§6).
5. Per-node EAV sheet with the predicate/measurement table (§5).
6. Design-system note listing the component library the site needs (05).

## 11. Failure modes

Keyword list instead of an entity-and-intent graph. Two dominant contexts on one page. Micro-
query pages. Pages built for query groups that will never earn an index. A new vertical with
no roof. Volume as the inclusion test. Every node getting the same article template when the
SERP wants directories, tools and forums. Treating the map as finished when borders move at
updates. Skipping the post-update QDP and cannibalisation re-score.
