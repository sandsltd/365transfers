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
  title: "Taxi Stone: Reliable Local Taxi Service in Stone, Staffordshire | 365 Transfers",
  description: "Need a taxi in Stone? 365 Transfers offers 24/7 local taxi services across Stone, Staffordshire. Professional drivers, fair prices, immediate availability. Call 01785 335563.",
  keywords: "taxi Stone, Stone taxi, taxis Stone, taxi Stone Staffordshire, Stone taxi service, local taxi Stone, cab Stone, private hire Stone, Stone cabs",
  openGraph: {
    title: "Taxi Stone: Local Taxi Service in Stone, Staffordshire",
    description: "Reliable 24/7 taxi service in Stone. Local journeys, school runs, shopping trips and more. Professional drivers based in Stone town centre.",
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
    "Taxi Stone: Your Reliable Local Taxi Service in Stone, Staffordshire",
    "Looking for a taxi in Stone? 365 Transfers provides professional 24/7 taxi services across Stone, Staffordshire and surrounding areas with experienced local drivers.",
    "2026-05-23"
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
                Taxi Stone: Your Local Taxi Service in Stone, Staffordshire
              </h1>
              <p className="text-gray-600">
                Published on{" "}
                {new Date("2026-05-23").toLocaleDateString("en-GB", {
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
                  Looking for a <strong>taxi in Stone</strong>? You need more than just any cab — you need a local service that knows the town inside out, runs around the clock, and shows up when you need it. 365 Transfers has been providing <strong>taxi services in Stone, Staffordshire</strong> for over 20 years. We're based on Berkeley Street in Stone town centre, our drivers know every shortcut and side street, and we're available 24 hours a day, 7 days a week, 365 days a year.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Stone Residents Trust 365 Transfers
              </h2>
              <p className="text-gray-700 mb-4">
                When you book a <strong>taxi in Stone</strong>, you want to know it'll actually turn up. You want a driver who knows where they're going without relying entirely on a sat nav. And you want fair pricing without hidden charges or surge fees. That's exactly what we deliver:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>
                  <strong>Based in Stone town centre:</strong> Our office is at 3 Berkeley Court Mews on Berkeley Street. We're not a Stoke firm covering Stone as an afterthought — we're genuinely local.
                </li>
                <li>
                  <strong>Available 24/7/365:</strong> Early morning hospital appointment? Late night pickup from Stone Railway Station? Last-minute dash to the shops? We're always available, every single day of the year.
                </li>
                <li>
                  <strong>Experienced local drivers:</strong> Our drivers don't just know Stone — they live and work here. They know the one-way systems, the school run traffic patterns, and the quickest routes at different times of day.
                </li>
                <li>
                  <strong>Fully licensed and insured:</strong> All our drivers are DBS checked, hold private hire licenses, and have completed BTEC qualifications and C.S.E training. You're in safe, professional hands.
                </li>
                <li>
                  <strong>Transparent pricing:</strong> We quote upfront and stick to it. No surge pricing, no hidden fees, no nasty surprises.
                </li>
                <li>
                  <strong>Fleet for every need:</strong> From standard saloon cars to 16-seater minibuses and <Link href="/wheelchair-accessible-taxi">wheelchair accessible vehicles</Link>. Whatever your requirements, we've got the right vehicle.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Common Taxi Journeys Around Stone
              </h2>
              <p className="text-gray-700 mb-4">
                Most <strong>taxi journeys in Stone</strong> are the everyday essentials that keep life running smoothly. Here's what we handle most often:
              </p>
              
              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Shopping Trips
              </h3>
              <p className="text-gray-700 mb-4">
                Need to get to Tesco on Stafford Road? Or perhaps you're heading into Stone High Street for a proper browse around the independent shops? We'll drop you off, wait if you need us to, or come back to collect you when you're done. Many of our regular customers book us for their weekly shop — it beats struggling with heavy bags on the bus.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Medical Appointments
              </h3>
              <p className="text-gray-700 mb-4">
                Getting to County Hospital in Stafford, Royal Stoke University Hospital, or your local GP surgery shouldn't add extra stress to an already worrying day. We provide reliable transport to and from all medical appointments. We understand that appointment times can overrun, so we stay flexible and won't charge you extra if you're kept waiting.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                School Runs and After-School Activities
              </h3>
              <p className="text-gray-700 mb-4">
                We provide regular <Link href="/school-contracts">school transport</Link> for families across Stone. Whether it's Christ Church Academy, Walton Priory Middle School, Alleyne's Academy, or any school in the surrounding area, we offer safe, reliable transport with DBS-checked drivers. Parents trust us because we're never late, we communicate clearly, and we understand that children's safety is paramount.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Stone Railway Station Pickups
              </h3>
              <p className="text-gray-700 mb-4">
                Stone Railway Station sits on the Crewe to Derby line with regular services to Stoke-on-Trent (7 minutes), Stafford (10 minutes), and Crewe (33 minutes). Whether you're arriving late after a business trip or need a reliable ride to catch an early train, we provide prompt station transfers. Just let us know your train time and we'll be waiting.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Work Commutes
              </h3>
              <p className="text-gray-700 mb-4">
                Many Stone residents work in nearby towns but don't drive or prefer not to use their car. We offer regular commuter services to Stafford, <Link href="/taxi-stoke-on-trent">Stoke-on-Trent</Link>, the business parks along the A34, or anywhere else your job takes you. We can arrange daily pickups at the same time each day, or provide flexibility for shift work.
              </p>

              <div className="bg-white border-2 border-primary rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-primary mb-3">Quick Booking Tip</h3>
                <p className="text-gray-700">
                  For regular journeys like work commutes or school runs, book in advance to guarantee availability and lock in a competitive rate. Call us on <a href="tel:01785335563" className="text-primary hover:underline font-semibold">01785 335563</a> to discuss your regular transport needs.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Beyond Stone: Serving the Wider Area
              </h2>
              <p className="text-gray-700 mb-4">
                While we're proudly based in Stone, our service extends throughout Staffordshire and beyond. We regularly take passengers to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><Link href="/taxi-stoke-on-trent">Stoke-on-Trent</Link> — all six towns including Hanley, Burslem, Tunstall, Longton, Fenton and Stoke</li>
                <li><Link href="/taxi-stafford">Stafford</Link> — county town and major employment hub</li>
                <li>Newcastle-under-Lyme — town centre, retail parks, and Keele University</li>
                <li>Eccleshall — historic market town west of Stone</li>
                <li>Barlaston — home to Wedgwood pottery and popular with commuters</li>
                <li>Trentham — gardens, shopping village, and Trentham Estate</li>
                <li>Uttoxeter — market town and racecourse</li>
                <li>The Potteries villages — Barlaston, Meir, Stone, and surrounding areas</li>
              </ul>
              <p className="text-gray-700 mb-8">
                We also provide <Link href="/airport-transfers">airport transfers</Link> to all major UK airports, <Link href="/days-out">days out transport</Link> to attractions like Alton Towers, and <Link href="/complex-journey">complex multi-stop journeys</Link> for business or leisure.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                The Right Vehicle for Every Journey
              </h2>
              <p className="text-gray-700 mb-4">
                One frustration we hear from customers who've used other taxi firms is being told "we don't have anything available" or "we can't fit that many people." At 365 Transfers, we maintain a diverse fleet specifically to avoid that problem:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Saloon Cars</h3>
                  <p className="text-gray-700">
                    Up to 4 passengers. Perfect for most local trips around Stone, shopping runs, or station transfers. Clean, comfortable, and efficient.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Estate Cars</h3>
                  <p className="text-gray-700">
                    Up to 4 passengers with significantly more boot space. Ideal if you've got heavy shopping, luggage, or sports equipment to transport.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">6, 7, and 8 Seater Vehicles</h3>
                  <p className="text-gray-700">
                    Perfect for families, small groups, or when you need extra luggage space. Popular for <Link href="/airport-transfers">airport transfers</Link> and <Link href="/every-occasion">special occasions</Link>.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Minibuses (12 & 16 Seaters)</h3>
                  <p className="text-gray-700">
                    For larger groups heading to events, weddings, <Link href="/alton-towers-taxi">Alton Towers</Link>, or corporate functions. All the convenience of private transport without coordinating multiple vehicles.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Wheelchair Accessible Vehicles</h3>
                  <p className="text-gray-700">
                    Purpose-built <Link href="/wheelchair-accessible-taxi">wheelchair accessible taxis</Link> with proper ramps and restraints. Comfortable, safe transport for passengers with mobility needs.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Executive Vehicles</h3>
                  <p className="text-gray-700">
                    Premium comfort for business travel and special occasions. Popular with corporate clients and available through our <Link href="/account-work">business accounts service</Link>.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                How to Book a Taxi in Stone
              </h2>
              <p className="text-gray-700 mb-4">
                We've made booking as straightforward as possible. Choose whichever method works best for you:
              </p>
              
              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                1. Phone Booking (Fastest for Immediate Journeys)
              </h3>
              <p className="text-gray-700 mb-4">
                Call <a href="tel:01785335563" className="text-primary hover:underline font-semibold">01785 335563</a> to speak directly with our team. We'll take your details, confirm availability, and dispatch the nearest vehicle. For immediate pickups in Stone, we can usually have a taxi with you within minutes.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                2. Online Booking (Best for Advance Bookings)
              </h3>
              <p className="text-gray-700 mb-4">
                Use our online booking system on this website. It's particularly useful for advance bookings like <Link href="/airport-transfers">airport transfers</Link>, <Link href="/events-tours">events and tours</Link>, or regular journeys where you want guaranteed availability.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                3. Corporate Account (For Business Users)
              </h3>
              <p className="text-gray-700 mb-4">
                If you're booking regularly for business, consider setting up a <Link href="/account-work">corporate account</Link>. You'll get monthly invoicing, dedicated account management, and priority booking for your team.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-primary mb-3">What We Need When You Book</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Pickup location (with postcode if possible)</li>
                  <li>Destination</li>
                  <li>Date and time</li>
                  <li>Number of passengers</li>
                  <li>Any special requirements (wheelchair access, child seats, extra luggage space, etc.)</li>
                  <li>Your contact phone number</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Popular Stone Taxi Routes and Prices
              </h2>
              <p className="text-gray-700 mb-4">
                While every journey is quoted individually based on exact addresses and any special requirements, here are some typical routes from Stone to give you an idea of what to expect:
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-primary mb-3">Local Stone Journeys</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Within Stone town centre: typically £5-£8</li>
                  <li>• Stone to Stone Railway Station: typically £6-£9</li>
                  <li>• Stone to Trentham Gardens: typically £12-£15</li>
                  <li>• Stone to Barlaston: typically £8-£12</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-primary mb-3">Stone to Nearby Towns</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Stone to Stafford town centre: typically £15-£20</li>
                  <li>• Stone to Stoke-on-Trent (Hanley): typically £18-£25</li>
                  <li>• Stone to Newcastle-under-Lyme: typically £20-£28</li>
                  <li>• Stone to Uttoxeter: typically £25-£32</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-primary mb-3">Stone to Airports</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Stone to <Link href="/manchester-airport-taxi">Manchester Airport</Link>: typically £90-£98</li>
                  <li>• Stone to <Link href="/birmingham-airport-taxi">Birmingham Airport</Link>: typically £89-£95</li>
                  <li>• Stone to <Link href="/east-midlands-airport-taxi">East Midlands Airport</Link>: typically £90-£103</li>
                  <li>• Stone to <Link href="/liverpool-airport-taxi">Liverpool Airport</Link>: typically £130-£135</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Airport transfer prices include flight monitoring, meet and greet service, and waiting time at no extra charge. See our <Link href="/airport-transfer-prices">full airport transfer prices</Link> for more details.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Choose a Local Stone Taxi Over Apps?
              </h2>
              <p className="text-gray-700 mb-4">
                Ride-hailing apps have their place, but they're not always the best choice in smaller towns like Stone. Here's why many residents prefer a proper <strong>local taxi service</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>
                  <strong>Better local knowledge:</strong> Our drivers know Stone inside out. They know which streets have roadworks, where parking is tricky, and the quickest routes at rush hour.
                </li>
                <li>
                  <strong>Reliable availability:</strong> Apps can struggle to find drivers in smaller towns, especially late at night or early morning. We're always available because we're based here.
                </li>
                <li>
                  <strong>No surge pricing:</strong> Apps hike prices when demand is high — Friday nights, bad weather, events. We charge the same fair rate regardless.
                </li>
                <li>
                  <strong>Proper licensing and insurance:</strong> All our drivers hold private hire licences and professional insurance. App drivers' insurance status can be less clear.
                </li>
                <li>
                  <strong>Vehicle choice:</strong> Need a bigger vehicle? Wheelchair access? Child seats? We can provide exactly what you need. Apps limit you to whatever's nearby.
                </li>
                <li>
                  <strong>Direct communication:</strong> Speak to a real person who can answer questions, handle special requests, or adjust plans if needed.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Special Services for Stone Residents
              </h2>
              
              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Regular School Transport
              </h3>
              <p className="text-gray-700 mb-4">
                We provide dedicated <Link href="/school-contracts">school transport contracts</Link> for families across Stone and surrounding villages. All drivers are DBS checked, we're never late, and parents have our direct contact details for peace of mind. Many families use us daily for runs to schools in Stafford, Stoke-on-Trent, or specialist schools further afield.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Days Out and Attractions
              </h3>
              <p className="text-gray-700 mb-4">
                Planning a family trip to <Link href="/alton-towers-taxi">Alton Towers</Link>? A day out at Trentham Gardens? A visit to Uttoxeter Racecourse? We provide return transport to all local attractions and events. Book both legs in advance and you're guaranteed a pickup at the time you choose — no waiting around for apps or trying to find a taxi after a long day.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Special Occasions Transport
              </h3>
              <p className="text-gray-700 mb-4">
                Weddings, anniversaries, milestone birthdays — we provide <Link href="/every-occasion">special occasion transport</Link> throughout Stone and Staffordshire. Choose executive vehicles for extra comfort, or minibuses to keep groups together. We understand the importance of punctuality and presentation on your big day.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                Corporate and Business Travel
              </h3>
              <p className="text-gray-700 mb-4">
                Many Stone businesses use our <Link href="/account-work">corporate accounts service</Link> for reliable business transport. Monthly invoicing, priority bookings, and executive vehicles when needed. Perfect for client meetings, train station transfers, or regular commutes for employees.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Frequently Asked Questions About Stone Taxis
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">How quickly can you get a taxi to me in Stone?</h3>
                  <p className="text-gray-700">
                    For immediate bookings within Stone, we typically have a vehicle with you within 5-15 minutes depending on current demand and your exact location. During very busy periods (Friday/Saturday nights, school holidays), this may extend slightly. Booking in advance guarantees your pickup time.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">Do you operate 24 hours in Stone?</h3>
                  <p className="text-gray-700">
                    Yes. 365 Transfers operates 24 hours a day, 7 days a week, 365 days a year. That includes Christmas Day, New Year's Eve, and all bank holidays. If you need a taxi in Stone, we're available.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">Can I pay by card in the vehicle?</h3>
                  <p className="text-gray-700">
                    Yes, all our vehicles accept card payments as well as cash. We also offer account facilities for regular business users with monthly invoicing.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">Do you provide child seats?</h3>
                  <p className="text-gray-700">
                    Yes, we can provide child seats and booster seats when requested at the time of booking. Just let us know the age and size of the child so we can ensure we have the appropriate seat fitted.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">Can you transport wheelchairs?</h3>
                  <p className="text-gray-700">
                    Yes, we operate dedicated <Link href="/wheelchair-accessible-taxi">wheelchair accessible vehicles</Link> with proper ramps and restraints. These must be requested when booking to ensure availability.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">How do I get a quote for a longer journey?</h3>
                  <p className="text-gray-700">
                    For airport transfers, days out, or longer journeys, use our online booking system or call <a href="tel:01785335563" className="text-primary hover:underline">01785 335563</a>. We'll provide an accurate fixed-price quote based on your exact requirements.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white rounded-lg p-8 mt-12">
                <h2 className="text-3xl font-bold mb-4">Need a Taxi in Stone Right Now?</h2>
                <p className="text-xl mb-6 text-gray-200">
                  Whether you're in Stone town centre, Walton, Oulton, or anywhere nearby, we're your local taxi service. Available 24/7/365 with professional drivers, fair prices, and immediate availability. Call <strong>01785 335563</strong> or book online now.
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