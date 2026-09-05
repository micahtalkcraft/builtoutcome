# 12. Execution, Audit and Recovery

Order of operations. Detail lives in the owner files cited.

---

## 1. Build sequence

| Phase | Work | Owner file |
|---|---|---|
| 0 | Strategy spine, coverage mode, borders, will-not-cover, measurement plan | 03 |
| 1 | Candidate expansion (three directions) + RPP filter | 03 |
| 2 | **QDP scoring on every candidate** — page / segment / post-authority | 02 |
| 3 | Query augmentation per surviving node; augmentation tables on money nodes | 04 |
| 4 | Page types against the live SERP mix and quotas; prune / merge / fold | 04 |
| 5 | Per-node EAV with the predicate/measurement table | 03 |
| 6 | Blueprints: draw.io mockups → Figma; centerpiece and macro/micro marked | 05 |
| 7 | Templates: brief template, authorship rules, blacklists, writing guide | 06, 13 |
| 8 | Production: briefs → layered writing → snippets → semantic HTML → schema → links | 06, 07, 08 |
| 9 | Technical floor: cost of retrieval, crawl KPIs, rendering, sitemaps, robots | 09 |
| 10 | Launch gate and ramp | §2, §3 |
| 11 | Authority in parallel from day one: entity home, site name, claims, external map, social | 10 |
| 12 | Measure, re-score, recover | §4–§8 |

Phase 2 is not optional and not reorderable. Everything downstream inherits its verdicts.

## 2. The launch gate (new site or new section)

1. **Block Googlebot from the first millisecond the domain resolves** *(setting)*. On the first
   crawl of a new site Google runs its full expensive algorithm stack once; do not spend that
   evaluation on a half-built site. New domains are discovered from SSL certificate transparency
   lists, so expect crawler hits from the moment a cert is issued. **Never stage private content
   on a live cert.**
2. **Build in the dark: 80–150 well-structured documents** before opening (80–90 lower bound;
   ≥150 for a ~700-URL map) *(setting)*. The best ~20 survive inside this as the
   **homepage-linked quality-node set** (08 §3).
3. **Drive the outside world while blocked:** links, newsletter distribution, social shares, real
   visitors. Google sees demand pointing at content it cannot fetch, and the index gap makes it
   evaluate fast and generously the moment you open *(claim/setting)*.
4. **Technical floor before opening** (09): <100ms response, lean DOM, server-rendered main
   content, chunked sitemaps, parameters handled.
5. **Open Googlebot.** Expect near-immediate indexation and a full-stack evaluation, then ramp
   per §3 — never burst.
6. **Section variant for existing sites:** disallow just the new folder, publish it completely,
   open when done. Preconditions: a genuine contextual bridge to the existing spine, **and**
   query-path evidence that users searching the existing topic also search the new one.

**Domain note:** exact or partial-match names earn clicks earlier, and clicks trigger evaluation.
A fully branded domain waits longer. If exact-match names saturate the term, vary slightly — a
same-term me-too EMD takes an initial demotion. Where the domain is fixed, use the site name
lever instead (10 §3).

## 3. Velocity (hard limits)

- **No burst publishing at any brand strength.** No link profile, brand-search volume or history
  protects a burst.
- **Mature before scaling** *(setting)*: a new domain or subfolder ages 3–4 months with
  human-grade content before scaled production.
- **Ramp ceiling** *(setting)*: ~50–70 documents/day after maturing, with the 06 §8 pipeline in
  place.
- **Plan completion, then randomise** *(setting)*: total pages ÷ remaining days to a 7–8 month
  finish; randomised daily counts, never a metronome.
- **Competitor-aware cadence** *(setting)*: roughly 30% above the competitor's rate read from
  sitemap `lastmod` dates — always inside the ceilings above.
- A diagnostic pause is permitted. Going passive is not; crawl priority falls and is slow to
  regain.

## 4. Publishing order

- **Default:** sub-topics first, biggest money topics last. Close each gap when the site has the
  authority to win it. One hard topic early only when stakeholders demand proof.
- **Burn-rate inversion:** with a short runway, invert — heavyweight briefs straight at the
  homepage and top category pages, all signals consolidated on few URLs, expanding outward only
  after cash flows. For local this is often the default anyway (11 §2).
- **Competitor-conquest ordering** *(setting)*: rank the competitor set easiest → hardest, take
  the easiest competitor's main queries first. Each win funds the next fight.
