# 11. Local Playbook

Local is where QDP does the most work, because location × service × variant multiplies into
hundreds of pages that no query deserves. This file covers the four project situations and the
architecture each one needs.

Load alongside 02 (QDP) and 03 (map) always.

---

## 1. Identify the situation first

| # | Situation | Examples | Ranks as |
|---|---|---|---|
| **A** | Brick-and-mortar, located where you want to rank | Clinic, law firm, optometrist, allergist | Local business with GBP |
| **B** | No physical office in the target locations | Aggregators, marketplaces, SaaS, real estate, flights, hotels, cruises, directories | Software or aggregator brand across locations |
| **C** | Brick-and-mortar, but not where you are trying to rank | Hair transplant Turkey targeting the UK; medical tourism; destination services | Destination brand in the source market |
| **D** | Multi-location, sometimes under multiple brand names | Retail chains, franchise networks, distributor/affiliate store locators | A GBP per location plus a web entity above them |

The architecture differs materially. Do not apply one situation's pattern to another.

## 2. The rule that applies to all four

**The most important location-service pair is targeted from the most important page — usually
the homepage** (08 §2). Amplify with site name, then partial-match domain, then exact-match
domain (10 §3).

The cannibalisation this prevents: homepage, About page and main service page all competing for
the money query, because PageRank, query relevance, click history and the **GBP website URL**
are shared between them. Assign the money query to one URL and point the GBP website field at
that URL.

## 3. QDP for locations

Run the four metrics (02 §1) on every location candidate. The typical outcomes:

| Candidate | Verdict |
|---|---|
| `[service] [major city]` | Own page — demand, entity, pattern all present |
| `[service] [suburb/district]` | **Segment.** Query similarity and demand fail for nearly every subdistrict of a city |
| `[service] [neighbourhood]` | Heading or card field on the city page |
| `[city A] to [city B] [route]` | Segment. Most route combinations have negligible demand |
| `[service] [city with no such service]` | Do not build. A page for a city with no airport, no clinic, no store |
| `[service] near me` | Own page — and usually the **root** of the local network (§4) |

The Melbourne test: an injury-attorney site had ~19 location pages for places like "Melbourne
Beach" and "Melbourne Center". Neither similarity nor demand was met for any subdistrict.
Merging them produced 232 new queries and 60 improved rankings — from subtraction alone.

**Where local demand is genuinely thin, go one level up.** A regional page that ranks beats
twelve suburb pages that do not.

## 4. The network shape

```
/[service]-near-me/                    ← SCN ROOT for local
    │
    ├── /[service]/                    ← location-agnostic CONCEPT page (flagship)
    │      ├── /[service]/[variant]/   ← attribute and technique pages
    │      └── /[service]/[type]/
    │
    ├── /[city]/                       ← city pages (QDP-approved only)
    │      └── #suburb-sections        ← failed QDP candidates as segments
    │
    └── /locations/[store-slug]/       ← individual store/office pages (situation A/D)
```

Two rules govern it:

1. **The "[term] near me" page is usually the root** of the semantic content network, with
   city and other locale hierarchies beneath it per QDP.
2. **The location-agnostic concept page lifts the location-specific pages.** One comprehensively
   optimised document — textually and visually — owns the root concept and transfers its
   relevance downward (08 §4). Without it, every location page competes for the root query and
   the signal splits.

**Two maps converge.** Build one map for the location (local entities, service as light CTA) and
one for the industry or service, meeting at "[service] in [location]". The directory or listing
page type is the commercial spine.

## 5. Page types by query class

| Query | Page type | Centerpiece |
|---|---|---|
| "How do I fix / what should I do if…" | Forum subdomain with forum structured data | The question and first answer |
| "[service] near me" | Provider cards + map, filterable | Card grid, first row visible |
| "[service] in [city]" | Directory/listing or service page | Answer + booking/quote component |
| "[service] [city] price" | Hybrid: FS-shaped paragraph **blended with** provider cards | The number, then the cards |
| "How to [do the thing]" | Informational guide | Direct answer with trigram |
| "[service] [attribute]" | Attribute page under the concept | Definition + the attribute's component |

