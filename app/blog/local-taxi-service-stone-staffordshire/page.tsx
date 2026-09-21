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
    canonical: "/blog/local-taxi-service-stone-staffordshire",
  },
  title: "Taxi Stone: 24/7 Local Taxi Service in Stone, Staffordshire | 365 Transfers",
  description: "Need a taxi in Stone? 365 Transfers provides reliable 24/7 local taxi services across Stone and Staffordshire. Professional drivers, fair prices, immediate availability. Call 01785 335563.",
  keywords: "taxi Stone, Stone taxi, taxis Stone, taxi Stone Staffordshire, Stone taxi service, local taxi Stone, cab Stone, private hire Stone, Stone cabs, taxi near me Stone",
  openGraph: {
    title: "Taxi Stone: Reliable 24/7 Local Taxi Service in Stone, Staffordshire",
    description: "Reliable 24/7 taxi service in Stone. Local journeys, airport transfers, school runs and more. Professional drivers based in Stone town centre.",
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

export default function LocalTaxiStone() {
  const articleSchema = createArticleSchema(
    "Taxi Stone: Your Reliable 24/7 Local Taxi Service in Stone, Staffordshire",
    "Looking for a taxi in Stone? 365 Transfers provides professional 24/7 taxi services across Stone, Staffordshire and surrounding areas with experienced local drivers and fair prices.",
    "2026-09-21"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Blog", url: "https://taxisstone.co.uk/blog" },
    {
      name: "Taxi Stone",
      url: "https://taxisstone.co.uk/blog/local-taxi-service-stone-staffordshire",
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
                  Local Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Taxi Stone: Your Reliable 24/7 Local Taxi Service in Stone, Staffordshire
              </h1>
              <p className="text-gray-600">
                Published on{" "}
                {new Date("2026-09-21").toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src="/images/blog/31-stone-houses-english-village.webp"
                alt="Traditional Stone town houses in Staffordshire"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  When you need a <strong>taxi in Stone</strong>, you're not just looking for transport from A to B — you need a driver who knows the area, shows up on time, and charges a fair price. 365 Transfers has been providing trusted <strong>taxi services in Stone</strong> for over 20 years. Based on Berkeley Street in Stone town centre, we operate 24 hours a day, 7 days a week, 365 days a year. Whether it's an early hospital appointment, a late-night pickup from the station, or a regular school run, we're the local taxi company Stone residents rely on.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Choose 365 Transfers for Your Stone Taxi?
              </h2>
              <p className="text-gray-700 mb-4">
                Stone is a close-knit market town where people value service they can trust. When you book a <strong>taxi in Stone</strong> with 365 Transfers, here's what sets us apart from the competition:
              </p>
              <div className="bg-white border-l-4 border-primary pl-6 py-4 mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">Genuinely Local to Stone</h3>
                <p className="text-gray-700">
                  Our office is at 3 Berkeley Court Mews, Berkeley Street, Stone ST15 8PQ — right in the heart of town. We're not a Stoke firm that covers Stone as an afterthought. Our drivers live locally, know every street and shortcut, and understand the flow of traffic around Stone at different times of day. Whether you're on the High Street, near Christ Church Academy, or out in Walton or Oulton, we know exactly where you are.
                </p>
              </div>

              <div className="bg-white border-l-4 border-primary pl-6 py-4 mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">24/7 Availability — Every Single Day</h3>
                <p className="text-gray-700">
                  Need a taxi at 3am? On Christmas Day? During a Bank Holiday? We're available. 365 Transfers operates round the clock, 365 days a year. Early morning <Link href="/airport-transfers">airport transfers</Link>, late-night station pickups, or emergency medical appointments — whatever time you need us, we're ready.
                </p>
              </div>

              <div className="bg-white border-l-4 border-primary pl-6 py-4 mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">Professional, Qualified Drivers</h3>
                <p className="text-gray-700">
                  Every driver working for 365 Transfers is DBS checked, holds a private hire licence, and has completed BTEC qualifications and C.S.E training. You're travelling with professional, vetted drivers who take your safety seriously — particularly important for school runs, vulnerable passengers, and late-night journeys.
                </p>
              </div>

              <div className="bg-white border-l-4 border-primary pl-6 py-4 mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">Transparent Pricing — No Surge Charges</h3>
                <p className="text-gray-700">
                  We quote a price upfront and stick to it. No surge pricing during busy periods, no hidden fees, no nasty surprises when you reach your destination. Our prices are competitive and fair, and we accept both card and cash payments in every vehicle.
                </p>
              </div>

              <div className="bg-white border-l-4 border-primary pl-6 py-4 mb-8">
                <h3 className="text-xl font-bold text-primary mb-3">Fleet for Every Occasion</h3>
                <p className="text-gray-700">
                  From 4-seater saloons for local trips to 16-seater minibuses for group events, we've got the right vehicle for your journey. We also operate <Link href="/wheelchair-accessible-taxi">wheelchair accessible vehicles</Link> with proper ramps and restraints for passengers with mobility needs.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Most Popular Taxi Journeys from Stone
              </h2>
              <p className="text-gray-700 mb-4">
                Here's what Stone residents book us for most often:
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Stone Railway Station Transfers
              </h3>
              <p className="text-gray-700 mb-4">
                Stone Railway Station sits on the Crewe to Derby line with regular services to Stoke-on-Trent (7 minutes), Stafford (10 minutes), and Crewe (33 minutes). Whether you're commuting to work, catching a connection to London, or meeting family arriving by train, we provide reliable station transfers. Tell us your train time and we'll be waiting — no stress about parking or running late.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Shopping and Town Centre Trips
              </h3>
              <p className="text-gray-700 mb-4">
                Weekly shop at Tesco on Stafford Road? Browse around Stone High Street's independent shops? Need to pick up a prescription from the pharmacy? We'll drop you off, wait if needed, or collect you when you're done. It's far easier than carrying heavy bags on the bus or struggling with parking in the town centre.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Hospital and Medical Appointments
              </h3>
              <p className="text-gray-700 mb-4">
                Getting to medical appointments at County Hospital in Stafford, Royal Stoke University Hospital, or your local GP surgery is stressful enough without worrying about transport. We provide reliable, punctual taxi services to all medical facilities across Staffordshire. If your appointment runs late, we won't charge you extra for waiting time — we understand that hospitals don't run to schedule.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                School Runs and After-School Clubs
              </h3>
              <p className="text-gray-700 mb-4">
                We provide regular <Link href="/school-contracts">school transport</Link> for families across Stone. Whether it's Christ Church Academy, Walton Priory Middle School, Alleyne's Academy, or schools in Stafford and Stoke-on-Trent, we offer safe, reliable transport with DBS-checked drivers. Parents choose us because we're never late, we communicate clearly, and children's safety is our priority.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Airport Transfers from Stone
              </h3>
              <p className="text-gray-700 mb-4">
                Stone sits almost equidistant from three major airports — Manchester, Birmingham, and East Midlands — all around 40-50 miles away. We provide <Link href="/airport-transfers">airport transfer services</Link> to all UK airports with flight monitoring, meet and greet service, and no extra charges for waiting time. Fixed prices include everything, so you know exactly what you're paying before you book.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-primary mb-3">Popular Airport Routes from Stone</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Stone to <Link href="/manchester-airport-taxi">Manchester Airport</Link> — typically £90-£98</li>
                  <li>• Stone to <Link href="/birmingham-airport-taxi">Birmingham Airport</Link> — typically £89-£95</li>
                  <li>• Stone to <Link href="/east-midlands-airport-taxi">East Midlands Airport</Link> — typically £90-£103</li>
                  <li>• Stone to <Link href="/liverpool-airport-taxi">Liverpool Airport</Link> — typically £130-£135</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  All airport transfers include flight monitoring, meet and greet, and waiting time. See our full <Link href="/airport-transfer-prices">airport transfer prices</Link> for detailed quotes.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Serving Stone and the Surrounding Area
              </h2>
              <p className="text-gray-700 mb-4">
                While we're proudly based in Stone, our service covers the entire surrounding area. We regularly provide taxi services to and from:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">Within Stone</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Stone town centre</li>
                    <li>• Walton</li>
                    <li>• Oulton</li>
                    <li>• Stone Railway Station</li>
                    <li>• All residential areas</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">Nearby Towns</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <Link href="/taxi-stoke-on-trent">Stoke-on-Trent</Link> (all six towns)</li>
                    <li>• <Link href="/taxi-stafford">Stafford</Link></li>
                    <li>• Newcastle-under-Lyme</li>
                    <li>• Eccleshall</li>
                    <li>• Uttoxeter</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">Local Villages</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Barlaston</li>
                    <li>• Tittensor</li>
                    <li>• Meaford</li>
                    <li>• Swynnerton</li>
                    <li>• Aston-by-Stone</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">Popular Destinations</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <Link href="/alton-towers-taxi">Alton Towers</Link></li>
                    <li>• Trentham Gardens</li>
                    <li>• Keele University</li>
                    <li>• Staffordshire University</li>
                    <li>• Uttoxeter Racecourse</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                How to Book a Taxi in Stone
              </h2>
              <p className="text-gray-700 mb-4">
                We've made booking a <strong>Stone taxi</strong> as simple as possible. Choose the method that suits you best:
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">1. Call Us Directly (Fastest for Immediate Pickups)</h3>
                <p className="text-gray-700 mb-4">
                  For immediate taxi bookings in Stone, call <a href="tel:01785335563" className="text-primary hover:underline font-semibold">01785 335563</a>. You'll speak to a real person who can take your details and dispatch the nearest available vehicle. For local Stone pickups, we typically arrive within 5-15 minutes.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">2. Book Online (Best for Advance Bookings)</h3>
                <p className="text-gray-700 mb-4">
                  Use our online booking system for advance bookings like <Link href="/airport-transfers">airport transfers</Link>, <Link href="/days-out">days out</Link>, or regular journeys. You'll get an instant quote and confirmation, and you're guaranteed availability at your chosen time.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-primary mb-3">3. Set Up a Corporate Account</h3>
                <p className="text-gray-700 mb-4">
                  If you book regularly for business, set up a <Link href="/account-work">corporate account</Link> with monthly invoicing, dedicated account management, and priority booking for your team. Popular with Stone businesses for staff commutes, client meetings, and train station transfers.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Typical Stone Taxi Prices
              </h2>
              <p className="text-gray-700 mb-4">
                Every journey is quoted individually based on your exact pickup and drop-off addresses, but here are typical prices for common Stone taxi routes:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-3">Local Stone Journeys</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Within Stone town: £5-£8</li>
                    <li>• Stone to Railway Station: £6-£9</li>
                    <li>• Stone to Barlaston: £8-£12</li>
                    <li>• Stone to Trentham: £12-£15</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-3">Stone to Nearby Towns</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Stone to Stafford: £15-£20</li>
                    <li>• Stone to Hanley (Stoke): £18-£25</li>
                    <li>• Stone to Newcastle-u-Lyme: £20-£28</li>
                    <li>• Stone to Uttoxeter: £25-£32</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Choose a Local Stone Taxi Over Ride-Hailing Apps?
              </h2>
              <p className="text-gray-700 mb-4">
                Ride-hailing apps have become popular in larger cities, but they're not always the best choice in smaller market towns like Stone. Here's why local residents stick with proper <strong>taxi services in Stone</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>
                  <strong>Reliable availability:</strong> Apps struggle to find drivers in Stone, especially late at night or during busy periods. We're always here because we're based in Stone.
                </li>
                <li>
                  <strong>Local knowledge:</strong> Our drivers know Stone inside out — the quickest routes, where roadworks are, which streets have parking restrictions. App drivers often rely entirely on sat navs and don't know the local area.
                </li>
                <li>
                  <strong>No surge pricing:</strong> Apps hike prices during busy periods — Friday nights, bad weather, local events. We charge the same fair rate regardless of demand.
                </li>
                <li>
                  <strong>Proper licensing:</strong> All our drivers hold private hire licences and professional insurance. App drivers' insurance and licensing status can be less clear.
                </li>
                <li>
                  <strong>Vehicle choice:</strong> Need a bigger vehicle? <Link href="/wheelchair-accessible-taxi">Wheelchair accessible transport</Link>? Child seats? We can provide exactly what you need. Apps limit you to whatever's available nearby.
                </li>
                <li>
                  <strong>Direct communication:</strong> Speak to a real person who can handle special requests, answer questions, or make changes to your booking.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Specialist Taxi Services for Stone Residents
              </h2>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Wheelchair Accessible Taxis in Stone
              </h3>
              <p className="text-gray-700 mb-4">
                We operate purpose-built <Link href="/wheelchair-accessible-taxi">wheelchair accessible vehicles</Link> with proper ramps and restraints complying with BSI PAS 2012-1 standards. These vehicles must be requested when booking to ensure availability. Our drivers are trained in assisting wheelchair users and ensuring safe, comfortable transport.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Days Out and Group Transport
              </h3>
              <p className="text-gray-700 mb-4">
                Planning a family trip to <Link href="/alton-towers-taxi">Alton Towers</Link> (just 16 miles from Stone)? A day at Trentham Gardens? Uttoxeter Races? We provide return transport to all local attractions. Book both legs in advance and you're guaranteed a pickup at your chosen time — no waiting for available drivers after a long day out. Our minibuses can accommodate groups of up to 16 passengers, keeping everyone together.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Corporate and Business Accounts
              </h3>
              <p className="text-gray-700 mb-4">
                Many Stone businesses use our <Link href="/account-work">corporate accounts service</Link> for reliable business transport. Benefits include monthly invoicing, priority bookings, dedicated account management, and executive vehicles for client meetings. Perfect for regular employee commutes, train station transfers, or business travel across Staffordshire.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Special Occasions Transport
              </h3>
              <p className="text-gray-700 mb-4">
                Weddings, anniversaries, milestone birthdays, proms — we provide <Link href="/every-occasion">special occasion transport</Link> across Stone and Staffordshire. Choose executive vehicles for premium comfort, or minibuses to keep wedding parties and groups together. We understand the importance of punctuality and presentation on your special day.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Frequently Asked Questions About Taxis in Stone
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">How quickly can I get a taxi in Stone?</h3>
                  <p className="text-gray-700">
                    For immediate bookings within Stone, we typically have a vehicle with you within 5-15 minutes depending on current demand and your exact location. During very busy periods (Friday/Saturday nights, school holidays), this may extend slightly. Booking in advance guarantees your pickup time.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">Do you operate 24 hours a day in Stone?</h3>
                  <p className="text-gray-700">
                    Yes. 365 Transfers operates 24 hours a day, 7 days a week, 365 days a year. That includes Christmas Day, New Year's Eve, and all bank holidays. Whenever you need a taxi in Stone, we're available.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">Can I pay by card in your taxis?</h3>
                  <p className="text-gray-700">
                    Yes, all our vehicles accept card payments as well as cash. We also offer account facilities for regular business users with monthly invoicing.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">Do you provide child seats?</h3>
                  <p className="text-gray-700">
                    Yes, we provide child seats and booster seats when requested at the time of booking. Just let us know the age and size of your child so we can ensure the appropriate seat is fitted.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">How far from Stone do you travel?</h3>
                  <p className="text-gray-700">
                    We cover the entire Staffordshire area and beyond. Regular journeys include Stoke-on-Trent, Stafford, the M6 corridor, and all UK airports. For longer journeys or <Link href="/complex-journey">complex multi-stop routes</Link>, call us for a quote.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">What's your phone number for bookings?</h3>
                  <p className="text-gray-700">
                    Call <a href="tel:01785335563" className="text-primary hover:underline font-semibold">01785 335563</a> for immediate bookings or to discuss your requirements. You can also call our alternative number <a href="tel:03302235425" className="text-primary hover:underline">0330 223 5425</a>.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white rounded-lg p-8 mt-12">
                <h2 className="text-3xl font-bold mb-4">Book Your Stone Taxi Today</h2>
                <p className="text-xl mb-6 text-gray-200">
                  Whether you're in Stone town centre, Walton, Oulton, or anywhere nearby, 365 Transfers is your local taxi service. Available 24/7/365 with professional drivers, competitive prices, and immediate availability. For bookings and quotes, call <strong>01785 335563</strong> or book online now.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <BookNowButton className="text-lg">
                    Book Your Stone Taxi
                  </BookNowButton>
                  <a
                    href="tel:01785335563"
                    className="bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center"
                  >
                    Call 01785 335563
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/blog"
                className="text-primary hover:underline font-semibold"
              >
                &larr; Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
    </>
  );
}