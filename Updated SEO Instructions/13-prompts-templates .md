# 13. Prompts, Templates, Checklists

The working layer. Prompts (A) are written to be pasted. Templates (B) are fill-in structures.
Checklists (C) restate owner-file rules for QA — if a checklist ever disagrees with an owner
file, the owner file wins.

---

## A. Prompts

**A1. Strategy spine.**
> "Using 01 and 03: from this business description [paste], derive Source Context, Central
> Entity, Central Search Intent, Central Search Activity, semantic Brand Identity, coverage mode
> (attribute / template / both), core section, outer section, candidate roof context, and a
> will-not-cover list. Flag any topic idea that lacks a contextual bridge. Output as the
> one-page spine."

**A2. Heaviest-term analysis.**
> "Using 02 §2: for the query [Q], determine the heaviest term. Run all five proxies —
> term-removal SERP diff, title/H1 saturation, entity status, autosuggest anchoring, standalone
> vs compound demand — and state which evidence supports the verdict. Then state what this means
> for the triple subject, the heading vector and the map's emphasis. If you need SERP data I
> cannot see, tell me exactly what to pull."

**A3. QDP scoring.**
> "Using 02: score these candidate queries [paste list] against the four metrics — search
> demand, different entities, low similarity, pattern. For each: state the heaviest term and its
> evidence, score each metric 1/0, total the score, and give the verdict (own page / segment in
> [named parent] / page post-authority with its trigger condition). For every segment verdict,
> name the exact unit — H2, card field, tab, FAQ entry, table row — and the parent URL. Output
> as template B1. List anything you could not score and what data you need."

**A4. Topical map.**
> "Using 03 (with 02 for QDP and 04 for page types): build the topical map for [niche] from this
> spine [paste]. Expand in the three directions only; filter with RPP; run QDP on every survivor;
> give every node the full B2 row including heaviest term, QDP score and verdict, query themes,
> page type against the live SERP's result-type mix, primary functional element, centerpiece
> note, social asset, quality-node flag, conquest order and target attribution. Add the map
> matrix (source types + query themes) for the money nodes. Mark post-authority nodes. List
> prune / merge / fold candidates separately."

**A5. Node EAV.**
> "Using 03 §5: for entity [X] in source context [Y], produce the attribute table
> (composite/simple, direct/indirect, single/multi-valued, salience rank), the predicate and
> measurement table (B4 — every attribute must arrive with a measurement unit or sign), the
> questions each priority attribute generates including predicate variants, and the component
> each priority attribute should get."

**A6. Query augmentation table.**
> "Using 04: for node [X] with canonical query [Q], produce the augmented set (minimum 8
> interpretations for a money node) and then the full augmentation table — augmented query,
> owning component, triples with the heaviest term in subject position, named entities. Order
> rows by augmentation importance; that order becomes DOM order. Identify which row is the
> centerpiece augmentation. Cross-check coverage against the query themes in 02 §7."

**A7. Page type assignment.**
> "Using 04 §3 and the live SERP for [Q]: read the result-type composition, name the source
> types ranking and their angles, check the category quota for our source type, and assign the
> page type and blueprint (05 §9). If the quota is full, name the type escape. State which one or
> two templates to bind together for this node."

**A8. Page blueprint.**
> "Using 05: from this augmentation table [paste], produce the ATF→BTF block order for [node].
> For each block: name, which augmentation or attribute it serves, relative size, content type
> (factual/opinionated, structured/unstructured), technique (visualise/verbalise/commercialise/
> contextualise), zone (macro/micro), link zone yes/no. Mark the centerpiece, the macro/micro
> boundary, the real functional element, the cluster-deviation component that competitors
> lack, and any deliberate insulating boundary between a factual and an opinionated block
> (05 §7). Output as template B6."

