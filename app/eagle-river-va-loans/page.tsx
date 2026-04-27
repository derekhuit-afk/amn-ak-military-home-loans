import GeoPage from '@/components/GeoPage'

export const metadata = {
  title: 'Eagle River VA Loans | Best JBER-Adjacent Neighborhoods for Military Families',
  description: 'VA loans for Eagle River, Alaska — JBER-adjacent, top-rated schools, family neighborhoods. Derek Huit, NMLS #203980, Cardinal Financial NMLS #66247.',
  alternates: { canonical: 'https://akmilitaryhomeloans.com/eagle-river-va-loans' },
}

export default function EagleRiverPage() {
  return (
    <GeoPage
      base="eagle-river"
      defaultLocation="Eagle River"
      hero={{
        eyebrow: 'Eagle River · JBER\u2019s Preferred Bedroom Community',
        title: 'Eagle River VA Loans for JBER Families.',
        subtitle:
          "Eagle River sits 15-20 minutes from JBER's gates with consistently top-rated Anchorage schools and the largest concentration of military-family-owned homes in Alaska. If you are PCSing to JBER and want yard, schools, and quiet — this is where most of your peers end up.",
      }}
      intro="Eagle River is the most popular off-base community for JBER families. The reasons are practical: short commute, family-sized homes on real lots, schools rated higher than mid-Anchorage, and inventory built for the military housing cycle. The market knows what military buyers need — most local realtors keep a JBER PCS-season pipeline. This is also the easiest VA appraisal market in the Anchorage Bowl: standard subdivisions, public utilities in most areas, and an established appraiser pool that closes VA loans every week."
      bullets={[
        { title: 'Commute reality', body: '15-20 minutes from gate to most Eagle River neighborhoods via the Glenn Highway. Winter mornings can stretch to 30 minutes during heavy snow. Reverse commute is light.' },
        { title: 'Schools that hold their value', body: 'Birchwood Elementary, Mirror Lake Middle, and Eagle River High consistently outperform Anchorage averages. School quality drives Eagle River resale far more than home features.' },
        { title: 'Mostly public utilities', body: 'Most Eagle River subdivisions are on city water and sewer — far easier VA appraisals than Hillside or Mat-Su. A handful of older Eagle River Valley properties are on well/septic; we flag these in pre-shopping.' },
        { title: 'Inventory rotation', body: 'Eagle River turns over more inventory in PCS season (April-August) than any other Anchorage submarket. Off-season buying often gets better terms; PCS-season buying has more selection.' },
      ]}
      neighborhoods={[
        { name: 'Birchwood', range: '$420K-$620K', note: 'Family neighborhood, top schools, walking trails' },
        { name: 'Eagle River Valley', range: '$480K-$750K', note: 'Larger lots, some on well/septic, mountain views' },
        { name: 'South Fork', range: '$380K-$520K', note: 'More affordable, newer construction, smaller lots' },
        { name: 'Eagleview / Powder Reserve', range: '$520K-$850K', note: 'Newer subdivisions, modern construction, premium pricing' },
        { name: 'Chugiak', range: '$350K-$550K', note: '5-10 min north of Eagle River, lower prices, more rural feel' },
      ]}
      considerations={[
        "Eagle River Valley properties may be on private well and septic — VA appraisal adds 7-10 days for water-quality and septic-functional certifications. Subdivisions in the main Eagle River corridor (Birchwood, Powder Reserve, Eagleview) are typically on city utilities.",
        'The Glenn Highway is your only commute route — closures from accidents or avalanche risk happen 2-4 times per winter. Plan for it; it is the price of Eagle River living.',
        'PCS season (April-August) sees 20-30% more competition. Off-season (October-February) gives buyers the best leverage on price and concessions.',
        'Eagle River homes resell well to the next wave of military buyers — but only if school quality holds. That is why most Eagle River buyers prioritize school zone over home features.',
        'Cell service and broadband are excellent in mainstream Eagle River but degrade quickly in Eagle River Valley and Chugiak rural areas. Verify before buying if WFH is a need.',
      ]}
      faqs={[
        { q: 'Is Eagle River a better VA-loan choice than South Anchorage?', a: 'For JBER families, almost always yes. Eagle River is closer to JBER (15 min vs 25-35 min from South Anchorage), has comparable or better schools, and homes typically cost 15-25% less for similar size and condition. South Anchorage wins on view-lot premium, restaurants, and proximity to Alyeska skiing — secondary considerations for most active-duty families.' },
        { q: 'What kind of property does $500K buy in Eagle River?', a: 'In 2026, $500K typically buys a 3-4 bedroom, 2-2.5 bath single-family home, 2,000-2,400 sqft, on a 0.15-0.4 acre lot in Birchwood, South Fork, or Powder Reserve. Newer construction trends to the upper end; established neighborhoods (1990s-2000s build) sit at or below $500K.' },
        { q: 'Is the Glenn Highway commute really 15-20 minutes?', a: 'Yes from most Eagle River neighborhoods to JBER gates outside rush hour. Add 5-10 minutes during morning rush (0700-0800), and add 15-25 minutes if there is a winter weather event or Glenn Highway accident — both happen periodically. Most JBER families consider this acceptable for the school and lot-size tradeoff.' },
        { q: 'Does Eagle River have any VA loan-specific issues?', a: 'No more than any Alaska market — the main thing to flag is older Eagle River Valley properties on private well/septic. The VA appraisal will require water and septic certifications that take 7-10 extra days. Standard Eagle River subdivisions on city utilities close at standard VA pace (30-35 days).' },
      ]}
    />
  )
}
