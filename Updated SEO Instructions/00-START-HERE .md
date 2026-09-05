# 00. Start Here

Production knowledge base for building topical authority on new and existing websites.
Method: Koray Tuğberk GÜBÜR's Semantic SEO, consolidated to **July 2026** with an **August 2026
revision pass (§8)**, and the "Query Deserves a Page" framework as the spine.

This set is **operational**, not theoretical. Every file exists to produce an artefact:
a topical map, a QDP verdict, an augmentation table, a page blueprint, a brief, headings,
schema, an internal-link plan, a crawl fix list, an external map, an audit.

Primary goal: rank in Google Search (AI Overviews and AI Mode run on the core index, so
they are the same job). Secondary goal: citation in independent LLM answers.

---

## 1. Tag key

- **Untagged** — corroborated practice. Apply without hedging.
- ***(setting)*** — a specific number from the method's own projects. A sound default;
  benchmark against the live SERP before treating it as law.
- ***(claim)*** — an unconfirmed model of engine internals (patents, the 2024 Content
  Warehouse leak, DOJ exhibits, practitioner theory). Use it to prioritise work. Never
  state it as fact in client-facing output. Never bet a strategy on it without a test.

## 2. What produces what

| I need to produce… | Load |
|---|---|
| Strategy spine | 00, 01, 03 |
| Topical map | 00, 01, 02, 03, 04 |
| QDP verdict on a query set | 00, 02 |
| Query augmentation table | 00, 02, 04 |
| Page type assignment | 00, 02, 04, 05 |
| Page blueprint / mockup | 00, 04, 05 |
| Content brief | 00, 03, 04, 05, 06, 07 |
| Written content | 00, 06, 07 |
| Headings / heading vector | 00, 04, 06, 07 |
| Featured-snippet + AI passages | 00, 06, 07 |
| Schema / JSON-LD | 00, 07 |
| Internal linking plan | 00, 08 |
| Technical fix list | 00, 09 |
| Off-site / entity / external map | 00, 10 |
| Local SEO project (any type) | 00, 02, 11, plus the artefact's row above |
| Site audit | 00, 01, 02, 08, 09, 12 |
| Launch plan | 00, 09, 12 |
| Recovery plan | 00, 10, 12 |
| Prompts, templates, checklists | 13 (always available) |

## 3. File map

| File | Owns |
|---|---|
| `00-START-HERE.md` | Tags, deliverable index, load orders, project instructions |
| `01-decision-rules.md` | The model compressed to decisions; hard prohibitions |
| `02-query-deserves-a-page.md` | QDP scoring, term weighting, similarity, index economics, query themes |
| `03-topical-map.md` | Spine, borders, expansion, EAV, the map table |
| `04-query-augmentation.md` | Augmentation table, page types, prune/merge/fold |
| `05-page-blueprints.md` | Centerpiece, macro/micro, components, cards, per-type blueprints |
| `06-briefs-and-writing.md` | Brief template, triples, writing layers, micro-rules, AI production |
| `07-onpage-schema.md` | HTML, heading vectors, snippets, schema, refresh |
| `08-linking-architecture.md` | Homepage quality prediction, anchors, geo exception, link plans |
| `09-technical.md` | Cost of retrieval, crawl KPIs, rendering, parameters, robots |
| `10-offsite-authority.md` | Entity home, site name, external topical map, web entity, links |
| `11-local-playbook.md` | The four local situations and their architectures |
| `12-execution-audit.md` | Build sequence, launch gate, velocity, audit, testing, recovery |
| `13-prompts-templates.md` | All prompts (A), templates (B), checklists (C) |

Every rule has one owner file. Checklists restate but never diverge. If a checklist and an
owner file disagree, the owner file wins. If two owner files seem to disagree, `01` wins on
principle and the more specific file wins on procedure.

## 4. The order of operations (never varies)

1. **Spine** — source context, central entity, central search intent and activity (03).
2. **Candidate queries** — three-direction expansion, RPP filter (03).
3. **QDP** — score every candidate. Page, or segment inside a parent? (02) **Nothing gets a
   URL before this step.**
4. **Augmentation** — expand each surviving node into its augmented set; build the
   augmentation table (04).
5. **Page type** — assign against the live SERP's result-type mix and quotas (04).
6. **Blueprint** — mockup with centerpiece, macro/micro, components per attribute (05).
7. **Brief** — every field filled, mockup attached (06).
8. **Write → HTML → schema → links** (06, 07, 08).
9. **Technical floor + launch/ramp** (09, 12).
10. **Off-site and external map, in parallel from day one** (10).

Skipping step 3 is the single most expensive mistake in this method. It produces
micro-cannibalisation, dilutes ranking signals across near-duplicates, and raises the cost of
retrieval on every page that follows.

## 5. Project custom instructions (paste into the Claude project)

```
Knowledge base: files 00-13 are a single consolidated production method, current to
August 2026. At the start of any job, state which files you are applying per the
deliverable index in 00 §2, then work from the owner files.

Never assign a URL to a query before running the QDP score in 02. State the score and
the verdict (own page / segment in parent) for every node you propose.

Keep tag discipline in all output: untagged = corroborated practice; (setting) = a
number from the method's own projects, benchmark against the live SERP;
(claim) = unconfirmed model of engine internals, use to prioritise, never state as
fact in client-facing output.

Hard prohibitions (01 §7) are absolute: never imitate or fake functionality (build the
real working component or nothing), never fake freshness or document age, no
inauthentic mentions, reviews, accounts or manufactured UGC, never serve Google and
users different content, no burst publishing at any brand strength, never open
near-duplicate pages and trust the engine to disambiguate. If I ask for something that
breaches one, name the breach and give the clean alternative.

Deliverables use the templates in 13. Ask me for the live SERP, GSC or crawl data you
need rather than assuming it.
```

