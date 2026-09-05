# 04. Query Augmentation and Page Types

Query augmentation is the engine's interpreted expansion of the typed string. **What Google
publicly calls "query fan-out" is query augmentation in its patents** (Anand Shukla, who also
worked on the stateful-chat patent behind AI Overviews and AI Mode). Treat them as one
mechanism: the same augmentation work serves classic ranking, snippets, AI Overviews, AI Mode
and independent LLM retrieval. Do it once, use it everywhere.

If you understand how a query is augmented, you can build the page's contextual vector and lay
out its components correctly. That is the whole purpose of this file.

---

## 1. Augment the canonical query (method)

For the node's canonical query, produce the augmented set:

1. **Read the live SERP's result-type composition.** What Google *serves* is what it thinks the
   query means. Directories, tools, forums, videos, maps, shopping — each is a different
   augmentation.
2. **Harvest PAA and autosuggest**, including the second and third expansion levels.
3. **Add the implicit verb.** "Best cookie" is augmented to "buy best cookie";
   "rehab Thailand" to "find a rehab in Thailand / book a rehab in Thailand".
4. **Add the qualifier axes** the rewriter can attach: audience (for foreigners, from the UK),
   credential (licensed, accredited), evidence (reviews, is it safe), price (cost, how much),
   duration (how long), process (what to expect), variant (by type, by city).
5. **Add predicate variants**, not just noun variants: *how does X work / how does X function /
   what does X do*. Each returns different AI answers and different citations.
6. **Cross-check against query themes** (02 §7) so you have not augmented inside a single theme
   only.

Sanity check: if your augmented set has fewer than ~8 distinct interpretations for a money
node, you have not finished.

## 2. The augmentation table (primary deliverable)

For each money node, map every augmented query to the component that serves it, the triples
that component must express, and the named entities involved. This table *is* the page's
layout spec and the source of its triples — build the mockup from it, write from it, mark up
from it.

| # | Augmented query | Visual semantics (component) | Triples (subject – predicate – object) | Named entities |
|---|---|---|---|---|
| 1 | find a rehab thailand / book rehab thailand | Hero, H1 + primary CTA "Talk to us — free and confidential" | (Brand, is a, Rehab Centre) · (Brand, located in, Thailand) · (User, contacts, Brand) | Brand, Thailand |
| 2 | rehab thailand for foreigners / from uk | Utility bar with regional phone chips | (Brand, serves, United Kingdom) · (Brand, serves, Australia) | UK, US, AU, HK, TH |
| 3 | licensed / accredited rehab thailand | Evidence strip: accreditation logos + licence line | (Brand, licensed by, Health Authority) · (Staff, member of, Prof. Association) | Health Authority, Accreditation Body |
| 4 | reviews for rehab thailand / is it safe | Review carousel with named reviewers, ratings, source badge | (Reviewer, rates, Brand) · (Brand, has rating, 5) · (Review, verified by, Source) | Reviewer entities |
| 5 | rehab chiang mai / rehab resort thailand | Definitional block + proof line | (Brand, is a, Luxury Rehab Centre) · (Brand, located in, City) · (Brand, has recovery count, 7000+) | City, Landmark |
| 6 | best rehab therapist thailand | Practitioner carousel with named person entities | (Therapist, works at, Brand) · (Therapist, has credential, MSc) | Person entities |
| 7 | [substance] rehab thailand | Tabbed micro-context selector, one tab per substance | (Brand, treats, Ketamine Addiction) · (Tab, links to, /ketamine-treatment/) | Substance entities |
| 8 | rehab thailand cost / how much | Mid-page conversion band + form + privacy line | (Brand, responds within, 24 Hours) · (User, submits, Enquiry) | Brand |
| 9 | [other programme] thailand | Programme card grid — contextual bridges, anchors matching child H1s | (Brand, offers, Programme) · (Card, links to, Child Page) | Programme entities |
| 10 | medical detox / aftercare | Process accordions in treatment order | (Programme, starts with, Medical Withdrawal) · (Programme, ends with, Aftercare) | Stage entities |
| 11 | luxury / best rehab thailand | Vertical tab attribute verbaliser | (Brand, has care type, Luxury) · (Brand, positioned as, Regional Hub) | Brand, Region |
| 12 | how long / what to expect | Tabbed FAQ accordion aligned to PAA | (Programme, has duration, 4–12 Weeks) · (Duration, depends on, Individual Needs) | Programme |

