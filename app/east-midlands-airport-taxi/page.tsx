import Link from "next/link";
import type { Metadata } from "next";
import BookNowButton from "@/components/BookNowButton";
import StructuredData from "@/components/StructuredData";
import FAQ from "@/components/FAQ";
import {
  createServiceSchema,
  createBreadcrumbSchema,
  createFAQSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "East Midlands Airport Taxi from Stone & Stoke on Trent | 365 Transfers",
  description: "Reliable taxi to East Midlands Airport from Stone and Stoke on Trent. Professional airport transfers, flight monitoring, and competitive prices. Book your East Midlands Airport taxi today.",
  keywords: "East Midlands Airport taxi, taxi to East Midlands Airport, East Midlands Airport transfer Stone, East Midlands Airport taxi Stoke on Trent, Stone to East Midlands Airport, EMA taxi",
  alternates: {
    canonical: "/east-midlands-airport-taxi",
  },
  openGraph: {
    title: "East Midlands Airport Taxi from Stone & Stoke on Trent | 365 Transfers",
    description: "Reliable taxi to East Midlands Airport from Stone and Stoke on Trent. Professional airport transfers, flight monitoring, and competitive prices.",
    type: "website",
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

export default function EastMidlandsAirportTaxi() {
  const serviceSchema = createServiceSchema(
    "East Midlands Airport Taxi",
    "Professional taxi and transfer service from Stone and Stoke on Trent to East Midlands Airport. Reliable, comfortable, and competitively priced airport transfers."
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Airport Transfers", url: "https://taxisstone.co.uk/airport-transfers" },
    {
      name: "East Midlands Airport Taxi",
      url: "https://taxisstone.co.uk/east-midlands-airport-taxi",
    },
  ]);

  const faqSchema = createFAQSchema([
    {
      question: "How long does it take to get from Stone to East Midlands Airport?",
      answer: "The journey from Stone to East Midlands Airport typically takes around 45-55 minutes via the A50 and M1, depending on traffic conditions. We always allow extra time to ensure you arrive with plenty of time before your flight.",
    },
    {
      question: "How much does a taxi from Stoke on Trent to East Midlands Airport cost?",
      answer: "Contact us for a competitive quote for your East Midlands Airport transfer. Prices depend on your exact pickup location and vehicle type. We offer fixed prices with no hidden charges.",
    },
    {
      question: "Do you provide early morning transfers to East Midlands Airport?",
      answer: "Yes, we operate 24/7, 365 days a year. East Midlands Airport is known for early morning holiday flights, and we're experienced in getting passengers there on time for those 4am and 5am departures.",
    },
    {
      question: "Can you pick me up from East Midlands Airport late at night?",
      answer: "Absolutely. We monitor flight arrivals and will be waiting for you regardless of the time. East Midlands has many late-night arrivals, and we provide reliable pickup service around the clock.",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              East Midlands Airport Taxi
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">
              From Stone & Stoke on Trent
            </p>
            <p className="text-xl text-gray-200">
              Approximately 45-55 minutes from Stone, Staffordshire
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="mb-16">
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Reliable Transfers to East Midlands Airport
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  East Midlands Airport (EMA) is a popular choice for Staffordshire travellers,
                  particularly for package holidays and budget airlines. Located between Derby
                  and Nottingham, it's easily accessible from Stone and Stoke on Trent via
                  the A50 and M1.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Known for its early morning departures, East Midlands Airport requires
                  reliable transport that operates around the clock. Our 24/7 service ensures
                  you'll get to your flight on time, whether it departs at 5am or 11pm.
                </p>
              </div>
            </div>

            {/* Key Info Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">~50</div>
                <div className="text-gray-600">Minutes from Stone</div>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Early Flight Specialists</div>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">A50</div>
                <div className="text-gray-600">Direct Route</div>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">Fixed</div>
                <div className="text-gray-600">Prices Quoted</div>
              </div>
            </div>

            {/* Services */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Our East Midlands Airport Services
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-l-4 border-accent p-6 rounded-r-lg shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">Early Morning Departures</h3>
                  <p className="text-gray-700 mb-4">
                    East Midlands is famous for early morning holiday flights. We're experts
                    at those 3am pickups - you'll be collected on time and arrive at the
                    airport ready for your flight.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>- 24/7 availability</li>
                    <li>- Early morning specialists</li>
                    <li>- Never late, guaranteed</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-accent p-6 rounded-r-lg shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">Late Night Pickups</h3>
                  <p className="text-gray-700 mb-4">
                    Flight arriving late? We monitor arrivals and will be waiting for you
                    regardless of the time. No need to worry about finding transport at
                    midnight.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>- Flight tracking included</li>
                    <li>- No extra charge for delays</li>
                    <li>- Waiting in arrivals</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-accent p-6 rounded-r-lg shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">Holiday Transfers</h3>
                  <p className="text-gray-700 mb-4">
                    East Midlands is popular with Jet2, TUI, and Ryanair for holiday flights.
                    Start your holiday stress-free with a comfortable transfer from Stone
                    or Stoke on Trent.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>- Family-friendly service</li>
                    <li>- Space for holiday luggage</li>
                    <li>- Comfortable vehicles</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-accent p-6 rounded-r-lg shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">Group Transfers</h3>
                  <p className="text-gray-700 mb-4">
                    Travelling with family or friends? Our larger vehicles can accommodate
                    groups up to 16 passengers with luggage. More cost-effective than
                    multiple taxis.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>- Vehicles up to 16 passengers</li>
                    <li>- All luggage accommodated</li>
                    <li>- Split the cost</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why East Midlands */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-8">
                Why Fly from East Midlands?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Holiday Flights</h3>
                  <p className="text-gray-700">
                    Popular with Jet2, TUI, and Ryanair for European holiday destinations.
                    Great choice for package holidays and city breaks from Staffordshire.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Easy Parking</h3>
                  <p className="text-gray-700">
                    But why park when you can be dropped at the door? Our taxi service
                    eliminates parking costs and the hassle of shuttle buses.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Quick Check-in</h3>
                  <p className="text-gray-700">
                    Single terminal means straightforward navigation. Get through security
                    and relax before your flight without rushing between buildings.
                  </p>
                </div>
              </div>
            </div>

            {/* Coverage Areas */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-8">
                Areas We Cover
              </h2>
              <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
                We provide East Midlands Airport transfers from Stone, Stoke on Trent, and
                throughout Staffordshire. Typical pickup locations include:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  "Stone",
                  "Stoke on Trent",
                  "Stafford",
                  "Newcastle-under-Lyme",
                  "Uttoxeter",
                  "Eccleshall",
                  "Barlaston",
                  "Trentham",
                ].map((area) => (
                  <div
                    key={area}
                    className="bg-gray-50 rounded-lg p-4 text-center text-gray-700 font-medium"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <FAQ
              title="East Midlands Airport Taxi FAQs"
              description="Common questions about our taxi service to East Midlands Airport from Stone and Stoke on Trent"
              faqs={[
                {
                  question: "How long does it take to get from Stone to East Midlands Airport?",
                  answer: "The journey from Stone to East Midlands Airport typically takes around 45-55 minutes via the A50 and M1, depending on traffic conditions. We always allow extra time to ensure you arrive with plenty of time before your flight.",
                },
                {
                  question: "How much does a taxi from Stoke on Trent to East Midlands Airport cost?",
                  answer: "Contact us for a competitive quote for your East Midlands Airport transfer. Prices depend on your exact pickup location and vehicle type. We offer fixed prices with no hidden charges.",
                },
                {
                  question: "Do you provide early morning transfers to East Midlands Airport?",
                  answer: "Yes, we operate 24/7, 365 days a year. East Midlands Airport is known for early morning holiday flights, and we're experienced in getting passengers there on time for those 4am and 5am departures.",
                },
                {
                  question: "Can you pick me up from East Midlands Airport late at night?",
                  answer: "Absolutely. We monitor flight arrivals and will be waiting for you regardless of the time. East Midlands has many late-night arrivals, and we provide reliable pickup service around the clock.",
                },
              ]}
            />

            {/* CTA Section */}
            <div className="bg-primary text-white rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Book Your East Midlands Airport Taxi</h2>
              <p className="text-xl mb-8 text-gray-200">
                Reliable, comfortable transfers from Stone and Stoke on Trent to East Midlands
                Airport. Book online or call us on 01785 335563.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookNowButton className="text-lg">
                  Book Now
                </BookNowButton>
                <a
                  href="tel:01785335563"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-lg font-semibold transition-colors"
                >
                  Call 01785 335563
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