According to search demand and the query network, **choose one or two of these templates per
node and bind them to each other** with in-content links. Do not build all six for every
location.

Forum subdomains carry the experience queries that factual pages on the main domain cannot
serve, and forum-marked pages index more easily. Google parses "how do I solve…" and "what
should I do if…" as experience-seeking, and it is materially more tolerant of forum indexing
because an opinion is not judged for factual accuracy the way an expertise page is.

## 6. Blueprints

Use 05 §9a (local homepage), §9b (service + location), §9c (near me), §9d (directory) and §9f
(price hybrid). The augmentation table (04 §2) drives block order.

## 7. Google Business Profile integration

- **Embed the GBP map component.** For a single-location business, the most important profile
  is embedded on the homepage. For multi-location, each profile is embedded on **its own
  matching page** — never all of them on one page.
- **Point the GBP website field at the money URL** (usually the homepage for the primary
  location, the location page for satellites).
- **Keep GBP fields in sync with the service-constraint nodes:** services offered, hours,
  attributes, categories, service areas. A GBP claiming something the site does not state, or
  vice versa, is a resolvable inconsistency working against you.
- **Measurement caveat:** Semrush includes Google Business Profile rankings; Ahrefs does not.
  For local visibility, third-party numbers will disagree for this reason alone. Report both, or
  report Semrush plus GSC and say why.
- The website ↔ GBP correlation behaves like the website ↔ YouTube correlation (10 §7). Both
  channels are judged with the site.

## 8. Store, office and clinic page anatomy

Information alone is not enough. These pages need a **real function** — reserve, book, calculate,
compare, order, get directions — and a centerpiece that signals it (05 §3). Build the working
component; never mock it (01 §7).

**Verbalisation checklist — every one of these must exist as text, not only as UI:**

- [ ] Opening hours, stated in prose and in `OpeningHoursSpecification`
- [ ] Practitioner biography and background
- [ ] Practitioner expertise and credentials, with the credential body named
- [ ] Full address and how to reach it (transport, parking)
- [ ] Accepted insurances / payment methods
- [ ] Services available **at this location specifically**
- [ ] Reviews, displayed and captured
- [ ] Questions and answers, answered by the named expert entity
- [ ] What makes this location different from the neighbouring one
- [ ] Distance or travel time to recognisable local landmarks, with units

Each of these becomes a field in the location's **structured information card** (05 §4), and
each is a triple with a measurement (03 §5b).

**Linking:** exact-match geo anchors to neighbouring districts with context above the fold-out,
and the **topical entry grid** to the quality nodes at the very bottom (08 §6, §7).

## 9. Seasonal and informational city pages

Pattern that works for demand that spikes on a calendar (pollen, tax, weather, tourism seasons):

Map sections:
- The category (allergy types)
- Individual members of the category (fish allergy, milk allergy)
- Treatments / solutions
- The seasonal driver (pollen types, tree types)
- **[practitioner] in [city]**
- **[seasonal data] calendar in [city]**

All internally linked. The mechanism: query similarity means that a site satisfying "allergy
types" and "pollen types" is inferred able to satisfy "allergist in [city]" and "pollen calendar
in [city]" (01 §3). Coverage of the informational layer earns the local layer.

The seasonal page's centerpiece is the **data component itself** — a calendar showing severity
by type and by month for the city and its subdistricts — with the "find a [practitioner] in
[city]" internal link attached through a map component. Not a paragraph about the season.

Every update to any connected page contributes freshness and passes satisfied click signals
across the cluster.

## 10. Situation B: aggregators without physical offices

The classic defect: a page for every city, district, hospital, department, practitioner, clinic,
route, model and parameter combination. Millions of documents, most unindexed, the indexed ones
near-duplicates.

**Sequence:**

1. **Measure the duplication.** `site:domain intitle:[term]` sweeps, plus a Programmable Search
   Engine over your own site to see which of your pages Google actually prefers for the root
   query (02 §6).
