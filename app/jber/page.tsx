import GeoPage from '@/components/GeoPage'

export const metadata = {
  title: 'JBER VA Loans — Joint Base Elmendorf-Richardson | 0% Down for Active Duty',
  description: 'VA loans for active duty military stationed at JBER. Local Anchorage closings, PCS-friendly pre-approvals, off-base neighborhood guidance. Derek Huit, NMLS #203980.',
  alternates: { canonical: 'https://akmilitaryhomeloans.com/jber' },
}

export default function JBERPage() {
  return (
    <GeoPage
      base="jber"
      formVariant="pcs"
      defaultLocation="JBER / Anchorage"
      hero={{
        eyebrow: 'JBER · Active Duty',
        title: 'VA Loans for JBER Families.',
        subtitle:
          "Whether you're PCSing in or already at Joint Base Elmendorf-Richardson, your VA benefit is built for this. 0% down off-base purchases in Eagle River, JBER-adjacent Anchorage neighborhoods, and Mat-Su Valley — closed by an Alaska local who actually knows the area.",
      }}
      intro="JBER is the densest VA-eligible population in Alaska. With more than 25,000 active-duty personnel between Elmendorf and Richardson, off-base ownership is the smart play for any family stationed here for 24+ months. The math typically beats BAH-funded rent within 18 months — but only if you pick a neighborhood, lender, and inspector who understand Alaska's quirks."
      bullets={[
        { title: 'BAH covers more than rent', body: 'O-3 with dependents BAH at JBER is around $3,300/month in 2026 — enough to fund a $450K-$500K VA purchase with $0 down once funding fee, taxes, and insurance are factored in.' },
        { title: 'PCS-friendly pre-approval', body: "We can start your pre-approval before your orders are cut. Lock a 90-day rate when you arrive, sign electronically from your prior duty station, close shortly after you're in-state." },
        { title: 'No PMI, ever', body: "VA loans never carry private mortgage insurance regardless of down payment. The funding fee replaces it — and it's financed into the loan, so it doesn't hit you at closing." },
        { title: 'Eagle River vs Anchorage', body: "Eagle River is the favored JBER commute community — 15-20 min to gate, larger lots, top schools. South Anchorage is closer but pricier. Mat-Su Valley adds 30-45 min commute but unlocks much larger homes." },
      ]}
      neighborhoods={[
        { name: 'Eagle River', range: '$380K–$650K', note: '15-min JBER commute, family-friendly, top schools' },
        { name: 'South Anchorage', range: '$450K–$750K+', note: 'Premium views, longer JBER commute (25-35 min)' },
        { name: 'Midtown / U-Med', range: '$340K–$500K', note: 'Closest to JBER (10-15 min), smaller lots' },
        { name: 'Mat-Su (Wasilla/Palmer)', range: '$320K–$550K', note: '40-60 min commute, much larger homes & land' },
        { name: 'Government Hill', range: '$350K–$550K', note: 'Adjacent to JBER, walkable downtown, historic' },
      ]}
      considerations={[
        'JBER orders are typically 2-4 years. Use the breakeven math — if you stay over 18 months, ownership usually wins. Below 12, rent.',
        "VA loans cannot be used to buy on-base housing (the government owns it). Off-base only.",
        'Many JBER-area homes use private well and septic. The Notice of Value (VA appraisal) requires water-quality and septic-functional certifications. Plan an extra 7-10 days.',
        'Eagle River and Mat-Su properties may have shared private roads — VA requires written road maintenance agreements before closing.',
        "When you PCS out you can keep the home, rent it, and preserve a partial entitlement for your next station. Or sell to another VA borrower for instant entitlement restoration.",
      ]}
      faqs={[
        { q: 'How much house can I afford on E-6 BAH at JBER?', a: 'E-6 with dependents BAH at JBER is approximately $2,900/month in 2026. With $0 down and current VA rates, that supports roughly a $375K-$420K purchase price including taxes and insurance — actual amount depends on debts, credit, and current rates. Get a free pre-approval to see your real number.' },
        { q: 'Can I close on a JBER-area home before I PCS in?', a: 'Yes. We can run pre-approval, find a property remotely with an Alaska realtor, get a Notice of Value, and have you sign at your current duty station. You arrive at JBER and the keys are ready. We do this often.' },
        { q: 'What about the JBER housing waitlist — should I just wait?', a: "It depends on your family situation, rank, and how long you're stationed. JBER's privatized on-base housing waitlists run anywhere from 30 days to 12+ months by bedroom size. Many families find off-base ownership beats waiting and gives them a long-term asset." },
        { q: 'Will the appraiser understand Eagle River homes?', a: "We work with appraisers who actually know Eagle River, JBER, and Mat-Su markets. Most VA appraisal delays in Alaska come from out-of-area appraisers being assigned. We help avoid that." },
      ]}
    />
  )
}
