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
    canonical: "/blog/taxi-stoke-on-trent-to-manchester-airport-price-guide-2026",
  },
  title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide | 365 Transfers",
  description: "Complete 2026 price guide for taxi journeys from Stoke-on-Trent and Stone to Manchester Airport. Compare costs, journey times, and hidden expenses.",
  keywords: "taxi Stoke-on-Trent to Manchester Airport, Manchester Airport taxi price, Stone to Manchester Airport, airport transfer cost, taxi price guide 2026",
  openGraph: {
    title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    description: "Complete 2026 price guide for taxi journeys from Stoke-on-Trent and Stone to Manchester Airport. Compare costs, journey times, and hidden expenses.",
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

export default function ManchesterAirportTaxiPriceGuide() {
  const articleSchema = createArticleSchema(
    "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    "Complete 2026 price guide for taxi journeys from Stoke-on-Trent and Stone to Manchester Airport. Compare costs, journey times, and hidden expenses.",
    "2026-02-21"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Blog", url: "https://taxisstone.co.uk/blog" },
    {
      name: "Manchester Airport Taxi Price Guide 2026",
      url: "https://taxisstone.co.uk/blog/taxi-stoke-on-trent-to-manchester-airport-price-guide-2026",
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
                {new Date("2026-02-21").toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src="/images/blog/04-man-in-taxi-town.webp"
                alt="Professional taxi service to Manchester Airport from Stoke-on-Trent"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* INTRO CALLOUT BOX */}
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Whether you're travelling from Stone, Stoke-on-Trent, or anywhere in Staffordshire, understanding the real cost of getting to Manchester Airport can save you money and stress. With taxi prices ranging from £56 to £98 depending on the provider and hidden costs lurking in alternative transport options, this comprehensive 2026 price guide reveals everything you need to know before you book.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Current Taxi Prices from Stoke-on-Trent to Manchester Airport
              </h2>
              
              <p className="text-gray-700 mb-4">
                As of February 2026, taxi fares from Stoke-on-Trent to Manchester Airport vary considerably depending on which operator you choose and the type of vehicle you require. The journey typically covers 39-46 miles and takes between 50 minutes to an hour, depending on traffic conditions and your exact pickup location.
              </p>

              <p className="text-gray-700 mb-6">
                Here's what you can expect to pay from different areas across North Staffordshire:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="py-3 px-4 text-left">Pickup Location</th>
                      <th className="py-3 px-4 text-left">Budget Range</th>
                      <th className="py-3 px-4 text-left">Mid-Range</th>
                      <th className="py-3 px-4 text-left">Journey Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-semibold">Stone</td>
                      <td className="py-3 px-4">£70-£80</td>
                      <td className="py-3 px-4">£90-£98</td>
                      <td className="py-3 px-4">50-60 mins</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Stoke-on-Trent Centre</td>
                      <td className="py-3 px-4">£70-£80</td>
                      <td className="py-3 px-4">£90-£96</td>
                      <td className="py-3 px-4">50-60 mins</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-semibold">Newcastle-under-Lyme</td>
                      <td className="py-3 px-4">£75-£85</td>
                      <td className="py-3 px-4">£90-£96</td>
                      <td className="py-3 px-4">55-65 mins</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Stafford</td>
                      <td className="py-3 px-4">£85-£95</td>
                      <td className="py-3 px-4">£100-£110</td>
                      <td className="py-3 px-4">60-70 mins</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-semibold">Uber (Stoke area)</td>
                      <td className="py-3 px-4" colspan="2">£56 average</td>
                      <td className="py-3 px-4">50-60 mins</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                At <Link href="/" className="text-primary hover:underline font-semibold">365 Transfers</Link>, based in the heart of Stone, we offer transparent fixed pricing for all <Link href="/manchester-airport-taxi" className="text-primary hover:underline">Manchester Airport transfers</Link> from across Staffordshire. Our rates sit in the mid-range bracket because we include services that budget operators charge extra for—more on that below.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What's Included in Different Price Brackets?
              </h2>

              <p className="text-gray-700 mb-6">
                Understanding what you're actually paying for is crucial when comparing taxi prices from Stoke-on-Trent to Manchester Airport. The cheapest quote isn't always the best value—here's what typically separates budget operators from professional transfer services:
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Budget Range (£70-£80)
              </h3>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Standard saloon vehicle (often older models)</li>
                <li>Basic pickup service—you wait for the driver</li>
                <li>No flight monitoring (you're charged if your flight is delayed)</li>
                <li>Limited luggage space</li>
                <li>Metered fares may apply if traffic is heavy</li>
                <li>No meet and greet service</li>
                <li>Extra charges for early morning or late night pickups</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Mid-Range (£90-£98)
              </h3>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Modern, well-maintained vehicles (saloon or executive)</li>
                <li>Flight monitoring included—no extra charge for delays</li>
                <li>Meet and greet service at airport arrivals</li>
                <li>Ample luggage space for family holidays</li>
                <li>Fixed price regardless of traffic or time of day</li>
                <li>24/7 availability with no surcharges</li>
                <li>DBS-checked, professionally qualified drivers</li>
                <li>Child seats available on request</li>
                <li>Free waiting time allowance</li>
              </ul>

              <p className="text-gray-700 mb-4">
                This is where 365 Transfers positions our <Link href="/airport-transfers" className="text-primary hover:underline">airport transfer service</Link>. With over 20 years of experience serving Stone and the wider Staffordshire area, we believe in transparent pricing that includes everything you need for a stress-free journey.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                The Hidden Costs of Alternative Transport Options
              </h2>

              <p className="text-gray-700 mb-6">
                Before you decide that a taxi from Stoke-on-Trent to Manchester Airport seems expensive, consider what the alternatives actually cost when you factor in all the hidden expenses:
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Driving and Parking at Manchester Airport
              </h3>

              <p className="text-gray-700 mb-4">
                At first glance, driving yourself seems like the cheapest option—it's your own car, after all. But once you calculate fuel, wear and tear, and most significantly, airport parking costs, the numbers tell a different story.
              </p>

              <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Manchester Airport Parking Costs (2026)</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>1 week on-site parking:</strong> £90-£140</li>
                  <li><strong>1 week off-site parking:</strong> £65-£85</li>
                  <li><strong>2 weeks on-site parking:</strong> £160-£220</li>
                  <li><strong>Fuel cost (Stone to Manchester return):</strong> £15-£20</li>
                  <li><strong>Total for 1 week:</strong> £80-£160</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                That's before you consider the stress of finding a parking space, the shuttle bus wait at off-site car parks, and the anxiety of leaving your vehicle unattended for a week or more. A professional taxi service from Stone eliminates all of these concerns.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Train from Stoke-on-Trent to Manchester Airport
              </h3>

              <p className="text-gray-700 mb-4">
                The train journey requires changing at Manchester Piccadilly and adds significant time and complexity to your journey:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Train fare (Stoke to Manchester Airport):</strong> £25-£45 per person</li>
                <li><strong>Family of four:</strong> £100-£180 return</li>
                <li><strong>Journey time:</strong> 90-120 minutes (including connection)</li>
                <li><strong>Taxi to Stoke station:</strong> £8-£15</li>
                <li><strong>Managing luggage:</strong> Stairs, platform changes, crowded trains</li>
                <li><strong>Risk of delays:</strong> No refund if you miss your flight</li>
              </ul>

              <p className="text-gray-700 mb-4">
                For a family travelling from Stone or anywhere in the Potteries, a direct taxi service actually works out cheaper than train tickets—and infinitely more convenient, especially with young children or elderly relatives.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Uber vs Professional Taxi Services
              </h3>

              <p className="text-gray-700 mb-6">
                Uber's average price of £56 from Stoke-on-Trent to Manchester Airport looks tempting, but experienced travellers know the drawbacks:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left">Factor</th>
                      <th className="py-3 px-4 text-left">Uber</th>
                      <th className="py-3 px-4 text-left">Professional Taxi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-semibold">Price guarantee</td>
                      <td className="py-3 px-4">Surge pricing can double fares</td>
                      <td className="py-3 px-4">Fixed price guaranteed</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Vehicle size</td>
                      <td className="py-3 px-4">Standard car (limited luggage)</td>
                      <td className="py-3 px-4">Choice of vehicles up to 16-seater</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-semibold">Early morning reliability</td>
                      <td className="py-3 px-4">Depends on driver availability</td>
                      <td className="py-3 px-4">Pre-booked and guaranteed</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Flight monitoring</td>
                      <td className="py-3 px-4">Not available</td>
                      <td className="py-3 px-4">Included—driver adjusts for delays</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-semibold">Meet and greet</td>
                      <td className="py-3 px-4">Wait outside in car park</td>
                      <td className="py-3 px-4">Driver meets you in arrivals</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                For an important journey like an airport transfer, the £34-£42 difference between Uber and a professional service buys you peace of mind, reliability, and the assurance that you won't miss your flight due to a last-minute driver cancellation.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Fixed Pricing Matters for Airport Transfers
              </h2>

              <p className="text-gray-700 mb-4">
                When you book a taxi from Stone or Stoke-on-Trent to Manchester Airport, you want to know exactly what you're paying before you travel. Metered taxis might seem transparent, but they come with risks:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Traffic delays:</strong> A 10-minute delay on the M6 can add £8-£12 to your fare</li>
                <li><strong>Route changes:</strong> If the M6 is closed and you're diverted, the meter keeps running</li>
                <li><strong>Time of day surcharges:</strong> Many operators add 20-30% for evening or early morning journeys</li>
                <li><strong>Luggage supplements:</strong> Some charge extra per suitcase</li>
                <li><strong>Waiting time:</strong> If you're delayed in airport security, you pay for every minute</li>
              </ul>

              <p className="text-gray-700 mb-4">
                At 365 Transfers, we believe in complete transparency. When you book a <Link href="/manchester-airport-taxi" className="text-primary hover:underline">Manchester Airport taxi from Stone</Link>, the price we quote is the price you pay—no matter what happens during the journey. Whether there's a motorway closure, your flight lands late, or you need extra time to collect your luggage, your fare stays the same.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                When to Book a Taxi to Manchester Airport
              </h2>

              <p className="text-gray-700 mb-4">
                Timing your airport transfer booking can affect both availability and price, particularly during peak travel periods. Here's what you need to know:
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Peak Travel Periods in Staffordshire
              </h3>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>School holidays:</strong> July-August sees the highest demand for family airport transfers from Stone and across North Staffordshire</li>
                <li><strong>February half-term:</strong> Popular for ski trips and winter sun getaways</li>
                <li><strong>Christmas and New Year:</strong> Many families book airport taxis weeks in advance</li>
                <li><strong>Bank holiday weekends:</strong> Expect higher demand and early morning time slots to fill quickly</li>
                <li><strong>Early morning flights (4am-7am):</strong> Always book these at least 48 hours in advance</li>
              </ul>

              <p className="text-gray-700 mb-4">
                We recommend booking your airport transfer at least 3-5 days in advance during normal periods, and 2-3 weeks ahead during school holidays. This guarantees you get your preferred time slot and gives you one less thing to worry about as your departure date approaches.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Group Travel: When Taxis Beat All Other Options
              </h2>

              <p className="text-gray-700 mb-6">
                If you're travelling to Manchester Airport as a group from Stone, Stoke-on-Trent, or anywhere in Staffordshire, the economics of taxi travel become even more compelling. Here's where professional minibus and minivan services truly shine:
              </p>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Group Travel Cost Comparison (Stone to Manchester Airport)</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>6 people by train:</strong> £300-£360 return</li>
                  <li><strong>6 people in 2 Uber vehicles:</strong> £112-£170 (one way, depending on surge pricing)</li>
                  <li><strong>6 people in airport parking:</strong> £80-£160 plus fuel</li>
                  <li><strong>6 people in 365 Transfers 8-seater:</strong> £110-£140 (fixed price, all inclusive)</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                For families, wedding parties, golf trips, or corporate groups, a single minibus or minivan offers the best value and convenience. Everyone travels together, there's ample room for luggage and sports equipment, and you can split the fixed cost between passengers.
              </p>

              <p className="text-gray-700 mb-4">
                365 Transfers operates a fleet that includes 8-seater and 16-seater vehicles, perfect for group travel from Stone and the surrounding area. We also offer <Link href="/events-tours" className="text-primary hover:underline">events and tours transport</Link> for larger groups heading to concerts, sporting events, or days out.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What Should Your Taxi Fare Include?
              </h2>

              <p className="text-gray-700 mb-6">
                Not all taxi services from Stoke-on-Trent to Manchester Airport are created equal. Before you book based purely on price, make sure you're comparing like with like. A professional airport transfer service should include:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-3">Essential Inclusions</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Flight monitoring and delay allowances</li>
                    <li>Meet and greet at arrivals</li>
                    <li>All luggage allowance</li>
                    <li>Waiting time for departures (15-30 mins)</li>
                    <li>No hidden surcharges</li>
                    <li>24/7 customer support</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-3">Premium Extras</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Child seats and booster seats</li>
                    <li>Executive vehicle options</li>
                    <li>Wheelchair-accessible vehicles</li>
                    <li>Bottled water and refreshments</li>
                    <li>Phone charging cables</li>
                    <li>Extra luggage capacity</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                At 365 Transfers, everything in the 'Essential Inclusions' column comes as standard with every booking. We also offer <Link href="/wheelchair-accessible-taxi" className="text-primary hover:underline">wheelchair-accessible vehicles</Link> and child seats at no extra charge when requested at the time of booking.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Manchester Airport Terminal Guide for Staffordshire Travellers
              </h2>

              <p className="text-gray-700 mb-4">
                Manchester Airport operates three terminals, and knowing which one you need can save time on the day of travel:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Terminal 1:</strong> TUI, Jet2, Ryanair, and several European airlines</li>
                <li><strong>Terminal 2:</strong> Aer Lingus, Air Canada, Lufthansa, Singapore Airlines, and many long-haul carriers</li>
                <li><strong>Terminal 3:</strong> Emirates, Virgin Atlantic, Thomas Cook, and additional international airlines</li>
              </ul>

              <p className="text-gray-700 mb-4">
                When you book with 365 Transfers, simply tell us your airline or flight number and we'll know exactly which terminal to take you to—or collect you from. Our drivers know Manchester Airport inside out, including the quickest drop-off and pickup points for each terminal.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                How 365 Transfers Serves Stone and Staffordshire
              </h2>

              <p className="text-gray-700 mb-4">
                Based in Stone, we're perfectly positioned to serve the entire North Staffordshire region with reliable, professional airport transfers. Whether you're in the town centre, out in the villages, or anywhere across the Potteries, we know the local area intimately.
              </p>

              <p className="text-gray-700 mb-4">
                With over 20 years of experience, our drivers are fully DBS-checked, BTEC-qualified, and trained to the highest standards. We operate 24 hours a day, 7 days a week, 365 days a year—which is exactly where our name comes from.
              </p>

              <p className="text-gray-700 mb-4">
                We don't just offer <Link href="/airport-transfers" className="text-primary hover:underline">airport transfers</Link>. Our comprehensive range of services includes <Link href="/local-national" className="text-primary hover:underline">local and national journeys</Link>, <Link href="/school-contracts" className="text-primary hover:underline">school transport contracts</Link>, <Link href="/account-work" className="text-primary hover:underline">corporate accounts</Link>, and <Link href="/days-out" className="text-primary hover:underline">days out to popular destinations</Link> like Alton Towers.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-2">How much is a taxi from Stone to Manchester Airport?</h4>
                  <p className="text-gray-700">
                    A taxi from Stone to Manchester Airport typically costs between £90-£98 for a standard saloon vehicle with a professional operator. Budget services may charge £70-£80 but often exclude flight monitoring, meet and greet, and other essential services.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-2">Is it cheaper to park at Manchester Airport or get a taxi from Stoke-on-Trent?</h4>
                  <p className="text-gray-700">
                    For trips lasting a week or more, a taxi is often cheaper. Manchester Airport parking costs £80-£160 for one week, plus fuel costs. A return taxi journey costs approximately the same but eliminates the hassle of parking, shuttle buses, and vehicle security concerns.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-2">How long does it take to get from Stoke-on-Trent to Manchester Airport by taxi?</h4>
                  <p className="text-gray-700">
                    The journey typically takes 50-60 minutes from central Stoke-on-Trent or Stone, depending on traffic conditions. We recommend allowing 90 minutes for early morning flights and up to 2 hours during peak rush hour periods.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-2">Can I book a taxi to Manchester Airport for 4am?</h4>
                  <p className="text-gray-700">
                    Absolutely. 365 Transfers operates 24/7 with no surcharges for early morning or late night journeys. We recommend booking early morning pickups at least 48 hours in advance to guarantee your preferred time slot.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-2">What happens if my flight is delayed?</h4>
                  <p className="text-gray-700">
                    When you book with 365 Transfers, we monitor your flight in real-time and adjust your pickup time automatically. There are no extra charges for flight delays, and our drivers will be waiting when you land—no matter how late your flight arrives.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-2">Do you provide child seats for airport transfers?</h4>
                  <p className="text-gray-700">
                    Yes, we provide child seats and booster seats at no extra charge. Simply let us know the ages of your children when you book, and we'll ensure the appropriate seats are fitted and ready for your journey.
                  </p>
                </div>
              </div>

              {/* CTA SECTION AT END */}
              <div className="bg-primary text-white rounded