## 6. What changed in this edition

Folded in from the July 2026 local/topical-authority case study, which is authoritative
where it differs from anything older:

- **QDP replaces the old "index verdict"** as a scored, four-metric test (02).
- **Query similarity is weighted by term importance, not string overlap**; the heaviest
  query term becomes the subject of the document's triples (02, 06).
- **Query augmentation and query fan-out are one mechanism**, not two (04).
- **The homepage targets the most important location-service pair** as a default for local,
  and homepage internal links are how Google predicts site quality (08, 11).
- **Site name is an editable ranking lever**, separate from the domain (10).
- **The external topical map** is formalised as a parallel deliverable (10).
- **Crawl KPIs tightened**; "Discovered — currently not indexed" promoted to the headline
  quality diagnostic (09).
- **`unavailable_after`, parameter handling, forgotten subdomains** added (09).
- **Local gets its own playbook** covering four distinct project situations (11).

## 7. Addendum: visual-semantics pass (July 2026)

Eight rules added from the visual-semantics material. Owner files as listed; the 13 checklists
restate them without diverging.

| # | Rule | Owner |
|---|---|---|
| 1 | Component boundaries can cut co-occurrence to zero; proximity is a gradient inside a container and a cliff across one | 05 §7 |
| 2 | Click tests are dosed as share of day, not position; sample occupancy hourly on money queries | 12 §6, §9 |
| 3 | AI citation is gated on classic ranking: document → passage → citation. No separate AI Overview workstream | 07 §3 |
| 4 | Size the LLM mention programme against the cited-corpus count per money prompt | 10 §10 |
| 5 | Trust logos get verbalised (body, holding entity, licence number) or removed; QRG "deceptive use of logos" | 05 §6 |
| 6 | Responsiveness has a textual half: procedure, not only definition | 01 §5, 06 §4 |
| 7 | The centerpiece functional component must render above the fold at every breakpoint | 05 §3 |
| 8 | Superlative and "near me" queries want a ranked set; supply it first-party as the type escape | 04 §3 |

**Deliberately not adopted**, and still prohibited under 01 §7 and the 10 §6 guardrails:
manufactured domain networks built to seed LLM consensus, hidden text embedded in images for
multimodal retrieval, Googlebot-blocked sections built purely to feed AI crawlers, and
`data-nosnippet` used as an LLM-only content channel (09 §7 scopes it to personalised text).
Randomised predicate and adjective swapping across templated location pages is also rejected:
it manufactures lexical variation without information gain, which is the condition 02 §5 uses
to identify a wrong QDP verdict. Vary the values that genuinely vary instead, including live
statistics and local incident data pulled by API, which is real freshness rather than faked
freshness (07 §8).

## 8. Addendum: external-map and answer-scoring pass (August 2026)

Source: two Koray Tuğberk GÜBÜR interviews published 20 August 2026, on algorithmic authorship
and on external topical maps. Most of that material was already covered here, in several cases
in more operational detail than the source gave. Eight changes were made. Two are corrections to
defects the interviews exposed in this file set; four are additions; two are recorded settings.

| # | Change | Type | Owner |
|---|---|---|---|
| 1 | Cross-host topic repetition is intended in the external map. QDP is a within-index gate and does not apply across domains you do not own | correction | 10 §6 |
| 2 | Expendable properties are scoped to testing only, never to consensus publishing | correction | 01 §7.10 |
| 3 | Answer scoring: position on the page, depth of coverage, and whether it is the only answer to that question | addition | 06 §4 |
| 4 | The truth range is corroborated across sources, not merely asserted on-page | addition | 06 §4, 10 §6 |
| 5 | Definitional-phrase harvesting as the method for extracting the ranking cluster's shared vocabulary | addition | 06 §1, §3; 13 A23, B11 |
| 6 | Awards as a corroboration surface; original statistics and surveys as a distinct citation format | addition | 10 §10 |
| 7 | The component boundary used deliberately as an insulator, not only avoided as a hazard | setting | 05 §7 |
| 8 | Vote-ordered list component; the centerpiece budget recorded as a range rather than a point | setting | 05 §1, §5; 07 §8 |

**Also rejected on this pass**, extending §7. The four-layer owned-domain architecture described
in the external-map interview is not adopted: money domain → owned exact-match "extension"
domains → scaled owned satellite domains published explicitly outside quality control → paid
third-party placements. Layers two and three are manufactured domain networks under §7 and under
01 §7.5; the paid tier breaches the genuine-and-editorial guardrail in 10 §6. The underlying
observation, that repetition across sources manufactures consensus and that consensus decides
selection, is accepted as true and is the reason 10 §6 and 10 §10 exist. Accepting the mechanism
is not a reason to adopt the implementation.

Two further claims from the same material are recorded and not adopted, for want of a mechanism
or a measurement: an unnamed "language score" said to reward the use of several language models
or registers within one document, and a "confidence and clarity score" attributed to the Google
Knowledge Graph API (the public API returns `resultScore`; the KGMID audit in 10 §2 already
covers the operational part of that idea).

**Note on currency.** As of this pass, the visual-semantics material had not yet been released
as a course module and the external topical map had not been built as one at all. This file set
is therefore ahead of the published source on both. Expect 10 §6 to need revisiting when that
module ships.
