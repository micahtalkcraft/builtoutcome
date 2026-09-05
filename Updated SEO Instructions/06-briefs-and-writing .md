# 06. Briefs and Writing

Composing a page's text once the map has fixed its node, QDP verdict, augmentation table and
layout. Structure and markup are 07.

---

## 1. The brief (every field required)

| Field | Content |
|---|---|
| **Node + canonical query** | Best summative version after augmentation |
| **Heaviest term + evidence** | From 02 §2. This becomes the triple subject |
| **QDP verdict** | Own page, or the segment plan if this is a parent absorbing failed candidates |
| **5 query variations + augmented context** | From 04 §1 |
| **Query themes served** | From 02 §7 |
| **Page type + layout pattern + mockup** | Blueprint name from 05 §9; mockup attached |
| **Centerpiece block** | The answer, 40–55 words, first in DOM, plus the named functional element; the first-400-character plan |
| **Cluster definitional set** | The harvested definitional sentences from the ranking set (§3), with table-stakes terms and information-gain candidates marked |
| **Augmentation table** | The full table from 04 §2 — this drives section order |
| **ATF/BTF component plan** | Macro components in order with sizes; micro components; where links live; component per heading |
| **Content-type distribution** | Per section: factual/opinionated, structured/unstructured, and which technique applies |
| **Heading vector** | Title → H1 → H2s → H3s as one journey, each with clustered questions, format and layer tag |
| **EAV plan** | Attributes, salient order, value sets, predicate/measurement table rows, component per attribute |
| **Triples to state** | Subject–predicate–object list, with the direction each is stated in |
| **Cluster-deviation note** | What the ranking cluster shares (vocabulary, structure, components) and what this page does differently |
| **Vocabulary discipline** | Terms to keep uniform with sibling pages in our own cluster; terms that create distance from the competitors' cluster (02 §3) |
| **FS targets** | Answers ≤40 words, marked FS, no bridge words |
| **Qualifier disambiguation list** | Terms the rewriter could reassign, with the phrasing to use |
| **Transformation-cost passage** | One passage pre-shaped to the live AI answer's exact current form |
| **Internal-link plan** | Few in-content links, anchors + neutral annotation, per 08 |
| **Image plan** | Payload, captions, alt drafted; 1,200px where Discover matters |
| **Attribution block** | The sentence you want AI answers to generate, where it is stated on-site, which third-party surface corroborates it |
| **Blacklist set + version** | Which banned-word/structure list applies |
| **Position in production** | Human exemplar, or AI-assisted under the exemplar corpus |
| **Schema** | FAQ, Article, LocalBusiness, the page's Action type, author |
| **Word range** | As short as possible, as long as necessary |
| **Sources to cite** | Named, with the inline citation format |

Research inputs: competitor content-gap and component inventory, the ranking cluster's shared
vocabulary, high-impression zero-click GSC queries, PAA and autosuggest, a live cannibalisation
view. Treat production as **~50% research, 50% writing** *(setting)*. Cited primary sources are
mandatory; fluff is not permitted.

## 2. Triples: the core writing unit

Every information-bearing sentence should resolve to a subject–predicate–object triple.

**Subject selection is not stylistic.** The heaviest term of the query (02 §2) occupies the
subject position wherever the sentence allows, because subject position raises a concept's
prominence. If "Nike" is the heaviest term in *Nike running shoes*, "Nike" is the subject of
the defining triples — not "running shoes".

Rules:

