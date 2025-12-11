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
  title: "Manchester Airport Taxi from Stone & Stoke on Trent | 365 Transfers",
  description: "Reliable taxi to Manchester Airport from Stone and Stoke on Trent. Professional airport transfers, flight monitoring, and competitive prices. Book your Manchester Airport taxi today.",
  keywords: "Manchester Airport taxi, taxi to Manchester Airport, Manchester Airport transfer Stone, Manchester Airport taxi Stoke on Trent, Stone to Manchester Airport, Stoke on Trent to Manchester Airport",
  alternates: {
    canonical: "/manchester-airport-taxi",
  },
  openGraph: {
    title: "Manchester Airport Taxi from Stone & Stoke on Trent | 365 Transfers",
    description: "Reliable taxi to Manchester Airport from Stone and Stoke on Trent. Professional airport transfers, flight monitoring, and competitive prices.",
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

export default function ManchesterAirportTaxi() {
  const serviceSchema = createServiceSchema(
    "Manchester Airport Taxi",
    "Professional taxi and transfer service from Stone and Stoke on Trent to Manchester Airport. Reliable, comfortable, and competitively priced airport transfers."
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Airport Transfers", url: "https://taxisstone.co.uk/airport-transfers" },
    {
      name: "Manchester Airport Taxi",
      url: "https://taxisstone.co.uk/manchester-airport-taxi",
    },
  ]);

  const faqSchema = createFAQSchema([
    {
      question: "How long does it take to get from Stone to Manchester Airport?",
      answer: "The journey from Stone to Manchester Airport typically takes around 45-50 minutes, depending on traffic conditions. We always allow extra time to ensure you arrive with plenty of time before your flight.",
    },
    {
      question: "How much does a taxi from Stone to Manchester Airport cost?",
      answer: "Contact us for a competitive quote for your Manchester Airport transfer. Prices depend on your exact pickup location and vehicle type. We offer fixed prices with no hidden charges.",
    },
    {
      question: "Do you cover all Manchester Airport terminals?",
      answer: "Yes, we provide transfers to and from all three Manchester Airport terminals (T1, T2, and T3). Just let us know which terminal you need when booking.",
    },
    {
      question: "Can you pick me up from Manchester Airport?",
      answer: "Yes, we offer both drop-off and pickup services at Manchester Airport. For pickups, we monitor your flight and wait in the arrivals area. There's no extra charge for reasonable flight delays.",
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
              Manchester Airport Taxi
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">
              From Stone & Stoke on Trent
            </p>
            <p className="text-xl text-gray-200">
              Approximately 45 minutes from Stone, Staffordshire
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
                  Reliable Transfers to Manchester Airport
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Manchester Airport is the closest major international airport to Stone and
                  Stoke on Trent, making it the preferred choice for many Staffordshire
                  travellers. Our professional taxi service ensures you reach the airport
                  relaxed and on time, whether you're catching an early morning flight or
                  returning late at night.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As one of the UK's busiest airports, Manchester offers flights to destinations
                  worldwide. We provide transfers to all three terminals, with experienced
                  drivers who know the best routes to avoid traffic and get you there efficiently.
                </p>
              </div>
            </div>

            {/* Key Info Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">~45</div>
                <div className="text-gray-600">Minutes from Stone</div>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Service Available</div>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <div className="text-gray-600">Terminals Covered</div>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">Fixed</div>
                <div className="text-gray-600">Prices Quoted</div>
              </div>
            </div>

            {/* Services */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Our Manchester Airport Services
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-l-4 border-accent p-6 rounded-r-lg shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">Airport Drop-offs</h3>
                  <p className="text-gray-700 mb-4">
                    We'll pick you up from Stone, Stoke on Trent, or anywhere in Staffordshire
                    and get you to Manchester Airport with plenty of time to spare. Our drivers
                    know the best routes and will help with your luggage.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>- Door-to-door service</li>
                    <li>- All terminals covered</li>
                    <li>- Luggage assistance included</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-accent p-6 rounded-r-lg shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">Airport Pickups</h3>
                  <p className="text-gray-700 mb-4">
                    Arriving at Manchester Airport? We'll be waiting for you. We monitor your
                    flight status and adjust pickup times automatically if your flight is
                    delayed - at no extra charge.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>- Flight monitoring included</li>
                    <li>- No charge for delays</li>
                    <li>- Meet & greet available</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-accent p-6 rounded-r-lg shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">Early Morning Flights</h3>
                  <p className="text-gray-700 mb-4">
                    Got an early flight? No problem. We operate 24/7, 365 days a year. Whether
                    your flight leaves at 5am or midnight, we'll get you there on time.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>- 24/7 availability</li>
                    <li>- Early morning specialists</li>
                    <li>- Reliable every time</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-accent p-6 rounded-r-lg shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">Group Transfers</h3>
                  <p className="text-gray-700 mb-4">
                    Travelling as a family or group? We have vehicles from saloons to 16-seater
                    minibuses. Travel together and split the cost - often cheaper than multiple
                    taxis.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>- Vehicles up to 16 passengers</li>
                    <li>- Space for all luggage</li>
                    <li>- Cost-effective for groups</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Coverage Areas */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-8">
                Areas We Cover
              </h2>
              <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
                We provide Manchester Airport transfers from Stone, Stoke on Trent, and
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
              title="Manchester Airport Taxi FAQs"
              description="Common questions about our taxi service to Manchester Airport from Stone and Stoke on Trent"
              faqs={[
                {
                  question: "How long does it take to get from Stone to Manchester Airport?",
                  answer: "The journey from Stone to Manchester Airport typically takes around 45-50 minutes, depending on traffic conditions. We always allow extra time to ensure you arrive with plenty of time before your flight.",
                },
                {
                  question: "How much does a taxi from Stone to Manchester Airport cost?",
                  answer: "Contact us for a competitive quote for your Manchester Airport transfer. Prices depend on your exact pickup location and vehicle type. We offer fixed prices with no hidden charges.",
                },
                {
                  question: "Do you cover all Manchester Airport terminals?",
                  answer: "Yes, we provide transfers to and from all three Manchester Airport terminals (T1, T2, and T3). Just let us know which terminal you need when booking.",
                },
                {
                  question: "Can you pick me up from Manchester Airport?",
                  answer: "Yes, we offer both drop-off and pickup services at Manchester Airport. For pickups, we monitor your flight and wait in the arrivals area. There's no extra charge for reasonable flight delays.",
                },
              ]}
            />

            {/* CTA Section */}
            <div className="bg-primary text-white rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Book Your Manchester Airport Taxi</h2>
              <p className="text-xl mb-8 text-gray-200">
                Reliable, comfortable transfers from Stone and Stoke on Trent to Manchester
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
