# 07. On-Page Structure, Snippets and Schema

Laying finished text and components into a rankable document. Components are 05; this file owns
the text structure and markup they sit in.

---

## 1. Centerpiece-clean HTML

- Title, meta description and canonical near the top of source, findable without rendering JS.
- **One H1** stating the page purpose. The answer block and primary functional element
  immediately after, **first in the DOM**.
- **No boilerplate inside the main-content stream.** Share buttons, social widgets, newsletter
  interrupts, ad slots and cookie fragments sit outside the main content's DOM flow — never
  between the H1 and the opening answer. Extraction demonstrably breaks on this.
- Semantic HTML throughout: H2 per section, H3 for minor parts. **DOM order matches visual
  reading order.** Main content never behind JS.
- Most important tags and text in the first bytes of source (~first 1,460 bytes) *(claim)*; on
  long documents, critical entities and n-grams inside the **first ~2% of tokens** *(setting)*.
- **Titles carry extra weight on the LLM side**, where snippets have historically been ingested
  without the page being read *(claim)*. Meta descriptions are low priority for Google, which
  rewrites them. Write titles for both audiences; do not over-invest in descriptions.
- **Do not stuff footers.** Transformer summarisers weight late context, but footer stuffing
  breaks the page's contextual vector for Google. User-only or personalised text belongs in
  `data-nosnippet` zones (09 §7).

## 2. Heading vector

The ordered headings read together are the page's angle: **title → H1 → H2 → H3 as one
journey**.

- Title and headings agree.
- Every heading covers different information. Paragraphs never repeat information stated
  earlier.
- A heading naming another entity **links to that entity's page**.
- Each heading takes the right format for its content: list, table, definition, steps, card
  grid. Record the component per heading in the brief.
- Heading order follows the augmentation table's row order (04 §2), which follows augmentation
  importance.

**IR zones.** Above-the-fold content carries more weight; the bottom reads as supplementary.
Foreground the salient attribute; place or omit heavy attributes deliberately — leading a
biography with "assassination" loses the biography query. **If a query's required answer unit
(a time, percentage, currency figure) is absent from the early high-weight zone, the page will
not rank for it** *(claim)*.

Making a page more relevant to context A makes it less relevant to context B. To serve both:
sub-structure, split under QDP, or lean on PageRank.

## 3. Snippets and answer passages

- **Citation is gated on classic ranking, in a fixed order** *(claim; search-with-stateful-chat
  patent)*. A document selection engine runs first, so a document that does not rank on the
  SERP is never a candidate for an AI Overview. The chain is **document ranks → passage ranks
  (featured snippet, PAA) → generated citation**, and each step is a precondition for the next.
  **There is therefore no separate AI Overview workstream.** When a page is absent from AI
  answers, check its classic position for the prompt's underlying query before touching passage
  form, schema or markup: below the selection threshold, none of that is being read.
- **Featured snippet target: under ~340 characters / ~40 words** *(setting)*. Mark FS in the
  brief.
- **Engineer from the query's part of speech.** Superlative query → comparative answer naming
  the winner. "Difference between" → the single main difference for each. For multi-source grid
  snippets, supply a complementary answer rather than duplicating the ranked one.
- **Keep a shared trigram** between the processed query and the answer passage.
- **No bridge words** inside FS-marked and answer blocks (06 §5).
- **Transformation cost** *(claim)*: the closer a passage's form to the AI answer's current
  presentation form, the cheaper the transformation and the likelier the citation. For each
  money prompt, study the live answer's format (list, table, definition + steps) and pre-shape
  one passage to exactly that form.
- **One good passage overrides many bad ones** *(claim)*: passage indexing can rank a document
  on its single best passage — the stated reason forums rank. On long or UGC-heavy pages,
  engineer at least one perfect, self-contained passage per target sub-query.
- **Cover predicate variants** across the passage set, not just noun variants. Each returns
  different AI Overviews and different citations.
- Self-contained passages: definitional first sentence, statistics with inline source and date,
  no unresolved pronouns or "as mentioned above".

## 4. Price / hybrid answer pattern

For "[thing] price" and "cost of [thing]" queries, blend two units in the macro context:

1. A featured-snippet-shaped responsive paragraph containing the actual number or range.
2. The structured information cards for the providers, immediately after.

This serves the informational and commercial halves of the augmentation in one zone and is the
standard shape for local price queries (11 §9).