**A9. Content brief.**
> "Using 06 §1 (with 02, 03, 04, 05, 07): write the full brief for node [X]. Every field in B5,
> nothing left blank. Include the heaviest term and its evidence, the augmentation table, the
> centerpiece block, the cluster definitional set from the A23 harvest, the ATF/BTF component
> plan with per-heading components, the heading vector with layer tags, the EAV plan with
> measurement units, the triples list with direction, the cluster-deviation note, the vocabulary
> discipline note (uniform with siblings / distant from competitors), FS targets with no bridge
> words, the qualifier disambiguation list, the transformation-cost passage shaped to the live AI
> answer, the internal-link plan, the image plan, the attribution block with the fixed attribute
> values, blacklist version, position in production, schema and word range."

**A10. Write from brief.**
> "Using 06 (layers §3, safe answers §4, micro-rules §5) and 07: write section [heading] from
> this brief [paste]. Facts layer unless tagged otherwise. Entity-first definition, then the
> predicate sentence, then the 'the X of Y' attribute. Heaviest term in subject position.
> Front-load the answer with a shared trigram. One new fact per sentence with inline citations.
> Pair every measurement unit with a number. Exactly one answer to each question — no competing
> unconditioned values. No modal verbs, no bridge words in FS or answer blocks, no sentence
> starting with 'if', no colon-fragment sentences. End with a bridge sentence into
> [next heading]. Obey blacklist set [version]."

**A11. Heading vector.**
> "Using 07 §2: for node [X] with this augmentation table [paste], produce the heading vector —
> title, H1, H2s, H3s — reading as one journey. Per heading: the clustered questions it answers,
> its format (list/table/definition/steps/cards), the component that renders it, its layer tag,
> and the entity it links to if it names one. Confirm no heading repeats information from
> another, and that the required answer unit sits in the high-weight zone."

**A12. Schema.**
> "Using 07 §7: for [URL / page type] with these named entities [paste from the augmentation
> table], produce the JSON-LD as a single `@id` mini-graph. Include the correct page-type
> entities, the Action type for the page's real functional element, author/organisation
> references, and LocalBusiness with address, hours, geo and areaServed if this is a location
> page. Every property must be supported by content visible on the page — flag anything the
> content does not yet state."

**A13. Internal link plan.**
> "Using 08: produce the internal-link plan for [node]. Name 3–10 in-content links with target
> URL, anchor, the annotation sentence that precedes each anchor, and the alignment-chain check
> (source heading → source title → target title). Use exact-match anchors for locality targets
> and varied anchors for topical targets. No anchor in the first paragraph. Confirm which links
> route back to quality nodes and whether this page belongs in the topical entry grid."

**A14. Page audit.**
> "Using 02, 05, 06, 07, 08: audit [URL] for query [Q]. Report: QDP verdict — does this query
> deserve this page at all; heaviest term alignment; centerpiece alignment with the augmented
> query and first-400-character cleanliness; first ~2% token check on long pages; macro/micro
> split and DOM order; real functional element present and working; component inventory vs top 3
> competitors plus one cluster-deviation opportunity; heading vector coherence; answer position
> and answer-unit presence; answer exclusivity — is there exactly one answer per question, or
> competing unconditioned values (06 §4); numeric claims inside the truth range the wider web
> supports; snippet candidates (trigram, no bridge words, predicate variants); co-occurrence
> pairs sharing a parent container, with no computed relation straddling a component boundary,
> and any factual/opinionated pair correctly insulated; numeric density and measurement units vs
> competitors; structured + unstructured duplication; internal-link anchors on the alignment
> chain; schema completeness; refresh status. Order fixes by expected impact."

**A15. Site audit.**
> "Using 12 §5 (with 02, 08, 09): audit [domain]. 1) Reconstruct the projected spine and contrast
> with the intended one. 2) Read the technical headline numbers first — Discovered-not-indexed,
> Crawled-not-indexed, crawl KPIs, no-JS render test, parameter URLs, forgotten subdomains.
> 3) Inventory URLs into the classification table including page-type-as-built vs
> page-type-the-SERP-wants, and record the branded:informational ratio. 4) Re-score QDP across
> the whole inventory. 5) Sort into the eight buckets. 6) Produce the subtraction-first plan
> (prune → merge → reformat → fix → fill) with one decision and one owner per URL, noting
> Google's memory lag. 7) Internal-link audit starting with the homepage. 8) Roadmap in payback
> order with the measurement plan."

