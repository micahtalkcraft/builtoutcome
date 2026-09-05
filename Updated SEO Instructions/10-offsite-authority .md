# 10. Off-Site Authority, Entity and the External Topical Map

The trust layer, running in parallel with content from day one. Non-optional in competitive or
YMYL niches: entity, brand and expertise signals decide whether content work can pay at all.
Google increasingly ranks the **web entity** — the brand aggregated across its website,
channels and UGC presence — not just the website. This layer is also the strongest input to
LLM answers.

**Proportion, before anything else** *(setting)*: the on-site semantic content network remains
roughly 90% of the work. This file is the other 10%, and it is the 10% that decides outcomes in
competitive and YMYL SERPs. Fund it deliberately; do not let it displace the map.

---

## 1. The entity home

The centroid page engines learn the brand's identity from. Build it first.

- Consistent NAP across the site, the Business Profile and every third-party profile.
- Class signals corroborating the central entity (what kind of thing the brand is).
- Brand-SERP dominance: the first page of results for the brand name is entirely yours or
  favourable.
- Reputation is read from About, homepage, author sections, socials, third-party and customer
  reviews, and corroborating pages. Off-site corroboration: Scholar, Books, Wikipedia/Wikidata,
  Crunchbase.

**Recognition → Resolution → Linking → Registering.** Identity is driven by document statistics
(your definitions and values) and query statistics (search demand). Exploit gaps where the two
disagree.

## 2. Knowledge-graph operations *(setting/claim)*

- **KGMID audit:** enumerate the entity's KGMIDs (the `kgmid` parameter in the search URL),
  inspect what Google indexes under each, then publish connecting triples and declarations
  across the correct profiles so duplicates consolidate at knowledge-graph update events,
  anchored on the entity home.
- **KG entry threshold** *(claim)*: notability + query demand + document prominence. Below it
  Google will not spend the compute. Build searched-for demand first; chase the panel second.
- **Source term vector** *(claim; patent)*: sustained query demand plus co-occurrence assigns
  terms to a brand, and when the term appears in any query the brand gets a boost. **Pick 3–5
  terms you want assigned to the brand and drum them for years** — in queries (branded
  campaigns) and in documents.
- **Autocomplete and PAA shaping** *(claim)*: both draw on ranking documents' title patterns,
  not only user queries. Enough published pages with a consistent title pattern about an entity
  can reshape its autocomplete and PAA. This is one of the legitimate objectives of the external
  map in §6, alongside ranking: some projects exist to change an autocomplete, a related-search
  set or a SERP feature rather than to rank a URL.
- The Google Knowledge Graph Search API returns a `resultScore`. Claims that it exposes a
  "confidence and clarity" score for a brand are not supported by the public API; the KGMID
  audit above is the operational version of that idea.

## 3. The site name lever

**Site name is not the domain name.** Google treats it as part of the brand name and it does
not have to match the domain. It is the cheapest relevance lever available and it is editable.

- A site that could not change its domain updated its site name to the category term and began
  ranking better for those queries. `SiteNameFactor` appears in the Content Warehouse leak.
- **Use it when** the domain is branded but the money query is categorical or geographic, and a
  domain change is off the table.
- **Order of preference for concept/locality amplification:** site name (free) → partial-match
  domain → exact-match domain.
- Exact/partial-match names earn clicks earlier, and clicks are what trigger evaluation
  (01 §4). A fully branded domain waits longer for Google to invest.
- If exact-match names already saturate the term, vary slightly. A same-term me-too EMD takes
  an initial demotion.
- An exact-match **subdomain** can rank where the main domain cannot: smaller site size, no
  inherited spam-update effects, and it can sidestep filters attached to an expired domain's
  history that were never transferred to the new owner *(setting)*.

## 4. Author and expertise

- **One expert per topic.** Concentrate the work; do not spread it across thin author pages.
- Connect the centerpiece to the main content creator.
- **Expression identity consistent.** Many authors sharing one writing style is a caught
  inconsistency. Fake author profiles destroy brand identity — prohibited (01 §7).
- A brand entity can be the author.
- Use the same short occupation phrase for each expert site-wide (a connected author graph)
  *(claim)*.
- For an expert with no web presence: create one and link it back to the brand; contract first.
- **Before funding author operations, A/B it:** publish near-identical articles with and
  without an entitised author and measure the delta.