## 5. State each fact in structured and unstructured form

Flat-content and structured-content scoring are described separately in patents *(claim)*.
Present the same information as both prose and a table/list, minding which comes first and in
which zone.

- Prefer **tables for value sets**. Google's own model verbalises tables and counts the page's
  available actions.
- Restate key facts across formats: sentence, formula, table, captioned image.
- **Never repeat a sentence verbatim.** Verbatim repetition raises the Gibberish Score
  *(claim)*.
- A captioned, OCR-readable table image indexes additionally *(claim)*.

## 6. Boilerplate and templates

- Keep boilerplate very low. Working figure: **content similarity under ~6%** *(setting)*.
- Use document templates sparingly and per the entity's dominant real-world profile, not per
  entity type.
- If a page set requires the same templated sentences, paragraphs, tables and structured data
  to fill, the QDP verdict was wrong — those should have been segments (02 §5).

## 7. Schema

**Build a mini-graph, not isolated blocks.** Interconnect the page's JSON-LD entities via `@id`
references into one graph *(claim)*. Implement fuller schema.org properties than Google
documents, expecting a trust delay.

Per page type:

| Page type | Core types | Notes |
|---|---|---|
| Any page | `WebPage`, `BreadcrumbList`, `Organization` (via `@id`) | Organisation/author entity owned by 10 |
| Local service / store / clinic | `LocalBusiness` (or the correct subtype), `PostalAddress`, `OpeningHoursSpecification`, `GeoCoordinates`, `areaServed` | One per physical location, on that location's page |
| Practitioner | `Person` with `hasCredential`, `memberOf`, `worksFor` → `@id` of the business | Named person entities from the augmentation table |
| Directory / listing | `ItemList` of the card entities | Each item `@id`-linked to its own page where one exists |
| Product / model | `Product`, `Offer`, `AggregateRating` | Only real ratings |
| Guide / article | `Article`, `FAQPage`, `HowTo` where genuinely stepwise | |
| Tool page | `WebApplication` + the `Action` type | |
| Forum page | `DiscussionForumPosting` / `QAPage` | Forum-marked pages index more easily |
| Any functional element | Its **`schema.org` `Action` type** — `ReserveAction`, `OrderAction`, `SearchAction`, `DownloadAction` | Every real function gets one |
| Review capture | `Review`, `AggregateRating` | Real reviews only — never fabricated structured-data reviews |

Rules:
- Every named entity in the augmentation table (04 §2) should be resolvable in the graph.
- Schema states what the page already states in text. It never introduces claims the visible
  content does not make.
- For YMYL, structured data establishes brand identity and content type — treat it as required.

## 8. Refresh and freshness

**Update Score = Update Frequency × Update Amount** *(claim)*. Crossing a threshold triggers
re-evaluation of the whole page, and internal-link or anchor changes weigh more than cosmetic
edits.

- Refresh every page with **real new information on a ~six-month-or-less cadence, changing
  ~20–30% each time** *(setting)*, re-tuned to shifted query interpretations after core updates.
- For evergreen and factual queries, **older documents can outweigh fresh ones**: the
  historical-data patent keeps ~12–13 versions of a document and scores them together
  *(claim)*. **Keep the URL, keep the version history, refresh in place.**
- **Never churn URLs for freshness.**
- **Never fake freshness and never fake document age.** Cosmetic date-only edits are a
  documented spam signal; backdating is its prohibited mirror.
- Read the SERP's dates to see which queries actually deserve fresher content.
- Every update — technical, layout or text — contributes to freshness and quality signals, and
  historically satisfied click signals pass to connected pages. Update the hub and the cluster
  benefits.
- Content that changes from **real user input** — a vote-ordered list, live review capture, a
  data component fed by API (05 §5) — is genuine freshness earned continuously, and it is the
  legitimate answer to a page that would otherwise be tempted into cosmetic date edits.

## 9. Time-limited pages

For pages with a genuine expiry (events, itineraries, seasonal offers), use:

```html
<meta name="robots" content="unavailable_after: 23-Jul-2026 18:00:00 EST">
```

This tells the engine the page's lifespan so it can price the crawl correctly. Publishing many
pages that will be deleted within two weeks makes the whole site less worth crawling.
Alternative and usually better: represent the temporary item as a segment on a permanent page
(02 §4).
