import GeoPage from '@/components/GeoPage'

export const metadata = {
  title: 'Wasilla VA Loans | More Home Per Dollar in the Mat-Su Valley',
  description: 'VA loans for Wasilla and the Mat-Su Valley — largest homes per dollar in the Anchorage commute area. Derek Huit, NMLS #203980, Cardinal Financial NMLS #66247.',
  alternates: { canonical: 'https://akmilitaryhomeloans.com/wasilla-va-loans' },
}

export default function WasillaPage() {
  return (
    <GeoPage
      base="wasilla"
      defaultLocation="Wasilla"
      hero={{
        eyebrow: 'Wasilla · Mat-Su Valley',
        title: 'Wasilla VA Loans for Families Who Want Space.',
        subtitle:
          "If JBER, Eagle River, or Anchorage prices feel tight for what your family needs, Wasilla is the answer. Same VA $0-down benefit, 30-50% more home for the dollar, 40-50 minute commute to JBER. The Mat-Su Valley is the fastest-growing Alaska submarket and a long-term hold most military families choose for the second tour.",
      }}
      intro="Wasilla anchors the Mat-Su Valley — Alaska's fastest-growing submarket and the most house your VA dollar buys within commuter distance of JBER. The tradeoff is the commute (40-50 minutes via the Glenn Highway), winter weather variability, and a slightly different appraisal pool than Anchorage. For families that need 4+ bedrooms, garage space, or land for outbuildings, Wasilla typically wins on every metric except commute time."
      bullets={[
        { title: 'JBER commute math', body: '40-50 minutes one-way to JBER gates outside winter weather events. Many JBER families settle into a 4-day-a-week pattern: 2-3 in-office days and 1-2 telecommute or alternate-site days, which makes the commute manageable.' },
        { title: 'Acreage at VA prices', body: 'Wasilla VA listings frequently include 1-5 acre parcels. In Anchorage, that lot size costs $200-$400K. In Wasilla, it is often included in the $400K purchase price.' },
        { title: 'Newer construction stock', body: 'Mat-Su Valley has the newest housing stock in the Anchorage commute area — much of it built 2010-2024. Newer construction means easier VA appraisals (modern systems, fewer deferred-maintenance issues).' },
        { title: 'Resale market is healthy', body: 'Wasilla appreciation has outpaced Anchorage every year since 2018. Even if you only stay one PCS rotation, equity buildup typically clears closing costs and then some.' },
      ]}
      neighborhoods={[
        { name: 'Lakes / Bogard area', range: '$320K-$500K', note: 'Established Wasilla, lake access, school district' },
        { name: 'Settlers Bay / Knik-Goose Bay Rd', range: '$400K-$650K', note: 'Newer subdivisions, water access, premium pricing' },
        { name: 'Meadow Lakes / Pittman', range: '$300K-$450K', note: 'Affordable, larger lots, longer commute' },
        { name: 'Big Lake', range: '$280K-$520K', note: 'Lakefront and rural, popular for veterans staying long-term' },
        { name: 'Houston / Willow', range: '$240K-$400K', note: 'Furthest from JBER, largest acreage, lowest prices' },
      ]}
      considerations={[
        'The Glenn Highway commute is the dominant tradeoff. Winter weather events (heavy snow, ice, accidents) can extend 50-minute commutes to 90+ minutes 5-15 times per winter. Plan for it.',
        'Mat-Su Valley well/septic is standard outside specific platted subdivisions — most Wasilla VA appraisals include water and septic certifications, adding 7-10 days to closing.',
        "Mat-Su properties on private roads require a recorded road maintenance agreement before VA closing. Many private roads in the Valley do not have one — this can delay or kill a deal. We pre-screen for this.",
        "Cell service and broadband vary widely. Verify with the seller's actual provider before close — what works at one Wasilla address may not work 200 yards down the road.",
        'PCS-season (May-August) inventory turns over quickly here too, but Wasilla typically holds a 30-60 day inventory advantage over Eagle River. Spring buyers in Wasilla often get better terms than spring buyers in Eagle River.',
      ]}
      faqs={[
        { q: 'Is the Wasilla commute to JBER actually doable?', a: 'For most JBER assignments, yes. The 40-50 minute drive is comparable to many Lower 48 commutes (DC metro, San Diego, San Antonio). The hard part is winter — 5-15 days per year you will lose 30-60 minutes to weather. Families who hate this should choose Eagle River. Families that prioritize home and lot size embrace it.' },
        { q: 'What does $400K buy in Wasilla vs Eagle River?', a: 'In Wasilla 2026, $400K buys roughly 2,400-2,800 sqft, 4 bedrooms, 2.5 baths, 2-car garage, on a half-acre to acre lot, often newer construction (2010+). In Eagle River, $400K buys roughly 1,800-2,200 sqft, 3 bedrooms, 2 baths, smaller lot, often 1990s construction. Wasilla wins on space-per-dollar by 25-40%.' },
        { q: 'Are there VA-eligible new construction options in Wasilla?', a: 'Yes. Several Mat-Su builders offer pre-construction VA-eligible homes in subdivisions like Settlers Bay and the Knik-Goose Bay corridor. We have closed VA construction-permanent loans in Mat-Su and can pre-screen builders for VA-friendliness (which not all are).' },
        { q: 'What about flood and earthquake risk in Wasilla?', a: 'Mat-Su Valley has minimal flood risk outside specific named-water-body parcels (Big Lake, Lucille Lake). Earthquake risk is consistent with all of Southcentral Alaska — verify earthquake insurance options at quote time. Standard homeowner policies do not cover earthquake; supplemental coverage typically adds $80-$200/month and is recommended.' },
      ]}
    />
  )
}