- **Query-path ordering:** sequence by the before/after order users actually search, so clicks
  on one node feed the next.
- **Vastness vs depth** *(setting)*: an explicit budget binary — many thin-but-clear entries, or
  a curated deep set. Choose per runway and SERP; do not drift between modes mid-build.

## 5. Site audit workflow

1. **Reconstruct the spine the site currently projects** — navigation, homepage, top folders,
   anchors — and contrast with the intended spine. Commonest finding: a split spine. Verdict:
   sharpen, split or prune.
2. **Read the technical headline numbers first** (09): "Discovered — not indexed",
   "Crawled — not indexed", crawl KPIs, the no-JS render test, parameter URLs, forgotten
   subdomains. These reorder everything else.
3. **Inventory and classify every URL:** section (core/outer/off-map); role
   (money/supporting/connective/quality node/utility/dead); canonical query and whether GSC
   shows it owned, shared or absent; **page type as built vs page type the SERP wants**; cost
   flags. Record the branded:informational ratio.
4. **Re-score QDP across the whole inventory** (02 §8). Most existing sites have a large set of
   pages that no query deserves. This is where the biggest wins live.
5. **Diff into eight buckets:**
   1. Missing — gap to fill
   2. Covered and earning — leave alone
   3. Covered but underperforming — page-level pipeline
   4. **Wrong page type — reformat, not rewrite** (cheapest large wins)
   5. **Fails QDP — merge into parent as a segment, redirect**
   6. Off-map but earning — bridge in, spin out, or accept knowingly
   7. Off-map and dead — prune (410 or merge)
   8. Utility — keep crawl-efficient
6. **Subtraction-first triage: prune → merge → reformat → fix → fill.** Subtraction lowers
   retrieval cost, concentrates PageRank, and raises the quality average before any new spend.
   Every URL leaves with one decision and one owner. Price in Google's memory lag (09 §7) —
   removed URLs linger in the remembered link graph, so prune early.
7. **Internal-link audit** (08 §10), starting with what the homepage links to.
8. **Visual-semantics pass** on priority URLs: first-400-character extraction check, functional
   element present and working, component benchmark vs top competitors, verbalisation gaps,
   boilerplate and DOM-order flags.
9. **Parallel layers:** technical (09), authority and external map (10), international where
   relevant.
10. **Roadmap in payback order** with the measurement plan attached before work starts.

**Failure modes this prevents:** auditing content quality while the spine is split; filling gaps
before subtracting; rewriting pages whose real defect is page type; polishing text on pages with
corrupted centerpieces; treating a SERP quota cap as a quality problem; shipping an audit
without owners, sequence and measurement.

## 6. Testing

- **Noise floor:** the engine does not measure small changes on unimportant pages. Test format,
  answer structure and layout changes on **already-popular pages only**.
- **Protocol** *(setting)*: ≥~100 URLs or ~10% of the site; one variable; controls untouched;
  wait 6–8 weeks; stage the rollout top pages first; re-baseline each cycle.
- **Early read at 4–7 days:** impressions and average position only. *Rising impressions with
  falling average position = more queries = the leading positive signal.*
- **Measure share of day, not position** *(claim: SERP result diversification; setting: the
  ~20-minute opening slice)*. A page entering the first page is not held there for the whole
  day. The engine runs the click test by exposing the position for a fraction of each day,
  reported as roughly 20 minutes at first, widening as click response comes back positive,
  until the position holds for a continuous 24 hours. **Occupancy share moves before average
  position does**, which makes it the earliest read available on a money query. Sample the SERP
  hourly or finer on 10–20 money queries and record the percentage of samples the URL holds its
  position, not the position itself. A rising occupancy share at a flat reported position is a
  passing click test; a falling share at a flat position is the test being withdrawn.
- **Leading indicators in order:** snippet/PAA captures → top-20 → top-10 → top-3, after a flat
  period then an inflection.
- **Ratio diagnostics:** embeddings-count : queries-ranked; headings : queries; crawl frequency :
  content-update frequency; impression change % per change batch.
- **Isolation:** where the domain's history is suspect, test design and function changes on a
  subdomain. It gives the engine a clean reason to reprocess and isolates new structures from
  historical state *(claim)*. Never break the live site to force re-evaluation.
- **Winner-vs-loser diagnosis after updates:** build a feature matrix across the affected query
  set's winners and losers (coverage, answer placement, EAV depth, component inventory,
  functional elements, authority, technical flags) and correlate against rank. **When winners
  share a layout class the losers lack, the remediation is reformatting, not more words.**
