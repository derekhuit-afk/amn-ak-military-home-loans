import GeoPage from '@/components/GeoPage'

export const metadata = {
  title: 'Kodiak VA Loans | USCG Base Kodiak Coast Guard Home Loans',
  description: 'VA loans for Coast Guard families stationed at USCG Base Kodiak. Small island market, limited inventory, Kodiak-specific lender. Derek Huit, NMLS #203980.',
  alternates: { canonical: 'https://akmilitaryhomeloans.com/kodiak-va-loans' },
}

export default function KodiakPage() {
  return (
    <GeoPage
      base="kodiak"
      formVariant="pcs"
      defaultLocation="Kodiak"
      hero={{
        eyebrow: 'Kodiak · USCG Base Kodiak',
        title: 'Kodiak VA Loans for Coast Guard Families.',
        subtitle:
          "Kodiak is a small market with big differences. The largest USCG installation in the country sits on an island with limited inventory, a narrow appraiser pool, ferry-line logistics for inspections, and weather that delays everything 2-3 times per closing. You need a lender that closes Kodiak — not one that learns Kodiak on your loan.",
      }}
      intro="Kodiak is the most logistically complex VA market in Alaska. Inventory is thin (often under 30 active listings), the appraiser pool is small (sometimes only 1-2 VA-approved appraisers on the island), and many critical services — inspectors, surveyors, lenders' physical presence — must travel from Anchorage. Weather delays inspections regularly. The veterans who buy successfully on Kodiak start early, expect 45-60 day closings, and work with a lender that has done Kodiak loans before. We have."
      bullets={[
        { title: 'USCG Base Kodiak basics', body: 'The largest U.S. Coast Guard base, ~1,500 active duty plus dependents. Three-year typical assignment for officers, longer for E-rates. Off-base ownership is common; on-base housing is functional but waitlisted in most years.' },
        { title: 'Inventory reality', body: 'Kodiak typically has 20-50 active listings at any time. Most VA buyers wait 2-6 months for the right property. PCS-season buyers should start the search before they arrive — by the time you are on island, the right property may already be gone.' },
        { title: 'Appraiser pool', body: 'Kodiak has 1-3 active VA-approved appraisers. If your assigned appraiser is unavailable, the appraisal can wait 2-3 weeks. We track this and can request preferred appraisers when feasible.' },
        { title: 'Ferry logistics', body: 'The Alaska Marine Highway System ferry runs from Homer 2-3 times per week. Inspectors, surveyors, and contractors who travel to Kodiak schedule around it — a missed ferry adds 3-4 days. We sequence VA inspections to the ferry schedule.' },
      ]}
      neighborhoods={[
        { name: 'Kodiak City (downtown / harbor)', range: '$280K-$480K', note: 'In-town, walkable, oldest housing stock' },
        { name: 'Bells Flats', range: '$320K-$520K', note: 'Family neighborhood, schools, 10 min to base' },
        { name: 'Mill Bay / Spruce Cape', range: '$340K-$550K', note: 'View lots, premium pricing' },
        { name: 'Service / Spruce Cape area', range: '$300K-$480K', note: 'Established residential, mixed inventory' },
        { name: 'Womens Bay', range: '$260K-$420K', note: 'Closer to base, mixed lot quality' },
      ]}
      considerations={[
        'Kodiak weather delays VA appraisals routinely. Heavy fog, snow, or wind can ground appraisers for 2-7 days. Plan for 45-60 day closings, not 30.',
        'Many Kodiak properties are on private water (well or hauled water cisterns) — VA appraisal requires verification of potability and continuity of supply. Hauled-water properties require special handling.',
        "USCG-specific: Coast Guard housing allowance (BAH) for Kodiak is among the highest in the U.S. due to remote-area cost. Buying with BAH-only carrying cost is feasible across most Kodiak price points.",
        "Earthquake and tsunami risk are non-trivial — Kodiak Island is on the Pacific Plate boundary. Insurance rates reflect this; verify quote before close. Some lenders impose tsunami-zone overlays — Cardinal does not.",
        'Selling out of a Kodiak property is its own challenge — small market means longer days-on-market. Plan to hold 2+ years for typical break-even. Coast Guard families who PCS off-island after one tour often rent the home rather than sell.',
      ]}
      faqs={[
        { q: 'Can I close on a Kodiak home before I PCS to USCG Base Kodiak?', a: "Yes, and you should. Kodiak inventory moves slowly but the right property still goes quickly. We can pre-approve from your prior duty station, run the search remotely with a Kodiak-experienced realtor, and have a property under contract before your report date. Closing typically happens 2-4 weeks after arrival." },
        { q: 'Are there VA loan-specific issues with Kodiak homes?', a: 'A few: many older Kodiak homes have asbestos (pre-1985) — VA generally requires it to be encapsulated or remediated before close. Hauled-water or cistern systems require verification of continuous supply. Some properties have had foundation settling from 1964 earthquake legacy — engineering review may be required.' },
        { q: 'How long does a Kodiak VA loan really take to close?', a: '45-60 days is realistic. The compressed timeline is 35-40 days but only if the appraisal and inspections proceed without weather delays. Build slack into your buyer expectations and your seller negotiations — 45 days as the contract close date with an extension provision is the standard play.' },
        { q: 'What about Coast Guard-specific entitlement issues?', a: 'Coast Guard veterans receive identical VA benefits to Navy, Army, Air Force, Marine, and Space Force. The single Service-specific note is that Coast Guard time before 1967 may need additional eligibility documentation. Modern USCG service is treated identically.' },
      ]}
    />
  )
}
