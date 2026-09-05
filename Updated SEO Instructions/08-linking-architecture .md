# 08. Internal Linking and Architecture

Internal links are how Google predicts a site's quality, how PageRank concentrates, and how
relevance transfers from concept pages to specific ones. This file produces the link plan.

---

## 1. The homepage is a quality prediction surface

Google's page-quality prediction system relies on internal links, and it reads them from the
homepage first *(claim; Martin Splitt has described the crawler being convinced to go deeper
when it reaches unique, original, human-effort documents from the homepage)*.

**Consequences:**

- The homepage's in-content links are a **curated set of your best documents**, not a
  navigation dump.
- A programmatic site whose most-linked pages are irrelevant to its important query networks is
  actively misinforming Google about what matters, and wasting PageRank doing it. This is one
  of the most common defects in local and programmatic projects.
- After robots.txt, the homepage is usually the most-crawled URL on the site. Whatever it links
  to gets crawled hardest.

## 2. The homepage targets the most important query

**Rule: the most important query network is targeted from the most important page — usually the
homepage.** For local, that means the most important **location-service pair**.

Why: the homepage carries the highest PageRank and the deepest crawl priority, so it earns
click signals earliest — and clicks are what trigger the expensive algorithms to run at all
(01 §4).

Amplifiers, in order of cost:

1. **Site name** — free, editable, and separate from the domain (10 §3).
2. **Partial-match domain** — carries the concept or the location.
3. **Exact-match domain** — strongest, but weigh the me-too demotion risk (12 §2).

**The cannibalisation trap this fixes:** in most local projects the homepage, About page and
main service page compete for the same query, because PageRank, query relevance, click history
and the Google Business Profile website URL are all shared across them. Assign the money query
to one URL — the homepage — and point the GBP website field at it.

## 3. Quality nodes

A **quality node** is a document good enough that Google seeing it changes its judgment of the
site. Mark them in the map table (03 §7, column 20).

Selection criteria — a quality node has all of:
- A real working functional element
- Original data or measurements competitors lack
- Full verbalisation and a complete component set
- A clean centerpiece serving a genuinely demanded query

**Architecture rule:** the homepage links directly to the quality nodes. The quality nodes link
back. This is the loop the crawler evaluates first.

Typical count: 8–20 quality nodes on a mid-size site. If everything is a quality node, nothing
is.

## 4. The concept page lifts the specific pages

**Rule: one comprehensively optimised, location-agnostic document owns the concept, and
transfers its relevance to the location-specific pages.**

Without it, every location page competes for the root query and the signal splits across all of
them — the "which of our 40,000 pages is most relevant to *cancer*?" failure.

```
/cancer/                      ← concept page. Owns the root query. Flagship document.
  ├── /cancer/treatment/      ← attribute pages
  ├── /cancer/symptoms/
  └── /cancer-hospital-[city]/  ← location pages, linked from and linking to the concept
```

Same pattern for services, products and categories. The concept page is the single flagship
document per money topic; a single authoritative source aggregating most of the answer is
easier for engines to trust than fragments.

## 5. Link counts and placement

- **Default range: 3 to ~10 in-content links per page.** Standard builds sit near ~10, with
  ~70% in main content.
- **The lean anatomy for flagship or minimal builds** *(setting)*: exactly three links —
  **root / seed / node** (up to the section root, across to the sibling seed, down to the child
  node).
- Favour **I-node links**: individual, in-content, with no similar neighbours. Block and
  boilerplate links are worth far less.
- Strong in-content linking **in addition to** normal navigation, never instead of it. Removing
  navigation causes crawl and indexation damage.
- **Never anchor in a page's first paragraph**, or on a paragraph's first word.
- Link side topics from later sections; keep the macro context for the money links.
- Weight a link by rendering it larger, placing it in main content, or using fewer links
  overall.
- Internally nofollowed links still pass internal PageRank. Sculpt with hierarchy and robots
  policy, not nofollow.

## 6. Anchors

**The alignment chain.** Each anchor aligns with: the source page's heading → the source
title → the target's title. Neutral annotation text sits around it. Context is given *before*
the anchor appears. ≤~4 concepts per anchor. The anchor targets the **seed query of the target
page**, and the target page carries that query with its own Q&A pairs.

**Variation rule (topical anchors).** Do not reuse one anchor to a target more than ~3–4 times
in main content. Vary with synonyms or word-order changes — suffix changes collapse under
lemmatisation *(claim)*. Validate candidate anchors against autosuggest.

**Geo exception (locality anchors).** For location links, use **exact-match anchors** — the
city, suburb or district name, with context supplied in the surrounding annotation text. The
place name *is* the disambiguator; varying it defeats the purpose and hands the query to the
wrong page. Vary the *annotation*, not the place name.

```
✓ Our team also covers <a>Fitzroy</a> and <a>Collingwood</a> from the Carlton rooms.
✗ Our team also covers <a>the inner north</a> and <a>nearby areas</a>.
```

**Anchor sources.** Card grids linking to child pages should use anchors that **match the child
page's H1**. That is the cheapest, strongest alignment available.

**Strip navigational anchors** ("read more", "click here", "learn more") from contextual links
entirely.

## 7. The topical entry grid

A named component that sits at the **very bottom of the document** and links the quality nodes
(05 §5). Above it, wherever a physical location is involved, link the subdistricts or
neighbouring districts with exact-match geo anchors plus context.

Purpose: every page routes crawl and PageRank back into the quality-node loop, without
polluting the macro context with link blocks.

## 8. Overlap justifies the link

Documents need **some shared context** for an internal link and its anchor to be legitimate —
that overlap is what relates them (02 §5). Zero-overlap links look arbitrary; over-threshold
overlap makes them near-duplicates.

Practical test before adding a link: *can I write one sentence of context before the anchor
that is true of both pages and useful to the reader?* If not, the link is wrong or one of the
pages should not exist.

## 9. Map-level architecture rules

- **Core section: flat URLs. Outer section: nested URLs**, funnelling relevance to the core.
- Outer relevance flows to the core through in-content links, always.
- **Reciprocate entity connections.** A mentioned second entity often needs its own page so the
  link can point back.
- **Refresh legacy content indirectly** by routing new pages' links through intermediary older
  topics.
- Keep URLs simple and stable. Signal hierarchy through breadcrumbs, structured data and links
   — not URL surgery on an existing site. URL rewrites are low-payback and cost a re-indexation
  cycle.
- A horizontal tab component distributing internal links across related headings raises
  contextual coverage on hubs *(setting)*.

## 10. Internal link audit (deliverable)

Produce this for any existing site before writing anything new:

| Check | Method | Fix |
|---|---|---|
| What does the homepage link to? | Crawl, list in-content homepage links | Replace irrelevant links with quality nodes |
| Which pages receive the most internal links? | Crawl, rank by internal inlinks | If they are not money nodes or quality nodes, re-route |
| Do the most-linked pages match the most important query networks? | Cross-reference with the map | Re-route; this is the commonest programmatic defect |
| Are there orphans? | Crawl vs sitemap | Bridge in or prune |
| Do internal links resolve to indexable 200s? | Crawl | Fix; every internal link must resolve to a 200 that is in the sitemap |
| Are deleted URLs still linked? | GSC URL Inspection → Referring URL field | Remove; note the memory lag (09 §8) |
| Anchor repetition per target | Crawl anchor report | Vary past 3–4 for topical; keep exact-match for geo |
| Is there a concept page per money topic? | Map review | Build it; it is the flagship |

**Output format:** one row per URL — current internal inlinks, desired internal inlinks,
anchors to add, anchors to change, links to remove, owner.
