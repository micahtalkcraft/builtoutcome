# 09. Technical and Cost of Retrieval

Technical SEO here is cost-of-retrieval management, and **cost of retrieval is the first
diagnostic on any underperformance** — ahead of coverage or authority questions.

Governing statement: *the cost of ranking a document cannot be higher than the cost of not
ranking it.* The engine carries five costs — **crawling, indexing, understanding, serving,
testing**. Diagnose any visibility problem by naming which one the site inflates. The pitch is
"cheap to understand at high quality", not "more quality".

---

## 1. Crawl KPIs (the four targets)

| # | Metric | Target |
|---|---|---|
| 1 | HTML share of crawl hits | **≥99%** |
| 2 | Combined **200 + 304** response share | **≥99%** |
| 3 | Discovery crawl share | **>20%** (higher for new sites) |
| 4 | HTML crawls landing on indexable URLs that return 200 **and** appear in both the sitemap **and** internal links | **100%** |
| — | Server response, discovery crawl | **<100ms** |
| — | Crawled / discovered-not-indexed | **zero** |

Read discovery and refresh crawl response separately. Going passive lowers crawl priority and
regaining it is slow.

**Additional crawl diagnostics:**

- **Crawl rate per HTML document** → how many days Google needs to crawl the site end to end.
  Track it. A site Google cannot traverse inside a reasonable window has too many URLs.
- **Not every crawl is equal.** Google crawls to check status codes, refresh caches or
  recognise entities as well as to evaluate. Higher crawl rate on real HTML = more the engine
  cares.
- **GSC shows roughly 30% of actual crawl log data** *(setting)*. Use raw log files for
  anything decision-grade. (Separately, GSC hides an estimated ~40% of *feature-level*
  performance data — a different gap, do not conflate the two.)
- After a server fix, re-run log analysis and optimise where the crawler actually goes.

## 2. "Discovered — currently not indexed" is the headline quality signal

Of everything in GSC, this segment is the most important sign of insufficient quality for any
project, local or location-agnostic. Google saw the URL and decided it was not worth fetching.

- **Discovered — not indexed** → the URL does not look worth the crawl. Usually a QDP failure:
  a page for a query that deserves no index.
- **Crawled — not indexed** → it looked and found nothing unique enough. Usually near-duplicate
  content, or main content invisible without JS.

Both are the first numbers in any audit. Neither is fixed by writing more; they are fixed by
subtracting pages and making the survivors unique and functional.

## 3. Size and weight

- Google's HTML file size limit is **2MB**. Stay far under it.
- Working targets *(setting)*: HTML ~700KB or less; DOM under ~900 elements; beat competitors
  by 10–15% on real CrUX metrics rather than merely passing CWV; stable un-versioned resource
  filenames; one or two CSS files site-wide; local fonts; Brotli; most important tags in the
  first ~1,460 bytes.
- **Design weight is a per-SERP decision** *(claim)*: bare programmatic HTML can outrank
  designed pages in some informational niches (nothing to misclassify, nearly free to parse),
  while heavy design pays in commercial and product SERPs. Choose per SERP; do not default.

## 4. Rendering

- **Server-render anything that must be indexed** (documented). The Web Rendering Service
  renders from the layout tree with a median ~5s queue, and roughly **60% of scoring happens
  without JS rendering at all** *(claim)*.
- **Keep CSS crawlable.** Google fetches CSS to reconstruct the rendered page; rendering cost
  is part of your cost of retrieval.
- The cheap pass segments pages straight from HTML structure *(claim)*. Semantic markup and
  clean DOM order are what make that segmentation land correctly. Never depend on client-side
  JS to assemble the layout the chunker needs. LLM crawlers are even more text-first.

**The rendering failure chain — check for it explicitly:**

```
Main content behind JS or in an iframe
  → crawler sees an empty or near-empty page
  → all pages in the set look identical
  → duplicate content problem
  → Google canonicalises the wrong pages to the wrong candidates
  → the set drops out of the index
```

Test: disable JavaScript and load ten template pages. If they are empty or identical, this is
the site's primary defect and no content work will fix it. Iframe-embedded main content
(itineraries, listings, calendars) fails the same way.

A mega-brand's click history can hold a JS-broken page up. That is brand privilege, not a
pattern to copy.

## 5. URL parameters and faceted navigation

Parameterised URLs force enormous canonicalisation and consolidation compute, and every
parameterised URL that cannot be indexed adds retrieval cost and dilutes signal.

**Rule:** `example.com/location/service?parameter=value` should be represented either as:

1. `example.com/location/service#value` — a fragment, not a new URL; **or**
2. no URL change at all — modify the presented content by user preference.

Plus:
- Build the filtering system to be **non-crawlable**.
- One canonical query per page.
- Control faceted navigation before adding content anywhere on a site that has it.
- Higher-PageRank pages tend to win canonical elections — do not rely on that; be explicit.