**A16. Technical pass.**
> "Using 09: for [domain], produce the technical fix list (B9). Cover the four crawl KPIs, the
> Discovered/Crawled-not-indexed segments, the no-JS render test result, parameter and faceted
> URLs, temporary pages needing `unavailable_after`, forgotten subdomains, status codes and
> canonical elections, sitemap chunking, robots policy (Googlebot gate status, AI crawler
> allowances, data-nosnippet scope), size and DOM targets, and hreflang hygiene if international.
> Name which of the five costs each finding inflates and order by that."

**A17. Attribute extraction (AI Mode method).**
> "Using 02 §7: for [occupation/service] in [location], run the attribute extraction. 1) What are
> the most important attributes? 2) For each of these attribute combinations [list], what are the
> best providers? 3) Which attributes change the item list, and what does that tell us about
> which themes carry which criteria? Output the attribute set ranked by influence on selection,
> and map each to where it should be stated on-site and which third-party surface should
> corroborate it."

**A17b. Comparative attribute extraction.**
> "Using 02 §7 and 10 §5: ask AI Mode and two independent assistants '[Brand X] vs [Brand Y] —
> what are the most important attributes to compare them on?' and record the reasoning each one
> gives, not only the verdict. Then re-ask the comparison with three attributes named at a time,
> rotating the combination, and record how the verdict moves. Output: the attributes that
> actually decide the comparison, ranked by how much they move the answer, and for each one the
> value we currently claim, the value the competitor claims, and where each is corroborated."

**A18. External topical map.**
> "Using 10 §6 (with 02): for [brand] and money queries [list], design the external topical map.
> For each planned placement: the topic and its QDP verdict on its host, the host domain and the
> host's own subject, the alignment check in both directions, the anchor and the annotation text,
> the target URL, the specific attribute being claimed and the exact value claimed, and the
> expected ranking status of the source page. Repetition of one topic across several aligned
> hosts is intended — do not deduplicate it. Confirm the hosts align with each other as a graph,
> and that one value per attribute is held across every placement. Flag anything that would fail
> the genuine-and-editorial guardrail, including any host we would own. Output as B7."

**A19. Local project setup.**
> "Using 11 (with 02, 03): for [business], identify the local situation (A/B/C/D), then produce:
> the most important location-service pair and the page that targets it; the network shape
> ('near me' root, concept page, city pages, store pages); the QDP verdicts on every location
> candidate with segment homes for the failures; the page type per query class; the GBP
> integration plan; the store/office page verbalisation checklist; and the external topical map
> direction. Name the local failure modes present today."

**A20. Launch plan.**
> "Using 12 §2 (with 09): for [new site / new section], produce the launch-gate plan: robots
> block scope from day zero with the SSL-certificate caution, the 80–150 document build list with
> the ~20 homepage-linked quality nodes marked, the dark-phase distribution plan, the technical
> floor checklist, the open date relative to the core-update calendar, and the randomised ramp
> schedule inside the velocity ceilings. For a section launch, verify the two preconditions first:
> contextual bridge and query-path evidence."

**A21. Recovery selector.**
> "Using 12 §8 (with 10): given this situation [update history, GSC patterns, indexation state,
> branded:informational ratio, monetisation model, topic mix, render test result], select the
> first move from the recovery table, state what evidence would confirm it is working and by when
> in core-update units, and list the standing-posture items to hold."

**A22. Quality review.**
> "Using 06: review this draft [paste] against checklist C1. Flag delayed answers, modal verbs in
> factual blocks, bridge words inside answer blocks, missing inline citations, repeated
> information across headings, verbatim restatements, entity stuffing without relations,
> undisambiguated qualifiers, measurement units without numbers, competing unconditioned answers
> to one question, numeric claims outside the plausible truth range, blacklist violations
> [set/version], and sentences that fail the trim test."

