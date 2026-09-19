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
    canonical: "/blog/how-much-taxi-stoke-manchester-airport-2026",
  },
  title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide | 365 Transfers",
  description: "Complete 2026 price guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs, hidden fees, and alternatives. Book with Stone's trusted taxi service.",
  keywords: "taxi Stoke to Manchester Airport, Manchester Airport taxi price, Stoke-on-Trent airport transfer, airport taxi cost 2026, Stone to Manchester Airport",
  openGraph: {
    title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    description: "Complete 2026 price guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs and book with confidence.",
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

export default function HowMuchTaxiStokeManchester2026() {
  const articleSchema = createArticleSchema(
    "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    "Complete 2026 price guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs, hidden fees, and alternatives. Book with Stone's trusted taxi service.",
    "2026-09-19"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Blog", url: "https://taxisstone.co.uk/blog" },
    {
      name: "Taxi to Manchester Airport Price Guide",
      url: "https://taxisstone.co.uk/blog/how-much-taxi-stoke-manchester-airport-2026",
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
                {new Date("2026-09-19").toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src="/images/blog/44-airport-departure-board-terminals.webp"
                alt="Manchester Airport terminal departure board"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* INTRO CALLOUT BOX */}
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Planning a flight from Manchester Airport and wondering about taxi costs from Stoke-on-Trent or Stone? In 2026, you can expect to pay between £70 and £98 for a private hire taxi from the Stoke area to Manchester Airport, depending on your exact pickup location, vehicle type, and the company you choose. This comprehensive guide breaks down everything you need to know about taxi prices to Manchester Airport, helping you budget accurately and avoid unexpected costs.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                2026 Taxi Price Breakdown: Stoke-on-Trent to Manchester Airport
              </h2>
              
              <p className="text-gray-700 mb-4">
                The journey from Stoke-on-Trent to Manchester Airport is approximately 40-46 miles and typically takes 50-60 minutes depending on traffic conditions and your exact pickup point. Stone residents benefit from being slightly closer, with journey times often 5-10 minutes shorter via the M6 motorway.
              </p>

              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden my-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Service Type</th>
                        <th className="px-6 py-4 text-left font-semibold">Price Range</th>
                        <th className="px-6 py-4 text-left font-semibold">Vehicle Capacity</th>
                        <th className="px-6 py-4 text-left font-semibold">What's Included</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 font-semibold text-gray-900">Budget Operators</td>
                        <td className="px-6 py-4 text-gray-700">£70-80</td>
                        <td className="px-6 py-4 text-gray-700">4 passengers</td>
                        <td className="px-6 py-4 text-gray-700">Basic service, standard vehicle</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Mid-Range Services</td>
                        <td className="px-6 py-4 text-gray-700">£90-98</td>
                        <td className="px-6 py-4 text-gray-700">4-6 passengers</td>
                        <td className="px-6 py-4 text-gray-700">Flight monitoring, meet & greet, luggage assistance</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 font-semibold text-gray-900">Minibus (8 seater)</td>
                        <td className="px-6 py-4 text-gray-700">£110-140</td>
                        <td className="px-6 py-4 text-gray-700">8 passengers</td>
                        <td className="px-6 py-4 text-gray-700">Group travel, extra luggage space</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Executive/Large Groups</td>
                        <td className="px-6 py-4 text-gray-700">£120-160</td>
                        <td className="px-6 py-4 text-gray-700">Up to 16 passengers</td>
                        <td className="px-6 py-4 text-gray-700">Premium vehicles, all amenities</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-gray-900">Uber/Ride-Hailing</td>
                        <td className="px-6 py-4 text-gray-700">£56 average</td>
                        <td className="px-6 py-4 text-gray-700">4 passengers</td>
                        <td className="px-6 py-4 text-gray-700">Variable pricing, surge charges apply</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                At 365 Transfers, our <Link href="/manchester-airport-taxi">Manchester Airport taxi service</Link> from Stone and surrounding areas falls into the mid-range category, reflecting our commitment to reliable, professional service with 20+ years of experience. Our pricing includes flight monitoring, meet and greet service, and the peace of mind that comes with DBS-checked, fully licensed drivers.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What Affects the Price of Your Airport Taxi?
              </h2>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Your Pickup Location Matters
              </h3>

              <p className="text-gray-700 mb-4">
                The exact price you'll pay depends significantly on where you're travelling from. Stone residents often benefit from slightly lower fares due to the town's convenient location just off the M6 motorway. Here's how pickup locations affect pricing:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Stone town centre:</strong> Typically £85-95 due to direct M6 access via the A34</li>
                <li><strong>Stoke-on-Trent city centre:</strong> Usually £90-98, with slightly longer journey times through urban areas</li>
                <li><strong>Newcastle-under-Lyme:</strong> Similar to Stoke pricing at £88-95</li>
                <li><strong>Stafford:</strong> Often £80-90 due to proximity to M6 Junction 14</li>
                <li><strong>Surrounding villages:</strong> May include a small supplement for rural pickups</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Time of Day and Day of Week
              </h3>

              <p className="text-gray-700 mb-4">
                While many professional taxi services, including 365 Transfers, offer fixed pricing regardless of the time, some operators charge premiums for:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Early morning departures:</strong> Flights before 6am may incur a £5-10 supplement with some operators</li>
                <li><strong>Late night returns:</strong> Arrivals after midnight sometimes attract additional charges</li>
                <li><strong>Bank holidays:</strong> Christmas Day, New Year's Day, and other major holidays may see increased rates</li>
                <li><strong>Peak summer season:</strong> July and August occasionally see slight price increases due to high demand</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Our <Link href="/airport-transfers">fixed-price airport transfer service</Link> eliminates these surprises, providing transparent pricing when you book, regardless of your travel time.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Vehicle Size and Type
              </h3>

              <p className="text-gray-700 mb-4">
                The vehicle you need significantly impacts the price. A family of four with standard luggage will pay considerably less than a group of eight requiring a minibus. Consider:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Saloon cars (4 passengers):</strong> Most economical option for small groups</li>
                <li><strong>Estate cars (4 passengers + extra luggage):</strong> Ideal for families with ski equipment or golf clubs</li>
                <li><strong>MPVs (6 passengers):</strong> Perfect for slightly larger groups or those with extra luggage</li>
                <li><strong>8-seater minibus:</strong> Cost-effective for larger families or friend groups</li>
                <li><strong>16-seater minibus:</strong> Best value per person for large groups travelling together</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Hidden Costs to Watch Out For
              </h2>

              <p className="text-gray-700 mb-4">
                When comparing taxi prices from Stoke-on-Trent to Manchester Airport, be aware of additional charges that some companies add after you've received an initial quote:
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-3">Common Additional Charges</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Meet and greet service:</strong> Some companies charge £10-15 extra for drivers to meet you at arrivals</li>
                  <li><strong>Flight monitoring:</strong> Tracking your flight and adjusting pickup times may cost £5-10 with budget operators</li>
                  <li><strong>Waiting time:</strong> If your flight is delayed beyond a grace period, charges of £20-30 per hour may apply</li>
                  <li><strong>Child car seats:</strong> Required by law for young children, often £5-10 per seat</li>
                  <li><strong>Parking charges:</strong> Manchester Airport's short-stay car park fees (if the driver has to wait)</li>
                  <li><strong>Toll road fees:</strong> Though not applicable on the Stoke-Manchester route, always ask</li>
                  <li><strong>Credit card fees:</strong> Some operators charge 2-3% for card payments</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                At 365 Transfers, we include flight monitoring and reasonable waiting time in our standard price, ensuring transparency from the moment you book. Our drivers track your flight status and adjust pickup times automatically if your arrival is delayed.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Taxi vs Other Transport Options: True Cost Comparison
              </h2>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Airport Parking Costs
              </h3>

              <p className="text-gray-700 mb-4">
                Many Stoke-on-Trent and Stone residents consider driving themselves to Manchester Airport. While this seems convenient, the true costs often exceed taxi fares:
              </p>

              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden my-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Parking Type</th>
                        <th className="px-6 py-4 text-left font-semibold">1 Week</th>
                        <th className="px-6 py-4 text-left font-semibold">2 Weeks</th>
                        <th className="px-6 py-4 text-left font-semibold">+ Fuel Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 font-semibold text-gray-900">On-Airport (Terminal)</td>
                        <td className="px-6 py-4 text-gray-700">£120-180</td>
                        <td className="px-6 py-4 text-gray-700">£240-360</td>
                        <td className="px-6 py-4 text-gray-700">£15-20</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Meet & Greet</td>
                        <td className="px-6 py-4 text-gray-700">£80-120</td>
                        <td className="px-6 py-4 text-gray-700">£160-240</td>
                        <td className="px-6 py-4 text-gray-700">£15-20</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 font-semibold text-gray-900">Off-Airport (Budget)</td>
                        <td className="px-6 py-4 text-gray-700">£60-90</td>
                        <td className="px-6 py-4 text-gray-700">£120-180</td>
                        <td className="px-6 py-4 text-gray-700">£15-20</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Return Taxi (365 Transfers)</td>
                        <td className="px-6 py-4 text-gray-700">£170-196</td>
                        <td className="px-6 py-4 text-gray-700">£170-196</td>
                        <td className="px-6 py-4 text-gray-700">£0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                For trips longer than one week, a return taxi journey from Stone or Stoke-on-Trent becomes increasingly cost-effective. Plus, you avoid the stress of navigating airport traffic, finding a parking space, and the physical burden of walking from distant car parks with luggage.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Train Services: The Hidden Costs
              </h3>

              <p className="text-gray-700 mb-4">
                Travelling by train from Stoke-on-Trent to Manchester Airport involves multiple connections and hidden expenses:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Rail fare:</strong> £25-45 per person depending on time and booking period</li>
                <li><strong>Taxi to Stoke station:</strong> £8-15 from Stone or surrounding areas</li>
                <li><strong>Changes required:</strong> Usually 1-2 connections (Stoke → Crewe/Stockport → Manchester Airport)</li>
                <li><strong>Journey time:</strong> 90-120 minutes minimum, often longer with connections</li>
                <li><strong>Luggage stress:</strong> Carrying bags up stairs, across platforms, and through crowds</li>
                <li><strong>Delay risk:</strong> Missing connections can add hours to your journey</li>
                <li><strong>Family cost:</strong> A family of four pays £100-180 each way, totalling £200-360 return</li>
              </ul>

              <p className="text-gray-700 mb-4">
                For a family of four, train travel costs £200-360 return plus local taxis, making a pre-booked taxi the more convenient and often more economical choice.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Choose a Professional Taxi Service Over Ride-Hailing Apps?
              </h2>

              <p className="text-gray-700 mb-4">
                While Uber averages around £56 from Stoke-on-Trent to Manchester Airport, significantly less than traditional taxi services, there are important considerations:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                The Uber Reality for Airport Journeys
              </h3>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Surge pricing:</strong> During peak times (early morning departures, Friday evenings), prices can double or triple</li>
                <li><strong>No guaranteed availability:</strong> Especially problematic at 4am for early flights from Stone or rural areas</li>
                <li><strong>Vehicle uncertainty:</strong> You don't know the vehicle size until the driver accepts</li>
                <li><strong>No flight monitoring:</strong> If your return flight is delayed, you're responsible for rebooking</li>
                <li><strong>Driver cancellations:</strong> Long airport journeys are sometimes declined by drivers preferring shorter trips</li>
                <li><strong>No luggage guarantee:</strong> Standard Uber vehicles may not accommodate large suitcases</li>
                <li><strong>No recourse for problems:</strong> Limited customer service for complaints</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Professional taxi services like 365 Transfers offer guaranteed pickup times, appropriate vehicles for your group size and luggage, flight monitoring for return journeys, and experienced drivers who know the best routes from Stone, Stoke-on-Trent, and surrounding areas to all Manchester Airport terminals.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Money-Saving Tips for Your Manchester Airport Taxi
              </h2>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Book in Advance
              </h3>

              <p className="text-gray-700 mb-4">
                Pre-booking your taxi from Stone or Stoke-on-Trent to Manchester Airport typically saves 10-20% compared to last-minute bookings. Many companies, including ourselves, offer early booking discounts and guarantee your price even if fuel costs increase before your travel date.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Consider Return Journey Discounts
              </h3>

              <p className="text-gray-700 mb-4">
                Booking your return journey at the same time often qualifies you for package discounts. Some operators offer 5-15% off when you book a round trip, and you ensure your return pickup is guaranteed at a fixed price.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Share with Friends or Neighbours
              </h3>

              <p className="text-gray-700 mb-4">
                If you're travelling with another family or couple from the Stone area, sharing an 8-seater minibus (£110-140) splits the cost four ways, reducing per-person expenses to £27.50-35 each way — cheaper than Uber and far more reliable.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Check for Corporate Accounts
              </h3>

              <p className="text-gray-700 mb-4">
                If you travel regularly for business, our <Link href="/account-work">corporate account services</Link> offer monthly invoicing and volume discounts for frequent airport transfers from Staffordshire to Manchester, Birmingham, and other airports.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What's Included in a Quality Airport Taxi Service?
              </h2>

              <p className="text-gray-700 mb-4">
                When you book with 365 Transfers for your journey from Stone or Stoke-on-Trent to Manchester Airport, you receive:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Flight monitoring:</strong> We track your flight status and adjust pickup times automatically for delays</li>
                <li><strong>Meet and greet:</strong> For return journeys, drivers wait in arrivals with a name board</li>
                <li><strong>Free waiting time:</strong> Reasonable grace periods for flight delays at no extra charge</li>
                <li><strong>Luggage assistance:</strong> Drivers help with bags to and from the vehicle</li>
                <li><strong>All Manchester terminals:</strong> Terminal 1, Terminal 2, and Terminal 3 coverage</li>
                <li><strong>Child car seats:</strong> Available on request to ensure legal compliance</li>
                <li><strong>24/7 availability:</strong> We operate every day of the year, including Christmas</li>
                <li><strong>Fixed pricing:</strong> No surge charges, no meter, no surprises</li>
                <li><strong>Professional drivers:</strong> All DBS-checked, BTEC qualified, and fully licensed</li>
                <li><strong>Modern, clean vehicles:</strong> Regularly maintained fleet suitable for all group sizes</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Booking Your Taxi: What You Need to Know
              </h2>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Information to Provide When Booking
              </h3>

              <p className="text-gray-700 mb-4">
                To receive an accurate quote and ensure smooth service, have ready:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Your pickup address (full postcode for Stone, Stoke-on-Trent, or surrounding areas)</li>
                <li>Flight number and departure time</li>
                <li>Which Manchester Airport terminal (if known)</li>
                <li>Number of passengers (adults and children)</li>
                <li>Amount of luggage (number and size of suitcases)</li>
                <li>Any special requirements (wheelchair access, child seats, extra luggage space)</li>
                <li>Return journey details if booking a round trip</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                How Far in Advance Should You Book?
              </h3>

              <p className="text-gray-700 mb-4">
                For guaranteed availability and best prices, book at least 48 hours in advance. During peak periods (school holidays, Christmas, summer), booking 1-2 weeks ahead is advisable. Last-minute bookings are often possible, but availability cannot be guaranteed, especially for early morning departures from Stone or larger vehicles.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Other Airport Options from Stone and Stoke-on-Trent
              </h2>

              <p className="text-gray-700 mb-4">
                While Manchester is the most popular choice for Staffordshire residents, we also provide competitively priced transfers to:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><Link href="/birmingham-airport-taxi">Birmingham Airport</Link> — 36-39 miles, typically £89-95, ideal for European destinations</li>
                <li><Link href="/east-midlands-airport-taxi">East Midlands Airport</Link> — 46 miles, typically £90-103, excellent for budget airlines</li>
                <li><Link href="/liverpool-airport-taxi">Liverpool John Lennon Airport</Link> — 57 miles, typically £130-135</li>
                <li><Link href="/london-airport-transfers">London airports</Link> (Heathrow, Gatwick, Stansted) — for long-haul international flights</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Each airport serves different airlines and destinations, so comparing flight options across all nearby airports can sometimes save you money overall, even if the taxi fare varies. Our team can advise on the best airport choice for your destination when you call.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">How long does the journey take from Stone to Manchester Airport?</h4>
                  <p className="text-gray-700">Typically 45-55 minutes via the M6 motorway, though we always recommend allowing extra time during peak hours or if there are known roadworks. We monitor traffic conditions and choose the fastest route on the day.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Do you charge extra for early morning pickups?</h4>
                  <p className="text-gray-700">No, our prices are fixed regardless of the time of day or day of the week. Whether you're catching a 5am flight or returning at midnight, the price remains the same.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">What happens if my return flight is delayed?</h4>
                  <p className="text-gray-700">We monitor all flight arrivals automatically. If your flight is delayed, we adjust your pickup time accordingly at no extra charge (within reasonable limits). There's no need to call us — we track it for you.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Can you accommodate a family of five with luggage?</h4>
                  <p className="text-gray-700">Absolutely. We have a range of vehicle sizes from 4-seater saloons to 16-seater minibuses. For a family of five, we'd typically recommend a 6-seater or 8-seater vehicle to ensure comfortable seating and adequate luggage space.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Is it cheaper to book a return journey?</h4>
                  <p className="text-gray-700">Yes, booking both journeys together often qualifies for a small discount, and it guarantees your return pickup at a fixed price. You also have peace of mind knowing your transport home is arranged before you leave.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Do you serve areas outside Stone and Stoke-on-Trent?</h4>
                  <p className="text-gray-700">Yes, we cover all of