- **Bidirectional statement.** State key relations in both directions across the document
  ("Financial advisors help families achieve independence" / "Financial independence is
  achieved by families with the help of financial advisors"). Choose which entity leads based
  on which you want prominent.
- **New information with every restatement.** Re-ordering the same fact adds only gibberish
  risk. If the restatement carries no new attribute, delete it.
- **Strongly connected component.** Connect entities A→B, B→C, C→A. Isolated entities with no
  relations count against you — **entity stuffing is the new keyword stuffing**.
- **Predicates carry the measurement.** Pair the predicate with the unit from the EAV table
  (03 §5b): not "highly experienced" but "has tried 47 jury verdicts".
- **Co-occurrence restraint.** Good and bad phrases attach to certain co-occurrences
  *(claim; phrase-based indexing)*. Exaggerating co-occurrence raises the **Gibberish Score**.
  State it once, well.

## 3. The three writing layers

- **Facts (default).** Present-tense factual sentences, one new fact each, short. Entity-first:
  the target concept is the subject of its defining sentence. Source cited inline at sentence
  end (institution, author, year). Answer units matched to the query — a duration answer
  carries weeks, a price answer carries currency. No opinions, analogies or everyday language.
- **Experience (only where tagged).** First-person, casual, experiential n-grams. May be short
  and unstructured. Carried by forum blocks and the preceding-question component.
- **Perspectives (only where tagged).** Attributed viewpoints — consumer, practitioner,
  manufacturer, researcher — each its own angle.

Openings and summaries stay strictly factual regardless of layer.

### Harvesting the cluster's definitional vocabulary (run before writing the opening)

File 06 §7 requires you to measure distance from the **ranking cluster's shared vocabulary**.
This is the method for extracting it, and it is the cheapest research step in the brief.

Search the concept's definitional stem in quotation marks and collect the definitional sentence
from every ranking page: `"a milk allergy is"`, `"an ECN account is"`, `"the spread on"`. What
comes back is the cluster's shared definitional vocabulary, in its own words.

- **Run each stem separately.** `is`, `means`, `requires`, `causes` and `costs` return different
  clusters, because they answer different predicate variants (04 §1.5).
- **Automate across the node set.** Forty allergy types, sixty brokers or twenty account types
  is forty, sixty or twenty searches, and the output feeds every centerpiece in the set. This is
  a scripted step, not a manual one.
- **Mark two things in the output.** Terms and framings that appear in nearly every result are
  **table stakes** and must be present or the page reads as incomplete. Terms and framings that
  appear in none are the **information-gain candidates** (01 §6), and at least one belongs in
  the opening.
- **Record the measurement units the cluster uses**, and beat their numeric density (§6).
- **The output is brief input, never copy.** Assembling a definition out of harvested fragments
  produces the cluster average, which §7 identifies as a donation to the incumbent
  representative. Write a definition that is richer than all of them and shares as little of
  their phrasing as the facts allow.

## 4. Safe answers and front-loading

For factual and YMYL queries:

- **No modal verbs** in factual answers.
- **Layered Boolean structure**: direct answer first, then the conditions.
- **Tight truth ranges** with hedges and opposition coverage.
- **Negative answers are answers** — "we do not offer X" is a complete answer, state it plainly.
- Google ranks the *safe* answer *(claim)*: state the direct answer, cover the truth range,
  represent the opposition.
- **Front-load** inside the ~400-character centerpiece budget and in each paragraph's first
  sentence. Never delay the answer to the canonical query — if the first sentences do not clear
  the relevance bar, the rest may never be evaluated.
- Make the first two sentences dense in predicates, adjectives and numbers.
- **Answer the procedure, not only the definition.** Relevance and responsiveness are scored
  separately (01 §5), and an opening that defines the entity and stops is relevant and
  unresponsive. Inside the centerpiece budget, name at least one of: the conditions that apply,
  the documents or inputs required, the cost or range, the first step, the time it takes.

### Answer scoring: position, coverage, exclusivity

*(claim; corroboration and answer-scoring literature — Wu & Marian, "Corroborating Answers from
Multiple Web Sources", Rutgers. The running example is that even honda.com states inconsistent
mileage values for one model, so the engine cannot resolve the fact by trusting the most
authoritative host.)*

Where sources disagree, the engine scores candidate answers rather than accepting the most
authoritative one. Three of the scoring inputs are directly controllable on-page:

- **Position.** Where the answer sits on the page. Front-loading is the same rule arriving from
  a second direction.
- **Coverage.** How thoroughly the page treats *that specific question*, not the topic around
  it. A question mentioned in passing on a comprehensive page loses to a question fully treated
  on a narrower one.
- **Exclusivity.** Whether it is the **only** answer to that question on the page. A page
  stating three different values for one attribute scores worse than a page stating one, even
  where all three are defensible. Variants belong behind stated conditions ("£X on a standard
  account, £Y with a rebate"), never as competing unconditioned statements.

Exclusivity is the operational form of one dominant context per URL (01 §7.8), applied per
**question** rather than per page. A page may answer many questions. Each question gets exactly
one answer.

**The truth range is corroborated, not asserted.** The plausible band for a numeric answer is
computed across the sources the engine holds, and a value outside it is discarded before scoring
rather than scored badly. Two consequences follow. **On-page**, state values inside the band the
rest of the web supports and let precision and conditions be the differentiator, not an outlying
number. **Off-page**, holding your claimed values inside that band across enough independent
sources is the actual job of the external topical map (10 §6), and it is why the values are
fixed in the brief before the first placement goes out.

## 5. Authorship micro-rules *(setting; several trace to patents and the leak)*

- Subject–predicate–object order, precise words, numeric specificity.
- **Do not start a sentence with "if".** State the declaration first, the condition last.
- **Avoid "also".** No nested statements. Never skip the query's specific attribute.
- **Sentence boundary:** end sentences with a period. Never run a sentence into a
  colon-introduced fragment — extraction treats the period as the boundary.
- **Ordinal chains:** if you write "firstly", follow with "secondly … finally", in order.
- **Trigram overlap:** keep at least one three-word sequence of the target question inside the
  answer's first sentence. *"how to meet seniors over 60"* → *"To meet seniors over 60, …"*
- **Three-sentence factual order per concept** *(setting)*: (1) an "X is a…" definition;
  (2) the predicate/mechanism sentence ("X means / causes / requires…"); (3) an attribute in
  "the X of Y" form. Opinionated blocks take the opposite rule — deliberately unstructured,
  natural, no fixed order.
- **No bridge words inside FS-marked and answer blocks** *(claim; patent-derived)*: "however",
  "unfortunately" and other discourse connectors lower a passage's score. This bans connector
  **words inside answer passages**. It does not ban the section-end bridge **sentence**.
- **End each section with a bridge sentence** into the next heading.
- **Disambiguate reassignable qualifiers**: "medium **size** tote bag", not "medium tote bag";
  "Melbourne **CBD** injury lawyer", not "Melbourne central injury lawyer" — so the query
  rewriter cannot hand the query to another page.
- **Short, single-meaning sentences.** They serve machine extraction and break detector
  stylometry, which keys on multi-meaning sentences. One rule, two payoffs.

## 6. Numeric density and measurement

- Pair every measurement unit with a numeric value.
- Exceed competitors' number-and-unit count per page **two-to-three-fold**, grammatically
  *(setting)*.
- Every attribute in the EAV table (03 §5b) arrives with its measurement unit. "Board certified
  (yes)", "12 years", "47 verdicts", "4–12 weeks", "within 24 hours", "800m from the station".
- Numeric values in titles help. Listicles commit to a round number — prefer 10, then 20.

## 7. Information gain in the copy

- Document vocabulary must exceed query vocabulary: supply the causes, angles, researchers and
  studies the searcher does not already have.
- Connection richness between covered entities is itself an expertise signal.
- Inline sentence-level citations, never bottom-of-page reference lists.
- Measure distance from the **ranking cluster's shared vocabulary**, not just from the query. A
  draft that reads like the cluster average is a donation to the incumbent representative.
  Extract that vocabulary with the definitional harvest in §3.
- Simultaneously keep vocabulary **uniform across your own sibling pages** so your cluster holds
  its index (02 §3).

## 8. AI-assisted production and velocity

**Velocity rules are hard limits, not tuning parameters.**

- **No burst publishing at any brand strength.** Thousands of documents in a day is a kill
  switch regardless of links, brand searches or history.
- **Mature before scaling** *(setting)*: a new domain or new subfolder ages 3–4 months with
  human-grade content before any scaled production. A thousand URLs in a subfolder's first week
  is a classic trigger.
- **Ramp ceiling** *(setting)*: ~50–70 documents/day after maturing, and only with the pipeline
  below.
- **Plan completion, then randomise** *(setting)*: total map pages ÷ remaining days to a 7–8
  month finish; publish on randomised daily counts (2, then 27, then 7…), never a metronome.
- **Competitor-union coverage** *(setting)*: merge the ~8 main competitors' sitemap coverage
  into one set, then cover **20–30% more topics, deeper — never 3×**. 3× coverage is a
  scaled-content signature.

**Pipeline:**

- **Exemplar-first.** The first 30–40 documents are fully human at maximum quality, then serve
  as the style and structure corpus the model must imitate *(setting)*. A large personal corpus
  (transcribed talks, recordings) materially improves voice. AI-heavy content on a fresh site or
  new subfolder is the highest-risk configuration.
- **Blacklists as infrastructure** *(setting)*: per-industry, versioned lists of banned
  AI-signature words (delve, foster, robust, seamlessly, enhance…), banned sentence structures,
  punctuation habits and word combinations. Bridge words for answer blocks live here too.
  Version them; they go stale with each model generation.
- **De-cluster the code, not just the prose** *(setting)*: AI site builders ship identical class
  names and DOM trees. Rename classes, restructure div hierarchies, write custom CSS.
- Use AI for structure and extraction, not strategy: paragraphs → triples with prominence
  scores; fact extraction ranked by importance; contextual-predicate selection; question sets;
  two-document fact comparison to find information gaps; the definitional harvest in §3.
- **Ratios** *(setting)*: ~60% new / 40% updating. AI contribution ≤30% per document, human
  effort above 70%.
- Never trust a SaaS "originality score" in either direction. Detectors are threshold-based,
  biased against non-native writers, and stale against new models.
- **AI-generated blog articles are prune candidates in any audit.** They dilute the cluster.

## 9. Pre-publish QA

Run checklist C1 in 13. The trim test is the fastest filter: remove a sentence — if the
paragraph's meaning is unchanged, delete it permanently.
