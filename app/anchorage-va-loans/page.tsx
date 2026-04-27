import GeoPage from '@/components/GeoPage'

export const metadata = {
  title: 'Anchorage VA Loans | 0% Down for Veterans & Active Military',
  description: 'VA-approved purchase and IRRRL refinance loans for Anchorage veterans, retirees, and military families. South Anchorage, Eagle River, JBER-adjacent. Derek Huit, NMLS #203980.',
  alternates: { canonical: 'https://akmilitaryhomeloans.com/anchorage-va-loans' },
}

export default function AnchorageVAPage() {
  return (
    <GeoPage
      base="anchorage"
      defaultLocation="Anchorage"
      hero={{
        eyebrow: 'Anchorage · Veterans & Active Duty',
        title: 'Anchorage VA Loans, Closed by an Alaska Local.',
        subtitle:
          "Whether you're an Anchorage veteran ready to use your benefit, a retiree consolidating with an IRRRL, or active duty stationed at JBER — Derek Huit has been closing Anchorage VA loans for 18+ years. Eagle River, South Anchorage, Mat-Su Valley.",
      }}
      intro="Anchorage is the largest VA market in Alaska. Roughly 24% of all Alaska mortgage originations are VA-backed (HMDA 2024) — the highest share of any U.S. metro outside of military-base regions in the Lower 48. That density means we have excellent appraisers, well-tested closing processes, and lender relationships built specifically for Alaska veterans. It also means there's a lot of bad VA advice floating around. Get yours from someone who's been here for the duration."
      bullets={[
        { title: 'Full entitlement = no loan limit', body: 'With full entitlement (first-time use or restored), there is no maximum VA loan amount. Lenders typically follow the 2026 conforming high-cost limit of $806,500 for $0 down — which covers the vast majority of Anchorage homes.' },
        { title: 'IRRRL: lowest-friction refinance', body: 'The VA Interest Rate Reduction Refinance Loan (IRRRL) is the single easiest mortgage product on the market. No appraisal in most cases, no income verification, no new COE required. If you have an existing VA loan, this is your fast lane.' },
        { title: 'Cash-out up to 90% LTV', body: 'VA cash-out refinance allows up to 90% loan-to-value — higher than most conventional cash-outs (80%). For Anchorage homeowners with significant equity it can fund renovations, debt consolidation, or investment property down payments.' },
        { title: 'Surviving spouses are eligible', body: "Spouses of service members who died in service or from a service-connected disability are eligible for VA loans, with the funding fee waived. Many don't know this — Derek will help confirm eligibility and pull the COE." },
      ]}
      neighborhoods={[
        { name: 'South Anchorage / Hillside', range: '$500K–$900K+', note: 'Premium views, top schools (Goldenview, Ravenwood), JBER commute 25-35 min' },
        { name: 'Eagle River / Chugiak', range: '$380K–$650K', note: 'Family communities, JBER 15-20 min, larger lots' },
        { name: 'Sand Lake / Bayshore', range: '$420K–$700K', note: 'Established west Anchorage, lake access, midtown 10 min' },
        { name: 'Mat-Su Valley', range: '$320K–$550K', note: 'Wasilla/Palmer, fastest-growing, larger acreage' },
        { name: 'Midtown / U-Med', range: '$320K–$500K', note: 'Closest to hospitals, JBER, downtown — smaller lots' },
      ]}
      considerations={[
        'Many Anchorage hillside and Eagle River homes are on private well and septic. The VA appraisal (Notice of Value) requires both functional certifications, which add 7-10 days to closing. Plan for it.',
        "Alaska conforming loan limits are higher than the U.S. baseline ($806,500 for 2026). VA loans above that threshold are still possible but may require a small down payment proportional to the amount over the limit.",
        "Anchorage's wildfire and earthquake history means homeowner's insurance can run higher than Lower 48 expectations. Budget $1,800-$3,000/year for typical single-family.",
        'AHFC (Alaska Housing) programs are stack-able with VA in some scenarios — including the Mortgage Credit Certificate (MCC) for up to $2,000/year tax credit. Ask about it during pre-approval.',
        "If you're an Anchorage veteran with an older VA loan, an IRRRL refinance to today's rate often saves 1.5-3% APR. The break-even is usually 12-18 months on closing costs — well worth running the math.",
      ]}
      faqs={[
        { q: 'What\'s the maximum VA loan amount in Anchorage?', a: 'With full VA entitlement, there is no statutory maximum. Lenders typically follow the 2026 high-cost conforming limit of $806,500 for $0 down — covering most Anchorage purchases. Above that, $0 down is still possible but requires meeting the lender\'s overlay or a small down payment.' },
        { q: 'Can I use a VA loan for a multi-family property in Anchorage?', a: 'Yes. VA loans allow 2-4 unit purchases as long as you occupy one unit. This is one of the strongest investment plays available — house hack with $0 down, rent the other units, build equity. Anchorage 4-plex prices typically run $700K-$1.4M.' },
        { q: 'How does the AHFC First Home Program work with VA?', a: 'AHFC First Home offers below-market rates for first-time buyers but is not directly stack-able with VA. However the AHFC Mortgage Credit Certificate (MCC) program — up to $2,000/year tax credit — can be used alongside a VA loan in many cases. We\'ll evaluate which combination saves you the most.' },
        { q: 'What credit score do I need for an Anchorage VA loan?', a: 'VA does not set a minimum credit score, but most lenders (including Cardinal Financial) require around 580 minimum. The best VA pricing typically comes at 680+. With a 720+ score, you\'ll see the strongest rates and least overlay scrutiny.' },
        { q: 'Should I refinance my Anchorage VA loan with an IRRRL?', a: 'Run the math: if rates today are 0.75% lower than your current VA rate, the IRRRL typically pays for itself in 12-18 months. We can run a free IRRRL analysis and email you the exact break-even — no pull, no commitment.' },
      ]}
    />
  )
}
