# 05. Page Blueprints and Visual Semantics

Layout is a ranking input. Engines segment, classify and judge documents from visual structure
and functional components as well as text, and a layout change alters the page's vector
*(claim; layout-aware document understanding patent — Google can classify and judge a page from
information stored in pixelised form)*. The QRG counts designing functionality and building
systems as effort. Misleading functionality is a named spam policy.

This file turns the augmentation table (04 §2) into a build.

---

## 1. The centerpiece annotation

The primary visual annotation stating the page's purpose, function and context.

- **Budget: the first ~400 characters of main content.** On long documents, the sharper
  restatement: critical entities and n-grams inside the **first ~2% of tokens** *(setting)*.
- **Lead with the answer and the function.** The dominant intent's answer block and the
  page's primary functional element sit above the fold, **first in the DOM**.
- **Keep it clean.** No boilerplate, share widgets, ad slots, cookie fragments or navigation
  text between the H1 and the opening answer in source order. Extraction demonstrably breaks
  when boilerplate interrupts it.
- **Align it with the centerpiece augmentation** identified in 04 §5. An opening serving a
  different sub-context than the dominant augmentation loses the query.
- **A wrong centerpiece zeroes the page** regardless of coverage, accuracy or history.

**The budget is a range, not a point** *(setting)*. The method's own figures for it have been
stated as both ~400 characters and "the first six or seven sentences", which are roughly double
each other. Treat **~400 characters as the working target** and **the first six to seven
sentences as the outer band** that still carries initial-ranking weight. Front-load to the
tighter figure; keep the wider band free of boilerplate, digression and delayed answers, because
it is all being read as the page's opening claim. Where a page must clear a hard threshold on a
competitive query, the tighter figure is the one to engineer against.

Moving a page's core tool or answer from the bottom to the top is the archetypal change that
registers.

## 2. Macro and micro context

| Zone | Contains | Maps to |
|---|---|---|
| **Macro context** (above the fold, main content) | Dominant context, the answer, the primary functional element, the money terms | QRG Main Content |
| **Micro context** (below the fold, supplementary) | Minor attributes, tabs, most internal links, engagement infill | QRG Supplementary Content |

DOM order must match visual reading order. The engine infers semantic sequence from layout,
and the same facts score differently by placement.

Engagement infill (sticky nav, email capture, video, related posts) lives in the micro context
only. It never interrupts the macro context.

## 3. Real function is mandatory

Since the Helpful Content Update, **"helpful" has meant functional**. If a document does not
let the user reserve, book, sell, buy, calculate, convert, compare, filter or quote — and the
centerpiece does not signal that function — ranking for the query becomes materially harder.

Rules:

- **Component, not button.** A full working component above the fold (upload dropzone,
  calculator, booking form, comparison grid, filter rail) tells classification and agentic
  retrieval what the page *does*. A button does not.
- **Map every functional element to a schema.org `Action` type** (07 §7).
- **Verbalise the function.** State in text what the tool does, what it costs, what it needs,
  what it returns. A function that exists only as pixels does not exist for text-first
  retrieval and cannot be cited.
- **Never imitate or fake it.** *(Hard prohibition, 01 §7.)* Emulating a page **type's**
  functional pattern with a real working component is correct and is often the whole
  remediation. A control that appears to book, calculate or compare and does not is a
  documented spam policy breach. If the function cannot be built yet, ship the page without
  it and say so in the roadmap — do not mock it.
- **Present at every breakpoint.** A functional component counts only where it renders. A form,
  calculator or comparison grid that sits above the fold on desktop and then collapses, drops
  below the fold or disappears at tablet and phone widths is absent for those evaluations, and
  a centerpiece missing its function loses relevance rather than merely looking different
  *(setting)*. Check the centerpiece at every breakpoint the site ships, not at the design
  width only.
- **Function buys tolerance.** Sites with genuine function survive updates that strip out
  walls of text. A price-listing directory hit by the helpful/functional system recovered by
  adding real UGC, price comparison, analytics, an assistant and ordering through partnerships
  — not by rewriting copy.

## 4. Structured information cards

Google reads documents not only as text but as **structured information cards**, and the
annotations inside those cards are verbalised so they can be extracted and interpreted through
agentic retrieval.

**Build cards, not paragraphs, wherever an entity class repeats** — hotels, doctors, providers,
stores, products, itineraries, programmes.

**Verbalisation matrix (deliverable).** For each card type, count what can be extracted:

| Card type | Declarations | Facts | Claims | Actions |
|---|---|---|---|---|
| Hotel card | name, type, location | star rating, distance to centre, room count | "best value in district" | book, compare, view rooms, check availability |
| Doctor card | name, specialism, clinic | years practising, languages, insurances accepted | "same-week appointments" | book, call, get directions, ask a question |
| Store card | name, address, hours | services offered, parking, accessibility | "walk-ins welcome" | directions, call, book eye test |

