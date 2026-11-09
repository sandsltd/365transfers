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
  description: "Complete 2026 price guide for taxis from Stoke-on-Trent and Stone to Manchester Airport. Compare costs, booking options, and hidden expenses.",
  keywords: "taxi Stoke to Manchester airport, Manchester airport taxi price, Stoke on Trent airport transfer, Stone to Manchester airport cost, taxi price guide 2026",
  openGraph: {
    title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    description: "Discover the true cost of taxi transfers from Stoke-on-Trent and Stone to Manchester Airport in 2026, including price comparisons and money-saving tips.",
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

export default function TaxiStokeManchester2026PriceGuide() {
  const articleSchema = createArticleSchema(
    "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    "Complete 2026 price guide for taxis from Stoke-on-Trent and Stone to Manchester Airport. Compare costs, booking options, and hidden expenses.",
    "2026-11-09"
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
                {new Date("2026-11-09").toLocaleDateString("en-GB", {
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
                alt="Airport terminal departure information"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* INTRO CALLOUT BOX */}
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Planning your journey from Stone, Stoke-on-Trent, or the wider Staffordshire area to Manchester Airport? Understanding the true cost of your taxi transfer is essential for budgeting your trip. In this comprehensive 2026 price guide, we break down exactly how much you should expect to pay for a taxi from Stoke-on-Trent to Manchester Airport, compare different booking options, and reveal the hidden costs that many travellers overlook.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Typical Taxi Prices from Stoke-on-Trent to Manchester Airport in 2026
              </h2>
              
              <p className="text-gray-700 mb-4">
                The cost of a taxi from Stoke-on-Trent to Manchester Airport varies depending on several factors, including the type of service you choose, the time of day, and the size of your vehicle. Here's what you can expect to pay in 2026:
              </p>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Price Comparison Table</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-3 px-4 font-semibold">Service Type</th>
                        <th className="py-3 px-4 font-semibold">Price Range</th>
                        <th className="py-3 px-4 font-semibold">Journey Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Budget operators</td>
                        <td className="py-3 px-4 font-semibold">£70-£80</td>
                        <td className="py-3 px-4">50-60 minutes</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Standard private hire</td>
                        <td className="py-3 px-4 font-semibold">£90-£98</td>
                        <td className="py-3 px-4">50-60 minutes</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Uber (app-based)</td>
                        <td className="py-3 px-4 font-semibold">~£56 average</td>
                        <td className="py-3 px-4">50-60 minutes</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Minibus (6-8 passengers)</td>
                        <td className="py-3 px-4 font-semibold">£110-£140</td>
                        <td className="py-3 px-4">50-60 minutes</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Executive/Premium service</td>
                        <td className="py-3 px-4 font-semibold">£100-£120</td>
                        <td className="py-3 px-4">50-60 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                For travellers departing from Stone specifically, you can expect prices to be similar or slightly lower, as Stone is positioned between Stoke-on-Trent and the M6 motorway, offering a more direct route to Manchester Airport. At 365 Transfers, we provide transparent, fixed-price <Link href="/manchester-airport-taxi">Manchester Airport transfers from Stone</Link> that include flight monitoring and meet-and-greet service as standard.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What's Included in Your Taxi Fare?
              </h2>

              <p className="text-gray-700 mb-4">
                Not all taxi services are created equal. When comparing prices, it's crucial to understand what's included in the quoted fare. Here's what you should look for:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Standard Inclusions with Reputable Operators
              </h3>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Door-to-door service</strong> — pickup from your home in Stone, Stoke-on-Trent, Stafford, or surrounding areas</li>
                <li><strong>Meet and greet</strong> — driver waiting for you at arrivals with a name board</li>
                <li><strong>Flight monitoring</strong> — adjusting pickup times if your flight is delayed</li>
                <li><strong>Reasonable waiting time</strong> — typically 15-30 minutes included</li>
                <li><strong>Luggage assistance</strong> — help loading and unloading your bags</li>
                <li><strong>Fixed pricing</strong> — no meter surprises or surge pricing</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Potential Extra Charges to Watch For
              </h3>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Early morning or late-night surcharges</strong> — some operators add £5-£15 for unsociable hours</li>
                <li><strong>Additional waiting time</strong> — beyond the included grace period</li>
                <li><strong>Child seats</strong> — may cost £5-£10 per seat (always included with us)</li>
                <li><strong>Meet and greet service</strong> — budget operators may charge extra</li>
                <li><strong>Cancellation fees</strong> — particularly with short notice</li>
                <li><strong>Credit card processing fees</strong> — increasingly rare but worth checking</li>
              </ul>

              <p className="text-gray-700 mb-4">
                At 365 Transfers, we believe in transparent pricing. Our <Link href="/airport-transfer-prices">fixed-price airport transfers</Link> include all standard services with no hidden charges, ensuring you know exactly what you'll pay when you book.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Manchester Airport Taxi vs. Alternative Transport Options
              </h2>

              <p className="text-gray-700 mb-4">
                Before booking your taxi, it's worth considering all your transport options from Stone and Stoke-on-Trent to Manchester Airport. Here's how they compare in 2026:
              </p>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Transport Comparison: Total Cost Analysis</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-3 px-4 font-semibold">Option</th>
                        <th className="py-3 px-4 font-semibold">Base Cost</th>
                        <th className="py-3 px-4 font-semibold">Hidden Costs</th>
                        <th className="py-3 px-4 font-semibold">True Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Private taxi (pre-booked)</td>
                        <td className="py-3 px-4">£90-£98</td>
                        <td className="py-3 px-4">None</td>
                        <td className="py-3 px-4 font-semibold">£90-£98</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Train + tram/taxi</td>
                        <td className="py-3 px-4">£20-£30</td>
                        <td className="py-3 px-4">£10-£25 (connections + stress)</td>
                        <td className="py-3 px-4 font-semibold">£30-£55</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Airport parking (1 week)</td>
                        <td className="py-3 px-4">£60-£90</td>
                        <td className="py-3 px-4">£15-£30 (fuel + wear)</td>
                        <td className="py-3 px-4 font-semibold">£75-£120</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Uber</td>
                        <td className="py-3 px-4">£56 average</td>
                        <td className="py-3 px-4">Surge pricing risk</td>
                        <td className="py-3 px-4 font-semibold">£56-£80+</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Friend/family favour</td>
                        <td className="py-3 px-4">£0</td>
                        <td className="py-3 px-4">2-hour round trip inconvenience</td>
                        <td className="py-3 px-4 font-semibold">Priceless (goodwill)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                The Hidden Costs of Airport Parking
              </h3>

              <p className="text-gray-700 mb-4">
                Many Staffordshire travellers instinctively reach for their car keys when heading to Manchester Airport, but the total cost often exceeds a pre-booked taxi:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Parking fees:</strong> £60-£90 for one week in official car parks (£40-£60 for off-site with transfers)</li>
                <li><strong>Fuel costs:</strong> £8-£12 return journey from Stone (50 miles each way at current petrol prices)</li>
                <li><strong>Vehicle wear and tear:</strong> ~100 miles adds to your service schedule</li>
                <li><strong>M6 toll charges:</strong> £9.40 return if you take the quickest route</li>
                <li><strong>Stress and time:</strong> Navigating airport traffic, finding a parking space, shuttle bus waits</li>
                <li><strong>Security concerns:</strong> Leaving your vehicle in a car park for extended periods</li>
              </ul>

              <p className="text-gray-700 mb-4">
                For many families from Stone and Stoke-on-Trent, a pre-booked <Link href="/airport-transfers">airport transfer</Link> proves more economical than driving, especially when travelling with multiple passengers or for longer holidays.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                The Train Option: When Does It Make Sense?
              </h3>

              <p className="text-gray-700 mb-4">
                Stone railway station offers hourly services to Stafford and Stoke-on-Trent, from where you can connect to Manchester. However, the reality is more complex:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Journey time:</strong> Typically 2-3 hours door-to-door with connections</li>
                <li><strong>Cost:</strong> £20-£30 for train tickets, plus £10-£15 for Manchester tram or taxi to airport</li>
                <li><strong>Luggage challenges:</strong> Hauling suitcases through multiple stations</li>
                <li><strong>Limited early/late services:</strong> No viable options for early morning flights</li>
                <li><strong>Delay risks:</strong> Missed connections can jeopardise your flight</li>
                <li><strong>Family considerations:</strong> Cost multiplies with children, whilst taxi price stays fixed</li>
              </ul>

              <p className="text-gray-700 mb-4">
                The train makes sense for solo business travellers with carry-on only, but for families from Stone or Stoke-on-Trent catching early flights or returning late at night, a taxi offers superior value and convenience.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Pre-Book Your Manchester Airport Taxi from Stone?
              </h2>

              <p className="text-gray-700 mb-4">
                Whilst you might be tempted by app-based services advertising low fares, pre-booking your airport transfer with a reputable local operator offers significant advantages:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Price Certainty and Protection
              </h3>

              <p className="text-gray-700 mb-4">
                Pre-booked fixed prices protect you from surge pricing, which can strike at the worst possible moments. Uber and similar services frequently implement surge pricing during:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Early morning rush (4am-7am) when most flights depart</li>
                <li>Adverse weather conditions</li>
                <li>Local events in Stoke-on-Trent or Manchester</li>
                <li>Holiday periods when demand is highest</li>
              </ul>

              <p className="text-gray-700 mb-4">
                With 365 Transfers, your price is locked in when you book, whether that's weeks in advance or the day before your flight.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Reliability and Peace of Mind
              </h3>

              <p className="text-gray-700 mb-4">
                Professional airport transfer services like ours offer guarantees that app-based alternatives cannot match:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Flight monitoring:</strong> We track your flight and adjust pickup times automatically</li>
                <li><strong>No-show protection:</strong> If a driver cancels, you have no recourse with apps; we guarantee backup coverage</li>
                <li><strong>Professional drivers:</strong> All our drivers are DBS-checked, licensed, and airport-route experienced</li>
                <li><strong>Vehicle standards:</strong> Modern, well-maintained fleet suitable for airport journeys</li>
                <li><strong>24/7 customer support:</strong> Speak to a human, based in Stone, if issues arise</li>
                <li><strong>Insurance and licensing:</strong> Full coverage and legal compliance</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Group Travel Savings
              </h3>

              <p className="text-gray-700 mb-4">
                The per-person cost of a taxi drops dramatically when travelling as a group or family. Consider these scenarios from Stone to Manchester Airport:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-2"><strong>Solo traveller:</strong> £95 taxi vs £56 Uber = taxi is more expensive</p>
                <p className="text-gray-700 mb-2"><strong>Couple:</strong> £95 taxi (£47.50 each) vs £56 Uber (£28 each) = still competitive</p>
                <p className="text-gray-700 mb-2"><strong>Family of 4:</strong> £95 taxi (£23.75 each) vs £56 Uber (£14 each) but may need 2 cars = taxi wins</p>
                <p className="text-gray-700"><strong>Group of 6-8:</strong> £120 minibus (£15-£20 each) vs 2 Ubers (£28-£40 each) = substantial savings</p>
              </div>

              <p className="text-gray-700 mb-4">
                Our fleet includes vehicles from standard saloons to 16-seater minibuses, making us the perfect choice for <Link href="/events-tours">group airport transfers</Link> from Stone, Stoke-on-Trent, and across Staffordshire.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What Factors Affect the Cost of Your Manchester Airport Taxi?
              </h2>

              <p className="text-gray-700 mb-4">
                Understanding the factors that influence taxi pricing helps you make informed decisions and avoid overpaying:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Distance and Route
              </h3>

              <p className="text-gray-700 mb-4">
                Manchester Airport sits approximately 39-46 miles from Stoke-on-Trent, depending on your specific pickup location. The journey typically follows the M6 motorway, with slight variations:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Stone:</strong> 39 miles, 47-55 minutes via M6 and M56</li>
                <li><strong>Newcastle-under-Lyme:</strong> 42 miles, 50-58 minutes</li>
                <li><strong>Stoke-on-Trent city centre:</strong> 46 miles, 55-65 minutes</li>
                <li><strong>Stafford:</strong> 40 miles, 48-56 minutes via M6</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Stone's position near the M6 motorway offers a slight advantage in journey time and distance, which can translate to marginally lower fares with some operators.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Time of Day and Day of Week
              </h3>

              <p className="text-gray-700 mb-4">
                Some taxi companies implement variable pricing based on when you travel:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Peak times:</strong> Weekday mornings (4am-9am) may incur surcharges of £5-£15</li>
                <li><strong>Late night:</strong> After 11pm pickups sometimes cost extra</li>
                <li><strong>Weekends and bank holidays:</strong> Premium rates common with some operators</li>
                <li><strong>Christmas and New Year:</strong> Expect significant surcharges (£20-£50) from many companies</li>
              </ul>

              <p className="text-gray-700 mb-4">
                At 365 Transfers, we operate 24/7/365 with consistent pricing regardless of the time or day, ensuring you're never penalised for an early morning flight or late-night return.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Vehicle Type and Passenger Numbers
              </h3>

              <p className="text-gray-700 mb-4">
                Your choice of vehicle significantly impacts the price:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Standard saloon (4 passengers):</strong> £90-£98 baseline price</li>
                <li><strong>Estate car (4 passengers + extra luggage):</strong> £95-£105</li>
                <li><strong>Executive vehicle:</strong> £100-£120 for premium comfort</li>
                <li><strong>6-seater minibus:</strong> £110-£125</li>
                <li><strong>8-seater minibus:</strong> £125-£140</li>
                <li><strong>Wheelchair-accessible vehicle:</strong> £100-£130 depending on size</li>
              </ul>

              <p className="text-gray-700 mb-4">
                We offer the full range of vehicles to suit any group size or requirement, including <Link href="/wheelchair-accessible-taxi">wheelchair-accessible airport transfers</Link> from Stone and Stoke-on-Trent.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Money-Saving Tips for Manchester Airport Transfers from Stone
              </h2>

              <p className="text-gray-700 mb-4">
                Want to get the best value on your airport taxi? Here are insider tips from 20+ years of operating in Staffordshire:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Book in Advance
              </h3>

              <p className="text-gray-700 mb-4">
                Last-minute bookings often command premium prices, particularly during peak travel seasons. Booking your <Link href="/manchester-airport-taxi">Manchester Airport transfer</Link> even a week in advance can save £10-£20 compared to same-day requests.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Share with Friends or Neighbours
              </h3>

              <p className="text-gray-700 mb-4">
                If you know neighbours in Stone or Stoke-on-Trent travelling around the same time, splitting a minibus can reduce per-person costs dramatically. An 8-seater costs only £20-£30 more than a standard car but accommodates double the passengers.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Consider Return Journey Discounts
              </h3>

              <p className="text-gray-700 mb-4">
                Many operators, including ourselves, offer discounts when you book your return transfer at the same time. This can save 10-15% on the total cost.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Avoid Airport Pickup Charges
              </h3>

              <p className="text-gray-700 mb-4">
                Manchester Airport charges drivers for entering the pickup zones. Whilst most reputable operators absorb this cost, some budget services add it to your fare. Always confirm the quoted price is final.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Choose the Right Vehicle
              </h3>

              <p className="text-gray-700 mb-4">
                Don't pay for a minibus if you're travelling as a couple with standard luggage. Equally, don't squeeze uncomfortably into a small car when an estate would provide adequate space for a modest additional cost.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Questions to Ask Before Booking Your Airport Taxi
              </h2>

              <p className="text-gray-700 mb-4">
                Protect yourself from unpleasant surprises by asking these essential questions when comparing taxi companies:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Is the quoted price fixed or could it change?</li>
                <li>Are there any additional charges for early morning or late night?</li>
                <li>Is flight monitoring included in the price?</li>
                <li>How much waiting time is included if my flight is delayed?</li>
                <li>Are child seats provided free of charge if needed?</li>
                <li>What happens if my flight is cancelled?</li>
                <li>Do you provide meet-and-greet service at arrivals?</li>
                <li>Are your drivers licensed and insured for airport transfers?</li>
                <li>What is your cancellation policy?</li>
                <li>Can I pay by card or do you charge processing fees?</li>
              </ul>

              <p className="text-gray-700 mb-4">
                At 365 Transfers, we're completely transparent about our pricing and service. Call us on 01785 335563 with any questions, and we'll provide honest, straightforward answers to help you make the right choice.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Choose 365 Transfers for Your Manchester Airport Journey?
              </h2>

              <p className="text-gray-700 mb-4">
                Based in Stone with over 20 years' experience serving Staffordshire, we've built our reputation on reliability, transparency, and exceptional customer service:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Fixed prices with no hidden charges:</strong> The price we quote is the price you pay</li>
                <li><strong>Flight monitoring as standard:</strong> We track your flight and adjust pickup times automatically</li>
                <li><strong>Professional, DBS-checked drivers:</strong> Local knowledge and airport route expertise</li>
                <li><strong>Modern, well-maintained fleet:</strong> From saloons to 16-seater minibuses</li>
                <li><strong>24/7/365 availability:</strong> We never close, including Christmas Day</li>
                <li><strong>Meet-and-greet service:</strong> Name board at arrivals, help with luggage</li>
                <li><strong>Wheelchair-accessible vehicles:</strong> Full accessibility options available</li>
                <li><strong>Corporate accounts welcome:</strong> Monthly invoicing for business travel</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Whether you're travelling from Stone, Stoke-on-Trent, Stafford, Newcastle-under-Lyme, or anywhere across Staffordshire, we provide the professional airport transfer service you can depend on.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Other Airport Transfer Routes We Serve from Stone
              </h2>

              <p className="text-gray-700 mb-4">
                Whilst Manchester Airport is our most popular destination, we also provide fixed-price transfers to all major UK airports:
              </p>