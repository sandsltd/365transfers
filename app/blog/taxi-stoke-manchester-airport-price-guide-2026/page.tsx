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
  description: "Complete 2026 pricing guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs, booking options, and hidden expenses. Stone-based 365 Transfers.",
  keywords: "taxi Stoke-on-Trent to Manchester Airport, Manchester Airport taxi price, Stoke to Manchester Airport cost, airport transfer Staffordshire, taxi price guide 2026",
  openGraph: {
    title: "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    description: "Complete pricing breakdown for Manchester Airport taxis from Stoke-on-Trent and Stone. Compare all your options and find the best value.",
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

export default function StokeManchesterAirportPriceGuide2026() {
  const articleSchema = createArticleSchema(
    "How Much Is a Taxi from Stoke-on-Trent to Manchester Airport? 2026 Price Guide",
    "Complete 2026 pricing guide for taxis from Stoke-on-Trent to Manchester Airport. Compare costs, booking options, and hidden expenses from Stone-based 365 Transfers.",
    "2026-04-27"
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
                {new Date("2026-04-27").toLocaleDateString("en-GB", {
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
                  If you're travelling from Stone, Stoke-on-Trent, or anywhere in Staffordshire to Manchester Airport in 2026, understanding the true cost of your journey is essential for proper trip planning. With taxi prices varying significantly between operators—from budget options around £70 to premium services exceeding £100—and alternatives like Uber, trains, and parking to consider, this comprehensive guide breaks down exactly what you'll pay and what you get for your money.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Quick Answer: Typical Taxi Costs to Manchester Airport
              </h2>
              
              <p className="text-gray-700 mb-4">
                For residents in Stone and the surrounding areas, here's what you can expect to pay for a taxi to Manchester Airport in 2026:
              </p>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">2026 Price Ranges from Stone & Stoke-on-Trent</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-semibold text-gray-800">Budget Operators</span>
                    <span className="text-2xl font-bold text-primary">£70-80</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-semibold text-gray-800">Mid-Range Private Hire</span>
                    <span className="text-2xl font-bold text-primary">£90-98</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-semibold text-gray-800">Executive Service</span>
                    <span className="text-2xl font-bold text-primary">£100-110</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-semibold text-gray-800">Minibus (6-8 seats)</span>
                    <span className="text-2xl font-bold text-primary">£110-140</span>
                  </li>
                  <li className="flex justify-between items-center pb-3">
                    <span className="font-semibold text-gray-800">Uber (Average)</span>
                    <span className="text-2xl font-bold text-accent">£56</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mb-6">
                The journey from Stone to Manchester Airport typically takes 50-60 minutes via the M6 motorway, covering approximately 39-46 miles depending on your exact location and which terminal you're heading to. Prices from central Stoke-on-Trent are similar, whilst Stafford residents can expect comparable rates given the proximity.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Do Prices Vary So Much?
              </h2>

              <p className="text-gray-700 mb-4">
                You might be wondering why there's such a significant price difference between operators. The answer lies in what's included and the level of service provided. Here's what typically separates budget options from premium services:
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Budget Services (£70-80)</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Standard saloon vehicle</li>
                <li>Basic door-to-door transport</li>
                <li>No flight monitoring</li>
                <li>Limited communication if delays occur</li>
                <li>Cash or card payment on the day</li>
                <li>May use older vehicles</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Mid-Range Services (£90-98)</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Well-maintained modern vehicles</li>
                <li>Flight monitoring included</li>
                <li>Meet and greet service</li>
                <li>Free waiting time (typically 30-45 minutes)</li>
                <li>Professional uniformed drivers</li>
                <li>Fixed price guarantee (no surprises)</li>
                <li>Multiple payment options</li>
                <li>24/7 customer support</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Executive Services (£100-110)</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Premium Mercedes or similar vehicles</li>
                <li>Extra legroom and comfort</li>
                <li>Complimentary bottled water</li>
                <li>All mid-range benefits plus enhanced comfort</li>
                <li>Ideal for business travellers</li>
              </ul>

              <p className="text-gray-700 mb-6">
                At <Link href="/" className="text-primary hover:underline font-semibold">365 Transfers</Link>, based in Stone, we position ourselves in the mid-range category, offering the reliability and professionalism you need for airport transfers without the premium price tag. Our 20+ years of experience means you get peace of mind alongside competitive pricing.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                The Hidden Costs of "Cheaper" Alternatives
              </h2>

              <p className="text-gray-700 mb-4">
                Whilst Uber's average price of £56 from Stoke-on-Trent to Manchester Airport might seem attractive, it's important to understand what you're potentially sacrificing—and the hidden costs that can quickly add up.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">The Uber Reality Check</h3>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
                <p className="text-gray-800 font-semibold mb-2">Important Considerations:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Surge pricing:</strong> That £56 average can jump to £80-100+ during peak times, early mornings, or bad weather</li>
                  <li><strong>No flight monitoring:</strong> If your flight is delayed, your return driver won't wait</li>
                  <li><strong>Vehicle uncertainty:</strong> You don't know what vehicle you'll get or how much luggage space there'll be</li>
                  <li><strong>No fixed price:</strong> Traffic delays can increase the final fare significantly</li>
                  <li><strong>Cancellation issues:</strong> Drivers can cancel at the last minute, leaving you stranded</li>
                  <li><strong>Limited customer support:</strong> No direct phone line to resolve issues quickly</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Train to Manchester Airport: The Hidden Expenses</h3>

              <p className="text-gray-700 mb-4">
                From Stone railway station, you can catch a train to Manchester Airport, but let's look at the real cost:
              </p>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-700">Train tickets (2 adults, off-peak return)</td>
                      <td className="py-3 text-right font-semibold">£60-80</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-700">Taxi to Stone station (from home)</td>
                      <td className="py-3 text-right font-semibold">£8-12</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-700">Possible bus/connection fares</td>
                      <td className="py-3 text-right font-semibold">£5-10</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-700">Coffee/snacks during journey</td>
                      <td className="py-3 text-right font-semibold">£10-15</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-700 font-semibold">Total Cost</td>
                      <td className="py-3 text-right font-bold text-primary text-xl">£83-117</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-700 font-semibold">Journey Time</td>
                      <td className="py-3 text-right font-bold text-accent text-xl">2-2.5 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-6">
                Plus, you'll need to navigate stairs with luggage, manage connections, deal with potential delays, and worry about strikes. A door-to-door taxi for £90-98 suddenly looks like exceptional value when you factor in the convenience and guaranteed arrival time.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Airport Parking: The Week-Long Calculation</h3>

              <p className="text-gray-700 mb-4">
                For a typical week-long holiday, Manchester Airport parking costs quickly add up:
              </p>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-700">Official Long Stay (7 days)</span>
                    <span className="font-bold text-gray-800">£85-120</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-700">Meet & Greet (7 days)</span>
                    <span className="font-bold text-gray-800">£110-150</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-700">Fuel (Stone to Manchester return)</span>
                    <span className="font-bold text-gray-800">£20-25</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-700">Wear and tear on your vehicle</span>
                    <span className="font-bold text-gray-800">£15-20</span>
                  </li>
                  <li className="flex justify-between items-center pb-3">
                    <span className="text-gray-700 font-semibold">Total Parking Option</span>
                    <span className="font-bold text-accent text-xl">£120-195</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mb-6">
                And that's before considering the stress of motorway driving, early morning departures, navigating airport car parks, and the security of leaving your vehicle for a week. For couples or families, booking a return <Link href="/manchester-airport-taxi" className="text-primary hover:underline font-semibold">Manchester Airport taxi</Link> for around £180-196 return starts to make perfect financial sense.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                What's Included in a Professional Airport Transfer?
              </h2>

              <p className="text-gray-700 mb-4">
                When you book with a reputable operator like 365 Transfers from Stone, here's exactly what you should expect for your money:
              </p>

              <div className="bg-primary/5 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-primary mb-4">Standard Service Inclusions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3 text-xl">✓</span>
                    <span><strong>Door-to-door service:</strong> Pick-up from your home in Stone, Stoke-on-Trent, Stafford, or surrounding areas, with drop-off directly at your terminal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3 text-xl">✓</span>
                    <span><strong>Flight monitoring:</strong> We track your flight status and adjust pick-up times automatically if there are delays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3 text-xl">✓</span>
                    <span><strong>Meet and greet:</strong> For return journeys, your driver meets you in arrivals with a name board</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3 text-xl">✓</span>
                    <span><strong>Free waiting time:</strong> 30-45 minutes grace period for return journeys to allow for baggage collection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3 text-xl">✓</span>
                    <span><strong>Fixed pricing:</strong> The price quoted is the price you pay—no hidden charges or meter surprises</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3 text-xl">✓</span>
                    <span><strong>Professional drivers:</strong> All DBS-checked, licensed, BTEC qualified, and C.S.E certified</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3 text-xl">✓</span>
                    <span><strong>Vehicle choice:</strong> From saloons to estate cars, executives to 8-seater minibuses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3 text-xl">✓</span>
                    <span><strong>24/7 availability:</strong> We operate 365 days a year, including Christmas and bank holidays</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Booking Tips: How to Get the Best Price
              </h2>

              <p className="text-gray-700 mb-4">
                Whether you're booking from Stone, the Potteries, or anywhere across Staffordshire, here are insider tips to ensure you get the best value for your Manchester Airport transfer:
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Book in Advance</h3>
              <p className="text-gray-700 mb-6">
                Pre-booking your transfer typically saves £10-20 compared to last-minute bookings. Many operators offer early-bird discounts for bookings made 2-4 weeks ahead. You'll also guarantee vehicle availability during busy periods like school holidays.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Consider Return Journeys</h3>
              <p className="text-gray-700 mb-6">
                Booking a return journey often works out cheaper than two single trips. At 365 Transfers, we offer competitive return pricing that recognises your loyalty. A typical return from Stone to Manchester Airport costs around £180-196, saving you approximately £10-20 compared to booking two singles.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Share with Neighbours or Friends</h3>
              <p className="text-gray-700 mb-6">
                If you've got neighbours in Stone or friends in Stoke-on-Trent travelling around the same time, sharing a larger vehicle like a 6 or 8-seater minibus can significantly reduce per-person costs. A minibus to Manchester Airport costs £110-140, which split between six people is just £18-23 each.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Avoid Peak Times When Possible</h3>
              <p className="text-gray-700 mb-6">
                Whilst we maintain fixed pricing regardless of time, some operators charge premiums for very early morning pick-ups (before 5am) or late-night returns. Booking flights that depart between 7am-11am or arrive between 3pm-10pm can sometimes offer better value if you have flexibility.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Be Accurate with Pick-up Location</h3>
              <p className="text-gray-700 mb-6">
                Provide your exact postcode when requesting a quote. Whilst prices within Stone are consistent, pick-ups from outlying villages like Eccleshall or Barlaston may have slight variations. Being precise ensures you get an accurate quote from the start.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-white border-l-4 border-primary p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">How long does the journey take from Stone to Manchester Airport?</h3>
                  <p className="text-gray-700">
                    The journey typically takes 50-60 minutes via the M6 motorway under normal traffic conditions. We always recommend allowing extra time during morning rush hour (7:30am-9am) or evening peak (4:30pm-6pm). For early morning flights, the roads are usually clear and you can often make the journey in 45-50 minutes.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-primary p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">What happens if my flight is delayed?</h3>
                  <p className="text-gray-700">
                    When you book with 365 Transfers, we monitor your flight status automatically. If your return flight is delayed, we adjust your pick-up time accordingly at no extra charge. We include 30-45 minutes of free waiting time from your actual landing time to allow for baggage collection and customs.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-primary p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Can you accommodate large groups or lots of luggage?</h3>
                  <p className="text-gray-700">
                    Absolutely. We operate vehicles ranging from standard saloons up to 16-seater minibuses. For families with multiple large suitcases or groups travelling together from Stone or Stoke-on-Trent, we can provide estate cars or larger vehicles with ample boot space. Just let us know your requirements when booking.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-primary p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Do you offer wheelchair-accessible vehicles?</h3>
                  <p className="text-gray-700">
                    Yes, we have <Link href="/wheelchair-accessible-taxi" className="text-primary hover:underline font-semibold">wheelchair-accessible vehicles</Link> available for Manchester Airport transfers. These meet all BSI PAS 2012-1 ramp compliance standards and include appropriate restraints. Please mention accessibility requirements when booking to ensure we allocate the right vehicle.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-primary p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">What payment methods do you accept?</h3>
                  <p className="text-gray-700">
                    We accept all major payment methods including cash, card, and bank transfer. For corporate clients and regular travellers from Staffordshire, we also offer <Link href="/account-work" className="text-primary hover:underline font-semibold">account facilities</Link> with monthly invoicing.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Choose 365 Transfers for Your Manchester Airport Journey?
              </h2>

              <p className="text-gray-700 mb-4">
                Based in Stone town centre at 3 Berkeley Court Mews, we've been serving Staffordshire residents for over 20 years. Our position makes us perfectly located to serve Stone, Stoke-on-Trent, Stafford, and the surrounding villages with reliable airport transfers.
              </p>

              <p className="text-gray-700 mb-4">
                What sets us apart is our genuine local knowledge combined with professional standards. We know the best routes to avoid M6 delays, the quickest ways to reach each Manchester Airport terminal, and how to time your journey perfectly for check-in. Our drivers live locally, many in Stone itself, and take pride in representing the area.
              </p>

              <p className="text-gray-700 mb-6">
                Unlike larger national operators or app-based services, when you call 365 Transfers on 01785 335563, you speak directly to our team who know the local area intimately. We're not a call centre hundreds of miles away—we're your neighbours, committed to getting you to your flight safely, comfortably, and on time.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Service Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-2">→</span>
                    <span>20+ years serving Stone & Staffordshire</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-2">→</span>
                    <span>All drivers DBS-checked and licensed</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-2">→</span>
                    <span>Modern, well-maintained fleet</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-2">→</span>
                    <span>Fixed prices—no hidden charges</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-2">→</span>
                    <span>Flight monitoring included</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-2">→</span>
                    <span>Operating 24/7/365</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-2">→</span>
                    <span>Vehicles from 4 to 16 seats</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-2">→</span>
                    <span>Wheelchair-accessible options</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Other Airport Transfer Services from Stone
              </h2>

              <p className="text-gray-700 mb-4">
                Whilst Manchester is our most popular airport destination from Stone and Stoke-on-Trent, we serve all major UK airports with the same professional, reliable service:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold text-primary mb-2">Birmingham Airport</h3>
                  <p className="text-gray-600 text-sm mb-2">36-39 miles | 47-55 minutes</p>
                  <p className="text-gray-700 mb-3">From £89-95</p>
                  <Link href="/birmingham-airport-taxi" className="text-primary hover:underline font-semibold text-sm">
                    Learn more →
                  </Link>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold text-primary mb-2">East Midlands Airport</h3>
                  <p className="text-gray-600 text-sm mb-2">46 miles | 49-55 minutes</p>
                  <p className="text-gray-700 mb-3">From £90-103</p>
                  <Link href="/east-midlands-airport-taxi" className="text-primary hover:underline font-semibold text-sm">
                    Learn more →
                  </Link>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold text-primary mb-2">Liverpool Airport</h3>
                  <p className="text-gray-600 text-sm mb-2">57 miles | ~1 hour 4 minutes</p>
                  <p className="text-gray-700 mb-3">From £130-135</p>
                  <Link