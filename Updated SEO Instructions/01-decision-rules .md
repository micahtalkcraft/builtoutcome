# 01. Decision Rules

The model, compressed to the parts that change what you build. No history, no case stories.
Every line ends in a consequence.

---

## 1. The definition

**Topical Authority = (Historical Data × Topical Coverage) ÷ Cost of Retrieval, interpreted
through visual semantics.** *(claim as an equation; the four levers are real)*

Read it as a cost-of-retrieval optimisation: satisfy the need behind a query, with click
satisfaction, while costing the engine less computation than the alternatives.

- **Topical Coverage** — completeness against the topic's graph of entities, attributes and
  intents. If you did not define X you did not cover it; if you did not connect X to Y you
  did not cover it.
- **Historical Data** — quality of accumulated engagement (impressions, satisfied clicks),
  not elapsed time.
- **Cost of Retrieval** — the divisor. The cost of ranking a document cannot exceed the cost
  of not ranking it. **Every unnecessary page raises it.**
- **Visual semantics** — the multiplier. A wrong or missing centerpiece annotation zeroes the
  product regardless of the other three.

**Consequence:** more pages is not more coverage. Coverage is measured in satisfied query
networks, not URLs. Adding a page that no query deserves subtracts from authority.

## 2. Two ways to build coverage (pick one or both per project)

1. **Process every attribute of an entity.** Take the central entity, enumerate its
   attributes, cover each to the depth the SERP rewards.
2. **Process every variation of a query template.** Identify the template
   ("Can X cause Y addiction?", "[service] in [city]", "flight ticket [location]") and cover
   its variations.

Most strong projects do both. State which you are running before building the map (03).

## 3. The ranking decision tree *(claim)*

This is the mechanism topical authority exploits:

1. If a site satisfies one instance of a query template, the engine infers it can satisfy
   other instances. It runs a **small click test**. A positive result makes the site more
   rankable across the whole template, on query similarity.
2. The same generalises across entity classes: satisfy queries for one entity-context pair,
   with certain attribute combinations and verbalisations, and the site inherits rankability
   for other entities of the same class — at first ranking and at re-ranking.
3. **The state can be erased.** If the site exploits that earned trust with parasite SEO,
   irrelevant topics, or lower-quality content, the decision tree is altered downward at a
   re-ranking and the positive state is lost.

**Consequence:** coverage inside the template compounds; coverage outside the spine can
delete what you earned. The will-not-cover list (03 §3) is a ranking asset, not admin.

## 4. Cheap pass vs expensive pass

Google does not run its expensive algorithms on documents that do not deserve them; for
undeserving documents it checks core topicality and locality signals only (DOJ testimony,
Pandu Nayak). RankBrain is named as an expensive algorithm that will not run for a site that
has not earned it. Trust extends slowly across broad core updates — the leak's `RankLabTitle`
module carries `baseRank` and `testRank` attributes *(claim)*.

**Consequences:**
- Earn clicks early so the expensive stack runs sooner. This is why the most important query
  network is targeted from the most important page (08 §2), and why exact- or partial-match
  domain or site name helps (10 §3).
- Crawled does not mean evaluated. Do not read indexation as approval.
- Judge results in core-update units, not calendar weeks.

## 5. The three criteria (all required)

- **Relevance** — entity and topic match. Won with the map, EAV coverage, term weighting,
  textual semantics (02, 03, 06, 07).
- **Responsiveness** — task support. If the page does not let the user complete the action
  behind the query (book, buy, compare, calculate, convert, reserve, filter, quote), it is not
  responsive. "Helpful" has meant **functional** since the Helpful Content Update. Won with
  real components and the centerpiece (05).
  **Responsiveness has a textual half as well as a functional one.** A definitional opening
  ("X is a type of Y that does Z") can be fully relevant and still score nothing on
  responsiveness, because it names no application conditions, no required documents, no cost
  and no first step. State what the user must do, bring, pay or decide next, not only what the
  thing is. A page can fail responsiveness with a working component present, if the text never
  supplies the procedure (06 §4).
- **Originality** — statistical uncommonness against what already ranks, at page, paragraph,
  sentence, visual, HTML and layout level *(claim)*. An uncommon working component the ranking
  cluster lacks is itself originality. Every brief carries a cluster-deviation note (06 §1).

## 6. Information gain

Every page adds information beyond what already ranks: unique data, lesser-known terms, named
studies, original measurements, connections competitors lack. Chase the information gap, not
the keyword gap. Where the answer cannot differ, gain migrates to presentation — structure,
annotation, priority, function.

Document vocabulary must exceed query vocabulary. The query names what the searcher knows;
the document supplies what they do not.

## 7. Hard prohibitions (absolute — no brief, client or deadline overrides these)

1. **Never imitate or fake a function.** Misleading functionality is a documented spam policy.
   If a page needs a booking, quote, calculator, comparison or conversion function, **build
   the working component**. A mock control that does nothing is prohibited. Emulating a page
   *type's* functional pattern with a real component is correct; imitating the *function* is
   not.
2. **Never open near-duplicate pages** and trust the engine (or "AI") to disambiguate. Run QDP
   (02). Micro-cannibalisation is the default outcome of skipping it.
3. **No burst publishing at any brand strength.** No link profile, brand-search volume or
   history protects a burst. Velocity ceilings in 12 §3 are limits, not tuning parameters.
4. **Never fake freshness and never fake document age.** Cosmetic date edits are a documented
   spam signal; backdating is its mirror.
5. **No inauthentic mentions, manufactured accounts, fake reviews, scripted engagement or
   synthetic UGC** of any kind. This covers fabricated statistics and invented survey results
   published to be cited, whatever the citation yield of that format (10 §10).
6. **Never serve Google and users different content.** Crawler-targeted work must leave the
   user-facing and Googlebot-facing experience identical. `data-nosnippet` for scope control
   is permitted (09 §7); region- or agent-split content is not.
7. **No volume or difficulty as the inclusion test.** QDP plus information gain decides;
   volume only sequences.
8. **One dominant context per URL.** No micro-query fragmentation. No new vertical without a
   roof context and a brand reason. Applied per question rather than per page, this is the
   answer-exclusivity rule in 06 §4.
9. **Never skip the trust and technical layers.** Semantic and visual work does not beat an
   E-E-A-T problem in YMYL or a crawl problem anywhere.
10. **Keep scale and format experiments off the money site.** Test on subdomains or expendable
    properties, never on brand-attributable URLs.
    **Scope, and it is narrow: an expendable property exists to test a format, structure or
    scale hypothesis, and to be measured.** Publishing volume onto owned satellite domains in
    order to manufacture consensus about the brand, its attributes or its ranking is not an
    experiment and is not covered by this clause. That is a manufactured domain network under
    prohibition 5 and under the 10 §6 guardrails, and the fact that it works is not a defence.
    Test: if a property's purpose is to be *counted or cited* rather than *measured*, it is out
    of scope.

## 8. Scope caveats

- The method's fastest wins come from low-competition, non-YMYL niches. In competitive English
  or YMYL SERPs (finance, health, legal, iGaming), links, brand signals, real expertise and
  technical health remain decisive. Treat coverage + structure + design as **necessary but not
  sufficient** there and fund the authority layer (10) deliberately.
- Smaller-index markets move faster than the US *(claim)*. Set expectations by index size, not
  effort.
- Pre-internet prestige media brands sit above topical rules. Never benchmark against that
  class.
- A tool or utility page with genuine function can outrank enterprise competitors with no
  backlinks at all — in tool SERPs. Do not generalise that to YMYL or local service.
