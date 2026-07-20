typescript
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
    canonical: "/blog/taxi-stoke-manchester-airport-price-guide-2026",
  },
  title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide | 365 Transfers",
  description: "Complete 2026 price guide for taxis from Stoke-on-Trent and Stone to Manchester Airport. Compare costs, journey times, and booking options with 365 Transfers.",
  keywords: "taxi Stoke-on-Trent to Manchester Airport, Manchester Airport taxi price, Stone to Manchester Airport taxi, airport transfer cost, Stoke to Manchester taxi fare",
  openGraph: {
    title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    description: "Complete 2026 price guide for taxis from Stoke-on-Trent and Stone to Manchester Airport. Compare costs, journey times, and booking options.",
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
    "Complete 2026 price guide for taxis from Stoke-on-Trent and Stone to Manchester Airport. Compare costs, journey times, and booking options with 365 Transfers.",
    "2026-07-20"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Blog", url: "https://taxisstone.co.uk/blog" },
    {
      name: "Stoke to Manchester Airport Price Guide",
      url: "https://taxisstone.co.uk/blog/taxi-stoke-manchester-airport-price-guide-2026",
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
                {new Date("2026-07-20").toLocaleDateString("en-GB", {
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
                alt="Traveller with luggage heading to a taxi transfer to Manchester Airport"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* INTRO CALLOUT BOX */}
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  If you're travelling from Stone, Stoke-on-Trent, or the surrounding Staffordshire area to Manchester Airport, understanding the true cost of your taxi journey is essential for budgeting your trip. In 2026, taxi prices from Stoke-on-Trent to Manchester Airport typically range from £70 to £98, depending on the type of service, vehicle size, and time of day. This comprehensive guide breaks down everything you need to know about taxi costs, compares alternatives, and helps you make an informed decision for your airport transfer.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Average Taxi Prices from Stoke-on-Trent to Manchester Airport in 2026
              </h2>
              
              <p className="text-gray-700 mb-4">
                The cost of a taxi from Stoke-on-Trent to Manchester Airport varies based on several factors, but here's what you can expect to pay in 2026:
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Standard Pricing Overview</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-semibold text-gray-700">Budget Operators</span>
                    <span className="text-primary font-bold">£70 - £80</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-semibold text-gray-700">Mid-Range Services (365 Transfers)</span>
                    <span className="text-primary font-bold">£90 - £98</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-semibold text-gray-700">Executive/Premium</span>
                    <span className="text-primary font-bold">£100 - £120</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-semibold text-gray-700">Minibus (6-8 passengers)</span>
                    <span className="text-primary font-bold">£110 - £140</span>
                  </li>
                  <li className="flex justify-between items-center pb-3">
                    <span className="font-semibold text-gray-700">Uber (Estimate)</span>
                    <span className="text-primary font-bold">£56 - £65</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                From Stone specifically, the prices are similar, as the town sits just 7 minutes from Stoke-on-Trent by train and is perfectly positioned along the route to Manchester Airport via the M6 motorway. The journey from Stone to Manchester Airport typically takes 50-60 minutes in normal traffic conditions.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What Affects the Cost of Your Airport Taxi?
              </h2>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                1. Time of Day and Day of Week
              </h3>

              <p className="text-gray-700 mb-4">
                Many taxi companies charge premium rates for early morning pickups (before 6am) or late-night journeys (after 11pm). Weekend rates may also be higher. With 365 Transfers, we offer transparent pricing regardless of pickup time, as we operate 24/7/365 from our base in Stone.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                2. Vehicle Type and Passenger Numbers
              </h3>

              <p className="text-gray-700 mb-4">
                The size and type of vehicle you need significantly impacts the price. A standard saloon car for 1-4 passengers will be considerably cheaper than an 8-seater minibus for a family group. If you're travelling with substantial luggage or need <Link href="/wheelchair-accessible-taxi" className="text-primary hover:underline">wheelchair-accessible transport</Link>, specialist vehicles command a premium.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                3. Fixed Price vs Metered Fare
              </h3>

              <p className="text-gray-700 mb-4">
                Pre-booked airport transfers typically offer fixed prices, protecting you from surge pricing or traffic delays. Metered taxis can vary wildly depending on route and traffic conditions. At 365 Transfers, we provide fixed-price quotes for all <Link href="/manchester-airport-taxi" className="text-primary hover:underline">Manchester Airport transfers</Link>, so you know exactly what you'll pay before you book.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                4. Additional Services Included
              </h3>

              <p className="text-gray-700 mb-4">
                Higher-priced services often include valuable extras that budget operators don't provide:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Flight monitoring - your driver tracks your arrival and adjusts pickup time accordingly</li>
                <li>Meet and greet service - your driver waits in arrivals with a name board</li>
                <li>Assistance with luggage</li>
                <li>Child seats and booster seats</li>
                <li>Complimentary wait time for delayed flights</li>
                <li>Professional, DBS-checked drivers with local knowledge</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Comparing Your Options: Taxi vs Alternatives
              </h2>

              <p className="text-gray-700 mb-4">
                To truly understand whether a taxi from Stoke-on-Trent to Manchester Airport represents good value, let's compare it with the main alternatives:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="border border-gray-300 p-3 text-left">Transport Method</th>
                      <th className="border border-gray-300 p-3 text-left">Cost</th>
                      <th className="border border-gray-300 p-3 text-left">Journey Time</th>
                      <th className="border border-gray-300 p-3 text-left">Pros</th>
                      <th className="border border-gray-300 p-3 text-left">Cons</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Pre-booked Taxi (365 Transfers)</td>
                      <td className="border border-gray-300 p-3">£90-£98</td>
                      <td className="border border-gray-300 p-3">50-60 mins</td>
                      <td className="border border-gray-300 p-3">Door-to-door, luggage help, flight monitoring, no parking costs, reliable</td>
                      <td className="border border-gray-300 p-3">Higher upfront cost than some options</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Uber</td>
                      <td className="border border-gray-300 p-3">£56-£65</td>
                      <td className="border border-gray-300 p-3">50-60 mins</td>
                      <td className="border border-gray-300 p-3">Cheapest option, app convenience</td>
                      <td className="border border-gray-300 p-3">Surge pricing, no guaranteed vehicle type, no flight monitoring, driver may not know area</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Train + Airport Transfer</td>
                      <td className="border border-gray-300 p-3">£40-£60</td>
                      <td className="border border-gray-300 p-3">90-120 mins</td>
                      <td className="border border-gray-300 p-3">Lower cost for solo travellers</td>
                      <td className="border border-gray-300 p-3">Multiple changes, luggage hassle, inflexible times, delays common, stressful with children</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Drive & Park (Short Stay 1 week)</td>
                      <td className="border border-gray-300 p-3">£80-£120</td>
                      <td className="border border-gray-300 p-3">45-50 mins + parking</td>
                      <td className="border border-gray-300 p-3">Flexibility on return</td>
                      <td className="border border-gray-300 p-3">Parking costs add up, fuel costs, shuttle bus wait times, car security concerns, wear on vehicle</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Drive & Park (Long Stay 2 weeks)</td>
                      <td className="border border-gray-300 p-3">£110-£180</td>
                      <td className="border border-gray-300 p-3">45-50 mins + parking</td>
                      <td className="border border-gray-300 p-3">Some flexibility</td>
                      <td className="border border-gray-300 p-3">Expensive for longer trips, off-site parking means shuttle buses, car exposed to weather for weeks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                The Hidden Costs of Alternatives
              </h3>

              <p className="text-gray-700 mb-4">
                When comparing taxi prices from Stoke-on-Trent to Manchester Airport with other options, it's crucial to consider the hidden costs:
              </p>

              <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6">
                <h4 className="font-bold text-primary mb-3">Airport Parking Hidden Costs:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Fuel to and from the airport (£15-£25 round trip)</li>
                  <li>Vehicle wear and tear</li>
                  <li>Shuttle bus waiting time (can be 15-30 minutes)</li>
                  <li>Risk of parking charges increasing if flight delayed</li>
                  <li>Stress of navigating airport access roads and finding parking</li>
                  <li>Potential for parking fines if you misread terms</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6">
                <h4 className="font-bold text-primary mb-3">Train Journey Hidden Costs:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Taxi to Stone station or parking at the station (£5-£15)</li>
                  <li>Potential delays causing missed connections</li>
                  <li>Additional costs if you need to take a later train</li>
                  <li>Physical strain of managing luggage across platforms and through stations</li>
                  <li>No refund if your outbound flight is delayed and you miss your return train</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Choose a Pre-Booked Taxi from Stone or Stoke-on-Trent?
              </h2>

              <p className="text-gray-700 mb-4">
                While a taxi from Stoke-on-Trent to Manchester Airport might not always be the absolute cheapest option on paper, it often represents the best value when you factor in convenience, reliability, and peace of mind.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                Stress-Free Door-to-Door Service
              </h3>

              <p className="text-gray-700 mb-4">
                Your driver collects you from your home in Stone, Stoke-on-Trent, Stafford, or anywhere in the Potteries, and takes you directly to your terminal entrance. No dragging suitcases through car parks, no rushing for connecting trains, no waiting for shuttle buses. This is particularly valuable for families with young children, elderly passengers, or anyone with mobility concerns who might benefit from our <Link href="/wheelchair-accessible-taxi" className="text-primary hover:underline">wheelchair-accessible vehicles</Link>.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                Flight Monitoring Included
              </h3>

              <p className="text-gray-700 mb-4">
                When you book a <Link href="/manchester-airport-taxi" className="text-primary hover:underline">Manchester Airport transfer</Link> with 365 Transfers, we monitor your flight in real-time. If your return flight is delayed, your driver adjusts the pickup time automatically - no awkward phone calls needed, and no extra charges for the wait. This service alone can save you £20-£40 in parking fees if your flight is delayed by several hours.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                Professional, Local Drivers
              </h3>

              <p className="text-gray-700 mb-4">
                Our drivers are based in Stone and know the local area intimately. They understand the best routes from different parts of Staffordshire to Manchester Airport, can navigate around traffic issues on the M6, and arrive promptly. All our drivers are DBS-checked, BTEC qualified, and C.S.E certified, giving you complete peace of mind.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                Fixed Pricing with No Surprises
              </h3>

              <p className="text-gray-700 mb-4">
                Unlike metered taxis or ride-sharing apps with surge pricing, when you pre-book with 365 Transfers, the price you're quoted is the price you pay. Even if there's heavy traffic on the M6 or your journey takes longer than expected, the fare remains the same.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                When Is a Taxi from Stoke-on-Trent to Manchester Airport Worth It?
              </h2>

              <p className="text-gray-700 mb-4">
                A pre-booked airport taxi offers exceptional value in these situations:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Group Travel:</strong> For 3-4 passengers, a taxi costs £22-£25 per person - comparable to train fares but far more convenient</li>
                <li><strong>Early Morning or Late Night Flights:</strong> First trains from Stone don't run early enough for 6am flights, and late arrivals mean expensive night trains or no service at all</li>
                <li><strong>Travelling with Children:</strong> The convenience of a door-to-door service is invaluable with kids in tow</li>
                <li><strong>Heavy or Bulky Luggage:</strong> No struggling on and off trains or through car parks</li>
                <li><strong>Short Trips (Under a Week):</strong> When parking costs would rival taxi costs anyway</li>
                <li><strong>Business Travel:</strong> Time is money - a taxi saves 30-60 minutes versus public transport</li>
                <li><strong>Elderly or Less Mobile Passengers:</strong> Essential for those who find public transport challenging</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Other Airport Transfer Options from Stone & Stoke-on-Trent
              </h2>

              <p className="text-gray-700 mb-4">
                While Manchester Airport is the most popular choice from our area, 365 Transfers also provides competitively priced transfers to other major airports:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><Link href="/birmingham-airport-taxi" className="text-primary hover:underline">Birmingham Airport</Link> (36 miles, 47-55 mins) - £89-£95</li>
                <li><Link href="/east-midlands-airport-taxi" className="text-primary hover:underline">East Midlands Airport</Link> (46 miles, 49-55 mins) - £85-£103</li>
                <li><Link href="/liverpool-airport-taxi" className="text-primary hover:underline">Liverpool Airport</Link> (57 miles, ~64 mins) - £95-£135</li>
                <li><Link href="/london-airport-transfers" className="text-primary hover:underline">London Heathrow</Link> (150 miles, ~2hr 40 mins) - £235-£280</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Stone's position between three major airports (Manchester, Birmingham, and East Midlands) gives residents exceptional choice. We can help you compare costs and journey times to find the best option for your destination. For a full breakdown of all airport routes, visit our <Link href="/airport-transfer-prices" className="text-primary hover:underline">airport transfer prices page</Link>.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                How to Get the Best Price on Your Airport Taxi
              </h2>

              <p className="text-gray-700 mb-4">
                Here are our top tips for securing the best value on your taxi from Stoke-on-Trent to Manchester Airport:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                  <li><strong>Book in Advance:</strong> Last-minute bookings often attract premium rates. Book 2-3 weeks ahead when possible.</li>
                  <li><strong>Compare Fixed Price Quotes:</strong> Get quotes from multiple operators, but ensure you're comparing like-for-like services (flight monitoring, meet & greet, etc.).</li>
                  <li><strong>Share the Journey:</strong> Travelling with friends or family? Split the cost to make it much more affordable per person.</li>
                  <li><strong>Consider Return Bookings:</strong> Some operators offer discounts for booking both legs of your journey together.</li>
                  <li><strong>Check What's Included:</strong> A £70 quote might look attractive, but if it doesn't include flight monitoring or luggage assistance, is it really better value than £90 with everything included?</li>
                  <li><strong>Avoid Peak Times When Possible:</strong> If you have flexibility, mid-week flights often have better availability and less traffic congestion.</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What to Expect When You Book with 365 Transfers
              </h2>

              <p className="text-gray-700 mb-4">
                When you choose 365 Transfers for your taxi from Stone or Stoke-on-Trent to Manchester Airport, here's the experience you can expect:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Instant quote available by phone (01785 335563) or through our online booking system</li>
                <li>Fixed price confirmed at booking - no hidden charges</li>
                <li>Choice of vehicle to suit your party size (4-16 seaters available)</li>
                <li>Professional driver arrives 5-10 minutes before scheduled pickup</li>
                <li>Clean, well-maintained vehicle with ample luggage space</li>
                <li>Assistance with luggage loading and unloading</li>
                <li>Safe, comfortable journey with experienced local driver</li>
                <li>Drop-off directly at your terminal entrance</li>
                <li>Flight monitoring for return journeys - your driver tracks your landing time</li>
                <li>Meet and greet service for arrivals - driver waiting with name board</li>
                <li>24/7/365 availability - we never close</li>
              </ul>

              <p className="text-gray-700 mb-4">
                We've been serving the Stone and Stoke-on-Trent area for over 20 years, building our reputation on reliability, professionalism, and excellent value for money.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    How long does a taxi take from Stoke-on-Trent to Manchester Airport?
                  </h3>
                  <p className="text-gray-700">
                    The journey typically takes 50-60 minutes in normal traffic conditions. From Stone, the journey time is similar as it's just 7 minutes from Stoke-on-Trent and directly on the route via the M6 motorway. We recommend allowing 90 minutes before your check-in time to account for any traffic delays, especially during peak hours.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Can I book a taxi from Manchester Airport back to Stoke-on-Trent?
                  </h3>
                  <p className="text-gray-700">
                    Absolutely. We provide return transfers from Manchester Airport to Stone, Stoke-on-Trent, and throughout Staffordshire. We monitor your flight in real-time and adjust pickup if there are delays, with no additional charges. Your driver will meet you in arrivals with a name board.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Is Uber cheaper than a taxi from Stoke to Manchester Airport?
                  </h3>
                  <p className="text-gray-700">
                    Uber typically costs £56-£65 for this journey, which is cheaper than a pre-booked taxi at £90-£98. However, Uber doesn't offer flight monitoring, guaranteed vehicle type, meet and greet service, or the reliability of a local professional driver who knows the area. For groups of 3-4 people, the per-person cost difference is minimal, and the added service is well worth it.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Do you have vehicles for larger groups travelling to Manchester Airport?
                  </h3>
                  <p className="text-gray-700">
                    Yes, we have minibuses that can accommodate 6-16 passengers, making them perfect for family groups or corporate travel. Minibus pricing for Manchester Airport typically ranges from £110-£140, which works out very economically when split between passengers.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    What happens if my flight is delayed?
                  </h3>
                  <p className="text-gray-700">
                    We monitor all return flights in real-time. If your flight is delayed, we automatically adjust your pickup time - there's no need to call us, and there are no extra charges for the wait. This is included in your fixed price quote.
                  </p>
                </div>

                <div className="pb-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Can I book a taxi for an early morning flight?
                  </h3>
                  <p className="text-gray-700">
                    Yes, we operate 24/7/365, so we can accommodate any departure time, including early morning flights. There are no unsociable hours surcharges with 365 Transfers - the price remains the same whether you need a 3am pickup or a 3pm pickup.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Beyond Airport Transfers: Other Services from 365 Transfers
              </h2>

              <p className="text-gray-700 mb-4">
                While airport transfers are one of our specialities, 365 Transfers offers a comprehensive range of transport services across Stone, Stoke-on-Trent, and Staffordshire:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><Link href="/local-national" className="text-primary hover:underline">Local taxi services</Link> throughout Stone and the Potteries</li>
                <li><Link href="/days-out" className="text-primary hover:underline">Days out transport</Link> - including trips to Alton Towers, Trentham Gardens, and local attractions</li>
                <li><Link href="/school-contracts" className="text-primary hover:underline">School transport contracts</Link> with DBS-checked drivers</li>
                <li><Link href="/account-work" className="text-primary hover:underline">Corporate account services</Link> for business travel</li>
                <li><Link href="/every-occasion" className="text-primary hover:underline">Special occasion transport</Link> for weddings, proms, and events</li>
                <li><Link href="/complex-journey" className="text-primary hover:underline">Complex multi-stop journeys</Link> planned to your exact requirements</li>
              </ul>

              <p className="text-gray-700 mb-4">
                For a popular local journey, check out our dedicated <Link href="/alton-towers-taxi" className="text-primary hover:underline">Alton Towers taxi service</Link>, perfect for family days out.