- Sites are classified by authorship category (expert-, apprentice-, layperson-authored) partly
  from layout and design embeddings *(claim)*. Custom design de-clusters you from template and
  AI-site cohorts.

## 5. External claims: claim > mention > link

Off-site publishing yields a link, a mention, or a **claim**. An attributed claim — "the most
experienced", "the largest tested database", "board-certified in trial law" — outvalues a bare
link *(claim)*. The **co-occurrence around the mention** matters as much as the mention itself,
which is why the annotation text is recorded alongside the anchor in §6.

- A mention transfers expertise only from **inside the topic's link graph** and within a
  relevance distance.
- Pre-assign which topics publish on which third-party domains, and which **specific attribute**
  each one attributes to you.
- This is the supply chain that feeds LLM entity-attribute attribution directly.
- **The query modifier is often itself the attribute.** To rank for "free [tool]", "cheapest
  [service]" or "fastest [provider]", the external map must state that value about you in those
  words. A brand positioned for enterprise that wants the consumer "free" query needs external
  sources describing it as free, or free for a trial period, or freemium. The modifier you want
  to win is the claim you have to place.

Define per money query: **the attribution sentence you want generated, where it is stated
on-site, and which third-party surface corroborates it.**

## 6. The external topical map

A planned topical map built on **third-party domains**, targeting the query-template variations
around your entity, with internal links from those pages to your entity-attribute pages.

**Why it works** *(claim)*: it creates a stronger and more permanent link graph by making the
**link-source page itself rank** for related query terms. A ranking source page passes quality,
click and historical data signals to the target through NavBoost. Its main purpose is not
PageRank — it is **claims and co-occurrences**, amplifying consensus and confidence around the
attributes that decide selection.

### Construction rules

1. **Every external topic must pass QDP itself** (02). If the host page targets a query that
   deserves no index, it will not rank, and a non-ranking source page passes little.

   **QDP does not bar repetition across hosts.** QDP is a within-index anti-cannibalisation
   gate: it stops *your own* pages splitting one index between them. Pages on domains you do not
   own share no index with yours and cannot cannibalise you or each other. Publishing the same
   topic and the same attribute claim across five aligned hosts is therefore the intended shape
   of this deliverable, not a duplication fault — repetition across independent sources is the
   mechanism that builds consensus (§10), and it is the same inversion already recognised for
   forum threads in §8. Each host page must independently deserve to rank **on its host**; that
   is the whole of the test. Do not deduplicate the external map the way you would deduplicate
   a site.
2. **Topic alignment in both directions.** The topic must align with the linking domain's own
   subject *and* with the linked page's subject. `skillsyouneed.com` → "Skills to Be a Lawyer";
   `pickuptrucktalk.com` → "Truck Accident Lawyer"; a tourism site → "all-inclusive Antalya
   hotels".
3. **The linking domains must align with each other.** They form an indirectly connected link
   graph; a set of unrelated hosts reads as a scheme.
4. **Anchor + annotation.** Record both. The annotation text around the link matters as much as
   the anchor.
5. **Attribute assignment.** Each placement carries one specific attribute claim, drawn from the
   attribute table (03 §5b) and the AI Mode extraction (02 §7).
6. **Locality.** For local projects, exact- or partial-match **local news domains** carrying the
   city or district name provide a ranking advantage where they serve semantically related,
   responsive documents. Use them for the "how to book" / "how to find the cheapest" /
   "best [service] in [city]" templates.
7. **Origin-market geography.** Where the audience travels, publish in the origin market. If
   British visitors to Antalya come mostly from Manchester, Manchester-based sources with
   "Antalya hotels" anchors are the right direction under NavBoost principles.
8. **Corroborate inside the truth range** (06 §4). Every placement states the attribute's value,
   and the values across the map must agree closely enough to read as one fact. Numbers
   scattered across an implausible spread, or one outlier well beyond what the rest of the web
   supports, are discarded before scoring rather than averaged in. **Fix the number and its
   phrasing in the brief before the first placement goes out**, and hold both across the whole
   programme. A map that claims "over 15 years" on one host and "nearly a decade" on another is
   supplying noise where it meant to supply consensus.

### Sequencing

