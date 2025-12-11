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
  title: "Birmingham Airport Taxi from Stone & Stoke on Trent | 365 Transfers",
  description: "Reliable taxi to Birmingham Airport from Stone and Stoke on Trent. Professional airport transfers, flight monitoring, and competitive prices. Book your Birmingham Airport taxi today.",
  keywords: "Birmingham Airport taxi, taxi to Birmingham Airport, Birmingham Airport transfer Stone, Birmingham Airport taxi Stoke on Trent, Stone to Birmingham Airport, Stoke on Trent to Birmingham Airport",
  alternates: {
    canonical: "/birmingham-airport-taxi",
  },
  openGraph: {
    title: "Birmingham Airport Taxi from Stone & Stoke on Trent | 365 Transfers",
    description: "Reliable taxi to Birmingham Airport from Stone and Stoke on Trent. Professional airport transfers, flight monitoring, and competitive prices.",
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

export default function BirminghamAirportTaxi() {
  const serviceSchema = createServiceSchema(
    "Birmingham Airport Taxi",
    "Professional taxi and transfer service from Stone and Stoke on Trent to Birmingham Airport. Reliable, comfortable, and competitively priced airport transfers."
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Airport Transfers", url: "https://taxisstone.co.uk/airport-transfers" },
    {
      name: "Birmingham Airport Taxi",
      url: "https://taxisstone.co.uk/birmingham-airport-taxi",
    },
  ]);

  const faqSchema = createFAQSchema([
    {
      question: "How long does it take to get from Stone to Birmingham Airport?",
      answer: "The journey from Stone to Birmingham Airport typically takes around 50-60 minutes via the M6, depending on traffic conditions. We always factor in extra time to ensure you arrive comfortably before your flight.",
    },
    {
      question: "How much does a taxi from Stoke on Trent to Birmingham Airport cost?",
      answer: "Contact us for a competitive quote for your Birmingham Airport transfer. Prices depend on your exact pickup location and vehicle type. We offer fixed prices with no hidden charges or surge pricing.",
    },
    {
      question: "Do you offer meet and greet at Birmingham Airport?",
      answer: "Yes, we offer a meet and greet service for Birmingham Airport arrivals. Your driver will meet you in the arrivals hall with a name board. This service is available on request when booking.",
    },
    {
      question: "Can I book a return transfer from Birmingham Airport?",
      answer: "Yes, we offer both one-way and return transfers to Birmingham Airport. Booking your return journey in advance ensures reliable transport is waiting when you land.",
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
              Birmingham Airport Taxi
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">
              From Stone & Stoke on Trent
            </p>
            <p className="text-xl text-gray-200">
              Approximately 50-60 minutes from Stone, Staffordshire
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
                  Reliable Transfers to Birmingham Airport
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Birmingham Airport is a major international hub serving the Midlands, offering
                  flights to destinations across Europe, the Middle East, and beyond. Located
                  around an hour from Stone and Stoke on Trent, it's an excellent choice for
                  Staffordshire travellers.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our professional taxi service provides comfortable, reliable transfers to
                  Birmingham Airport. With experienced drivers who know the M6 and surrounding
                  routes, we'll get you to the airport on time, every time - whether you're
                  catching an early morning flight or a late-night departure.
                </p>
              </div>
            </div>

            {/* Key Info Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">~60</div>
                <div className="text-gray-600">Minutes from Stone</div>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Service Available</div>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">M6</div>
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
                Our Birmingham Airport Services
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-l-4 border-accent p-6 rounded-r-lg shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">Airport Drop-offs</h3>
                  <p className="text-gray-700 mb-4">
                    We'll collect you from Stone, Stoke on Trent, or anywhere in Staffordshire
                    and take you directly to Birmingham Airport. Our drivers will help with
                    luggage and drop you at the terminal entrance.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>- Door-to-terminal service</li>
                    <li>- Luggage assistance included</li>
                    <li>- Arrive relaxed and on time</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-accent p-6 rounded-r-lg shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">Airport Pickups</h3>
                  <p className="text-gray-700 mb-4">
                    Flying into Birmingham? We track your flight and will be waiting when you
                    land. If your flight is delayed, we adjust automatically - no extra charge
                    for reasonable delays.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>- Flight monitoring included</li>
                    <li>- No charge for delays</li>
                    <li>- Optional meet & greet</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-accent p-6 rounded-r-lg shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">Business Travel</h3>
                  <p className="text-gray-700 mb-4">
                    Birmingham Airport is popular for business flights. We offer executive
                    vehicles and professional service for corporate travellers heading to
                    meetings or conferences.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>- Executive vehicles available</li>
                    <li>- Professional, suited drivers</li>
                    <li>- Corporate accounts welcome</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-accent p-6 rounded-r-lg shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">Holiday Transfers</h3>
                  <p className="text-gray-700 mb-4">
                    Starting your holiday stress-free? Our comfortable vehicles and professional
                    drivers ensure your trip gets off to a great start. Vehicles for families
                    and groups available.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>- Family-friendly service</li>
                    <li>- Space for holiday luggage</li>
                    <li>- Vehicles up to 16 passengers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Birmingham */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-8">
                Why Fly from Birmingham?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">International Routes</h3>
                  <p className="text-gray-700">
                    Direct flights to Europe, Middle East, Caribbean, and beyond. Major airlines
                    including Emirates, Ryanair, Jet2, and TUI operate from Birmingham.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Less Congested</h3>
                  <p className="text-gray-700">
                    Often less busy than Manchester, meaning shorter queues at security and
                    check-in. A more relaxed airport experience for Staffordshire travellers.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Good Connections</h3>
                  <p className="text-gray-700">
                    Direct M6 route from Staffordshire makes Birmingham Airport easily accessible.
                    Our experienced drivers know the best routes to avoid traffic.
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
                We provide Birmingham Airport transfers from Stone, Stoke on Trent, and
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
              title="Birmingham Airport Taxi FAQs"
              description="Common questions about our taxi service to Birmingham Airport from Stone and Stoke on Trent"
              faqs={[
                {
                  question: "How long does it take to get from Stone to Birmingham Airport?",
                  answer: "The journey from Stone to Birmingham Airport typically takes around 50-60 minutes via the M6, depending on traffic conditions. We always factor in extra time to ensure you arrive comfortably before your flight.",
                },
                {
                  question: "How much does a taxi from Stoke on Trent to Birmingham Airport cost?",
                  answer: "Contact us for a competitive quote for your Birmingham Airport transfer. Prices depend on your exact pickup location and vehicle type. We offer fixed prices with no hidden charges or surge pricing.",
                },
                {
                  question: "Do you offer meet and greet at Birmingham Airport?",
                  answer: "Yes, we offer a meet and greet service for Birmingham Airport arrivals. Your driver will meet you in the arrivals hall with a name board. This service is available on request when booking.",
                },
                {
                  question: "Can I book a return transfer from Birmingham Airport?",
                  answer: "Yes, we offer both one-way and return transfers to Birmingham Airport. Booking your return journey in advance ensures reliable transport is waiting when you land.",
                },
              ]}
            />

            {/* CTA Section */}
            <div className="bg-primary text-white rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Book Your Birmingham Airport Taxi</h2>
              <p className="text-xl mb-8 text-gray-200">
                Reliable, comfortable transfers from Stone and Stoke on Trent to Birmingham
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