Ranking in a locale-and-category pair improves with **more cards across a wider range of
entities in the class**, more genuine reviews attached to those entities, and enriched
comparisons between them. Thin cards on many entities beat rich prose on few, provided each
card carries real values.

## 5. Component library

Choose per attribute, not decoratively. Every component carries its own relevance,
responsiveness and originality contribution.

| Component | Serves |
|---|---|
| Answer-first block | The centerpiece; the dominant augmentation |
| Structured information card / card grid | Any repeating entity class |
| Comparison grid | "best", "vs", "alternatives" — list unpaid options too |
| Price table / cost block | Average, range, factors, what changes it |
| Calculator / converter / upload tool | Utility intent; tool-first pages |
| Booking / quote / enquiry form | Service and local conversion |
| Directory / listing block | "in [city]", "near me" |
| Map component (incl. GBP embed) | Any physical-location intent (11 §7) |
| Q&A component with voting | Opinionated + UGC content types |
| **Vote-ordered list** | Opinionated sets where the *order* is the answer — "best ideas for", "what actually works". Users vote on items and the page re-ranks them live |
| Preceding-question component | Reframes the question, bridges factual → opinion without breaking the vector |
| Review capture + display | Reputation, UGC, card enrichment |
| Tabbed micro-context selector | Sibling variants that failed QDP (02 §4) |
| Vertical tab attribute verbaliser | Attribute set that must be stated but not fragmented |
| Process accordion | Ordered stages |
| Topical entry grid | Bottom-of-document links to quality nodes (08 §7) |
| Horizontal tab link component | Hub link distribution across related headings |

**The vote-ordered list** *(setting)*. Where a listicle's value is the ranking rather than the
items, let real user votes set the order and re-render the page from them. It satisfies three
things at once: it is a real working function (§3), it is genuine freshness rather than a
cosmetic date change (07 §8, 01 §7.4), and it supplies the opinionated layer on a page whose
factual layer sits above it. Two constraints. The votes must be real, since manufactured
engagement is prohibited (01 §7.5). Every item still carries its differentiator **in text**, so
the ranking is legible to a text-first crawler that cannot see the vote counts.

**Layout originality.** Benchmark the top competitors' component inventory, sizes and order.
Record what every competitor's layout shares — then deliberately ship **at least one working
component the cluster does not have**. An uncommon working component is itself a ranking
differentiator.

## 6. Content types and the four techniques

Plan the mix against the augmented query, not a house style:

- **Factual** (expertise queries) · **Opinionated** (experience queries) · **Structured**
  (attribute sets) · **Unstructured** (definitions, processes).

Deliver with:

- **Visualisation** — put content in its correct semantic component (comparison → grid,
  price → table, process → steps, value set → table).
- **Verbalisation** — restate every information-bearing visual in text: captions, alt text,
  adjacent prose. Google runs a model that verbalises tables and **counts the page's available
  actions**. A fact that exists only as pixels does not exist.
- **Commercialisation** — the functional components that let users complete the task; branded
  CTAs visually distinct from main content.
- **Contextualisation** — every block stays aligned with the query's context so no component
  bends the page vector.

**Trust elements get verbalised or removed.** The QRG names **deceptive use of logos** as a
quality problem: press, payment, certification, regulator, association and review-platform
logos placed with no explanation of why they are there. Every badge carries adjacent text, a
tooltip on hover and touch, or a click-through that states the claim in words: what the body
is, what it certifies, which legal entity holds it, and the licence or reference number where
one exists. An unexplained logo is worth less than nothing on a YMYL page, and neither the
crawler nor an LLM can read the claim out of the image.

Two blocks may answer the same question — one factual, one conversational — distinguished by
framing and background *(setting)*. Give them different parent elements as well as different
backgrounds, for the reason in §7.

## 7. Placement physics *(claim)*

- **Big-element importance transfer.** Text inside or beside a visually dominant element
  inherits its weight. → Put money terms and co-occurrence terms **inside** the hero component,
  not in prose beside it.
- **Component boundaries can cut co-occurrence to zero** *(claim; layout-aware document
  understanding patent)*. Consecutive sentences are related to each other through sentence
  tokenisation, but sentences sitting in different blocks, cards, components or parent HTML
  elements can be segmented apart and never processed together. The co-occurrence matrix may
  never form between two terms that sit visually adjacent in different containers.
  **Proximity is a gradient inside a container and a cliff across one.** Any relation that must
  be computed gets stated inside a single component, and co-dependent terms share a parent
  element. This rule governs the proximity levers below: a term pair that passes all three
  distances and straddles a component boundary still fails.
