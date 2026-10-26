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
    canonical: "/blog/taxi-price-stoke-manchester-airport-2026",
  },
  title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide | 365 Transfers",
  description: "Complete 2026 price guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs, hidden fees, and alternatives. Book your airport transfer from Stone today.",
  keywords: "taxi Stoke to Manchester Airport, Manchester Airport taxi price, Stoke-on-Trent airport transfer, Stone to Manchester Airport, airport taxi cost 2026",
  openGraph: {
    title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    description: "Discover the true cost of airport transfers from Stoke-on-Trent and Stone to Manchester Airport in 2026. Compare prices and book with confidence.",
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

export default function TaxiPriceStokeManchester2026() {
  const articleSchema = createArticleSchema(
    "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    "Complete 2026 price guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs, hidden fees, and alternatives including parking, trains, and ride-sharing services.",
    "2026-10-26"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Blog", url: "https://taxisstone.co.uk/blog" },
    {
      name: "Taxi Price to Manchester Airport 2026",
      url: "https://taxisstone.co.uk/blog/taxi-price-stoke-manchester-airport-2026",
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
                {new Date("2026-10-26").toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src="/images/blog/39-woman-suitcase-phone-street.webp"
                alt="Booking an airport taxi transfer from Stoke-on-Trent to Manchester Airport"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* INTRO CALLOUT BOX */}
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Whether you're travelling from Stone, Stoke-on-Trent, or anywhere across Staffordshire, understanding the true cost of getting to Manchester Airport is essential for planning your journey. In 2026, taxi prices from Stoke-on-Trent to Manchester Airport typically range from £70 to £98 depending on the provider, vehicle type, and time of travel. But the cheapest option isn't always the best value — and there are hidden costs with alternatives like parking and trains that many travellers overlook.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What's the Average Taxi Price from Stoke-on-Trent to Manchester Airport in 2026?
              </h2>
              
              <p className="text-gray-700 mb-4">
                The cost of a taxi from Stoke-on-Trent to Manchester Airport varies significantly depending on which service you choose. Here's what you can expect to pay in 2026:
              </p>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Service Type</th>
                      <th className="px-6 py-4 text-left font-semibold">Price Range</th>
                      <th className="px-6 py-4 text-left font-semibold">Vehicle Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Budget Operators</td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">£70-£80</td>
                      <td className="px-6 py-4 text-gray-700">Standard saloon</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Mid-Range Private Hire</td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">£90-£98</td>
                      <td className="px-6 py-4 text-gray-700">Saloon or estate</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Executive Service</td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">£98-£110</td>
                      <td className="px-6 py-4 text-gray-700">Executive/luxury</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Minibus (6-8 passengers)</td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">£110-£140</td>
                      <td className="px-6 py-4 text-gray-700">Minibus/MPV</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Ride-Sharing (e.g., Uber)</td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">£56-£70</td>
                      <td className="px-6 py-4 text-gray-700">Standard vehicle</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                From Stone, which is approximately 7 miles south of Stoke-on-Trent, you can expect prices to be similar or slightly lower, typically falling in the £85-£95 range for a standard saloon with a reputable provider. The journey from Stone to Manchester Airport takes approximately 50-60 minutes via the M6 motorway, making it one of the most convenient airport options for Staffordshire residents.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What Affects the Price of Your Airport Taxi?
              </h2>

              <p className="text-gray-700 mb-4">
                Several factors influence how much you'll pay for a taxi from Stoke-on-Trent to Manchester Airport:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                1. Time of Day and Day of Week
              </h3>
              
              <p className="text-gray-700 mb-4">
                Early morning departures (before 6am) or late-night pickups may incur additional charges with some operators. Weekend and bank holiday travel can also cost 10-20% more with certain providers. However, at 365 Transfers, we maintain consistent pricing regardless of when you travel — no surge pricing, no hidden supplements.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                2. Vehicle Size and Type
              </h3>
              
              <p className="text-gray-700 mb-4">
                A standard saloon is sufficient for 1-3 passengers with standard luggage. Larger groups or those with extra baggage will need an estate car or minibus, which naturally costs more. Executive vehicles offer additional comfort for business travellers but command a premium price. Our <Link href="/airport-transfers">airport transfer service</Link> includes a range of vehicles from 4 to 16 seats to accommodate any group size.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                3. Booking Method
              </h3>
              
              <p className="text-gray-700 mb-4">
                Pre-booking your taxi from Stoke-on-Trent to Manchester Airport almost always secures a better rate than hailing a metered taxi on the day. Fixed-price bookings also eliminate the risk of traffic delays increasing your fare. When you book with 365 Transfers, you'll receive a guaranteed fixed price with no hidden charges — what you're quoted is what you pay.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                4. Return Journeys and Waiting Time
              </h3>
              
              <p className="text-gray-700 mb-4">
                If you need a return journey, many operators offer discounted round-trip rates. Some passengers prefer to book both directions with the same trusted company for peace of mind. We also provide meet and greet services for return journeys, where your driver monitors your flight and adjusts pickup time accordingly — included in the price with no extra waiting charges.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Comparing All Your Options: Taxi vs. Parking vs. Train
              </h2>

              <p className="text-gray-700 mb-4">
                Many travellers automatically assume that driving and parking is cheaper than taking a taxi from Stoke-on-Trent to Manchester Airport. However, when you add up all the costs, the picture becomes less clear:
              </p>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Transport Option</th>
                      <th className="px-6 py-4 text-left font-semibold">Cost (7 days)</th>
                      <th className="px-6 py-4 text-left font-semibold">Pros</th>
                      <th className="px-6 py-4 text-left font-semibold">Cons</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-gray-900 font-semibold">Pre-booked Taxi</td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">£90-£98</td>
                      <td className="px-6 py-4 text-gray-700">Door-to-door, no parking stress, fixed price, flight monitoring</td>
                      <td className="px-6 py-4 text-gray-700">Higher upfront cost for solo travellers</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-900 font-semibold">Airport Parking (off-site)</td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">£45-£70 + £20 fuel</td>
                      <td className="px-6 py-4 text-gray-700">Convenient for families, car available on return</td>
                      <td className="px-6 py-4 text-gray-700">Shuttle delays, walking with luggage, parking stress, fuel costs</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-900 font-semibold">Airport Parking (on-site)</td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">£90-£150 + £20 fuel</td>
                      <td className="px-6 py-4 text-gray-700">Walk to terminal, secure</td>
                      <td className="px-6 py-4 text-gray-700">Very expensive, still requires driving, fuel costs</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-900 font-semibold">Train (Stoke to Airport)</td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">£30-£60 per person</td>
                      <td className="px-6 py-4 text-gray-700">Cheaper for solo travellers</td>
                      <td className="px-6 py-4 text-gray-700">Multiple changes, luggage hassle, delays, fixed schedules</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-900 font-semibold">Ride-Sharing App</td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">£56-£70</td>
                      <td className="px-6 py-4 text-gray-700">Cheapest option</td>
                      <td className="px-6 py-4 text-gray-700">Surge pricing, no flight monitoring, variable vehicle quality, no guarantee of availability</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                The Hidden Costs of Airport Parking
              </h3>
              
              <p className="text-gray-700 mb-4">
                While off-site parking at Manchester Airport might advertise rates as low as £45 for a week, the true cost includes:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Fuel:</strong> Approximately £20 return journey from Stoke-on-Trent</li>
                <li><strong>Vehicle wear and tear:</strong> Around 100 miles total driving</li>
                <li><strong>Time waiting for shuttle buses:</strong> Can add 30-45 minutes each way</li>
                <li><strong>Stress of finding parking:</strong> Especially during peak holiday periods</li>
                <li><strong>Risk of parking damage:</strong> While rare, vehicles are vulnerable in long-stay car parks</li>
                <li><strong>Early morning driving fatigue:</strong> Particularly for 4am or 5am flights</li>
              </ul>

              <p className="text-gray-700 mb-4">
                When you factor in these hidden costs and inconveniences, the price difference between parking and a pre-booked taxi from Stoke-on-Trent to Manchester Airport becomes minimal — especially for couples or families where the taxi cost is split.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Why Trains Aren't Always the Answer
              </h3>
              
              <p className="text-gray-700 mb-4">
                Getting to Manchester Airport from Stoke-on-Trent by train requires at least one change (typically at Manchester Piccadilly or Crewe), and the total journey time can be 90-120 minutes depending on connections. For early morning flights, you may need to travel the night before and pay for airport hotel accommodation. The train fare for a family of four can easily exceed £120 return — more expensive than a private taxi that goes direct from your door in Stone or Stoke-on-Trent.
              </p>

              <p className="text-gray-700 mb-4">
                There's also the physical challenge of managing luggage through stations, especially if you're travelling with children or elderly relatives. A direct <Link href="/manchester-airport-taxi">Manchester Airport taxi</Link> eliminates all these hassles.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What You Get with a Professional Airport Transfer Service
              </h2>

              <p className="text-gray-700 mb-4">
                When you book a quality airport taxi from Stone or Stoke-on-Trent to Manchester Airport, you're paying for more than just transport. Here's what's typically included with a professional service like 365 Transfers:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Fixed price guarantee:</strong> No meter, no surge pricing, no surprises</li>
                <li><strong>Flight monitoring:</strong> We track your flight and adjust pickup time if there are delays</li>
                <li><strong>Meet and greet service:</strong> For return journeys, your driver meets you in arrivals</li>
                <li><strong>Free waiting time:</strong> We wait up to 60 minutes after landing at no extra charge</li>
                <li><strong>All-inclusive pricing:</strong> Fuel, parking, tolls, and waiting time included</li>
                <li><strong>Professional, DBS-checked drivers:</strong> All our drivers hold BTEC qualifications and are C.S.E certified</li>
                <li><strong>Vehicle choice:</strong> From saloons to 16-seater minibuses, including wheelchair-accessible vehicles</li>
                <li><strong>24/7 availability:</strong> We operate every day of the year including Christmas</li>
                <li><strong>Baby seats available:</strong> Just request when booking</li>
                <li><strong>Extra luggage space:</strong> Estate cars and larger vehicles for ski trips, golf holidays, etc.</li>
              </ul>

              <p className="text-gray-700 mb-4">
                With over 20 years of experience providing taxi services from Stone and across Staffordshire, we understand what makes a stress-free airport transfer. It's not just about getting from A to B — it's about starting and ending your holiday in comfort and with complete peace of mind.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                When Is a Taxi the Best Value Option?
              </h2>

              <p className="text-gray-700 mb-4">
                A pre-booked taxi from Stoke-on-Trent to Manchester Airport offers the best value when:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>You're travelling as a couple, family, or group (cost per person drops significantly)</li>
                <li>You have early morning or late night flights when trains are limited</li>
                <li>You have significant luggage (holiday suitcases, sports equipment, etc.)</li>
                <li>You're travelling with young children or elderly relatives</li>
                <li>You're returning from a long-haul flight and want door-to-door service</li>
                <li>You need a guaranteed, stress-free journey without parking concerns</li>
                <li>You're on a business trip and can claim the cost as expenses</li>
              </ul>

              <p className="text-gray-700 mb-4">
                For frequent travellers from Stone, Stoke-on-Trent, or Stafford, we also offer <Link href="/account-work">corporate account facilities</Link> with 30-day payment terms and dedicated account management. This makes airport transfers even more convenient for business professionals who regularly fly from Manchester Airport.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Other Airports Within Easy Reach of Stone and Stoke-on-Trent
              </h2>

              <p className="text-gray-700 mb-4">
                While Manchester Airport is the most popular choice for travellers from Staffordshire, you have several other airports within reasonable distance. Here's how they compare:
              </p>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Airport</th>
                      <th className="px-6 py-4 text-left font-semibold">Distance from Stone</th>
                      <th className="px-6 py-4 text-left font-semibold">Journey Time</th>
                      <th className="px-6 py-4 text-left font-semibold">Typical Taxi Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-gray-900 font-semibold">Manchester (MAN)</td>
                      <td className="px-6 py-4 text-gray-700">39-46 miles</td>
                      <td className="px-6 py-4 text-gray-700">50-60 minutes</td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">£90-£98</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-900 font-semibold">Birmingham (BHX)</td>
                      <td className="px-6 py-4 text-gray-700">36-39 miles</td>
                      <td className="px-6 py-4 text-gray-700">47-55 minutes</td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">£89-£95</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-900 font-semibold">East Midlands (EMA)</td>
                      <td className="px-6 py-4 text-gray-700">46 miles</td>
                      <td className="px-6 py-4 text-gray-700">49-55 minutes</td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">£90-£103</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-900 font-semibold">Liverpool (LPL)</td>
                      <td className="px-6 py-4 text-gray-700">57 miles</td>
                      <td className="px-6 py-4 text-gray-700">~1 hour 4 minutes</td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">£130-£135</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                Stone's location makes it incredibly convenient for airport access. You're almost equidistant from Manchester, Birmingham, and East Midlands airports, giving you genuine choice based on flight times and destinations. We provide fixed-price transfers to all of these airports — see our <Link href="/airport-transfer-prices">airport transfer prices</Link> page for full details.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Tips for Getting the Best Price on Your Airport Taxi
              </h2>

              <p className="text-gray-700 mb-4">
                Here's how to ensure you get the best value when booking a taxi from Stoke-on-Trent to Manchester Airport:
              </p>

              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
                <li><strong>Book in advance:</strong> Last-minute bookings often cost more. Book as soon as you've confirmed your flight.</li>
                <li><strong>Get a fixed price quote:</strong> Avoid metered taxis for airport runs. A fixed price protects you from traffic delays.</li>
                <li><strong>Check what's included:</strong> The cheapest quote isn't always the best value. Make sure flight monitoring, meet and greet, and waiting time are included.</li>
                <li><strong>Consider return journeys:</strong> Booking both directions together often secures a better rate.</li>
                <li><strong>Choose the right vehicle size:</strong> Don't pay for a minibus if you only need a saloon, but don't cram luggage into a vehicle that's too small either.</li>
                <li><strong>Ask about account facilities:</strong> If you travel regularly, a corporate account can simplify bookings and payments.</li>
                <li><strong>Check cancellation policies:</strong> Flight plans change. Make sure you can amend or cancel if needed.</li>
                <li><strong>Read reviews:</strong> A cheaper price means nothing if the driver doesn't show up or the vehicle is poorly maintained.</li>
              </ol>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Choose 365 Transfers for Your Airport Journey?
              </h2>

              <p className="text-gray-700 mb-4">
                As a Stone-based taxi company with over 20 years of experience, we specialise in airport transfers from Stone, Stoke-on-Trent, Stafford, and across Staffordshire. Here's why local travellers trust us:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Genuinely local service:</strong> Based in Stone, we know the area inside out</li>
                <li><strong>No surge pricing:</strong> Our prices are the same at 3am as they are at 3pm</li>
                <li><strong>Fleet variety:</strong> From saloons to 16-seater minibuses, including <Link href="/wheelchair-accessible-taxi">wheelchair-accessible vehicles</Link></li>
                <li><strong>Professional drivers:</strong> All DBS-checked, BTEC qualified, and C.S.E certified</li>
                <li><strong>True 24/7/365 service:</strong> We operate every single day including Christmas and New Year</li>
                <li><strong>Fixed transparent pricing:</strong> What we quote is what you pay — no hidden supplements</li>
                <li><strong>Local reputation:</strong> Trusted by families, businesses, and schools across Staffordshire</li>
                <li><strong>Comprehensive insurance:</strong> Full passenger liability cover for your peace of mind</li>
              </ul>

              <p className="text-gray-700 mb-4">
                We also provide transfers to other destinations beyond airports. Whether you need transport for <Link href="/days-out">days out</Link> to Alton Towers, corporate travel, school contracts, or <Link href="/every-occasion">special occasions</Link>, we're here to help.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Frequently Asked Questions About Taxi Prices to Manchester Airport
              </h2>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  How much is a taxi from Stone to Manchester Airport?
                </h3>
                <p className="text-gray-700">
                  A taxi from Stone to Manchester Airport typically costs £90-£98 for a standard saloon with 365 Transfers. This includes flight monitoring, meet and greet service, and all waiting time. The journey takes approximately 50-60 minutes via the M6.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Is it cheaper to drive and park or get a taxi to Manchester Airport?
                </h3>
                <p className="text-gray-700">
                  For couples or families, a pre-booked taxi is often cheaper than parking when you factor in parking fees (£45-£150 for a week), fuel costs (£20), and the stress of shuttle buses and early morning driving. For solo travellers on a budget, off-site parking may be slightly cheaper but far less convenient.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Can I book a return taxi from Manchester Airport to Stoke-on-Trent?
                </h3>
                <p className="text-gray-700">
                  Yes, we offer return bookings at competitive rates. We monitor your return flight and adjust pickup time automatically if there are delays. Your driver will meet you in the arrivals hall with a name board and help with your luggage.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  What if my flight is delayed or cancelled?
                </h3>
                <p className="text-gray-700">
                  We monitor all flights in real-time. If your flight is delayed, we automatically adjust your pickup time at no extra charge. If your flight is cancelled, we'll work with you to reschedule or provide a full refund according to our terms.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Do you provide taxis for early morning flights?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We operate 24/7/365 with no additional charges for early morning or late night pickups. Whether your flight departs at 4am or 11pm, our price remains the same.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className