**A23. Definitional-phrase harvest.**
> "Using 06 §3: for the concept set [list] in [niche], run the definitional harvest. For each
> concept, search the definitional stems in quotation marks — `\"[concept] is\"`,
> `\"[concept] means\"`, `\"[concept] requires\"`, `\"[concept] costs\"` — and collect the
> definitional sentence from every page ranking for that stem. Output per concept: the harvested
> set with its source URLs; the terms and framings appearing in nearly every result (table
> stakes, must be present in our opening); the terms and framings appearing in none
> (information-gain candidates, at least one goes in our opening); and the measurement units the
> cluster uses, with the numeric density we need to beat. Do not draft a definition from the
> fragments — this is brief input, and assembling from it produces the cluster average. Tell me
> which searches you could not run and what to pull manually."

---

## B. Templates

**B1. QDP scoring sheet.**
`Candidate query | Parent node | Heaviest term | Evidence | 1 Demand | 2 Entities | 3 Similarity |
4 Pattern | Score | Verdict | If segment: unit + parent URL | Post-authority trigger | Notes`

**B2. Topical map table.**
`Node ID | Section | Role | Canonical query | Query network (top 5) | Heaviest term | QDP score |
QDP verdict | Dominant intent | Augmented context | Query themes | Bridge target | RPP | Volume
(sequencing only) | Page type | Layout pattern | Primary functional element | Centerpiece note |
Social asset | Quality node? | Conquest order | Target attribution | Status`

**B3. Augmentation table.**
`# | Augmented query | Visual semantics (component) | Triples (S–P–O) | Named entities`

**B4. Predicate and measurement table.**
`Entity | Predicate | Contextual phrase | Measurement unit or sign`

**B5. Content brief.**
`Node + canonical query | Heaviest term + evidence | QDP verdict | 5 variations + augmented
context | Query themes | Page type + layout pattern + mockup link | Centerpiece block (answer
≤55 words + functional element + first-400 plan) | Cluster definitional set (table stakes /
information-gain candidates) | Augmentation table | ATF/BTF component plan + per-heading
component | Content-type distribution | Heading vector with layer tags | EAV plan with
measurement units | Triples to state + direction | Cluster-deviation note | Vocabulary
discipline (uniform with / distant from) | FS targets ≤40 words, no bridge words | Qualifier
disambiguation list | Transformation-cost passage | Internal-link plan | Image plan | Attribution
+ external-claim block with fixed attribute values | Blacklist set + version | Position in
production | Schema (types, Action, author) | Word range | Sources to cite`

**B6. Mockup spec.**
Per block ATF→BTF: `Block name | Purpose (augmentation or attribute served) | Relative size |
Content type | Technique | Zone (macro/micro) | Link zone (Y/N)`.
Mark: centerpiece · macro/micro boundary · the real functional element · the cluster-deviation
component · every deliberate insulating boundary between factual and opinionated blocks.

**B7. External topical map tracker.**
`Date | Frequency | Topic | Topic's QDP verdict on its host | Host domain | Host's own subject |
Anchor | Annotation text | Target URL | Attribute claimed | Value claimed | Document quality |
Aligned with host? | Aligned with target? | Source page ranking status`

**B8. Internal link audit.**
`URL | Current internal inlinks | Desired internal inlinks | Anchors to add | Anchors to change |
Links to remove | Quality node? | Owner`

**B9. Technical fix list.**
`# | Finding | Which of the five costs | Evidence | Fix | Owner | Priority`

**B10. Verbalisation matrix (per card type).**
`Card type | Declarations | Facts | Claims | Actions`

**B11. Definitional harvest sheet.**
`Concept | Stem searched | Ranking URL | Definitional sentence | Table-stakes terms | Terms absent
from the whole cluster | Measurement units used | Numeric count to beat`