Filter the domains first, then choose the anchors and the annotation text, then write the
briefs, then set the order and cadence of publication. Not every domain suits every topic, and
not every brief suits every domain. Placement order is part of the plan, not an afterthought:
the earliest placements should be the best-aligned hosts, because they set the co-occurrence
baseline everything after is read against.

### Tracking sheet (deliverable)

| Publication date | Frequency | Topic | QDP verdict of the topic | Host domain | Host's own topic | Anchor text | Annotational text | Target URL | Attribute claimed | Value claimed | Document quality | Aligned with host? | Aligned with target? | Ranking status of source page |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

Watch two columns. A source page that never ranks is not doing the job. A value that drifts
between placements is breaking rule 8.

### Guardrails (non-negotiable)

Every placement must be **genuine and editorial**. The external map is a publishing programme,
not a link inventory. It breaches 01 §7 the moment it involves paid placement disguised as
editorial, manufactured host sites with no real audience, or content written purely to host a
link. If a placement would embarrass you if named publicly, it is out.

**This rules out the owned-satellite architecture explicitly**, however well it performs:
exact-match "extension" domains built to manipulate prompt results, and scaled satellite domains
publishing at volume outside quality control, are manufactured domain networks under 00 §7 and
01 §7.5 and 01 §7.10. Repetition across sources genuinely does manufacture consensus — that is
why this file exists — and the response to that fact is to earn the repetition across
independent hosts, not to own the hosts.

## 7. The web entity and social

- Google has integrated social channels into Search Console, YouTube first; channel and site
  are judged together, like a Business Profile. Verify and connect every channel as support
  arrives.
- **Treat social channels as ranked surfaces in the topical map** (03 §8): per node decide
  which gets a subreddit thread, a YouTube video, a LinkedIn asset.
- **Keep an active YouTube channel.** Video is weighted as non-commodity content in several
  industries; a connected channel has produced 30%+ click growth over three months with no new
  uploads *(setting)*. The website↔YouTube correlation behaves like the website↔GBP
  correlation.

**Recon SOPs** *(setting)*:

- **Quoted co-occurrence counts:** search `"Brand" "topic"` and compare result counts against
  competitors. 500,000 vs 1,000 is the association gap. Weight by authority and recency of the
  co-occurring documents. This is the operational measure of who owns a topic on the web, and it
  drives LLM answers too.
- **"About this result" check:** open the three-dot panel on your own social profiles in the
  SERP. They should attribute to *your entity*, not to the platform. If the platform shows as
  the source, aggregation has not happened yet.
- **Indexed-social footprint:** count indexed Facebook / Reddit / LinkedIn URLs for your brand
  vs competitors. A bigger indexed footprint is a bigger dataset defining your entity.
- **Social as crawl infrastructure:** social links accelerate discovery, not PageRank. Shares
  raise crawl frequency on the shared URLs. Route every important new URL through the social
  layer at publish time and correlate log-file crawl upticks with share timing.

## 8. Reddit and forum properties

- **Create, do not buy, exact-match subreddits** for map segments. Let them mature ~3 months
  before posting *(setting)*.
- **Forum inversion** *(claim)*: similar threads on a forum consolidate and strengthen each
  other — the opposite of website cannibalisation. Density fatal on a domain is safe on a
  subreddit. The same inversion governs the external map across hosts (§6 rule 1).
- Rank-track the Reddit URLs appearing in your SERPs to identify which subreddits Google has
  elected for your topics. Earn presence with genuine accounts and genuinely useful answers.
- Manufactured accounts, karma farming and scripted engagement are prohibited (01 §7).

## 9. Backlinks

- Value a backlink by the referring domain's **real organic traffic**, not DR. High-DR domains
  that also carry traffic are the difference-makers (government, scientific and educational
  sources excepted) *(setting)*.
- Avoid sources hit by spam updates, and multi-topic domains.
- Image backlinks carry weight with alt text as anchor *(claim)*.
- Sequence a new site's anchor profile **branded and naked-URL first**; money anchors only after
  a base compounds *(setting)*.
- **The purchased-link probe** *(claim; patent, reported verified)*: after detecting a suspect
  new link, Google may deliberately lower rankings to see whether the link gets removed —
  removal reads as confession. **Never panic-remove links during a dip.** Hold through the probe
  window and diagnose.