## 6. Temporary and expiring pages

Use `<meta name="robots" content="unavailable_after: [date]">` for pages with a genuine expiry
(07 §9). Publishing large volumes of pages that will be deleted within weeks makes crawling and
indexing the whole site less worthwhile: there is rarely enough demand, and the titles and
content are near-identical.

Better still: represent short-lived items as **segments on permanent pages** (02 §4) and keep
the permanent page updated.

## 7. Status codes, consolidation, and Google's memory

- 404 → **410** by default. 302 → **301**. Every internal link resolves to an indexable 200.
- On migrations keep resource URLs identical in kind.

**Google scores the site it remembers, not only the site that exists** *(claim)*. URLs deleted
years ago still appear as live internal links in URL Inspection's Referring URL field and keep
passing internal PageRank; the remembered link graph refreshes slowly on high-cost sites.

**Consequences:** architecture mistakes persist after you fix them. **Prune early**, keep URLs
stable, and price a memory-refresh lag into any restructure. The existing site and the indexed
site are not the same object.

## 8. Subdomains: deliberate or liability

Google keeps crawling subdomains and microservices you have forgotten, and their content
quality feeds its judgment of your site.

| Situation | Action |
|---|---|
| Subdomain no longer needed | Remove and **redirect to the main domain via Change of Address** |
| Needed internally, not for search | **Disallow Googlebot**, keep it functioning behind the scenes |
| Forum / opinionated formats | Keep, with forum structured data (07 §7) |
| Isolating a segment from site history | Keep — a deliberate strategy (12 §7) |
| Staging, dev, legacy CMS, API endpoints | Disallow and authenticate |

Audit subdomains at the start of every engagement. This is a frequent silent drag.

## 9. Robots policy

- **Gate Googlebot pre-launch** until the launch-gate document count exists (12 §2).
- **Allow the AI retrieval crawlers you want citations from** (GPTBot / OAI-SearchBot,
  ClaudeBot, PerplexityBot and similar). Keep main content server-rendered for them. Verify
  with Bing and use IndexNow — ChatGPT leans on Bing's index.
- **`data-nosnippet` zones** for content Google should neither snippet nor judge — chiefly
  personalised or user-only text. The user-facing and Googlebot-facing experience stays
  identical. This is scope control, not cloaking.
- Skip documented busywork: `llms.txt` has no confirmed consumption; no "AI schema"; no special
  chunking markup.

## 10. On-site personalisation limits *(setting)*

- Personalise at most ~10% of a page's text. Never important headings or sections.
- Wrap personalised zones in `data-nosnippet`.
- `noindex` sections are not even JS-rendered — cheap segmentation for user-only zones
  *(claim)*.
- Personalise logged-in states freely; keep public HTML conservative.
- Region-split content serving to crawlers is prohibited (01 §7).

## 11. Sitemaps

- Never one big sitemap on a large site. Chunk **by topic, ~400–1,000 URLs per file**, and
  interlink along a contextual crawl path.
- Separate Search Console properties per language or region.
- Keep stale URLs out of sitemaps and logs.
- Every sitemap URL must be indexable, self-canonical, return 200 and be internally linked
  (KPI 4 above).
- Phantom referrers in URL Inspection signal poor crawl understanding. Reduce total URLs.

## 12. Bing as a leading indicator *(claim)*

A ~50× smaller index that trusts new sites faster, where single links weigh more and page-1
positions follow click behaviour more readily. Early Bing movement is both a control for
testing (12 §6) and a preview of whether the content satisfies. It also feeds ChatGPT.

## 13. International (compact)

- **Multilingual** = one source, several languages. **Multiregional** = one language, several
  regions. hreflang unites both.
- Canonical URL, sitemap URL and hreflang URL **byte-identical**; lowercase, stable.
- **Triple-to-triple translation** *(setting)*: translate at subject–predicate–object level so
  predicates, subjects and dependency trees align across languages. Never loose prose
  translation.
- Subfolders by default; ccTLD only for genuinely distinct regions, accepting PageRank
  fragmentation.
- Symmetric internal links; anchors translated by meaning; translate everything including
  boilerplate; native QA; no locale-adaptive IP redirects; separate sitemaps and GSC properties;
  UTF-8 and JSON-LD.
- Same-language regional versions need >70% content difference or ≥30% real HTML diff, or wide
  audience separation — otherwise they collapse at a core update *(setting)*.
- Rising "Translated results" impressions are the signal to replace machine translation with
  real human translation.

## 14. Technical fix list (deliverable)

| # | Finding | Which of the five costs | Evidence | Fix | Owner | Priority |
|---|---|---|---|---|---|---|

Order by cost inflated, then by page importance. Never ship a technical list without naming the
cost each item inflates — it is the ordering principle.
