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
  description: "Complete 2026 price guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs, booking options, and hidden expenses. Fixed rates from £70-£98.",
  keywords: "taxi Stoke-on-Trent to Manchester Airport, Manchester Airport taxi price, Stoke to Manchester Airport cost, airport transfer Staffordshire, taxi prices 2026",
  openGraph: {
    title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    description: "Complete 2026 price guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs and save money on your airport transfer.",
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

export default function StokeManchester2026PriceGuide() {
  const articleSchema = createArticleSchema(
    "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    "Complete 2026 price guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs, booking options, and hidden expenses to make the best decision for your journey.",
    "2026-03-09"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Blog", url: "https://taxisstone.co.uk/blog" },
    {
      name: "Taxi Price Guide Manchester Airport 2026",
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
                {new Date("2026-03-09").toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src="/images/blog/01-taxi-drivers-talking-cars.webp"
                alt="Professional taxi drivers with their vehicles ready for Manchester Airport transfers"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* INTRO CALLOUT BOX */}
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  If you're travelling from Stone, Stoke-on-Trent, or anywhere across Staffordshire to Manchester Airport in 2026, understanding taxi costs is essential for planning your journey. Prices vary significantly depending on your booking method, vehicle type, and time of travel. This comprehensive guide breaks down exactly what you'll pay for a taxi from Stoke-on-Trent to Manchester Airport, compares all your transport options, and reveals the hidden costs that many travellers overlook.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Quick Answer: What You'll Pay in 2026
              </h2>
              <p className="text-gray-700 mb-4">
                A taxi from Stoke-on-Trent to Manchester Airport typically costs between <strong>£70 and £98</strong> for a standard saloon car in 2026. The journey covers approximately 39-46 miles and takes 50-60 minutes depending on traffic and your exact pickup location within the Potteries.
              </p>
              <p className="text-gray-700 mb-6">
                From Stone specifically, which sits just off the A34 and close to the M6 motorway, the journey is around 39 miles and typically costs between £90 and £96 with professional private hire companies. The slightly higher cost from Stone reflects the premium service, vehicle quality, and reliability that established operators provide.
              </p>

              <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8">
                <h3 className="text-xl font-bold text-primary mb-3">Price Breakdown by Provider Type</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Budget operators:</strong> £70-£80</li>
                  <li><strong>Mid-range private hire:</strong> £90-£98</li>
                  <li><strong>Uber (average estimate):</strong> £56</li>
                  <li><strong>Minibus (8 passengers):</strong> £110-£140</li>
                  <li><strong>Executive/chauffeur:</strong> £120-£150</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Taxi Prices Vary So Much
              </h2>
              <p className="text-gray-700 mb-4">
                Understanding why you might see prices ranging from £56 to £150 for essentially the same journey helps you make an informed decision. Here's what affects the cost of your taxi from Stoke-on-Trent to Manchester Airport:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                1. Booking Method
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Pre-booked private hire</strong> companies offer fixed prices that won't change regardless of traffic or route taken. You'll typically pay £90-£98 from Stoke-on-Trent or Stone, but this includes flight monitoring, meet and greet service, and guaranteed pickup.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Metered hackney carriages</strong> charge based on distance and time. Starting at around £3.50, the meter runs throughout your journey. While this might seem cheaper initially, traffic delays on the M6 or around Manchester can significantly increase the final fare, potentially exceeding pre-booked prices.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Ride-hailing apps</strong> like Uber use dynamic pricing. During quiet periods, you might pay as little as £56 from Stoke-on-Trent to Manchester Airport. However, surge pricing during peak travel times (early mornings, Friday evenings, school holidays) can double or triple this cost. You won't know the exact price until you book.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                2. Vehicle Type and Capacity
              </h3>
              <p className="text-gray-700 mb-4">
                Standard saloon cars (4 passengers with luggage) represent the baseline price. If you're travelling from Stone or Stoke-on-Trent with a larger group or extra luggage, expect these increases:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li><strong>Estate cars:</strong> Add £5-£10 for extra boot space</li>
                <li><strong>Executive vehicles:</strong> Add £20-£50 for Mercedes E-Class or similar</li>
                <li><strong>6-seater minibus:</strong> Add £20-£40</li>
                <li><strong>8-seater minibus:</strong> Add £40-£60</li>
                <li><strong>Wheelchair-accessible vehicles:</strong> Often same price as standard, but book ahead</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                3. Time of Day and Week
              </h3>
              <p className="text-gray-700 mb-4">
                Many Stoke-on-Trent taxi companies charge supplements for unsociable hours:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Late night (11pm-6am): +£5-£15</li>
                <li>Sunday and bank holidays: +£10-£20</li>
                <li>Christmas and New Year: +£20-£50</li>
              </ul>
              <p className="text-gray-700 mb-6">
                At 365 Transfers, we operate 24/7/365 from Stone with consistent pricing regardless of when you travel. Our drivers are always available, whether you're catching the 5am flight to Malaga or returning from a midnight arrival.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                4. Distance from Airport
              </h3>
              <p className="text-gray-700 mb-6">
                Your exact location within the Stoke-on-Trent and Staffordshire area affects the total cost. Stone sits ideally positioned just off the M6, making it one of the most efficient starting points for Manchester Airport transfers. Hanley town centre, Newcastle-under-Lyme, and Stafford all have slightly different distances that impact pricing by £5-£15.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Comparing All Your Manchester Airport Transport Options
              </h2>
              <p className="text-gray-700 mb-6">
                A taxi isn't your only option for getting from Stoke-on-Trent to Manchester Airport. Here's how all the alternatives compare in 2026, including the hidden costs that many people forget:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Transport Method</th>
                      <th className="px-4 py-3 text-left">Headline Cost</th>
                      <th className="px-4 py-3 text-left">True Total Cost</th>
                      <th className="px-4 py-3 text-left">Journey Time</th>
                      <th className="px-4 py-3 text-left">Convenience</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b">
                      <td className="px-4 py-3 font-semibold">Pre-booked Taxi (365 Transfers)</td>
                      <td className="px-4 py-3">£90-£96</td>
                      <td className="px-4 py-3">£90-£96</td>
                      <td className="px-4 py-3">50-60 mins</td>
                      <td className="px-4 py-3">★★★★★</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Train + Airport Transfer</td>
                      <td className="px-4 py-3">£15-£25</td>
                      <td className="px-4 py-3">£35-£55*</td>
                      <td className="px-4 py-3">90-120 mins</td>
                      <td className="px-4 py-3">★★☆☆☆</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-semibold">Drive & Park (8 days)</td>
                      <td className="px-4 py-3">£45-£80</td>
                      <td className="px-4 py-3">£70-£110**</td>
                      <td className="px-4 py-3">50-60 mins</td>
                      <td className="px-4 py-3">★★★☆☆</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Uber (off-peak)</td>
                      <td className="px-4 py-3">£56</td>
                      <td className="px-4 py-3">£56-£120***</td>
                      <td className="px-4 py-3">50-60 mins</td>
                      <td className="px-4 py-3">★★★☆☆</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-semibold">Budget Taxi Operator</td>
                      <td className="px-4 py-3">£70-£80</td>
                      <td className="px-4 py-3">£75-£95****</td>
                      <td className="px-4 py-3">50-60 mins</td>
                      <td className="px-4 py-3">★★★☆☆</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-sm text-gray-600 space-y-2 mb-8">
                <p>* Train cost plus taxi/tram to airport, potential delays, luggage hassle</p>
                <p>** Parking cost plus fuel (£15-£30), wear and tear, stress of airport traffic</p>
                <p>*** Surge pricing can double or triple the base fare during peak times</p>
                <p>**** May not include flight monitoring, meet & greet, or guaranteed pickup</p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                The Hidden Costs Everyone Forgets
              </h2>
              <p className="text-gray-700 mb-4">
                When comparing taxi prices to alternatives for your Manchester Airport journey from Stoke-on-Trent or Stone, these often-overlooked expenses can tip the balance:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Airport Parking Hidden Costs
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li><strong>Fuel costs:</strong> £15-£30 return journey from Stoke-on-Trent</li>
                <li><strong>Vehicle wear and tear:</strong> 80+ miles adds to maintenance costs</li>
                <li><strong>Congestion and stress:</strong> Manchester Airport drop-off zones are notorious for complexity</li>
                <li><strong>Parking amendments:</strong> Flight delayed? Extending parking costs £15-£25 per day</li>
                <li><strong>Your time:</strong> Driving, parking, shuttle buses add 30-45 minutes each way</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Train Journey Hidden Costs
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li><strong>Stoke station to Manchester airport:</strong> Not direct—requires change at Manchester Piccadilly or Stockport plus tram/bus</li>
                <li><strong>Luggage limitations:</strong> Stairs at Stone and Stoke stations, crowded trains</li>
                <li><strong>Tram or taxi from Manchester Piccadilly:</strong> Add £5-£20</li>
                <li><strong>Reliability:</strong> Northern Rail delays are common, risking missed flights</li>
                <li><strong>Early morning services:</strong> Limited or non-existent for early flights</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Uber & App-Based Services Hidden Costs
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li><strong>Surge pricing unpredictability:</strong> £56 can become £120+ during peak times</li>
                <li><strong>No flight monitoring:</strong> If your return flight is delayed, your driver won't wait</li>
                <li><strong>No guaranteed vehicle type:</strong> May not have space for luggage or family</li>
                <li><strong>Cancellation risk:</strong> Drivers can cancel minutes before pickup during busy periods</li>
                <li><strong>No customer service:</strong> Issues are handled through app algorithms, not humans</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What You Get With a Professional Stone-Based Taxi Service
              </h2>
              <p className="text-gray-700 mb-4">
                Understanding what's included in your £90-£96 fare from Stone or Stoke-on-Trent to Manchester Airport with a professional operator like <Link href="/" className="text-primary hover:underline font-semibold">365 Transfers</Link> helps justify the cost difference:
              </p>

              <div className="bg-accent bg-opacity-10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Included in Your Fixed Price:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">✓</span>
                    <span><strong>Flight monitoring:</strong> We track your flight and adjust pickup time if you're delayed, at no extra cost</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">✓</span>
                    <span><strong>Meet and greet:</strong> Your driver will be waiting in arrivals with a name board</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">✓</span>
                    <span><strong>All parking charges:</strong> You never pay extra for airport drop-off or collection fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">✓</span>
                    <span><strong>Professional licensed drivers:</strong> All DBS checked, BTEC qualified, and fully insured</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">✓</span>
                    <span><strong>Spacious vehicles:</strong> Guaranteed room for luggage, child seats available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">✓</span>
                    <span><strong>24/7 customer service:</strong> Speak to a human, not a chatbot, any time of day</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">✓</span>
                    <span><strong>No hidden fees:</strong> The price quoted is the price you pay, regardless of traffic or route</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mb-6">
                With over 20 years serving Stone, Stoke-on-Trent, and the wider Staffordshire area, we understand local roads, optimal routes to avoid M6 traffic, and what our customers need for stress-free airport travel.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                How to Get the Best Price for Your Manchester Airport Taxi
              </h2>
              <p className="text-gray-700 mb-4">
                Follow these tips to ensure you're getting great value on your taxi from Stoke-on-Trent or Stone to Manchester Airport:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                1. Book in Advance
              </h3>
              <p className="text-gray-700 mb-6">
                Pre-booking locks in your fixed price and guarantees availability. Last-minute bookings, especially during school holidays or early morning departures, often carry premium rates or limited vehicle choice. Book at least 48 hours ahead for the best rates.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                2. Consider Return Journeys
              </h3>
              <p className="text-gray-700 mb-6">
                Many operators, including 365 Transfers, offer discounted rates when you book both outbound and return journeys together. This can save £10-£20 compared to booking separately and ensures your return pickup is already arranged before you even leave.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                3. Share With Neighbours or Friends
              </h3>
              <p className="text-gray-700 mb-6">
                If you're travelling from Stone or a nearby village, coordinating with neighbours or friends heading to Manchester Airport around the same time means you can split the cost. Our vehicles accommodate up to 8 passengers, making per-person costs as low as £12-£15 for a comfortable, direct journey.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                4. Compare Total Costs, Not Just Headline Prices
              </h3>
              <p className="text-gray-700 mb-6">
                A £70 taxi that doesn't include flight monitoring or guaranteed return pickup could cost you more in stress and potential extra charges than a £95 fully inclusive service. Always ask what's included before booking based on price alone.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Manchester Airport Terminals: What You Need to Know
              </h2>
              <p className="text-gray-700 mb-4">
                Manchester Airport has three terminals. Your taxi from Stone or Stoke-on-Trent will take you directly to your specific terminal, but it's worth knowing which airlines operate from each:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li><strong>Terminal 1:</strong> British Airways, Lufthansa, Aer Lingus, and most long-haul flights</li>
                <li><strong>Terminal 2:</strong> Jet2, TUI, and charter airlines—the busiest terminal</li>
                <li><strong>Terminal 3:</strong> Ryanair, easyJet, and most budget European carriers</li>
              </ul>
              <p className="text-gray-700 mb-6">
                When booking your taxi from Stoke-on-Trent to Manchester Airport, let us know your airline and we'll ensure you're dropped at the correct terminal entrance. This saves the confusion of inter-terminal transfers and gets you checked in faster.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Other Airport Options from Stone & Stoke-on-Trent
              </h2>
              <p className="text-gray-700 mb-4">
                Living in Stone gives you exceptional access to multiple airports. While Manchester is the most popular, you might find better flight times or prices at:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li><strong><Link href="/birmingham-airport-taxi" className="text-primary hover:underline">Birmingham Airport</Link>:</strong> 36-39 miles, £89-£95, similar journey time to Manchester</li>
                <li><strong><Link href="/east-midlands-airport-taxi" className="text-primary hover:underline">East Midlands Airport</Link>:</strong> 46 miles, £90-£103, ideal for package holidays</li>
                <li><strong><Link href="/liverpool-airport-taxi" className="text-primary hover:underline">Liverpool Airport</Link>:</strong> 57 miles, £130-£135, good for European city breaks</li>
              </ul>
              <p className="text-gray-700 mb-6">
                We cover all major UK airports from Stone, Stoke-on-Trent, and throughout Staffordshire with fixed pricing and the same professional service. See our full <Link href="/airport-transfers" className="text-primary hover:underline">airport transfers</Link> service for all routes and prices.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">How long does a taxi take from Stoke-on-Trent to Manchester Airport?</h3>
                  <p className="text-gray-700">The journey typically takes 50-60 minutes via the M6 motorway. From Stone, which is closer to the motorway junction, the journey can be as quick as 50 minutes in light traffic. Early morning and late evening journeys are usually faster, while weekday rush hours (7-9am and 4-6pm) can add 10-15 minutes.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Is it cheaper to get a taxi or drive and park at Manchester Airport?</h3>
                  <p className="text-gray-700">For trips longer than 5-6 days, a taxi becomes more cost-effective. When you factor in parking (£45-£80 for a week), fuel (£15-£30 return), and your time, a pre-booked taxi at £90-£96 return offers better value. For shorter trips under 4 days, parking might save £10-£20, but you lose the convenience and stress-free experience.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Can I book a taxi from Stone to Manchester Airport for 4am?</h3>
                  <p className="text-gray-700">Yes, absolutely. 365 Transfers operates 24 hours a day, 7 days a week, 365 days a year from Stone. Early morning airport runs are one of our most common services. We recommend booking at least 48 hours in advance for early departures to guarantee your preferred vehicle, though we can usually accommodate last-minute requests.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Do you charge extra if my flight is delayed?</h3>
                  <p className="text-gray-700">No. When you book a return airport transfer with 365 Transfers, we monitor your flight status automatically. If your flight is delayed, we adjust your pickup time at no extra charge. This is included in our fixed price—there are no hidden fees for waiting time or flight delays.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">What size vehicle do I need for a family of four with suitcases?</h3>
                  <p className="text-gray-700">A standard saloon car comfortably fits four passengers with typical holiday luggage (two large suitcases and two carry-on bags). If you're taking additional items like pushchairs, golf clubs, or ski equipment, we recommend booking an estate car for extra boot space. Let us know your luggage requirements when booking and we'll ensure you have the right vehicle.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Choose 365 Transfers for Your Manchester Airport Journey
              </h2>
              <p className="text-gray-700 mb-4">
                Based in Stone with over 20 years of experience serving Staffordshire, we understand what matters most for airport transfers: reliability, punctuality, and peace of mind. Our fixed-price taxi service from Stone and Stoke-on-Trent to Manchester Airport removes all the uncertainty and hidden costs that come with other transport options.
              </p>
              <p className="text-gray-700 mb-4">
                Every journey includes flight monitoring, meet and greet service, professional licensed drivers, and spacious vehicles—all at the price quoted. Whether you're heading on holiday from Stone, a business trip from Stafford, or collecting relatives arriving at Manchester Airport, we're here 24/7 to make your journey smooth and stress-free.
              </p>
              <p className="text-gray-700 mb-8">
                We also provide <Link href="/school-contracts" className="text-primary hover:underline">school transport</Link>, <Link href="/account-work" className="text-primary hover:underline">corporate accounts</Link>, <Link href="/wheelchair-accessible-taxi" className="text-primary hover:underline">wheelchair-accessible vehicles</Link>, and transfers for <Link href="/every-occasion" className="text-primary hover:underline">special occasions</Link> throughout Stoke-on-Trent, Stone, and the wider Staffordshire region.
              </p>

              {/* CTA SECTION */}
              <div className="bg-primary text-white rounded-lg p-8 mt-12">
                <h2 className="text-3xl font-bold mb-4">Book Your Manchester Airport Taxi from Stone Today</h2>
                <p className="text-xl mb-6 text-gray-200">
                  Fixed price from Stone to Manchester Airport: £90-£96. No hidden fees, no surge pricing, no stress. Available 24/7/365 with flight monitoring included. Call us now on <strong>01785 335563</strong> or get an instant quote online.
                </p>
                <div className="flex flex-col