**Rules for building it:**

- Every augmented query gets **exactly one owning component**. Two components serving the same
  augmentation is duplication; an augmentation with no component is an unserved intent.
- Order rows by augmentation importance. Row order becomes **DOM order** (05 §3).
- The **subject of the triples is the heaviest term** (02 §2) wherever the sentence allows.
- Every triple in this table must appear on the page in prose **and** in one structured form,
  never verbatim-repeated (07 §5).
- Named entities in this column become the schema `@id` mini-graph (07 §7) and the entities you
  seed off-site (10 §5).

## 3. Page type assignment

Assign the page type against the **live SERP's result-type mix**, not a house template.

| Variation class | Augmented intent | Page type |
|---|---|---|
| "How do I fix X?" / "What should I do if…" | experiential | Forum-style layout, usually a forum subdomain with forum structured data — forum pages index more easily |
| "[service] near me" | local, immediate | Structured information cards surfacing providers, with map component |
| "[service] in [city]" | local, service | Directory / listing page with providers, ratings, contact, conversion elements |
| "[service] [city] price" / "cost of X" | informational + commercial | Hybrid: featured-snippet-catching responsive paragraph **blended with** the same information cards |
| "How to install / do X" | instructional | Step-by-step guide; commercial elements minimised |
| "Best X" / "X vs Y" | commercial investigation | Comparison grid + multi-vendor list + review components |
| "X calculator / converter" | transactional-utility | Tool-first: working tool above the fold, minimal text |
| "[brand] [model]" | product | Product/spec page with attribute table and availability function |

**Category quotas (MaxN).** SERPs constrain result-type and source-category diversity, and
quality is scored within your source-type cluster. An affiliate at position 11 competes with
the affiliate at 3, not with 8–10. When a quota is full, **change type or escape the
classification** — do not try to out-quality your way into a full quota.

**Superlative and "near me" queries demand a set, not a single entity.** "Best [service] near
me" and "best [service] in [city]" return aggregators and directories because the query asks
for a ranked comparison across multiple entities, and a single-entity page cannot satisfy that
shape however good it is. The type escape is to supply the set from inside your own page: a
ranked, compared component listing several of your own entities (practitioners, locations,
stores, products, providers), each carrying a differentiating value and a stated reason for its
position. Two constraints. Each item's differentiator must be **verbalised in text**, not
carried only by an interaction state such as a flip, hover or tab (05 §6). The comparison must
be real; ranking your own entities against each other on invented criteria is a fabricated
comparison and fails 01 §7.

**Bind one or two templates per node.** According to search demand and the query network, pick
one or two of the above and bind them to each other with in-content links. A node covered by a
price hybrid + a forum thread beats a node covered by four thin pages.

## 4. Prune, merge, fold

Run this before any brief is written:

- **Prune** — the variant needs no separate representation at all. Delete or never build.
- **Merge** — two planned pages are too similar under QDP. One page, both query networks.
- **Fold** — the variant deserves representation but not a page. Assign it a unit and a parent
  (02 §4).
- **Reformat** — the page exists but its type is wrong for the SERP. This is the cheapest large
  win in any audit (12 §5).

Page count falling is a good outcome. Retrieval cost falls, PageRank concentrates, signal per
document rises.

## 5. Alignment check before the blueprint

The node is ready for a blueprint when all of these are true:

- [ ] Augmented set has ≥8 distinct interpretations for a money node
- [ ] Every augmentation owns exactly one component
- [ ] Component order = intended DOM order
- [ ] Heaviest term sits in the triple subject position
- [ ] Page type matches the live SERP's result-type mix, and the quota has room
- [ ] The centerpiece augmentation is identified — the one the opening ~400 characters serves
- [ ] Predicate variants covered, not only noun variants
- [ ] Query themes from 02 §7 are each covered by a component, a section or a sibling node