2. **Read the GSC Pages report.** Large "Discovered — not indexed" and "Crawled — not indexed"
   segments quantify the problem (09 §2).
3. **Prune first.** Deleting unnecessary documents has produced 600,000 additional clicks with
   impressions held flat — the gain came from consolidation and technical cost, not new content
   *(setting)*.
4. **Fix parameters.** Non-crawlable filtering; `#fragment` or preference-based content instead
   of `?parameter=` (09 §5).
5. **Fix rendering.** If disabling JS empties the pages, that is the primary defect (09 §4).
6. **Build the concept page** for each root query, and route the location pages through it.
7. **Rebuild survivors as structured information cards** with real verbalised values, reviews
   and comparisons (05 §4).
8. **Expand deliberately**, not combinatorially: a "things to do in [city]" template only for
   cities that qualify, connecting to "[service] to [city]" → "[type]" → "[brand]" pages.

Typical results from this sequence *(setting)*: 248% click increase with 37% impression increase
and 29% average position improvement on a yacht-charter aggregator; 38% click increase with
non-indexed pages down 60% on a cruise operator; 57% on a store-locator network where rendering
was also the issue.

## 11. Situation C: ranking for a locality you are not in

- Repurpose the homepage or build a dedicated landing page in a subfolder — both work; pick
  based on whether the money query *is* the brand's primary query.
- The centerpiece must **represent, visualise and verbalise every augmentation of the query in
  one component** — relevance and responsiveness together. For "hair transplant Turkey" from
  the UK: the procedure, the destination, the price, the travel, the credentials, the evidence,
  the booking, in one macro-context zone.
- The external topical map runs in the **source market**, not the destination (10 §6): UK
  publications for UK demand.
- Decide deliberately when a technique deserves a subpage and when a city inside the destination
  country does — QDP both.
- Connect the core section to the outer informational section explicitly; the informational
  layer is what earns the generalisation.

## 12. Situation D: multi-location and multi-brand

- One GBP per location, each embedded on its own page.
- A `/locations/` hub as a directory page type, with the store cards.
- Individual store pages carry the §8 anatomy, identical structure, genuinely different values.
- If the values are not genuinely different per store, the QDP verdict was wrong and they should
  be segments on a regional page.
- Where a distributor or affiliate network is involved, the store locator is the commercial
  spine and the concept pages sit above it.

## 13. The external topical map for local

Local news and locale-relevant sources with exact- or partial-match city or district names give
a real advantage **where they serve semantically related, responsive documents**. Full method
and guardrails in 10 §6. Local specifics:

- Target the "how to book", "how to find the cheapest", "best [service] in [city]" templates
  on those hosts.
- Each external topic must itself pass QDP **on its host**; repetition of one topic across
  several aligned local hosts is intended, not duplication (10 §6 rule 1).
- Where the audience travels in, publish in the **origin market** — Manchester sources for
  Manchester visitors to Antalya, with "Antalya hotels" anchors.
- Attribute assignment comes from the AI Mode extraction (02 §7): ask which attributes decide
  "best [occupation] in [city]", then make the external map claim those attributes.
- Hold one value per attribute across every local placement (10 §6 rule 8).
- This is what lifts the **Google Business Profile**, not only the website.

## 14. Local failure modes

- A page for every city × district × service combination.
- Sub-district pages where neither demand nor similarity qualifies.
- Homepage, About and service page all chasing the money query.
- No location-agnostic concept page, so 40,000 pages compete for the root term.
- Store pages that are information-only, with no booking, quote or directions function.
- Store pages whose main content is invisible without JavaScript.
- `?parameter=` filter URLs generating an indexable combinatorial explosion.
- Forgotten subdomains and microservices still being crawled (09 §8).
- Temporary pages (events, itineraries) published without `unavailable_after` (09 §6).
- GBP fields contradicting the site's own service statements.
- Judging local performance on a tool that excludes GBP rankings.
- Treating the location pages as a template fill rather than as entities with real, differing,
  measured values.
