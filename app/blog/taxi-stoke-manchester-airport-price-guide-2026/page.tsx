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
  description: "Complete 2026 price guide for taxis from Stoke-on-Trent and Stone to Manchester Airport. Compare costs, booking options, and hidden fees with parking alternatives.",
  keywords: "taxi Stoke to Manchester Airport, Manchester Airport taxi price, Stoke-on-Trent airport transfer, taxi cost Manchester Airport, Stone to Manchester Airport taxi",
  openGraph: {
    title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    description: "Complete 2026 price guide for taxis from Stoke-on-Trent and Stone to Manchester Airport. Compare costs and find the best value option.",
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
    "Complete 2026 price guide for taxis from Stoke-on-Trent and Stone to Manchester Airport. Compare costs, booking options, and hidden fees with parking alternatives.",
    "2026-06-29"
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
                {new Date("2026-06-29").toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src="/images/blog/10-taxi-driver-phone.webp"
                alt="Taxi driver checking Manchester Airport booking details"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* INTRO CALLOUT BOX */}
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  If you're travelling from Stone, Stoke-on-Trent, or the surrounding Staffordshire area to Manchester Airport, understanding the true cost of your journey is essential for planning your trip. In this comprehensive 2026 price guide, we break down what you can expect to pay for a taxi from Stoke-on-Trent to Manchester Airport, compare pricing from different operators, and reveal the hidden costs that often catch travellers by surprise.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                2026 Taxi Price Overview: Stoke-on-Trent to Manchester Airport
              </h2>
              
              <p className="text-gray-700 mb-4">
                Manchester Airport is one of the UK's busiest airports, serving over 28 million passengers annually. For residents of Stone and Stoke-on-Trent, it's just 39-46 miles away—making it the most convenient airport for international travel. But how much should you expect to pay for a taxi to Manchester Airport from Stoke-on-Trent in 2026?
              </p>

              <p className="text-gray-700 mb-6">
                The cost varies significantly depending on the type of service you choose, the time of booking, and the size of your vehicle. Here's what you need to know.
              </p>

              <div className="bg-white border-2 border-primary rounded-lg overflow-hidden mb-8">
                <div className="bg-primary text-white px-6 py-4">
                  <h3 className="text-2xl font-bold mb-0">2026 Price Comparison Table</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Service Type</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price Range</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Vehicle Type</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Typical Features</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-gray-700">Uber / Ride-hailing</td>
                        <td className="px-6 py-4 text-gray-700 font-semibold">£50-65</td>
                        <td className="px-6 py-4 text-gray-700">Standard car</td>
                        <td className="px-6 py-4 text-gray-700 text-sm">App booking, variable pricing, no flight monitoring</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Budget Taxi Operators</td>
                        <td className="px-6 py-4 text-gray-700 font-semibold">£70-80</td>
                        <td className="px-6 py-4 text-gray-700">Saloon / Estate</td>
                        <td className="px-6 py-4 text-gray-700 text-sm">Fixed price, basic service, online booking</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-gray-700">Mid-Range Private Hire</td>
                        <td className="px-6 py-4 text-gray-700 font-semibold">£90-98</td>
                        <td className="px-6 py-4 text-gray-700">Executive / Minibus</td>
                        <td className="px-6 py-4 text-gray-700 text-sm">Flight monitoring, meet & greet, professional service</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Minibus (6-8 passengers)</td>
                        <td className="px-6 py-4 text-gray-700 font-semibold">£110-140</td>
                        <td className="px-6 py-4 text-gray-700">6-8 seater minibus</td>
                        <td className="px-6 py-4 text-gray-700 text-sm">Group travel, luggage space, family-friendly</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-gray-700">Larger Minibus (12-16 passengers)</td>
                        <td className="px-6 py-4 text-gray-700 font-semibold">£140-180</td>
                        <td className="px-6 py-4 text-gray-700">12-16 seater minibus</td>
                        <td className="px-6 py-4 text-gray-700 text-sm">Large groups, events, corporate travel</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What Affects the Price of Your Manchester Airport Taxi?
              </h2>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                1. Your Exact Pick-Up Location
              </h3>

              <p className="text-gray-700 mb-4">
                Whilst most prices are quoted for Stoke-on-Trent town centre, your exact location can impact the final cost. Passengers travelling from Stone, for example, are around 7 miles south of Stoke-on-Trent, which typically adds £5-10 to the journey cost. Similarly, if you're in Newcastle-under-Lyme, Kidsgrove, or Biddulph, expect slight variations in pricing.
              </p>

              <p className="text-gray-700 mb-6">
                At 365 Transfers, we provide transparent pricing for all locations across Stone and Staffordshire, so you know exactly what you'll pay before you book. Our service area covers Stone, Stoke-on-Trent, Stafford, and the wider Potteries region—ensuring reliable <Link href="/manchester-airport-taxi">Manchester Airport transfers</Link> wherever you're based.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                2. Time of Day and Demand
              </h3>

              <p className="text-gray-700 mb-4">
                Unlike traditional black cabs that charge per mile on the meter, most reputable private hire companies (including 365 Transfers) offer fixed-price airport transfers. This means you won't face surge pricing during peak travel times—a common issue with ride-hailing apps like Uber.
              </p>

              <p className="text-gray-700 mb-6">
                However, early morning pick-ups (before 5am) or late-night returns may incur a small surcharge with some operators. Always confirm whether your quote includes all time-of-day fees to avoid surprises.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                3. Vehicle Size and Type
              </h3>

              <p className="text-gray-700 mb-4">
                The size of your party and the amount of luggage you're carrying will determine which vehicle you need. Here's a quick guide:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Standard Saloon Car (up to 4 passengers):</strong> Perfect for solo travellers, couples, or small families with moderate luggage. Most cost-effective option at £90-98.</li>
                <li><strong>Estate Car (up to 4 passengers):</strong> Extra boot space for larger suitcases, sports equipment, or bulky items. Similar pricing to saloons but better for ski trips or extended holidays.</li>
                <li><strong>Executive Vehicle:</strong> Luxury saloon cars offering superior comfort for business travellers or special occasions. Typically £10-20 more than standard vehicles.</li>
                <li><strong>6-8 Seater Minibus:</strong> Ideal for families or small groups. Comfortably seats 6 passengers with luggage, or up to 8 with hand luggage only. Priced at £110-140.</li>
                <li><strong>12-16 Seater Minibus:</strong> Perfect for larger groups, wedding parties, or corporate events. Offers the best per-person value for group travel at £140-180 total.</li>
              </ul>

              <p className="text-gray-700 mb-6">
                365 Transfers operates a diverse fleet from 4-seater saloons to 16-seater minibuses, including <Link href="/wheelchair-accessible-taxi">wheelchair-accessible vehicles</Link>, ensuring we can accommodate any group size or special requirement.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                4. Return Journey Discounts
              </h3>

              <p className="text-gray-700 mb-6">
                Many taxi companies (including 365 Transfers) offer discounted rates when you book a return journey at the same time. Booking both legs of your trip can save you 10-15% compared to making two separate bookings. It also guarantees your return pick-up is secured—particularly valuable during busy holiday periods.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Manchester Airport Taxi vs Airport Parking: Which Is Cheaper?
              </h2>

              <p className="text-gray-700 mb-4">
                One of the most common questions we hear is: "Should I drive and park, or book a taxi to Manchester Airport?" The answer depends on several factors—trip duration, number of passengers, and hidden costs you might not have considered.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                The True Cost of Airport Parking
              </h3>

              <p className="text-gray-700 mb-4">
                Manchester Airport's parking charges vary dramatically depending on how far in advance you book and which car park you choose:
              </p>

              <div className="bg-gray-50 border-l-4 border-primary pl-6 py-4 mb-6">
                <ul className="list-none space-y-2 text-gray-700">
                  <li><strong>1 week parking:</strong> £80-140 (official car parks) or £50-80 (off-site meet & greet)</li>
                  <li><strong>2 week parking:</strong> £120-200 (official) or £80-120 (off-site)</li>
                  <li><strong>Fast Track Security (optional):</strong> £6-12 per person</li>
                  <li><strong>Fuel for round trip from Stoke-on-Trent:</strong> Approximately £15-20</li>
                  <li><strong>Wear and tear on your vehicle:</strong> Around 90 miles added to your car</li>
                  <li><strong>Potential parking fines or disputes:</strong> Variable (often unreported in cost comparisons)</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-6">
                <strong>Total parking cost for 1 week:</strong> £95-160 once you factor in fuel and the inconvenience of transferring luggage to shuttle buses.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                The True Cost of a Return Taxi Journey
              </h3>

              <p className="text-gray-700 mb-6">
                A return taxi from Stone or Stoke-on-Trent to Manchester Airport with 365 Transfers costs approximately £180-196 for a standard vehicle (£90-98 each way). For a family of four, that works out at just £45-49 per person for door-to-door service both ways.
              </p>

              <div className="bg-white border-2 border-accent rounded-lg overflow-hidden mb-8">
                <div className="bg-accent text-primary px-6 py-4">
                  <h3 className="text-2xl font-bold mb-0">Taxi vs Parking Cost Comparison</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Factor</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Airport Parking (1 week)</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Return Taxi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-gray-700">Base Cost</td>
                        <td className="px-6 py-4 text-gray-700">£80-140</td>
                        <td className="px-6 py-4 text-gray-700">£180-196</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Fuel</td>
                        <td className="px-6 py-4 text-gray-700">£15-20</td>
                        <td className="px-6 py-4 text-gray-700">Included</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-gray-700">Convenience</td>
                        <td className="px-6 py-4 text-gray-700">Shuttle buses, dragging luggage</td>
                        <td className="px-6 py-4 text-gray-700">Door-to-door service</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Stress Level</td>
                        <td className="px-6 py-4 text-gray-700">Driving, parking, returning to your car</td>
                        <td className="px-6 py-4 text-gray-700">Relax and be driven</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-gray-700">Best for Groups</td>
                        <td className="px-6 py-4 text-gray-700">Solo or couples</td>
                        <td className="px-6 py-4 text-gray-700">Families and groups (lower per-person cost)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 text-gray-700 font-semibold">Total Cost Range</td>
                        <td className="px-6 py-4 text-gray-700 font-semibold">£95-160</td>
                        <td className="px-6 py-4 text-gray-700 font-semibold">£180-196</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                For families or groups of 4+, a taxi becomes the more cost-effective option per person—and eliminates the stress of navigating unfamiliar car parks after a long flight home.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Hidden Costs to Watch Out For
              </h2>

              <p className="text-gray-700 mb-4">
                Not all taxi quotes are created equal. Here are the hidden costs that can inflate your final bill:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                1. Flight Delay Charges
              </h3>

              <p className="text-gray-700 mb-6">
                If your return flight is delayed, some budget operators charge waiting fees or may not even show up. At 365 Transfers, we offer complimentary flight monitoring—tracking your arrival in real-time and adjusting our pick-up accordingly at no extra charge.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                2. Meet & Greet Fees
              </h3>

              <p className="text-gray-700 mb-6">
                Many operators charge extra for terminal meet and greet service. With 365 Transfers, this is included as standard—your driver will wait inside the terminal with a name board, help with luggage, and escort you to the vehicle.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                3. Credit Card Surcharges
              </h3>

              <p className="text-gray-700 mb-6">
                Some taxi companies add a 2-5% surcharge for card payments. We accept all major payment methods without any hidden fees—what you're quoted is what you pay.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                4. Cancellation Penalties
              </h3>

              <p className="text-gray-700 mb-6">
                Always check the cancellation policy before booking. Reputable operators like 365 Transfers offer flexible cancellation up to 24 hours before travel, whilst budget platforms may charge immediately with no refunds.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Choose a Pre-Booked Taxi Over Uber or On-the-Day Options?
              </h2>

              <p className="text-gray-700 mb-4">
                Whilst Uber might seem like the cheapest option at first glance (typically £50-65), there are significant drawbacks for airport transfers:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Surge Pricing:</strong> During peak times, Uber prices can double or triple. Early morning airport runs often hit surge periods.</li>
                <li><strong>No Flight Monitoring:</strong> If your flight is delayed, your Uber driver won't wait. You'll need to book again (and potentially face surge pricing).</li>
                <li><strong>Vehicle Uncertainty:</strong> You can't guarantee a vehicle large enough for your luggage. Many travellers report being assigned a small car unsuitable for airport travel.</li>
                <li><strong>Driver Experience:</strong> Not all Uber drivers are familiar with airport procedures, terminal layouts, or the best routes from Staffordshire.</li>
                <li><strong>No Pre-Booking Guarantee:</strong> During busy periods, you may struggle to find an available driver, especially from smaller towns like Stone.</li>
              </ul>

              <p className="text-gray-700 mb-6">
                By contrast, pre-booking with a professional <Link href="/airport-transfers">airport transfer company</Link> like 365 Transfers guarantees your vehicle, your price, and your peace of mind. Our drivers are DBS-checked, professionally trained, and specialise in airport runs—they know every terminal, every short-stay car park, and every trick to avoid M6 delays.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                How to Get the Best Price for Your Manchester Airport Taxi
              </h2>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                1. Book in Advance
              </h3>

              <p className="text-gray-700 mb-6">
                Last-minute bookings are always more expensive and less reliable. Book your Manchester Airport taxi at least 48 hours in advance (ideally when you book your flights) to secure the best rates and guarantee availability.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                2. Book Both Legs Together
              </h3>

              <p className="text-gray-700 mb-6">
                Return bookings typically save 10-15% compared to two single journeys. Plus, you'll have the reassurance that your return pick-up is already arranged—one less thing to worry about whilst you're away.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                3. Travel as a Group
              </h3>

              <p className="text-gray-700 mb-6">
                The per-person cost drops dramatically when you share a vehicle. A family of four pays just £45-49 per person for a return journey—far cheaper than driving separately or taking the train.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                4. Choose Off-Peak Times When Possible
              </h3>

              <p className="text-gray-700 mb-6">
                Whilst 365 Transfers offers fixed pricing regardless of time, scheduling your flight during off-peak hours means less traffic on the M6 and a faster, more pleasant journey. Early afternoon flights typically offer the smoothest travel experience from Staffordshire.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                5. Check What's Included
              </h3>

              <p className="text-gray-700 mb-6">
                Don't just compare headline prices. Make sure your quote includes flight monitoring, meet and greet, luggage assistance, and all payment fees. The cheapest quote isn't always the best value once you add up the extras.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What to Expect with 365 Transfers Manchester Airport Service
              </h2>

              <p className="text-gray-700 mb-4">
                Based in Stone, Staffordshire, 365 Transfers has been providing reliable <Link href="/manchester-airport-taxi">Manchester Airport taxi services</Link> for over 20 years. Here's what's included in every journey:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Fixed Pricing:</strong> Your quote is your final price—no surge charges, no hidden fees, no surprises.</li>
                <li><strong>Flight Monitoring:</strong> We track your flight in real-time and adjust pick-up times automatically for delays or early arrivals.</li>
                <li><strong>Meet & Greet Service:</strong> For airport pick-ups, your driver waits inside the terminal with a name board and helps with luggage.</li>
                <li><strong>Professional Drivers:</strong> All our drivers are DBS-checked, BTEC qualified, and experienced in airport transfers.</li>
                <li><strong>Modern, Clean Vehicles:</strong> Our fleet ranges from executive saloons to 16-seater minibuses, all maintained to the highest standards.</li>
                <li><strong>24/7 Availability:</strong> We operate 365 days a year, including Christmas Day, New Year, and all bank holidays.</li>
                <li><strong>Wheelchair Accessible Options:</strong> We offer specialist vehicles for passengers with mobility needs.</li>
                <li><strong>Corporate Accounts:</strong> Regular business travellers can set up monthly invoicing and priority booking.</li>
              </ul>

              <p className="text-gray-700 mb-6">
                Whether you're travelling from Stone, Stoke-on-Trent, Stafford, or anywhere across the Potteries, we provide the most reliable door-to-door airport transfer service in Staffordshire.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Other Airport Transfer Options from Staffordshire
              </h2>

              <p className="text-gray-700 mb-4">
                Whilst Manchester is the most convenient airport for Stone and Stoke-on-Trent residents, you might occasionally need transfers to other UK airports:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><Link href="/birmingham-airport-taxi">Birmingham Airport</Link> (36-39 miles, 47-55 minutes) — £89-95 return</li>
                <li><Link href="/east-midlands-airport-taxi">East Midlands Airport</Link> (46 miles, 49-55 minutes) — £90-103 return</li>
                <li><Link href="/liverpool-airport-taxi">Liverpool Airport</Link> (57 miles, ~1 hour) — £130-135 return</li>
                <li><Link href="/london-airport-transfers">London Heathrow Airport</Link> (~150 miles, ~2.5 hours) — £235-280 return</li>
              </ul>

              <p className="text-gray-700 mb-6">
                365 Transfers covers all major UK airports with fixed pricing and the same high standard of service. Visit our <Link href="/airport-transfer-prices">airport transfer prices page</Link> for full details.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-bold text-primary mb-2">How long does the journey take from Stone to Manchester Airport?</h3>
                  <p className="text-gray-700">The journey typically takes 50-60 minutes depending on traffic conditions. We monitor M6 traffic patterns in real-time and adjust routes accordingly to ensure you arrive with plenty of time before your flight.</p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-bold text-primary mb-2">What happens if my flight is delayed?</h3>
                  <p className="text-gray-700">We include complimentary flight monitoring, so if your return flight is delayed, we automatically adjust your pick-up time at no extra cost. Your driver will be there waiting whenever you land.</p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-bold text-primary mb-2">Can you accommodate large groups or families?</h3>
                  <p className="text-gray-700">Absolutely. Our fleet includes 6-8 seater minibuses (£110-140) and 12-16 seater minibuses (£140-180), perfect for family holidays, group trips, or wedding parties travelling together.</p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-bold text-primary mb-2">Do you offer wheelchair accessible vehicles?</h3>
                  <p className