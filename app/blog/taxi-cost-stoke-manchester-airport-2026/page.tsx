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
    canonical: "/blog/taxi-cost-stoke-manchester-airport-2026",
  },
  title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide | 365 Transfers",
  description: "Complete 2026 price guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs, hidden fees, and alternatives. Fixed prices from Stone, Stafford & the Potteries.",
  keywords: "taxi Stoke to Manchester airport, Manchester airport taxi price, Stoke on Trent airport transfer cost, taxi Stone to Manchester airport, airport taxi prices 2026",
  openGraph: {
    title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    description: "Complete 2026 price guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs, hidden fees, and booking options.",
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

export default function TaxiCostStokeToManchesterAirport2026() {
  const articleSchema = createArticleSchema(
    "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    "Complete 2026 price guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs, hidden fees, and alternatives. Fixed prices from Stone, Stafford & the Potteries.",
    "2026-07-13"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Blog", url: "https://taxisstone.co.uk/blog" },
    {
      name: "Manchester Airport Taxi Prices 2026",
      url: "https://taxisstone.co.uk/blog/taxi-cost-stoke-manchester-airport-2026",
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
                {new Date("2026-07-13").toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src="/images/blog/33-european-street-brick-houses.webp"
                alt="Stone, Staffordshire street with convenient access to Manchester Airport"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* INTRO CALLOUT BOX */}
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  If you're travelling from Stone, Stoke-on-Trent, or Stafford to Manchester Airport in 2026, you're probably wondering exactly how much a taxi will cost. With airport parking fees rising, train schedules becoming less reliable, and ride-hailing apps charging surge pricing, a pre-booked taxi can offer the best value for money—but only if you know what to expect. In this comprehensive guide, we'll break down the real costs of a taxi from Stoke-on-Trent to Manchester Airport, compare all your transport options, and reveal the hidden costs that catch travellers out.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                The Short Answer: What Does a Taxi to Manchester Airport Cost in 2026?
              </h2>
              <p className="text-gray-700 mb-4">
                In 2026, a pre-booked private hire taxi from Stoke-on-Trent to Manchester Airport typically costs between <strong>£70 and £98</strong> for a standard saloon car, depending on the provider and exact pickup location. From Stone, Staffordshire, you can expect to pay around <strong>£90-£96</strong> for a reliable, fixed-price service. From Stafford, prices range from <strong>£85 to £100</strong>.
              </p>
              <p className="text-gray-700 mb-4">
                These prices are for a standard 4-seater vehicle with luggage space, and include all motorway tolls, fuel, and waiting time if your driver monitors your flight. Larger vehicles cost more: expect to pay £110-£140 for a minibus that seats 6-8 passengers.
              </p>
              <p className="text-gray-700 mb-6">
                However, not all taxis charge the same, and not all quotes include the same services. Let's break down exactly what you're paying for.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                2026 Price Comparison: Stoke-on-Trent to Manchester Airport
              </h2>
              <p className="text-gray-700 mb-6">
                We've compared the leading taxi and transfer services operating between Stone, Stoke-on-Trent, and Manchester Airport. Here's what you can expect to pay:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Provider Type</th>
                      <th className="py-3 px-4 text-left">Standard Car</th>
                      <th className="py-3 px-4 text-left">Minibus (6-8 seats)</th>
                      <th className="py-3 px-4 text-left">What's Included</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-semibold">Budget Operators</td>
                      <td className="py-3 px-4">£70-£80</td>
                      <td className="py-3 px-4">£110-£120</td>
                      <td className="py-3 px-4">Basic transport only</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Mid-Range Services (e.g. 365 Transfers)</td>
                      <td className="py-3 px-4">£90-£98</td>
                      <td className="py-3 px-4">£130-£140</td>
                      <td className="py-3 px-4">Flight monitoring, meet & greet, fixed price</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-semibold">Premium Services</td>
                      <td className="py-3 px-4">£100-£120</td>
                      <td className="py-3 px-4">£150+</td>
                      <td className="py-3 px-4">Executive vehicles, chauffeur service</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Uber (Average)</td>
                      <td className="py-3 px-4">£50-£70</td>
                      <td className="py-3 px-4">£90-£110</td>
                      <td className="py-3 px-4">Subject to surge pricing, no flight monitoring</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-6">
                <strong>Important note:</strong> Uber prices fluctuate dramatically based on demand. During peak times—early morning departures, Friday evenings, or school holidays—surge pricing can push the cost up to £100 or more, making pre-booked taxis better value.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What Affects the Price of Your Airport Taxi?
              </h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                1. Your Exact Pickup Location
              </h3>
              <p className="text-gray-700 mb-4">
                Manchester Airport is approximately 39-46 miles from Stoke-on-Trent, depending on where you're picked up. Here's how distance affects pricing:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Stone:</strong> ~39 miles via M6, typically £90-£96</li>
                <li><strong>Stoke-on-Trent city centre:</strong> ~42 miles, typically £88-£98</li>
                <li><strong>Newcastle-under-Lyme:</strong> ~40 miles, typically £90-£95</li>
                <li><strong>Stafford:</strong> ~45 miles via M6, typically £95-£100</li>
                <li><strong>Keele or rural areas:</strong> May incur a small surcharge (£5-£10)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                2. Time of Day and Demand
              </h3>
              <p className="text-gray-700 mb-4">
                Most reputable taxi companies charge <strong>fixed prices</strong> regardless of the time of day. However, if you're booking on the day or using a metered taxi, expect to pay significantly more during:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Early morning departures (4am-7am)</li>
                <li>Late-night pickups (after 11pm)</li>
                <li>Bank holidays and Christmas period</li>
                <li>Peak summer holiday weeks (July-August)</li>
              </ul>
              <p className="text-gray-700 mb-6">
                <strong>Our recommendation:</strong> Always pre-book with a company that offers fixed pricing, like <Link href="/manchester-airport-taxi" className="text-accent hover:underline">365 Transfers' Manchester Airport service</Link>, to avoid surge pricing surprises.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                3. Vehicle Size and Type
              </h3>
              <p className="text-gray-700 mb-4">
                A standard 4-seater saloon is the most economical choice for 1-3 passengers with luggage. But if you're travelling with family or have extra baggage, you'll need to pay more:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Estate car:</strong> +£5-£10 (extra boot space)</li>
                <li><strong>Executive saloon:</strong> +£10-£20 (Mercedes E-Class, BMW 5 Series)</li>
                <li><strong>6-seater minibus:</strong> +£30-£40</li>
                <li><strong>8-seater minibus:</strong> +£40-£50</li>
                <li><strong>Wheelchair-accessible vehicle:</strong> Typically same price as standard, but must be pre-booked</li>
              </ul>
              <p className="text-gray-700 mb-6">
                If you need a <Link href="/wheelchair-accessible-taxi" className="text-accent hover:underline">wheelchair-accessible taxi</Link>, 365 Transfers can accommodate you with advance booking at no extra charge.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                4. Additional Services Included (or Not)
              </h3>
              <p className="text-gray-700 mb-4">
                The cheapest quote isn't always the best value. Here's what premium services include that budget operators often don't:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Flight monitoring:</strong> Your driver tracks your arrival time and adjusts pickup accordingly—crucial if your flight is delayed</li>
                <li><strong>Meet and greet:</strong> Your driver meets you in Arrivals with a name board (return journeys)</li>
                <li><strong>Free waiting time:</strong> 30-60 minutes grace period for delays</li>
                <li><strong>Child seats:</strong> Some companies charge £5-£10 extra; others include them free</li>
                <li><strong>Luggage assistance:</strong> Driver helps with bags</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Hidden Costs: What Budget Taxis Don't Tell You
              </h2>
              <p className="text-gray-700 mb-4">
                That £70 quote might not be as cheap as it seems once you add:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Waiting time charges:</strong> £15-£25 if your flight is delayed and the driver has to wait</li>
                <li><strong>Parking fees at the airport:</strong> Some budget operators pass on short-stay parking costs (£5-£10)</li>
                <li><strong>Credit card fees:</strong> 2-3% surcharge on card payments (check before booking)</li>
                <li><strong>Cancellation fees:</strong> Up to 50% of the fare if you cancel within 24 hours</li>
                <li><strong>Early morning surcharges:</strong> £5-£15 extra for pickups before 6am</li>
              </ul>
              <p className="text-gray-700 mb-6">
                <strong>What 365 Transfers includes in the quoted price:</strong> All of the above, with no hidden fees. Our <Link href="/airport-transfer-prices" className="text-accent hover:underline">transparent pricing policy</Link> means the price you see is the price you pay.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Alternative Transport Options: Are They Really Cheaper?
              </h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                Train from Stoke-on-Trent to Manchester Airport
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Cost:</strong> £20-£40 per person (off-peak return)<br />
                <strong>Journey time:</strong> 1 hour 20 minutes to 1 hour 45 minutes with at least one change<br />
                <strong>Total cost for a family of 4:</strong> £80-£160
              </p>
              <p className="text-gray-700 mb-4">
                <strong>The hidden costs:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Taxi from Stone to Stoke-on-Trent station: £10-£15</li>
                <li>Early morning trains don't run in time for 6am flights</li>
                <li>Limited luggage space—difficult with young children</li>
                <li>Return train after delays can mean long waits or expensive peak-time tickets</li>
              </ul>
              <p className="text-gray-700 mb-6">
                <strong>Verdict:</strong> Only cost-effective for solo travellers with light luggage and flexible departure times. For families or early flights, a taxi is better value.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                Driving and Airport Parking
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Cost (1 week):</strong> £50-£120 depending on parking type<br />
                <strong>Plus fuel:</strong> £8-£12 return journey<br />
                <strong>Total:</strong> £58-£132
              </p>
              <p className="text-gray-700 mb-4">
                <strong>The hidden costs:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Shuttle bus waiting times (off-site car parks)</li>
                <li>Vehicle security concerns</li>
                <li>Stress of navigating airport traffic and finding a space</li>
                <li>Return journey after a long flight with jet lag</li>
              </ul>
              <p className="text-gray-700 mb-6">
                <strong>Verdict:</strong> For a week-long holiday, airport parking costs about the same as a taxi—but you arrive tired and have to navigate traffic. A taxi offers door-to-door convenience and peace of mind.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                Ride-Hailing Apps (Uber, Bolt)
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Average cost:</strong> £50-£70 (off-peak)<br />
                <strong>Peak/surge cost:</strong> £80-£120
              </p>
              <p className="text-gray-700 mb-4">
                <strong>The problems:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Price not guaranteed until you book—surge pricing can double the cost</li>
                <li>No flight monitoring—if your return flight is delayed, you have to rebook</li>
                <li>Driver may cancel if they get a better offer</li>
                <li>Variable vehicle quality and driver experience</li>
                <li>Not suitable for early morning departures (limited driver availability)</li>
              </ul>
              <p className="text-gray-700 mb-6">
                <strong>Verdict:</strong> Uber can be cheaper for spontaneous trips during off-peak times, but the lack of reliability and price certainty makes it a risky choice for airport transfers—especially if you have a flight to catch.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Choose a Pre-Booked Taxi from Stone or Stoke-on-Trent?
              </h2>
              <p className="text-gray-700 mb-4">
                After comparing all the options, here's why so many travellers from Staffordshire choose a professional, pre-booked airport taxi service:
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                1. Fixed Price Guarantee
              </h3>
              <p className="text-gray-700 mb-6">
                No surge pricing, no meter running in traffic, no hidden fees. The price you book is the price you pay—whether your flight is at 5am or your pickup is delayed by an hour. With 365 Transfers, your fare is locked in when you book.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                2. Flight Monitoring and Free Waiting Time
              </h3>
              <p className="text-gray-700 mb-6">
                When you book a return journey, your driver tracks your flight in real time. If your plane lands late, your driver adjusts the pickup time automatically—no need to call or pay extra. We include up to 60 minutes of free waiting time, so you're never rushed through baggage claim.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                3. Professional, Licensed Drivers
              </h3>
              <p className="text-gray-700 mb-6">
                All our drivers are fully licensed, DBS-checked, and trained to the highest standards. Unlike ride-hailing apps where driver quality varies wildly, you can rely on a clean, well-maintained vehicle and a driver who knows the best routes and airport procedures inside out.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                4. Door-to-Door Convenience
              </h3>
              <p className="text-gray-700 mb-6">
                No trudging across car parks with heavy luggage. No waiting for shuttle buses. No navigating train changes with kids in tow. Your driver picks you up at your front door in Stone, Stoke-on-Trent, or Stafford, and drops you directly at your terminal entrance. On your return, you're met inside the terminal and taken straight home.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                5. Perfect for Families and Groups
              </h3>
              <p className="text-gray-700 mb-6">
                Travelling with children, elderly relatives, or in a group? A pre-booked taxi becomes incredibly cost-effective. Split between 4-6 people, a minibus taxi costs less per person than train tickets—and you all travel together in comfort. We provide child seats free of charge when requested at booking.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                How to Get the Best Price on Your Manchester Airport Taxi
              </h2>
              
              <ol className="list-decimal list-inside text-gray-700 mb-8 space-y-3">
                <li><strong>Book in advance:</strong> Last-minute bookings often cost 20-30% more. Book at least 24 hours ahead for the best rates.</li>
                <li><strong>Compare fixed-price quotes:</strong> Don't just look at the headline price. Check what's included (flight monitoring, waiting time, child seats).</li>
                <li><strong>Travel outside peak times if possible:</strong> Midweek flights tend to be cheaper than Friday evenings or Sunday returns.</li>
                <li><strong>Book a return journey:</strong> Many companies offer discounts if you book both legs of your journey together.</li>
                <li><strong>Check for corporate or frequent traveller discounts:</strong> If you fly regularly for work, ask about <Link href="/account-work" className="text-accent hover:underline">corporate account pricing</Link>.</li>
              </ol>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Local Taxi vs National Comparison Sites: Which Is Better?
              </h2>
              <p className="text-gray-700 mb-4">
                You might be tempted to use a national airport taxi comparison website like minicabit or Airport Taxis UK. While these can offer competitive quotes, there are downsides:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>You don't know which company you'll be allocated until after booking</li>
                <li>Customer service is handled through the platform, not the driver</li>
                <li>Driver quality and vehicle standards vary</li>
                <li>Local companies often can't offer the same personal service</li>
              </ul>
              <p className="text-gray-700 mb-6">
                <strong>Booking directly with a local Stone or Stoke-on-Trent taxi company</strong> like 365 Transfers means:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>You know exactly who you're travelling with</li>
                <li>Drivers are familiar with local roads and pickups</li>
                <li>You can call the office directly with any questions or changes</li>
                <li>We care about our reputation in the local community</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                How long does a taxi take from Stone to Manchester Airport?
              </h3>
              <p className="text-gray-700 mb-6">
                The journey typically takes 50-60 minutes via the M6, depending on traffic. We recommend allowing 1 hour 15 minutes for early morning flights to account for potential delays. Your driver will monitor traffic and choose the fastest route.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                Can I book a taxi for an early morning flight?
              </h3>
              <p className="text-gray-700 mb-6">
                Absolutely. 365 Transfers operates 24/7/365, including Christmas Day and bank holidays. We regularly pick up passengers at 3am, 4am, and 5am for early departures. Just book in advance to guarantee availability.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                What happens if my flight is delayed on the way back?
              </h3>
              <p className="text-gray-700 mb-6">
                We monitor your flight in real time and adjust your pickup accordingly. If your plane lands 2 hours late, your driver will be waiting for you 2 hours later—no extra charge, no need to call us. We include up to 60 minutes of free waiting time after your flight lands.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                Do you provide child seats?
              </h3>
              <p className="text-gray-700 mb-6">
                Yes, we provide child seats and booster seats free of charge when requested at the time of booking. Please let us know the age and weight of your child so we can provide the correct seat.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                Can I pay by card?
              </h3>
              <p className="text-gray-700 mb-6">
                Yes, we accept all major credit and debit cards with no surcharge. You can also pay by cash, bank transfer, or set up a <Link href="/account-work" className="text-accent hover:underline">corporate account</Link> with monthly invoicing.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Other Airport Routes from Stone and Stoke-on-Trent
              </h2>
              <p className="text-gray-700 mb-4">
                Manchester Airport isn't your only option. We also provide regular transfers to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><Link href="/birmingham-airport-taxi" className="text-accent hover:underline">Birmingham Airport</Link> — 36-39 miles, 50-55 minutes, from £88</li>
                <li><Link href="/east-midlands-airport-taxi" className="text-accent hover:underline">East Midlands Airport</Link> — 46 miles, 50-55 minutes, from £90</li>
                <li><Link href="/liverpool-airport-taxi" className="text-accent hover:underline">Liverpool Airport</Link> — 57 miles, 1 hour 4 minutes, from £95</li>
                <li><Link href="/london-airport-transfers" className="text-accent hover:underline">London Airports (Heathrow, Gatwick, Stansted)</Link> — 2.5-3 hours, from £195</li>
              </ul>
              <p className="text-gray-700 mb-6">
                See our full <Link href="/airport-transfer-prices" className="text-accent hover:underline">airport transfer price list</Link> for more destinations.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Final Thoughts: Is a Taxi to Manchester Airport Worth It?
              </h2>
              <p className="text-gray-700 mb-4">
                For most travellers from Stone, Stoke-on-Trent, and Stafford, a pre-booked taxi to Manchester Airport offers the best combination of cost, convenience, and peace of mind. At £90-£98 for a fixed-price, door-to-door service with flight monitoring and professional drivers, you're getting excellent value—especially when you compare it to the stress and hidden costs of driving and parking, or the unreliability of trains and ride-hailing apps.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're jetting off on holiday, travelling for business, or picking up relatives, a local taxi service that knows the area inside out will get you there on time, every time.
              </p>

              {/* CTA SECTION */}
              <div className="bg-primary text-white rounded-lg p-8 mt-12">
                <h2 className="text-3xl font-bold mb-4">Book Your Manchester Airport Taxi from Stone Today</h2>
                <p className="text-xl mb-6 text-gray-200">
                  Get a fixed-price quote for your journey to Manchester Airport from Stone, Stoke-on-Trent, or Stafford. Available 24/7/365 with flight monitoring and professional drivers. Call us now on <strong>01785 335563</strong> or book online.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <BookNowButton className="text-lg">
                    Get a Quote
                  </BookNowButton>
                  <a
                    href="tel:01785335563"
                    className="bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center"
                  >
                    Call 01785 335563
                  </a>
                </div>