// Blog post data store
// Posts are inline TS objects rather than MDX files for simplicity and to keep the
// build pipeline trivial. Add new posts here; they auto-appear on /blog and as /blog/[slug].

export type BlogPost = {
  slug: string
  title: string
  description: string
  publishedAt: string  // ISO date
  updatedAt?: string
  author: string
  category: 'Rates' | 'BAH' | 'COE' | 'PCS' | 'Markets' | 'Policy'
  readingTime: number  // minutes
  body: string  // simple markdown-lite — supports ## headers, **bold**, paragraphs
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'va-loan-rate-update-april-2026',
    title: 'Alaska VA Loan Rate Update — April 2026',
    description: 'Where Alaska VA rates sit in late April 2026, what the Fed signaled this month, and the IRRRL math veterans should run before May.',
    publishedAt: '2026-04-26',
    author: 'Derek Huit',
    category: 'Rates',
    readingTime: 4,
    body: `
## Where rates sit right now

Alaska VA 30-year fixed rates as of late April 2026 are running roughly 25-50 basis points below comparable conventional 30-year fixed pricing. That spread is wider than the historical average (~10-25 bps) and reflects continued strong VA demand against tight conventional pricing.

In practical terms — if a conventional borrower at 720 FICO is seeing 6.75%, a VA borrower with full entitlement and clean credit is generally seeing 6.25-6.50% on the same day. That gap has held through the first quarter of 2026.

## What the Fed signaled this month

The April FOMC meeting kept the federal funds target unchanged. The dot plot continues to imply 2-3 cuts before year-end, conditioned on inflation continuing its moderate downtrend. Mortgage rates have already priced this in — expect modest rate movement (5-15 bps in either direction) over the next 60 days unless inflation prints surprise the market.

The volatility most borrowers should plan for: 30-50 bp swings within any given month based on jobs reports, CPI, and PPI data. That is normal — it is not a reason to time the market. It is a reason to lock when you find the property.

## IRRRL math veterans should run before May

If you closed a VA loan during the 2022-2024 rate peak (anywhere above 7.0%), the current market is meaningfully better than your existing rate. Run the math:

**Existing loan:** $400,000 at 7.25% (2023 origination)
**Current market:** 6.40% IRRRL eligible
**Monthly payment savings:** ~$220/month
**Closing costs (Alaska typical):** $3,200
**Break-even:** 14.5 months

If you plan to hold the home longer than 15 months, the math wins. The IRRRL is the lowest-friction refinance available — no appraisal in most cases, no income re-verification, no new COE. We can run your specific numbers in 15 minutes.

## What we are watching for May

Three indicators that could move the market: April CPI release (May 13), April employment report (May 2), and FOMC meeting (May 6-7). If inflation continues to soften and employment remains steady, expect rates to drift modestly lower into June. If either prints hot, the floor for VA rates may have already been seen.

Either way — if you have a property under contract or one on the horizon, lock when you have one. Trying to time a 30-bp move on a 30-year loan is rarely worth missing the property.
`,
  },
  {
    slug: 'jber-bah-2026',
    title: 'JBER BAH 2026: What Active Duty Need to Know',
    description: '2026 BAH rates for Joint Base Elmendorf-Richardson, what changed from 2025, and how the new rates affect VA loan qualifying capacity.',
    publishedAt: '2026-04-22',
    author: 'Derek Huit',
    category: 'BAH',
    readingTime: 5,
    body: `
## 2026 JBER BAH at a glance

The 2026 JBER Basic Allowance for Housing rates went into effect January 1, 2026. The increases over 2025 ran 3-7% across most rank/dependent combinations, reflecting continued housing-cost pressure in the Anchorage market. Below are illustrative figures for common rank/dependent combinations — always verify current rates on the official DoD BAH calculator before quoting them in a transaction.

**E-5 with dependents:** approximately $2,650-$2,750/month
**E-6 with dependents:** approximately $2,850-$2,950/month
**E-7 with dependents:** approximately $3,100-$3,250/month
**O-3 with dependents:** approximately $3,300-$3,450/month
**O-4 with dependents:** approximately $3,450-$3,600/month

These figures are illustrative ranges based on January 2026 publication. Service members should verify exact rates for their grade and dependent status on the official DoD site before relying on them.

## What changed from 2025

The biggest year-over-year increases at JBER hit junior enlisted with dependents (E-3 through E-5). Senior enlisted and officer rate increases were more modest. This pattern is consistent with the DoD's 2025-2026 strategic focus on closing the gap between what BAH covered and what junior service members were actually paying for off-base housing.

For VA loan qualifying purposes, the practical effect is that E-3 through E-5 service members at JBER have meaningfully more qualifying income than they did in early 2025. A junior NCO who could qualify for $300K in early 2025 may now qualify for $325-$340K with the same other variables.

## How BAH translates to VA loan capacity

VA underwriting allows BAH to be used as qualifying income on a 1:1 basis if the service member has been at the duty station long enough for it to count as stable. For PCS-related applications (orders to JBER), VA allows the projected JBER BAH to be used as soon as the orders are issued — even before the service member has arrived.

Rough math: every $100 of additional monthly BAH typically adds $14,000-$18,000 of qualifying purchase price (varies with rate, taxes, and insurance). The 2026 increase has therefore moved meaningful purchasing power for active-duty JBER families.

## What to do if you are mid-PCS

If you have orders to JBER but have not yet arrived, request a pre-approval that uses the projected JBER BAH rather than your current duty station's. Many lenders default to the current duty station and undersell your real buying capacity by $40-$80K. We do not — we use the higher of current and projected when orders are dated.

## What to watch for the rest of 2026

JBER BAH adjustments mid-year are uncommon but possible. The DoD typically does not issue mid-cycle BAH increases unless the local rental market spikes materially. The Anchorage rental market has been steady-to-modest in early 2026 — no current signal that a mid-year adjustment is in the pipeline.

That said, the 2027 cycle (released late 2026) should see another modest increase if Anchorage rental costs continue trending up. Plan for it but do not count on it.
`,
  },
  {
    slug: 'certificate-of-eligibility-walkthrough',
    title: 'How to Get Your VA Certificate of Eligibility (COE) in Alaska',
    description: 'Step-by-step walkthrough for retrieving your VA Certificate of Eligibility — most veterans have it issued instantly through WebLGY; some need VA Form 26-1880.',
    publishedAt: '2026-04-18',
    author: 'Derek Huit',
    category: 'COE',
    readingTime: 6,
    body: `
## What the COE is and why it matters

Your Certificate of Eligibility (COE) is the document that proves you qualify for a VA home loan. It tells your lender three critical things: your entitlement amount, your funding fee status, and whether you have used VA financing before. Without a COE, no lender will close a VA loan — period.

The good news: most veterans have a COE issued instantly through the VA's WebLGY system. The work is in the rare cases where instant issuance fails and a manual review is needed.

## Path 1 — Lender-pulled COE through WebLGY (most veterans)

If you are an active-duty service member, recently-separated veteran, or veteran with clean service records, your lender (us, in this case) submits a request through WebLGY and the VA system issues an electronic COE within minutes. No paperwork from you required.

Information your lender needs to pull WebLGY:
- Your full legal name
- Date of birth
- Social Security number
- Branch of service
- Approximate service dates

For active duty, we may also need a Statement of Service from your unit (a one-page document your S-1 or admin office can produce in a day).

## Path 2 — VA Form 26-1880 (manual eligibility review)

If WebLGY cannot auto-issue, the COE is processed manually. This typically applies to:

- Older service records (pre-1980 service)
- Reserve or National Guard time below the eligibility threshold needing aggregation
- Service histories with breaks or unusual transitions
- Surviving spouse applications

The form itself is short (one page), but the supporting documents matter:

**Active duty applicants:** Statement of Service from your unit
**Veterans:** DD Form 214 (or equivalent separation document)
**Reserve/Guard:** points statements showing eligible service
**Surviving spouses:** marriage certificate, service member's death certificate, and DD-214

Manual COE turnaround: 5-10 business days in normal volume. Faster during slow periods, slower during PCS season volume.

## Path 3 — eBenefits / VA.gov self-pull

You can request your own COE through VA.gov or eBenefits. This works fine for most veterans, but the form on VA.gov is less forgiving than WebLGY about edge cases. If you submit and the system kicks back an error, you end up filing VA Form 26-1880 anyway.

Most veterans find it faster to let their lender pull the COE through WebLGY as part of the pre-approval process. We do this for free, no obligation to proceed with us afterwards.

## What the COE tells your lender (and you)

Once issued, your COE shows:

**Entitlement amount:** Full ($36,000 basic + bonus) or partial. Full entitlement = no VA loan limit. Partial entitlement = the 2026 Alaska high-cost limit ($1,249,125) sets your $0-down ceiling.

**Funding fee status:** Standard, exempt (VA disability comp), or surviving spouse waiver. Exempt status saves 2.15-3.3% of the loan amount.

**Prior VA loan history:** Lists any active VA loans tied up in entitlement. If you sold a previous VA-financed home, the COE should show entitlement restored. If it does not, we file for restoration before processing the new loan.

## Common COE issues and how we handle them

**Restoration not yet processed.** Your COE shows partial entitlement because a prior VA-financed home was sold but VA has not updated the record. We file VA Form 26-1880 with the prior loan payoff documentation; restoration typically processes within 10-14 business days.

**Wrong service dates on the COE.** Rare but happens. Correction is typically a one-page submission with corrected DD-214 to your VA Regional Loan Center.

**Missing reserve/guard time.** Reserve and Guard service requires 6 years of qualifying service or specific federal active-duty thresholds to count for VA eligibility. If your COE indicates ineligibility because the system did not aggregate your time correctly, we submit points statements with VA Form 26-1880.

## Bottom line

Most active-duty Alaska service members and recent veterans will have a COE in their lender's hands within 24 hours of starting a pre-approval. Some service histories need 5-10 days of manual review. The COE is a one-time event for most VA borrowers — once you have it, future VA transactions reference the same entitlement record.

We pull every applicant's COE before quoting a maximum purchase price. A pre-approval without the COE is guessing. The COE turns it into a real number.
`,
  },
]

export function getAllPosts() {
  return [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug) || null
}

export function getPostSlugs() {
  return BLOG_POSTS.map((p) => p.slug)
}

// Render markdown-lite to HTML.
// Supports: ## headers, **bold**, paragraphs separated by blank lines, single newlines as <br/>
// No backtick code, no lists for now — keep it simple and predictable.
export function renderBody(body: string): string {
  const escape = (s: string) =>
    s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')

  const blocks = body.trim().split(/\n\n+/)
  return blocks
    .map((block) => {
      const trimmed = block.trim()
      if (trimmed.startsWith('## ')) {
        const text = trimmed.replace(/^## /, '')
        return `<h2 class="post-h2">${escape(text)}</h2>`
      }
      // Process bold within paragraphs
      const escaped = escape(trimmed)
      const withBold = escaped.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      return `<p class="post-p">${withBold}</p>`
    })
    .join('\n')
}
