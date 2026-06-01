import Link from "next/link";
import type { Metadata } from "next";
import BookNowButton from "@/components/BookNowButton";
import StructuredData from "@/components/StructuredData";
import {
  createArticleSchema,
  createBreadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  alternates: {
    canonical: "/blog/taxi-stoke-on-trent-manchester-airport-price-guide-2026",
  },
  title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide | 365 Transfers",
  description: "Complete 2026 price guide for taxis from Stoke-on-Trent, Stone and Stafford to Manchester Airport. Compare costs, booking options and hidden fees.",
  keywords: "taxi Stoke-on-Trent to Manchester Airport, Manchester Airport taxi price, airport transfer cost, Stone to Manchester Airport, Stafford airport taxi, how much taxi Manchester Airport",
  openGraph: {
    title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    description: "Complete 2026 price guide for taxis from Stoke-on-Trent, Stone and Stafford to Manchester Airport. Compare costs and save money.",
    type: "article",
    locale: "en_GB",
    images: [
      {
        url: "/logo/365logo.png",
        width: 1200,
        height: 630,
        alt: "365 Transfers Logo",
      },
    ],
  },
};

export default function StokeManchesterAirportPriceGuide() {
  const articleSchema = createArticleSchema(
    "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    "Complete 2026 price guide for taxis from Stoke-on-Trent, Stone and Stafford to Manchester Airport. Compare costs, booking options and hidden fees to make the best choice for your journey.",
    "2026-06-01"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Blog", url: "https://taxisstone.co.uk/blog" },
    {
      name: "Manchester Airport Taxi Prices 2026",
      url: "https://taxisstone.co.uk/blog/taxi-stoke-on-trent-manchester-airport-price-guide-2026",
    },
  ]);

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      <div className="min-h-screen">
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="mb-4">
                <span className="bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  Airport Transfers
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide
              </h1>
              <p className="text-gray-600">
                Published on{" "}
                {new Date("2026-06-01").toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src="/images/blog/23-woman-strolling-luggage.webp"
                alt="Traveller with luggage heading to Manchester Airport taxi transfer"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* INTRO CALLOUT BOX */}
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Planning a journey from Stone, Stoke-on-Trent or Stafford to Manchester Airport? Understanding taxi costs in 2026 helps you budget accurately and avoid surprises. With Manchester Airport just 39-46 miles from Stone and approximately 50-60 minutes by road, a pre-booked taxi offers door-to-door convenience without the stress of parking fees, train delays or lugging bags through stations. This comprehensive price guide breaks down everything you need to know about taxi costs from the Staffordshire area to Manchester Airport.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Average Taxi Prices to Manchester Airport in 2026
              </h2>
              
              <p className="text-gray-700 mb-4">
                The cost of a taxi from Stoke-on-Trent to Manchester Airport varies depending on your exact starting location, vehicle type, time of day, and which operator you choose. Here's what you can expect to pay from key locations across Staffordshire:
              </p>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Starting Location</th>
                      <th className="px-6 py-4 text-left font-semibold">Budget Range</th>
                      <th className="px-6 py-4 text-left font-semibold">Mid-Range</th>
                      <th className="px-6 py-4 text-left font-semibold">Minibus (5-8 seater)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 font-medium">Stone</td>
                      <td className="px-6 py-4">£90-98</td>
                      <td className="px-6 py-4">£98-110</td>
                      <td className="px-6 py-4">£110-140</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="px-6 py-4 font-medium">Stoke-on-Trent</td>
                      <td className="px-6 py-4">£70-90</td>
                      <td className="px-6 py-4">£90-98</td>
                      <td className="px-6 py-4">£110-140</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 font-medium">Stafford</td>
                      <td className="px-6 py-4">£95-105</td>
                      <td className="px-6 py-4">£105-115</td>
                      <td className="px-6 py-4">£120-150</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Newcastle-under-Lyme</td>
                      <td className="px-6 py-4">£75-85</td>
                      <td className="px-6 py-4">£85-95</td>
                      <td className="px-6 py-4">£105-135</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                These prices reflect fixed-rate quotes for pre-booked journeys in 2026. Budget operators typically offer basic saloon cars with minimal extras, whilst mid-range services include features like flight monitoring, meet and greet, and executive vehicles. At <Link href="/manchester-airport-taxi" className="text-primary hover:underline font-semibold">365 Transfers</Link>, our Manchester Airport service from Stone and the surrounding area includes all essential features at competitive mid-range pricing.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What's Included in Your Taxi Fare?
              </h2>

              <p className="text-gray-700 mb-4">
                Not all taxi prices are created equal. Understanding what's included in your quoted price helps you compare services accurately and avoid unexpected charges. Here's what reputable operators should include:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Standard Inclusions
              </h3>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Door-to-door service</strong> — Pick-up from your home, hotel or business in Stone, Stoke-on-Trent or Stafford, with drop-off at your specific Manchester Airport terminal</li>
                <li><strong>All motorway tolls</strong> — No additional charges for using the M6 or airport approach roads</li>
                <li><strong>Waiting time allowance</strong> — Reasonable waiting time if your flight is delayed or you need extra time getting ready</li>
                <li><strong>Luggage assistance</strong> — Help loading and unloading bags, especially important for families or elderly passengers</li>
                <li><strong>Meet and greet</strong> — For airport pickups, your driver tracks your flight and meets you in arrivals</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Premium Features Worth Paying For
              </h3>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Flight monitoring</strong> — Your driver automatically adjusts pickup time if your flight is early or delayed, so you never pay extra waiting charges</li>
                <li><strong>24/7 availability</strong> — Essential for early morning departures or late-night arrivals at Manchester Airport</li>
                <li><strong>Fixed prices</strong> — No surge pricing during peak times or unexpected meter charges</li>
                <li><strong>Vehicle choice</strong> — Executive saloons, estate cars for extra luggage, or minibuses for groups</li>
                <li><strong>DBS-checked drivers</strong> — Particularly important for school holiday family travel or corporate accounts</li>
              </ul>

              <p className="text-gray-700 mb-4">
                At 365 Transfers, all these premium features come as standard with our <Link href="/airport-transfers" className="text-primary hover:underline font-semibold">airport transfer service</Link>. We've been providing reliable transport from Stone to Manchester Airport for over 20 years, and our drivers know the quickest routes from every corner of Staffordshire.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Comparing Your Transport Options: The Real Cost
              </h2>

              <p className="text-gray-700 mb-4">
                Many travellers from Stone and Stoke-on-Trent consider alternatives to taxis for Manchester Airport journeys. Let's compare the true costs, including hidden expenses and time investment:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Airport Parking
              </h3>

              <p className="text-gray-700 mb-4">
                Driving and parking at Manchester Airport might seem economical at first glance, but the costs add up quickly:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Parking fees:</strong> £80-150 for a week (official car parks), or £60-90 (off-site meet and greet services)</li>
                <li><strong>Fuel costs:</strong> Approximately £12-15 return journey from Stone</li>
                <li><strong>Motorway tolls:</strong> Potential charges depending on route</li>
                <li><strong>Wear and tear:</strong> 80-100 miles added to your vehicle</li>
                <li><strong>Stress factors:</strong> Finding parking spaces, shuttle bus transfers, security queues for car parks</li>
              </ul>

              <p className="text-gray-700 mb-4">
                <strong>Total cost for one week:</strong> £92-165, plus the time and stress of driving, parking and transferring.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Train Journey
              </h3>

              <p className="text-gray-700 mb-4">
                Stone has a railway station with direct services to Manchester, but the airport connection involves multiple changes:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Stone to Manchester Piccadilly:</strong> £15-25 per person (advance tickets)</li>
                <li><strong>Piccadilly to Airport:</strong> Additional £5-8 per person</li>
                <li><strong>Local taxi to Stone station:</strong> £8-12 each way</li>
                <li><strong>Journey time:</strong> Minimum 90-120 minutes with connections</li>
                <li><strong>Luggage hassle:</strong> Carrying bags through stations, up stairs, on and off trains</li>
                <li><strong>Delays and cancellations:</strong> No guaranteed arrival time</li>
              </ul>

              <p className="text-gray-700 mb-4">
                <strong>Total cost for a family of four:</strong> £128-180, with significantly more physical effort and stress.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Ride-Hailing Apps (Uber, Bolt)
              </h3>

              <p className="text-gray-700 mb-4">
                Whilst ride-hailing apps operate in Stoke-on-Trent, they come with significant drawbacks for airport journeys:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Variable pricing:</strong> Surge pricing can push costs from £56 up to £90+ during peak times</li>
                <li><strong>No flight monitoring:</strong> If your plane is delayed, you'll pay waiting charges or need to rebook</li>
                <li><strong>Vehicle uncertainty:</strong> You don't know what size vehicle will arrive or if it suits your luggage</li>
                <li><strong>Availability issues:</strong> Limited drivers willing to do airport runs, especially early morning</li>
                <li><strong>No guaranteed pickup:</strong> Drivers can cancel, leaving you stranded</li>
              </ul>

              <p className="text-gray-700 mb-4">
                <strong>Average cost:</strong> £56-90+, but with significant reliability concerns for important flights.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
                <h4 className="text-xl font-bold text-primary mb-3">The Pre-Booked Taxi Advantage</h4>
                <p className="text-gray-700 mb-3">
                  A pre-booked taxi from Stone to Manchester Airport with 365 Transfers costs £90-110 for a standard vehicle. For this fixed price, you receive:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Guaranteed pickup and arrival time</li>
                  <li>Door-to-door service with no connections or transfers</li>
                  <li>Flight monitoring and flexible waiting time</li>
                  <li>Professional, DBS-checked driver</li>
                  <li>Suitable vehicle confirmed in advance</li>
                  <li>No surge pricing or hidden fees</li>
                  <li>24/7 customer support</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  For families, groups or business travellers, a pre-booked taxi offers the best value when you factor in reliability, convenience and peace of mind.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Factors That Affect Your Taxi Price
              </h2>

              <p className="text-gray-700 mb-4">
                Several factors influence the final cost of your taxi from Stoke-on-Trent to Manchester Airport. Understanding these helps you get the best price and service:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Your Exact Starting Location
              </h3>

              <p className="text-gray-700 mb-4">
                Distance and accessibility matter. Stone is approximately 39 miles from Manchester Airport via the M6, whilst Stoke-on-Trent city centre is slightly closer at 35-40 miles. Rural locations around Stone, such as Eccleshall or Barlaston, may incur small supplements, whilst properties right in Stone town centre benefit from optimal pricing. Our <Link href="/taxi-stone" className="text-primary hover:underline font-semibold">Stone taxi service</Link> covers all surrounding villages with transparent pricing.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Time and Day of Travel
              </h3>

              <p className="text-gray-700 mb-4">
                Most reputable operators offer fixed pricing regardless of departure time, but some budget services charge premiums for:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Early morning departures (before 6am)</li>
                <li>Late night pickups (after 11pm)</li>
                <li>Bank holidays and Christmas period</li>
                <li>Major event days when traffic is heavier</li>
              </ul>

              <p className="text-gray-700 mb-4">
                At 365 Transfers, we operate 24/7/365 with no time-based surcharges. Your quote is your final price, whether you're catching a 5am flight or arriving back at midnight.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Vehicle Type and Size
              </h3>

              <p className="text-gray-700 mb-4">
                The vehicle you need significantly affects the price:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Standard saloon (4 passengers, 2 large bags):</strong> Base price £90-98</li>
                <li><strong>Estate car (4 passengers, 4 large bags):</strong> £95-105 — ideal for families with extra luggage</li>
                <li><strong>Executive saloon (premium comfort, 4 passengers):</strong> £100-115</li>
                <li><strong>6-seater minibus:</strong> £110-130</li>
                <li><strong>8-seater minibus:</strong> £130-140</li>
                <li><strong>Wheelchair-accessible vehicle:</strong> Same price as equivalent standard vehicle</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Our <Link href="/wheelchair-accessible-taxi" className="text-primary hover:underline font-semibold">wheelchair-accessible taxi service</Link> provides the same fixed pricing as standard vehicles, ensuring no discrimination based on accessibility needs.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Booking Method
              </h3>

              <p className="text-gray-700 mb-4">
                How you book affects your price and service quality:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Online pre-booking (3+ days in advance):</strong> Best prices and guaranteed availability</li>
                <li><strong>Phone booking (24-72 hours notice):</strong> Standard rates, good availability</li>
                <li><strong>Short-notice bookings (same day):</strong> May incur premium or limited vehicle choice</li>
                <li><strong>Hailed or immediate pickup:</strong> Metered rates, often significantly more expensive</li>
              </ul>

              <p className="text-gray-700 mb-4">
                We recommend booking your Manchester Airport taxi at least 3-5 days in advance, especially during school holidays, Christmas, or summer peak season when demand from Stone and Staffordshire is highest.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Money-Saving Tips for Your Airport Taxi
              </h2>

              <p className="text-gray-700 mb-4">
                Getting the best price doesn't mean compromising on quality. Here's how to save money on your taxi from Stone to Manchester Airport:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                1. Book in Advance
              </h3>

              <p className="text-gray-700 mb-4">
                Pre-booking locks in your price and prevents last-minute availability issues. Operators can also plan routes more efficiently with advance bookings, which often translates to better rates. We offer online booking through our website with instant confirmation.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                2. Choose the Right Vehicle Size
              </h3>

              <p className="text-gray-700 mb-4">
                If you're a couple or solo traveller, don't pay for a minibus. Equally, if you're a family of four with ski equipment or golf bags, book an estate car or 6-seater to ensure space without cramming into a standard saloon. Accurate passenger and luggage information gets you the best-sized vehicle at the optimal price.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                3. Share with Others
              </h3>

              <p className="text-gray-700 mb-4">
                Travelling with friends, extended family or colleagues? Sharing a minibus from Stone to Manchester Airport splits the cost whilst maintaining door-to-door convenience. A £130 8-seater divided by six passengers is just £21.66 each — far cheaper than any other transport option.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                4. Consider Return Bookings
              </h3>

              <p className="text-gray-700 mb-4">
                Some operators offer discounts for booking both outbound and return journeys together. This also ensures you have guaranteed transport home after a tiring flight, rather than searching for available taxis in arrivals.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                5. Use a Local Operator
              </h3>

              <p className="text-gray-700 mb-4">
                Local Stone and Staffordshire taxi companies often offer better prices than national aggregator websites, which take commission. We're based right here at 3 Berkeley Court Mews in Stone, so we know the area intimately and don't add middleman fees.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                6. Ask About Corporate or Regular Traveller Rates
              </h3>

              <p className="text-gray-700 mb-4">
                If you travel to Manchester Airport regularly for business or frequently visit family abroad, enquire about <Link href="/account-work" className="text-primary hover:underline font-semibold">corporate account rates</Link> or loyalty programmes. We offer business accounts with monthly invoicing and preferential rates for frequent travellers from Stone and the surrounding areas.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Manchester Airport: Terminal Guide for Staffordshire Travellers
              </h2>

              <p className="text-gray-700 mb-4">
                Manchester Airport has three terminals, and knowing which one you need ensures a smooth arrival and departure:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Terminal 1
              </h3>

              <p className="text-gray-700 mb-4">
                Serves: British Airways, Lufthansa, Air France, KLM, and various European carriers. Most popular for business travel from Staffordshire.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Terminal 2
              </h3>

              <p className="text-gray-700 mb-4">
                Serves: Ryanair, Jet2, TUI Airways, and many charter services. The busiest terminal for holiday flights from the region.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Terminal 3
              </h3>

              <p className="text-gray-700 mb-4">
                Serves: Virgin Atlantic, Delta, Emirates, and long-haul carriers. Best for transatlantic and worldwide connections.
              </p>

              <p className="text-gray-700 mb-4">
                When booking your taxi from Stone, always specify your terminal. Our drivers monitor your flight regardless, but terminal information helps us drop you at the optimal location and meet you efficiently when collecting.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Choose 365 Transfers for Manchester Airport Journeys?
              </h2>

              <p className="text-gray-700 mb-4">
                Based in Stone with over 20 years' experience serving Staffordshire, we specialise in <Link href="/manchester-airport-taxi" className="text-primary hover:underline font-semibold">Manchester Airport transfers</Link> from Stone, Stoke-on-Trent, Stafford and throughout the region. Here's what sets us apart:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Fixed pricing with no hidden fees</strong> — Your quote is your final price, confirmed in writing</li>
                <li><strong>Flight monitoring included</strong> — We track your arrival or departure in real-time and adjust automatically</li>
                <li><strong>24/7/365 availability</strong> — No premium charges for early mornings, late nights or bank holidays</li>
                <li><strong>Fleet from 4-16 seaters</strong> — Including wheelchair-accessible vehicles at standard prices</li>
                <li><strong>DBS-checked, licensed drivers</strong> — All with BTEC qualifications and C.S.E certification</li>
                <li><strong>Local knowledge</strong> — We know every route from Stone to Manchester Airport, including traffic hotspots and alternatives</li>
                <li><strong>Meet and greet service</strong> — Your driver meets you in arrivals with a name board, helps with luggage, and guides you to the vehicle</li>
                <li><strong>Corporate accounts available</strong> — Monthly invoicing and preferential rates for business travellers</li>
              </ul>

              <p className="text-gray-700 mb-4">
                We also provide transfers to <Link href="/birmingham-airport-taxi" className="text-primary hover:underline font-semibold">Birmingham Airport</Link>, <Link href="/east-midlands-airport-taxi" className="text-primary hover:underline font-semibold">East Midlands Airport</Link>, <Link href="/liverpool-airport-taxi" className="text-primary hover:underline font-semibold">Liverpool Airport</Link>, and <Link href="/london-airport-transfers" className="text-primary hover:underline font-semibold">all London airports</Link>, making us your one-stop solution for airport travel from Stone and Staffordshire.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Booking Your Manchester Airport Taxi from Stone
              </h2>

              <p className="text-gray-700 mb-4">
                Ready to book your taxi from Stone to Manchester Airport? The process is straightforward:
              </p>

              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Get a quote online</strong> — Visit our website and enter your pickup location, destination, date and passenger details</li>
                <li><strong>Choose your vehicle</strong> — Select from saloon, estate, executive or minibus options based on your group size</li>
                <li><strong>Receive instant confirmation</strong> — Your booking is confirmed immediately with a reference number</li>
                <li><strong>Add your flight details</strong> — Provide your flight number so we can monitor it automatically</li>
                <li><strong>Relax</strong> — We'll send a reminder 24 hours before pickup, and your driver will be in touch on the day</li>
              </ol>

              <p className="text-gray-700 mb-4">
                For same-day bookings or complex requirements like <Link href="/complex-journey" className="text-primary hover:underline font-semibold">multi-stop journeys</Link>, call us directly on 01785 335563. Our team is available 24/7 to help with any special arrangements, whether it's child seats, extra luggage space, or specific accessibility requirements.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                How much is a taxi from Stone to Manchester Airport?
              </h3>

              <p className="text-gray-700 mb-4">
                A pre-booked taxi from Stone to Manchester Airport costs between £90-110 for a standard 4-seater vehicle. Larger vehicles and minibuses range from £110-140. All prices are fixed and include flight monitoring, meet and greet, and all tolls.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                How long does the journey take from Stoke-on-Trent to Manchester Airport?
              </h3>

              <p className="text-gray-700 mb-4">
                The journey from Stone typically takes 50-60 minutes via the M6 motorway in normal traffic conditions. We recommend allowing 90 minutes for early morning departures to account for any unexpected delays and to ensure you arrive at the airport with time to spare.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Is a pre-booked taxi cheaper than Uber to Manchester Airport?
              </h3>

              <p className="text-gray-700 mb-4">
                Whilst Uber's average price from Stoke-on-Trent to Manchester Airport is around £56, surge pricing can push this to £90 or more during peak times. Pre-booked taxis offer fixed prices, flight monitoring, guaranteed availability, and suitable vehicle choice, making them better value for airport journeys where reliability matters.
              </p>

              <h3 className="text-2xl font-bold text-primary