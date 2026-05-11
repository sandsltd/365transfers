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
  description: "Complete 2026 price guide for taxis from Stone, Stoke-on-Trent and Staffordshire to Manchester Airport. Compare costs, hidden fees, and booking options.",
  keywords: "taxi Stoke-on-Trent to Manchester Airport, Manchester Airport taxi price, Stone to Manchester Airport taxi, airport transfer cost, taxi prices 2026",
  openGraph: {
    title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    description: "Complete 2026 price guide for taxis from Stone, Stoke-on-Trent and Staffordshire to Manchester Airport. Compare costs and save money.",
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
    "Complete 2026 price guide for taxis from Stone, Stoke-on-Trent and Staffordshire to Manchester Airport. Compare costs, hidden fees, and booking options.",
    "2026-05-11"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Blog", url: "https://taxisstone.co.uk/blog" },
    {
      name: "Manchester Airport Taxi Price Guide 2026",
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
                {new Date("2026-05-11").toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src="/images/blog/21-airport-departure-board.webp"
                alt="Airport departures board for taxi transfers from Stone and Stoke-on-Trent"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* INTRO CALLOUT BOX */}
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Planning a trip from Stone, Stoke-on-Trent or the surrounding Staffordshire area to Manchester Airport? Understanding taxi costs in 2026 helps you budget properly and avoid surprises. In this comprehensive guide, we'll break down exactly what you can expect to pay for a taxi from Stoke-on-Trent to Manchester Airport, compare pricing options, reveal hidden costs, and show you how to get the best value for your airport transfer.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Quick Answer: 2026 Taxi Prices from Stoke-on-Trent to Manchester Airport
              </h2>
              <p className="text-gray-700 mb-4">
                The typical cost for a taxi from Stoke-on-Trent to Manchester Airport in 2026 ranges from <strong>£70 to £98</strong>, depending on your exact pickup location, time of day, vehicle type, and whether you pre-book or use an on-demand service. For passengers travelling from Stone specifically, expect prices at the higher end of this range—typically around £90–£98—due to the slightly greater distance.
              </p>
              <p className="text-gray-700 mb-6">
                Here's how the market breaks down:
              </p>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Service Type</th>
                      <th className="px-6 py-4 text-left">Price Range</th>
                      <th className="px-6 py-4 text-left">What You Get</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-semibold">Budget (Uber)</td>
                      <td className="px-6 py-4">£50–£60</td>
                      <td className="px-6 py-4">Basic vehicle, surge pricing risk, no flight monitoring</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Budget Taxi</td>
                      <td className="px-6 py-4">£70–£80</td>
                      <td className="px-6 py-4">Standard car, metered or fixed price</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Mid-Range (365 Transfers)</td>
                      <td className="px-6 py-4">£90–£98</td>
                      <td className="px-6 py-4">Professional service, flight monitoring, meet & greet, fixed price</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Minibus (4–8 passengers)</td>
                      <td className="px-6 py-4">£110–£140</td>
                      <td className="px-6 py-4">Group travel, extra luggage space</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Distance and Journey Time from Stone and Stoke-on-Trent
              </h2>
              <p className="text-gray-700 mb-4">
                Manchester Airport is approximately <strong>39–46 miles</strong> from Stoke-on-Trent, depending on your exact starting point. From Stone specifically, the distance is around 46 miles via the M6 and A556 routes. Under normal traffic conditions, the journey takes between <strong>50 minutes and 1 hour</strong>.
              </p>
              <p className="text-gray-700 mb-4">
                Journey times can vary significantly based on:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Time of day:</strong> Peak morning rush hour (7:00–9:00 AM) and evening rush hour (4:30–6:30 PM) can add 15–30 minutes</li>
                <li><strong>M6 motorway conditions:</strong> Roadworks, accidents, and heavy lorry traffic are common</li>
                <li><strong>Weather:</strong> Rain, fog, or snow can slow traffic considerably</li>
                <li><strong>Airport drop-off zone congestion:</strong> Terminal forecourts can be busy during peak travel periods</li>
              </ul>
              <p className="text-gray-700 mb-6">
                For early morning flights (before 6:00 AM), you'll enjoy quieter roads and typically complete the journey in under an hour. For afternoon or evening flights, always allow extra time for potential M6 delays.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                How Taxi Prices Are Calculated
              </h2>
              <p className="text-gray-700 mb-4">
                Understanding how taxi fares to Manchester Airport are calculated helps you spot good value and avoid overcharging. There are two main pricing models used by taxi companies serving Stone, Stoke-on-Trent and the wider Staffordshire area:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                1. Fixed Price (Pre-Booked Transfers)
              </h3>
              <p className="text-gray-700 mb-4">
                Companies like <Link href="/manchester-airport-taxi" className="text-primary hover:underline">365 Transfers</Link> offer fixed prices when you pre-book. You're quoted a price upfront based on your pickup location and destination, and that's exactly what you pay—no surprises, regardless of traffic or route taken. This model provides peace of mind, especially for budget-conscious travellers.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Benefits:</strong> Price certainty, no surge pricing, includes flight monitoring, easier to budget.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                2. Metered Fare (Traditional Taxis)
              </h3>
              <p className="text-gray-700 mb-4">
                Traditional hackney cabs charge by the meter, with fares calculated based on distance, time, and sometimes waiting time. Metered fares can vary depending on traffic conditions—if you're stuck in M6 congestion, the meter keeps running.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Typical metered rates:</strong> £2.50–£3.50 flagfall, then £1.50–£2.00 per mile, plus time-based charges during slow traffic.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Additional Charges to Watch For
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Late-night surcharge:</strong> Some companies add £5–£10 for pickups between 11:00 PM and 6:00 AM</li>
                <li><strong>Bank holiday surcharge:</strong> £5–£15 extra on public holidays</li>
                <li><strong>Waiting time:</strong> If you're not ready when the taxi arrives, expect £15–£25 per hour waiting charges</li>
                <li><strong>Extra luggage:</strong> Most standard prices assume two large suitcases; additional bags may incur charges</li>
                <li><strong>Child seats:</strong> Usually £5–£10 per seat (book in advance)</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Comparing Your Options: Taxi, Train, or Driving and Parking?
              </h2>
              <p className="text-gray-700 mb-4">
                Before booking a taxi from Stone or Stoke-on-Trent to Manchester Airport, it's worth comparing all your transport options to see which delivers the best value and convenience for your specific situation.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Pre-Booked Taxi (365 Transfers)
              </h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Cost:</strong> £90–£98 from Stone</li>
                <li><strong>Journey time:</strong> 50–60 minutes door-to-door</li>
                <li><strong>Pros:</strong> No parking fees, no waiting for connections, flight monitoring included, meet and greet service, luggage assistance</li>
                <li><strong>Cons:</strong> Upfront cost higher than some alternatives</li>
                <li><strong>Best for:</strong> Families, early morning flights, heavy luggage, stress-free travel</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Train from Stone or Stoke-on-Trent
              </h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Cost:</strong> £20–£40 per person (off-peak), plus local taxi to/from stations</li>
                <li><strong>Journey time:</strong> 1 hour 30 minutes to 2 hours (including connections)</li>
                <li><strong>Route:</strong> Stone → Stoke-on-Trent → Manchester Piccadilly → Airport (tram or taxi)</li>
                <li><strong>Pros:</strong> Cheaper for solo travellers</li>
                <li><strong>Cons:</strong> Multiple connections, hauling luggage on platforms, tram/taxi needed at Manchester end, limited early morning services, delays common</li>
                <li><strong>Best for:</strong> Solo travellers with light luggage and flexible schedules</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Drive and Park at Manchester Airport
              </h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Cost:</strong> £60–£150 for a week's parking, plus fuel (£15–£20)</li>
                <li><strong>Journey time:</strong> 50–60 minutes driving, plus parking shuttle time</li>
                <li><strong>Pros:</strong> Flexibility for multiple passengers</li>
                <li><strong>Cons:</strong> Total cost often exceeds taxi once parking is included, stress of early morning driving and finding spaces, risk of fines or clamping if you return late</li>
                <li><strong>Best for:</strong> Groups of 4+ passengers on shorter trips (2–4 days)</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Uber or Ride-Hailing Apps
              </h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Cost:</strong> £50–£60 average (but varies with surge pricing)</li>
                <li><strong>Journey time:</strong> 50–60 minutes</li>
                <li><strong>Pros:</strong> Can be cheapest option if booked during off-peak</li>
                <li><strong>Cons:</strong> No flight monitoring (if delayed, driver won't wait), surge pricing can double cost during peak times, vehicle and driver quality varies, no guaranteed pickup for early morning</li>
                <li><strong>Best for:</strong> Budget-conscious solo travellers with daytime flights and no tight schedules</li>
              </ul>

              <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6 my-8">
                <p className="text-gray-700 font-semibold mb-2">💡 Cost Comparison Example: Family of 4 travelling for 7 days</p>
                <ul className="list-none space-y-2 text-gray-700">
                  <li><strong>Pre-booked taxi (return):</strong> £90 × 2 = £180</li>
                  <li><strong>Train tickets:</strong> £35 × 4 × 2 = £280 (plus local taxis at both ends)</li>
                  <li><strong>Drive and park:</strong> £100 parking + £35 fuel = £135 (but doesn't include stress, time, or late return risk)</li>
                  <li className="pt-2 border-t border-gray-300 mt-2"><strong>Winner:</strong> Pre-booked taxi offers best value and convenience for families</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Hidden Costs of Cheaper Alternatives
              </h2>
              <p className="text-gray-700 mb-4">
                While it's tempting to choose the cheapest option, many travellers from Stone and Stoke-on-Trent discover hidden costs that make budget alternatives less appealing:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Airport Parking Hidden Costs
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Late return charges:</strong> If your flight is delayed and you return a day late, expect £30–£50+ extra charges</li>
                <li><strong>Booking amendments:</strong> Changing your return date often costs £15–£30</li>
                <li><strong>Shuttle waiting time:</strong> Off-site car parks often mean 10–20 minute waits for shuttle buses, adding stress before check-in</li>
                <li><strong>Security concerns:</strong> Vehicle damage or theft in budget car parks can cost thousands</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Train Travel Hidden Costs
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Local taxi fees:</strong> Getting to Stone or Stoke-on-Trent station, plus taxi or tram at Manchester end adds £20–£40 total</li>
                <li><strong>Luggage restrictions:</strong> Hauling heavy bags up and down stairs, across platforms, and onto busy trains is exhausting</li>
                <li><strong>Delay compensation hassle:</strong> Train delays can cause you to miss your flight, and claiming compensation is time-consuming</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Uber/Ride-Hailing Hidden Costs
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Surge pricing:</strong> During peak times (Friday evenings, bank holidays, major events), fares can double or triple</li>
                <li><strong>No flight monitoring:</strong> If your return flight is delayed, your pre-booked Uber may not wait, forcing you to pay for another ride</li>
                <li><strong>Cancellation risk:</strong> Drivers can cancel last-minute, leaving you stranded for early morning flights</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Choose 365 Transfers for Your Manchester Airport Journey?
              </h2>
              <p className="text-gray-700 mb-4">
                Based in Stone with over 20 years of experience serving Staffordshire, <Link href="/" className="text-primary hover:underline">365 Transfers</Link> specialises in reliable, professional <Link href="/airport-transfers" className="text-primary hover:underline">airport transfers</Link> to Manchester Airport and beyond. Here's what sets us apart:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-primary text-xl mb-3">✈️ Flight Monitoring Included</h4>
                  <p className="text-gray-700">
                    We track your flight in real-time. If you're delayed, we adjust your pickup time automatically—at no extra cost. You'll never pay waiting charges or worry about missing your ride home.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-primary text-xl mb-3">💷 Fixed Prices, No Surprises</h4>
                  <p className="text-gray-700">
                    Get a transparent quote upfront. No surge pricing, no metered surprises, no hidden fees. The price we quote from Stone or Stoke-on-Trent is exactly what you pay.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-primary text-xl mb-3">🚗 Professional, Licensed Drivers</h4>
                  <p className="text-gray-700">
                    All our drivers are DBS-checked, fully licensed, BTEC qualified, and C.S.E certified. Expect courteous, knowledgeable service every journey.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-primary text-xl mb-3">🕐 24/7/365 Availability</h4>
                  <p className="text-gray-700">
                    Early morning flight at 5:00 AM? Late-night return at midnight? No problem. We operate around the clock, every single day of the year.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-primary text-xl mb-3">👥 Fleet for Every Need</h4>
                  <p className="text-gray-700">
                    From saloon cars for solo travellers to 16-seater minibuses for groups, plus wheelchair-accessible vehicles. Whatever your requirements, we've got you covered.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-primary text-xl mb-3">📍 Local Knowledge</h4>
                  <p className="text-gray-700">
                    Based in Stone and serving Staffordshire for over 20 years, we know the best routes, traffic patterns, and how to get you to Manchester Airport on time, every time.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Tips to Save Money on Your Manchester Airport Taxi
              </h2>
              <p className="text-gray-700 mb-4">
                Even with mid-range services like 365 Transfers, there are smart ways to get the best value for your airport transfer from Stone or Stoke-on-Trent:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Book in advance:</strong> Pre-booking guarantees your fixed price. Last-minute bookings may be subject to availability surcharges.</li>
                <li><strong>Share with friends or family:</strong> Travelling with another family? Split a minibus and halve your per-person cost.</li>
                <li><strong>Book return journeys together:</strong> Many companies, including 365 Transfers, offer discounts when you book both legs of your journey at once.</li>
                <li><strong>Travel off-peak:</strong> If you have flexibility, mid-week and mid-morning flights often mean less traffic and lower stress.</li>
                <li><strong>Use corporate accounts:</strong> Frequent travellers can save by setting up a <Link href="/account-work" className="text-primary hover:underline">corporate account</Link> with monthly invoicing and potential volume discounts.</li>
                <li><strong>Avoid unnecessary extras:</strong> Be ready when the taxi arrives to avoid waiting time charges. Have luggage packed and by the door.</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Booking Your Manchester Airport Taxi from Stone or Stoke-on-Trent
              </h2>
              <p className="text-gray-700 mb-4">
                Ready to book your taxi from Stoke-on-Trent to Manchester Airport? Here's what you need to provide:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Pickup address:</strong> Your full address in Stone, Stoke-on-Trent, Stafford, or elsewhere in Staffordshire</li>
                <li><strong>Flight details:</strong> Flight number, departure time, and airline (for outbound) or arrival time (for return pickups)</li>
                <li><strong>Passenger count:</strong> Number of adults and children (we'll recommend the right vehicle)</li>
                <li><strong>Luggage:</strong> Number and size of bags (so we can ensure adequate boot space)</li>
                <li><strong>Special requirements:</strong> Child seats, wheelchair access, or extra stops</li>
              </ul>
              <p className="text-gray-700 mb-6">
                With 365 Transfers, booking is simple: call <strong>01785 335563</strong> or <strong>0330 223 5425</strong>, or use our online booking system for an instant quote. We'll confirm your booking immediately and send you a confirmation with driver details closer to your travel date.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Other Airport Transfers We Offer from Stone and Stoke-on-Trent
              </h2>
              <p className="text-gray-700 mb-4">
                Manchester Airport isn't your only option. Stone and Stoke-on-Trent sit almost equidistant from three major airports, making 365 Transfers your ideal partner for all your airport transfer needs:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><Link href="/birmingham-airport-taxi" className="text-primary hover:underline font-semibold">Birmingham Airport transfers</Link> — 36–39 miles, 47–55 minutes, from £89</li>
                <li><Link href="/east-midlands-airport-taxi" className="text-primary hover:underline font-semibold">East Midlands Airport transfers</Link> — 46 miles, 49–55 minutes, from £90</li>
                <li><Link href="/liverpool-airport-taxi" className="text-primary hover:underline font-semibold">Liverpool Airport transfers</Link> — 57 miles, around 1 hour 4 minutes, from £130</li>
                <li><Link href="/london-airport-transfers" className="text-primary hover:underline font-semibold">London airports (Heathrow, Gatwick, Stansted)</Link> — long-distance transfers available</li>
              </ul>
              <p className="text-gray-700 mb-6">
                We also provide <Link href="/local-national" className="text-primary hover:underline">local and national taxi services</Link>, <Link href="/days-out" className="text-primary hover:underline">days out transport</Link>, <Link href="/school-contracts" className="text-primary hover:underline">school contracts</Link>, and <Link href="/every-occasion" className="text-primary hover:underline">special occasion transport</Link> across Staffordshire and beyond.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-primary text-lg mb-2">How much is a taxi from Stone to Manchester Airport?</h4>
                  <p className="text-gray-700">
                    A pre-booked taxi from Stone to Manchester Airport typically costs £90–£98 with 365 Transfers, including flight monitoring and meet & greet service.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-primary text-lg mb-2">Is it cheaper to take a taxi or drive and park at Manchester Airport?</h4>
                  <p className="text-gray-700">
                    For trips longer than 4–5 days, a return taxi (around £180 total) is often cheaper and less stressful than parking (£100+) plus fuel (£35), especially when you factor in late return charges and shuttle hassle.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-primary text-lg mb-2">Do I need to book my Manchester Airport taxi in advance?</h4>
                  <p className="text-gray-700">
                    Yes, we strongly recommend pre-booking to guarantee availability and lock in your fixed price, especially for early morning or late-night flights. Last-minute bookings may incur surcharges.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-primary text-lg mb-2">What if my flight is delayed?</h4>
                  <p className="text-gray-700">
                    365 Transfers monitors all flights in real-time. If your return flight is delayed, we automatically adjust your pickup time at no extra cost. You won't pay waiting charges.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-primary text-lg mb-2">Can I book a taxi for a group or family?</h4>
                  <p className="text-gray-700">
                    Absolutely. We have vehicles ranging from standard saloons to 16-seater minibuses, perfect for families, groups of friends, or corporate travel. <Link href="/airport-transfers" className="text-primary hover:underline">Contact us</Link> for group quotes.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-primary text-lg mb-2">Do you provide wheelchair-accessible taxis to Manchester Airport?</h4>
                  <p className="text-gray-700">
                    Yes, we operate <Link