- Semantics reduces the number of links needed. It does not remove the need in competitive
  SERPs.
- Referring **authors**, not just referring domains, signal authority.

## 10. Consensus and re-amplification

LLM recommendations mirror **document statistics across the sources the model consults** — ask
for "the best X" and you get the X mentioned most in the retrieved URLs, not an evaluation
*(claim)*. Listicles dominate citations because checking an HTML list across hundreds of domains
is cheaper than extracting passages.

**Size the programme against the cited corpus.** Two levers decide an LLM answer: **query
statistics** (how often the category term is searched alongside your brand name) and **document
statistics** (of the documents retrieved for the prompt, how many mention you and how many
favour you). Document statistics are the measurable one. For each money prompt, pull the count
of **distinct pages the assistant cites** when answering it, and treat that count as the
denominator for the mention programme: you either earn mentions across the existing set or add
enough documents of your own to move the ratio. This is a different measurement from the quoted
co-occurrence count in §7, which reads association across the whole web rather than across the
retrieved set.

Read the denominator as a decision, not a statistic. A cited corpus of tens or low hundreds of
pages is a tractable outreach target. A corpus in the tens of thousands means the prompt is not
winnable by placement, and the move is to compete on a narrower variant whose cited set is
small, or to make the brand rank classically for the prompt's underlying query instead
(07 §3). Re-pull the count each quarter alongside the re-amplification below.

- Identify the URLs and platforms cited for your money prompts; get the entity mentioned there
  with the attributes you want, through genuine reviews, comparisons, forum presence and
  editorial coverage.
- **Be present in the lists that already exist.** Pitch for list inclusions before bespoke
  reviews. Publish list-format assets yourself; structured information cards with minimal text
  emphasise the list itself and are cited more readily.
- **Awards and industry recognition are the cheapest durable corroboration surface** *(setting)*.
  An award listing on a conference, association or industry-body site carries the claim, the
  date, the awarding entity and a third-party host in a single artefact, which is the exact
  shape an assistant reaches for when asked who is best in a category. Enter the awards you can
  genuinely win, and check that the resulting page names the brand **in text** rather than only
  inside an image or a PDF. One award page frequently outperforms a bespoke review placement,
  and it keeps working for years.
- **Original statistics and surveys are a distinct citation format**, not merely information
  gain *(setting)*. Assistants disproportionately retrieve and cite sentence groups of the form
  "analysis of N cases found X", because that shape is scarce, quotable and self-contained.
  Run real research and publish the method alongside the numbers. First-party transaction,
  pricing, execution or usage data is the version of this no competitor can replicate, and it
  is the strongest asset most operators already hold and never publish.
  **Fabricated statistics and invented surveys are prohibited (01 §7.5) regardless of how
  readily the format gets cited.** The common industry practice of seeding invented reports into
  trade journals that do not verify them is precisely what that clause exists to refuse.
- **Consensus decays.** Answer-selection weights corroborating sources by rank **and recency** —
  an old proof loses to years of contrary documents. **Re-amplify every money attribution
  quarterly**: refresh the third-party claims, keep the corroborating pages updated and clicked,
  re-verify the AI answers.
- Maintain one **flagship document per money topic** (08 §4).
- Adjacent-attribute content partnerships (you cover X and cite me on Y) work for LLM awareness
  *(setting)*. Keep them editorial and asymmetric, never link-swap-shaped.

**Claim, frame, proof.** A useful shorthand for the whole layer, and the reason first-party
assertion alone fails: the **claim** and its **frame** are stated on your own site, where every
competitor also says it is the best, and the **proof** has to come from somewhere you do not
control. §5 defines the sentence; this section supplies the corroboration; §6 places it.

## 11. Branded demand and the survival metric

- Manufacture branded-navigational demand legitimately: login/membership systems, entitised
  product lines, brand-plus-category social structure, real campaigns.
- **The honeypot ratio is the survival metric**: heavy informational traffic with no
  branded-navigational demand marks a site expendable at helpful-content-type updates. Track
  branded:informational in GSC and record it in every audit.
- Occupy SERP estate with varied formats plus FAQ schema — image pack, map pack, snippets, PAA,
  the brand carousel, the "what people say" strip. Rank trackers see none of the newer surfaces;
  check them manually and weekly on money queries.