---

## C. Checklists

**C1. Content QA (pre-publish).**
1. The query deserves this page (QDP verdict recorded).
2. Answer to the canonical query inside the first ~400 characters; critical entities inside the
   first ~2% of tokens on long pages; the wider six-to-seven-sentence band free of boilerplate
   and digression (05 §1).
3. Opening states the procedure, not only the definition: at least one of conditions,
   required documents or inputs, cost or range, first step, duration (01 §5, 06 §4).
4. Heaviest term occupies the triple subject position throughout.
5. First two sentences dense in predicates, adjectives and numbers; shared trigram with the
   target question.
6. One macro context; heading vector reads as one journey; no repeated information across
   headings.
7. Three-sentence factual order where a concept is defined; opinionated blocks deliberately
   unstructured.
8. No modal verbs in factual/YMYL answers; layered Boolean structure; negative answers stated
   plainly.
9. No bridge words inside FS-marked and answer blocks; section-end bridge sentence present.
10. Qualifiers disambiguated per the brief's list.
11. Cluster-deviation note satisfied: at least one unique attribute, data point or component.
12. Vocabulary uniform with sibling pages; measurably distant from the competitors' cluster.
13. Every fact and percentage carries an inline source. No orphan claims.
14. Every measurement unit paired with a number; density 2–3× competitors.
15. Key facts stated in prose and one structured form, never verbatim-repeated.
16. Triples stated in both directions with new information each time; no entity stuffing; no
    exaggerated co-occurrence.
17. Trim test passed; no filler survives.
18. Anchors on the alignment chain; exact-match for geo, varied for topical; none in the first
    paragraph.
19. Schema present and supported by visible content; Action type mapped.
20. Images engaging, verbalised, defect-free, licensed.
21. **One answer per question.** No competing unconditioned values for the same attribute;
    variants stated behind their conditions (06 §4).
22. **Numeric claims sit inside the truth range** the wider web supports; an outlier is either
    conditioned, sourced and explained, or dropped (06 §4).
23. **Definitional opening measured against the harvested cluster set** (06 §3): every
    table-stakes term present, at least one information-gain term the cluster lacks, and no
    phrasing lifted from the harvest.

**C2. Visual and design QA.**
Centerpiece first in DOM and clean · macro/micro boundary correct · DOM order = visual order ·
component per priority attribute · **one real working functional element as a full component,
never a button, never imitated** · functional element renders above the fold at **every
breakpoint the site ships** · structured information cards where an entity class repeats ·
verbalisation matrix filled · money terms inside the dominant element · co-dependent terms close
on pixel/letter/byte distance **and inside one parent container**, no computed relation
straddling a component boundary · **component boundaries drawn deliberately: relations to be
computed share a container, blocks to be insulated (a factual and an opinionated answer to one
question) sit in different parents with different backgrounds** · every trust logo verbalised
with its body, holding entity and licence number · engagement infill in micro context only ·
mega-menus and clutter absent · at least one component the ranking cluster lacks · any
vote-ordered or user-fed component carries each item's differentiator in text · mockup matches
build.

**C3. Technical QA.**
Five-costs diagnosis named for every finding · HTML crawl share ≥99% · 200+304 ≥99% · discovery
>20% · 100% of HTML crawls to indexable, self-canonical, sitemap-and-internally-linked 200s ·
server response <100ms · Discovered- and Crawled-not-indexed at zero and read as the headline
numbers · no-JS render test passed on ten template pages · no iframe-only main content ·
parameters removed or made non-crawlable · `unavailable_after` on genuinely temporary pages ·
subdomains audited (removed, redirected or disallowed) · 404→410, 302→301, all internal links
resolve 200 · one canonical query per page · sitemaps chunked 400–1,000 by topic · robots policy
deliberate (Googlebot gate status, AI crawlers allowed, data-nosnippet only on personalised zones
≤10%, never headings) · HTML ≤~700KB, DOM <~900, key tags in first ~1,460 bytes · URL stability
preserved and memory lag priced in · hreflang byte-identical, triple-level translation.