- **The boundary is also a tool** *(setting)*. The same segmentation that destroys a wanted
  co-occurrence protects a wanted vector. Where one page must carry two content types for the
  same question — a factual structured answer and an opinionated unstructured one — put them in
  **different parent elements with different backgrounds**, so the opinionated block cannot bend
  the factual block's vector and the two are scored as what they are. Decide the boundary per
  block pair: *relation to be computed* means one container, *relation to be prevented* means
  two. A boundary drawn by accident is a defect. A boundary drawn on purpose is a control, and
  it is how a page serves a factual and an experiential augmentation without losing either.
- **Three proximity levers** for co-occurrence: pixel distance, letter distance, byte/HTML
  distance. Keep co-dependent terms close on all three, **inside one container**.

## 8. Images

- Prefer **engaging** images (infographics, labelled components, arrows, embedded definitions)
  over merely expressive ones.
- Avoid defect flags: tiny text, glare, darkness, truncated components.
- Branded images, unique composition, EXIF and licences kept. Never present scraped third-party
  imagery as original.
- Google Discover: at least 1,200px wide; large OG fallback; centre the representative object.
- Every image obeys verbalisation: caption, alt, adjacent prose carry what the pixels show.

---

## 9. Blueprints (ATF → BTF block order)

Use these as starting layouts; adjust from the augmentation table's row order.

### 9a. Local service homepage (targets the most important location-service pair)

1. Utility bar — regional contact chips, hours *(serves audience augmentations)*
2. **Hero — H1 with `[service] in [location]`, primary CTA, trust line** ← centerpiece
3. Evidence strip — accreditation, licence, association logos, with text
4. Definitional block — "X is a [type] in [city]" + one proof number
5. Review carousel with named reviewers and source badge
6. Practitioner / team carousel with named person entities
7. Tabbed service selector — sibling services that failed QDP
8. Conversion band — form + privacy/response-time line
9. Programme / service card grid — contextual bridges to child pages, anchors = child H1s
10. Process accordion in real order
11. Attribute verbaliser tabs — the positioning attributes
12. FAQ accordion aligned to PAA
13. **Topical entry grid → quality nodes** (08 §7)

### 9b. Service + location page

1. **H1 `[service] in [city]` + immediate answer + booking/quote component** ← centerpiece
2. Provider or clinic information cards for that location
3. Map component / GBP embed for that location
4. Price block — range, average, what changes it
5. Local proof — reviews, local credentials, service area statement
6. Distinctions vs neighbouring areas (disambiguated qualifiers)
7. FAQ
8. Links: up to the concept page, across to sibling locations with exact-match geo anchors,
   down to child services (08 §6)

### 9c. "Near me" root page

1. **H1 `[service] near me` + location detection or selector + provider cards** ← centerpiece
2. Card grid of providers, sortable/filterable — real filtering, not decorative
3. Map component
4. How to choose — the attribute set that decides selection (from 02 §7)
5. Price expectations block
6. City/region hierarchy links (this page is the SCN root for local; 11 §4)
7. FAQ

### 9d. Directory / listing page

1. **H1 + filter rail + first card row visible** ← centerpiece
2. Card grid with full verbalised card fields
3. Comparison affordance across cards
4. Review capture module
5. Buying/choosing guide module
6. FAQ + links

### 9e. Tool-first utility page

1. **Working tool as the full component, above the fold, minimal chrome** ← centerpiece
2. One-line verbalisation of what the tool does, its limits, its cost ("no signup")
3. Steps / how it works
4. Worked examples with real numbers
5. FAQ
6. Links to sibling tools and the concept page

### 9f. Price / cost hybrid page

1. **H1 + featured-snippet-shaped answer paragraph (≤40 words) with the number** ← centerpiece
2. Price table — average, range, by variant
3. Structured information cards for providers with prices
4. Factors that change the price, as a list
5. Quote form
6. FAQ, PAA-aligned

### 9g. Informational / guide page

1. **H1 + direct answer with shared trigram + the one visual that carries the answer**
2. Definitional block
3. Body sections in descending importance, each with its own component
4. One structured restatement of every key fact
5. Bridge links to the money nodes in commercial sentence forms
6. FAQ

### 9h. Forum-style page (usually a subdomain)

1. Question as H1, first answer visible
2. Answer thread with voting
3. Forum structured data (07 §7)
4. Related threads
5. One in-content link back to the money node

## 10. Production workflow

1. Topical map with QDP verdicts and page types (02, 03)
2. Augmentation table per node (04 §2)
3. **draw.io mockup** per page type — every block ATF→BTF with name, purpose (which
   augmentation/attribute it serves), relative size, content-type tag, technique tag, zone,
   link zone. Mark the centerpiece and the macro/micro boundary. Mark the cluster-deviation
   component. Mark every deliberate insulating boundary (§7).
4. Figma production design from the mockup
5. Content brief aligned with both (06)
6. Write → design review → semantic HTML → schema → links → publish

**The mockup is a first-class brief deliverable. A brief without a layout is incomplete.**