- **Attribution hygiene:** Bing as control and early preview (09 §12); a dated change log;
  update timing checked before crediting any fix.

## 7. Decision thresholds

- **No movement after 3–4 months:** stop adding nodes. Diagnose the bottleneck — technical,
  borders or authority — instead of writing into a wall. Run cost of retrieval first.
- **Covered but not ranking at 6+ months:** the problem is authority or page type, not coverage.
  Check the SERP's result-type composition and category quota before writing more.
- **Changes register months after you make them** *(claim)*. Judge at update boundaries against
  the dated change log, not calendar weeks.
- **Expect volatility windows.** Constant paired position swaps (3rd↔7th) are live engagement
  tests, not ranking changes. Do not react.
- **Patience units** *(setting/claim)*: ~10,000 impressions as critical mass — per day in
  competitive niches; 4–5 core updates with 40–50% swings as normal; ~48-hour index-and-rank as
  a trust proxy; an incomplete launch (no images, missing links, not homepage-linked) delays
  first rankings ~4×.
- **Update timing:** wait out an in-flight core update before a cold launch; publish through one
  that is already rewarding you; ship into the window when a competitor drops. Batch changes
  large enough to register.
- When a stable page suddenly ranks for absurd queries (embedding confusion after an unannounced
  relevance update), do not panic-rewrite. Check update timing, strengthen the page's dominant
  context, wait for recalculation.

## 8. Recovery

| Situation | First move |
|---|---|
| Millions of low-value pages, mass non-indexation | **Prune on QDP first.** Consolidation alone has produced large click gains with impressions flat |
| Sitewide negative state, one strong attribute exists | **Segment recovery:** build or fix one clean segment around the most important attribute, link the whole site heavily into it so it is crawled hardest. Google re-judges from the good sample *(setting: fixed segment +40%, rest of site +16%, decline stopped)* |
| Helpful/functional-content hit, no real function | **Add real function** — UGC, comparison, analytics, ordering, booking via partnerships. Function is what the system was looking for |
| Helpful-content hit mixing unrelated topic groups | **Subdomain segmentation** with exact-match terms; tolerance for off-context content is higher off the main host, and smaller chunks avoid inheriting the whole domain's state *(setting)* |
| HCU-hit review/affiliate content | First-person reframe with visible testing methodology; in stubborn cases move to a domain carrying "test"-type phrasing |
| Rendering-driven duplicate collapse | Server-render main content; re-check canonical elections afterwards (09 §4) |
| Update-losing domain, want a clean slate | Parallel site on the correct ruleset ~3 months, then 301 |
| Domain history blocking evaluation of a redesign | Subdomain test with added functions and annotations |
| Expired domain whose history did not transfer | **Exact-match subdomain** — smaller size, no inherited spam-update effects, sidesteps filters attached to the old domain |
| Core-update hit | Naturalise (flatten the decline), keep publishing, brand-first levers (10), add function, ride the next update. Refresh the homepage additively, never wholesale |
| Post manual penalty | Plan for a persistent ceiling; weigh a fresh-state rebuild |

A negative state is a property of domain and URL history, not current content, and it rides a
301 *(claim)*. Never bare-redirect a penalised domain onto a healthy one.

**Standing posture during any dip:** watch the branded:informational ratio; keep an active
YouTube channel as real-business evidence; never panic-remove links (the purchased-link probe,
10 §9); never fake freshness or age.

## 9. Monitoring

- Rank trackers miss the newer surfaces — the generated ranked entity carousel, the "what people
  say" strip, and GBP-inclusive local results. Check money queries manually, weekly.
- **One snapshot a day cannot see a click test.** Standard rank trackers sample once daily, so a
  URL inside its test window reads as ranked, unranked or violently volatile at random, and both
  a win and a loss get misattributed. Run the occupancy sample in §6 on money queries before
  crediting or blaming any change.
- For local, remember that Semrush includes GBP rankings and Ahrefs does not (11 §7).
- GSC hides an estimated ~40% of feature-level data *(claim)* and shows roughly 30% of crawl log
  data *(setting)*. Use raw logs for crawl decisions.
- Keep a **dated change log**. Nothing in this method is judgeable without one.
- Re-run after **every core update**: QDP re-score, cannibalisation check, map matrix re-read,
  crawl KPI check.