**C4. Authority and web entity QA.**
Entity home current; NAP consistent; brand SERP dominated · **site name reviewed as a lever** ·
KGMID audit run, duplicates consolidating · 3–5 source terms chosen and drummed · one expert per
topic, expression identity consistent, no fake authors · author A/B run before funding author ops
· external claims pre-assigned attribute-per-platform, placements genuine and editorial · **no
host in the map owned by us** · **external topical map tracked in B7, source pages actually
ranking, hosts aligned with each other, topic repetition across hosts deliberate rather than
deduplicated, and one value per attribute held across every placement** · awards and recognition
entered, with the resulting pages naming the brand in text · original statistics or survey data
published from real first-party sources, never fabricated · channels verified and connected in
GSC · active YouTube · social assets built per map column · quoted co-occurrence benchmarked ·
**cited-corpus count pulled per money prompt and used to size the mention programme** ·
About-this-result attributes to the entity · indexed-social footprint tracked · new URLs routed
through social at publish · subreddits created not bought, matured ~3 months · backlinks valued
by traffic, anchors branded-first, no panic removal · quarterly re-amplification of money
attributions · flagship document per money topic · branded:informational ratio recorded.

**C5. Local QA.**
Situation (A/B/C/D) identified · most important location-service pair targeted from the homepage
· GBP website field pointed at that URL · site name / domain amplification considered · "[term]
near me" root exists · location-agnostic concept page exists and links down to location pages ·
QDP run on every location candidate, sub-districts folded as segments with named units · page
type per query class assigned; one or two bound per node · GBP embedded on its own matching page
per location · GBP fields in sync with on-site service statements · store pages carry a real
booking/quote/directions function · full verbalisation checklist complete per store page ·
exact-match geo anchors with context · topical entry grid to quality nodes at the foot · no
parameterised filter URLs indexable · no forgotten subdomains · reporting notes that Ahrefs
excludes GBP rankings.

**C6. Launch gate QA.**
Googlebot blocked from day zero, block scope correct · SSL-certificate discovery caution observed,
nothing private on a live cert · 80–150 documents complete · best ~20 marked as quality nodes and
homepage-linked · dark-phase distribution running · technical floor met · open date set against
the core-update calendar · ramp randomised inside the 50–70/day ceiling post-maturing · for
section launches: contextual bridge and query-path evidence documented · no burst at any brand
strength.

**C7. AI production QA.**
First 30–40 documents fully human, exemplar corpus attached · blacklist sets versioned and
enforced · short single-meaning sentences · ≤30% AI per document, human effort >70% ·
competitor-union coverage +20–30%, never 3× · new domain or subfolder matured 3–4 months before
scaling · randomised cadence toward a 7–8 month completion, no metronome, no burst · code
de-clustered (class names, DOM, custom CSS) · no SaaS originality score trusted in either
direction · ~60/40 new-to-updating ratio held · no mass-published AI blog articles.

**C8. Post-core-update QA.**
QDP re-scored across the inventory · cannibalisation re-audit run even where nothing changed
on-site · map matrix re-read (source types and query themes) · crawl KPIs re-checked · winner-vs-
loser feature matrix built for affected query sets · change log dated and consulted before
crediting any fix · volatility swaps ignored · judgment made at update boundaries, not calendar
weeks.

---

## Claude usage note

At the start of any job, state which files you are applying per the deliverable index in 00 §2,
then work from the owner files. **Never assign a URL to a query before running QDP (02).** Keep
tag discipline in every output: untagged, *(setting)*, *(claim)*. Where a request breaches a hard
prohibition (01 §7), name the breach and give the clean alternative. Where a checklist and an
owner file differ, the owner file wins; where two owner files seem to differ, 01 wins on
principle and the more specific file wins on procedure. Ask for the SERP, GSC, crawl or log data
you need rather than assuming it.
