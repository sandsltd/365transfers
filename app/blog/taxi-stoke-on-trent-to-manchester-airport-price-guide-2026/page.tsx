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
  description: "Complete 2026 price guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs, booking options, and hidden expenses. Fixed prices from £90.",
  keywords: "taxi Stoke-on-Trent to Manchester Airport, Manchester Airport taxi price, airport transfer cost, Stoke to Manchester taxi, airport taxi prices 2026",
  openGraph: {
    title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    description: "Complete 2026 price guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs, booking options, and hidden expenses.",
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
    "Complete 2026 price guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs, booking options, and hidden expenses. Fixed prices from £90.",
    "2026-11-14"
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
                {new Date("2026-11-14").toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src="/images/blog/46-historic-brick-stone-building.webp"
                alt="Professional taxi service from Stone to Manchester Airport"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* INTRO CALLOUT BOX */}
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  If you're travelling from Stone, Stoke-on-Trent, or the surrounding Staffordshire area to Manchester Airport, you're probably wondering about taxi costs. With the airport only 39-46 miles away and journey times of around 50-60 minutes via the M6, a pre-booked taxi is often the most convenient option for families, business travellers, and anyone with luggage. This comprehensive 2026 price guide breaks down exactly what you'll pay, compares different booking options, and reveals the hidden costs of alternatives like parking and public transport.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Average Taxi Prices from Stoke-on-Trent to Manchester Airport in 2026
              </h2>
              
              <p className="text-gray-700 mb-4">
                The cost of a taxi from Stoke-on-Trent to Manchester Airport varies depending on the type of service you book, the vehicle size, and the time of day. Here's what you can expect to pay in 2026:
              </p>

              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden my-8">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Service Type</th>
                      <th className="px-6 py-4 text-left font-semibold">Price Range</th>
                      <th className="px-6 py-4 text-left font-semibold">Vehicle Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Budget Operators</td>
                      <td className="px-6 py-4 font-semibold text-primary">£70-80</td>
                      <td className="px-6 py-4">Standard saloon</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Mid-Range Pre-Book</td>
                      <td className="px-6 py-4 font-semibold text-primary">£90-98</td>
                      <td className="px-6 py-4">Saloon or estate</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Executive Service</td>
                      <td className="px-6 py-4 font-semibold text-primary">£95-110</td>
                      <td className="px-6 py-4">Executive vehicle</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Minibus (6-8 Seats)</td>
                      <td className="px-6 py-4 font-semibold text-primary">£110-140</td>
                      <td className="px-6 py-4">Standard minibus</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Uber (App-Based)</td>
                      <td className="px-6 py-4 font-semibold text-primary">~£56</td>
                      <td className="px-6 py-4">Variable availability</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                For passengers travelling from Stone specifically, prices are typically at the same level as from Stoke-on-Trent town centre, as Stone is conveniently located just 7 minutes by train from Stoke and 3 miles from the M6 motorway. Our <Link href="/manchester-airport-taxi">Manchester Airport taxi service</Link> operates fixed pricing regardless of traffic conditions, giving you complete peace of mind.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What's Included in Professional Airport Taxi Prices?
              </h2>

              <p className="text-gray-700 mb-4">
                When you book a reputable <Link href="/airport-transfers">airport transfer service</Link> from Stone or Stoke-on-Trent, the price typically includes several important services that budget options and app-based rides often don't provide:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Flight monitoring:</strong> Your driver tracks your flight in real-time and adjusts pickup time if you're delayed, at no extra cost</li>
                <li><strong>Meet and greet service:</strong> For arrivals, your driver waits in the terminal with a name board</li>
                <li><strong>Generous waiting time:</strong> Usually 45-60 minutes after flight landing for international arrivals, 30 minutes for domestic</li>
                <li><strong>All-inclusive pricing:</strong> No hidden charges for motorway tolls, parking fees, or congestion charges</li>
                <li><strong>Professional drivers:</strong> All DBS-checked, licensed, and fully insured with 20+ years of experience</li>
                <li><strong>Vehicle choice:</strong> Guaranteed vehicle size suitable for your luggage and passenger count</li>
              </ul>

              <p className="text-gray-700 mb-4">
                These extras add genuine value that justifies the price difference over the cheapest options. When you're catching an early morning flight or returning home after a long journey, reliability matters more than saving a few pounds.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Price Comparison: Taxi vs Other Transport Options
              </h2>

              <p className="text-gray-700 mb-4">
                Before booking, it's worth comparing the true cost of different travel options from Stoke-on-Trent and Stone to Manchester Airport. Here's what the alternatives actually cost when you factor in all expenses:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Airport Parking Costs
              </h3>

              <p className="text-gray-700 mb-4">
                Manchester Airport parking for a week costs approximately:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>On-airport Long Stay:</strong> £80-120 per week</li>
                <li><strong>Meet and Greet:</strong> £90-150 per week</li>
                <li><strong>Off-airport parking with transfers:</strong> £50-80 per week</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Add fuel costs (approximately £8-12 return journey from Stone), plus the stress of navigating airport traffic and finding a space, and parking quickly becomes less attractive. For a family of four, a £90 taxi fare split four ways costs just £22.50 per person each way—often cheaper than parking once you factor in fuel and convenience.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Train and Public Transport
              </h3>

              <p className="text-gray-700 mb-4">
                From Stone railway station, the journey to Manchester Airport requires multiple connections:
              </p>

              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li>Stone to Stoke-on-Trent: 7 minutes, approximately £3.50</li>
                <li>Stoke-on-Trent to Manchester Piccadilly: 55 minutes, approximately £12-25 depending on time</li>
                <li>Manchester Piccadilly to Airport (train or tram): 20 minutes, approximately £5-8</li>
              </ol>

              <p className="text-gray-700 mb-4">
                <strong>Total cost per person:</strong> £20-36 each way<br />
                <strong>Total journey time:</strong> 90-120 minutes (including connections)<br />
                <strong>Hidden costs:</strong> Taxi to/from stations at both ends (£10-15), difficulty with luggage, risk of delays affecting connections
              </p>

              <p className="text-gray-700 mb-4">
                For two or more passengers, a direct taxi becomes more cost-effective than the train, saves at least an hour of journey time, and eliminates the stress of managing luggage through multiple changes.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Factors That Affect Taxi Prices to Manchester Airport
              </h2>

              <p className="text-gray-700 mb-4">
                Several factors influence the final price you'll pay for a taxi from Stone or Stoke-on-Trent to Manchester Airport:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Time of Day and Day of Week
              </h3>

              <p className="text-gray-700 mb-4">
                Most professional taxi companies operate fixed pricing 24/7, but some apply supplements:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Early morning pickups (before 6am):</strong> Some operators charge £5-10 extra</li>
                <li><strong>Late night returns (after 11pm):</strong> Possible £5-10 supplement</li>
                <li><strong>Bank holidays and Christmas period:</strong> Premium of 10-25% with some companies</li>
                <li><strong>Peak summer travel (July-August):</strong> Prices may be higher due to demand</li>
              </ul>

              <p className="text-gray-700 mb-4">
                At 365 Transfers, we operate a transparent fixed-price model 365 days a year, with no hidden supplements for unsociable hours. Our <Link href="/airport-transfer-prices">airport transfer prices</Link> remain consistent whether you're travelling at 4am on a Tuesday or 2pm on a Saturday.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Vehicle Size and Type
              </h3>

              <p className="text-gray-700 mb-4">
                The vehicle you need significantly affects the price:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Standard saloon (4 passengers, 2 large cases):</strong> Base price</li>
                <li><strong>Estate car (4 passengers, 4 large cases):</strong> £5-10 more</li>
                <li><strong>6-seater minibus:</strong> £20-30 more than saloon</li>
                <li><strong>8-seater minibus:</strong> £40-50 more than saloon</li>
                <li><strong>Executive vehicle:</strong> £10-20 premium for Mercedes or similar</li>
                <li><strong>Wheelchair-accessible vehicle:</strong> May vary—check our <Link href="/wheelchair-accessible-taxi">wheelchair accessible taxi</Link> service</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Pickup Location Within the Area
              </h3>

              <p className="text-gray-700 mb-4">
                Prices are generally consistent across the Stone and Stoke-on-Trent area, but specific locations can vary slightly:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Stone town centre:</strong> Standard rate (39 miles to airport)</li>
                <li><strong>Stoke-on-Trent city centre:</strong> Similar distance, same pricing</li>
                <li><strong>Stafford:</strong> Slightly closer (35 miles)—may be £5-10 less</li>
                <li><strong>Newcastle-under-Lyme:</strong> Same pricing as Stoke-on-Trent</li>
                <li><strong>Keele University:</strong> Standard area pricing applies</li>
              </ul>

              <p className="text-gray-700 mb-4">
                We provide competitive fixed pricing across all areas we serve. Check our <Link href="/taxi-stoke-on-trent">Stoke-on-Trent taxi service</Link> and <Link href="/taxi-stafford">Stafford taxi service</Link> pages for specific route information.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                How to Get the Best Price on Your Airport Taxi
              </h2>

              <p className="text-gray-700 mb-4">
                Follow these tips to ensure you're getting good value on your Manchester Airport taxi from Stone or Stoke-on-Trent:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                1. Book in Advance
              </h3>

              <p className="text-gray-700 mb-4">
                Pre-booking always costs less than trying to find a taxi on the day. Most companies offer better rates for advance bookings made at least 24-48 hours ahead. You'll also guarantee availability during busy periods like school holidays and Christmas.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                2. Compare Fixed-Price Quotes
              </h3>

              <p className="text-gray-700 mb-4">
                Always ask for a fixed price rather than accepting metered fares for airport runs. A fixed price protects you from:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Traffic delays adding to the meter</li>
                <li>Drivers taking longer routes</li>
                <li>Unexpected toll charges</li>
                <li>Peak-time surcharges on the meter</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                3. Consider Return Journey Discounts
              </h3>

              <p className="text-gray-700 mb-4">
                Many taxi companies offer discounts if you book both outbound and return journeys together. This can save you 10-15% on the total cost and ensures you have reliable transport arranged for both ends of your trip.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                4. Check What's Included
              </h3>

              <p className="text-gray-700 mb-4">
                The cheapest quote isn't always the best value. Make sure you're comparing like-for-like by checking whether each quote includes:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Flight monitoring and delay waiting time</li>
                <li>Meet and greet service for arrivals</li>
                <li>All airport parking fees</li>
                <li>Sufficient luggage capacity</li>
                <li>Child seats if required (may be extra)</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                5. Use Established Local Companies
              </h3>

              <p className="text-gray-700 mb-4">
                While app-based services might show cheaper prices initially, local taxi companies with established reputations offer significant advantages:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Guaranteed pickup—no last-minute cancellations</li>
                <li>Professional drivers who know the area and best routes</li>
                <li>Direct customer service if you need to make changes</li>
                <li>Proper licensing and insurance</li>
                <li>Vehicles maintained to high standards</li>
              </ul>

              <p className="text-gray-700 mb-4">
                As a Stone-based company with over 20 years of experience serving the local area, we understand the importance of reliability for airport transfers. Our drivers know every route from Stone to Manchester Airport and can adapt to traffic conditions in real-time.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Fixed-Price Airport Transfers Offer Better Value
              </h2>

              <p className="text-gray-700 mb-4">
                When comparing a £90 fixed-price pre-booked taxi to a £56 Uber estimate, the difference narrows significantly when you consider the real-world experience:
              </p>

              <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6">
                <h4 className="font-bold text-primary mb-3">Fixed-Price Professional Service Includes:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Guaranteed pickup at your specified time</li>
                  <li>Driver waiting even if your flight is delayed by hours</li>
                  <li>Properly insured vehicle suitable for your luggage</li>
                  <li>No surge pricing during busy periods</li>
                  <li>Direct booking with local company you can contact</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <h4 className="font-bold text-gray-800 mb-3">App-Based Ride Potential Issues:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Price can surge to £80+ during busy times</li>
                  <li>Driver may cancel at last minute</li>
                  <li>Limited vehicle space—may need to order XL at higher cost</li>
                  <li>Waiting fees if flight delayed</li>
                  <li>No guaranteed pickup for early morning flights</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                For business travel or family holidays where timing is critical, the premium for a guaranteed professional service is minimal compared to the risk of delays or cancellations with budget options.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Corporate and Regular Traveller Discounts
              </h2>

              <p className="text-gray-700 mb-4">
                If you travel to Manchester Airport regularly for business or take multiple family holidays per year, you can significantly reduce your per-journey costs:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Corporate Account Benefits
              </h3>

              <p className="text-gray-700 mb-4">
                Our <Link href="/account-work">corporate account service</Link> offers businesses in Stone, Stoke-on-Trent, and Stafford:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Volume discounts on regular airport transfers</li>
                <li>Monthly invoicing with 30-day payment terms</li>
                <li>Priority booking for business travel</li>
                <li>Detailed journey reporting for expenses</li>
                <li>Dedicated account manager</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Frequent Traveller Savings
              </h3>

              <p className="text-gray-700 mb-4">
                Even if you don't need a full corporate account, booking multiple journeys in advance can secure better rates. Consider booking all your year's airport transfers in one go if you take several holidays—many companies will offer 10-15% discount for bulk bookings.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Additional Costs to Consider
              </h2>

              <p className="text-gray-700 mb-4">
                When budgeting for your Manchester Airport taxi, be aware of potential additional costs that some companies charge:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Child car seats:</strong> £5-10 per seat with some operators (others include free)</li>
                <li><strong>Additional stops en route:</strong> £5-15 depending on location</li>
                <li><strong>Excess luggage:</strong> Some companies charge for more than 2 cases per person</li>
                <li><strong>Waiting time:</strong> After the included grace period, typically £15-25 per hour</li>
                <li><strong>Meet and greet arrivals:</strong> May cost extra with budget operators</li>
                <li><strong>Cancellation fees:</strong> Usually charged if cancelled within 24 hours</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Always clarify exactly what's included in your quote and what might cost extra. Transparent pricing is a hallmark of a professional service.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Other Popular Airport Routes from Stone and Stoke-on-Trent
              </h2>

              <p className="text-gray-700 mb-4">
                While Manchester Airport is the most popular choice for Staffordshire travellers, you might also need transfers to other airports. Here's what you can expect to pay from Stone and Stoke-on-Trent in 2026:
              </p>

              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden my-8">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Airport</th>
                      <th className="px-6 py-4 text-left font-semibold">Distance</th>
                      <th className="px-6 py-4 text-left font-semibold">Typical Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Manchester (MAN)</td>
                      <td className="px-6 py-4">39-46 miles</td>
                      <td className="px-6 py-4 font-semibold text-primary">£90-98</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Birmingham (BHX)</td>
                      <td className="px-6 py-4">36-39 miles</td>
                      <td className="px-6 py-4 font-semibold text-primary">£89-95</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">East Midlands (EMA)</td>
                      <td className="px-6 py-4">46 miles</td>
                      <td className="px-6 py-4 font-semibold text-primary">£90-103</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Liverpool (LPL)</td>
                      <td className="px-6 py-4">57 miles</td>
                      <td className="px-6 py-4 font-semibold text-primary">£130-135</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">London Heathrow (LHR)</td>
                      <td className="px-6 py-4">~150 miles</td>
                      <td className="px-6 py-4 font-semibold text-primary">£235-280</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                Stone's strategic location near the M6 motorway makes it an ideal starting point for airport transfers throughout the Midlands and beyond. View our full range of <Link href="/airport-transfers">airport transfer services</Link> including <Link href="/birmingham-airport-taxi">Birmingham Airport</Link>, <Link href="/east-midlands-airport-taxi">East Midlands Airport</Link>, and <Link href="/london-airport-transfers">London airports</Link>.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Booking Your Manchester Airport Taxi from Stone
              </h2>

              <p className="text-gray-700 mb-4">
                When you're ready to book your taxi from Stone or Stoke-on-Trent to Manchester Airport, follow these simple steps to ensure a smooth experience:
              </p>

              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
                <li><strong>Check your flight details:</strong> Have your flight number, departure/arrival time, and terminal information ready</li>
                <li><strong>Calculate your pickup time:</strong> For departures, allow 50-60 minutes travel time plus 2-3 hours before your flight</li>
                <li><strong>Confirm passenger and luggage numbers:</strong> This ensures you get the right size vehicle</li>
                <li><strong>Request a fixed-price quote:</strong> Get confirmation of the total price including all extras</li>
                <li><strong>Provide your contact details:</strong> So the driver can contact you if needed</li>
                <li><strong>Receive confirmation:</strong> You should get booking confirmation with driver details</li>
              </ol>

              <p className="text-gray-700 mb-4">
                With 365 Transfers, you can book online 24/7 or call us directly on 01785 335563. We serve Stone, Stoke-on-Trent, Stafford, and all surrounding areas with professional airport transfer services year-round.
              </p>

              {/* CTA SECTION */}
              <div className="bg-primary text-white rounded-lg p-8 mt-12">
                <h2 className="text-3xl font-bold mb-4">Book Your Manchester Airport Taxi Today</h2>
                <p className="text-xl mb-6 text-gray-200">
                  Get a fixed-price quote for your journey from Stone or Stoke-on-Trent to Manchester Airport. Professional service, 20+ years experience, and no hidden costs. Available 24/7 including early morning and late night pickups. Call 01785 335563 or book online now.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <BookNowButton className="text-lg">
                    Get a Quote
                  </BookNowButton>