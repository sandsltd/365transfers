import Link from "next/link";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airport Taxi | Airport Transfers Stone & Stoke on Trent | 365 Transfers",
  description: "Airport taxi and transfer services from Stone and Stoke on Trent to all major UK airports. Professional airport taxi to Manchester, Birmingham, East Midlands, Liverpool, and London airports.",
  keywords: "airport taxi, airport transfers, Stone airport taxi, Stoke on Trent airport taxi, airport taxi near me, Manchester airport taxi, Birmingham airport taxi, airport transfers Stone, airport transfers Stoke on Trent",
  openGraph: {
    title: "Airport Taxi | Airport Transfers Stone & Stoke on Trent | 365 Transfers",
    description: "Professional airport taxi and transfer services from Stone and Stoke on Trent to all major UK airports including Manchester, Birmingham, East Midlands, Liverpool, and London.",
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

export default function AirportTransfers() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Airport Transfers from Stone
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">
              Reliable, Professional, On Time
            </p>
            <p className="text-xl text-gray-200">
              Serving all major UK airports from Stone, Staffordshire
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
                  Professional Airport Transfer Service
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Start or end your journey with confidence. Our airport transfer service 
                  from Stone ensures you arrive at the airport on time, every time. We 
                  specialize in stress-free airport transfers to and from all major UK 
                  airports, with professional drivers, comfortable vehicles, and fixed 
                  competitive prices.
                </p>
              </div>
            </div>

            {/* Airport Services */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Airports We Serve
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Manchester Airport</h3>
                  <p className="text-gray-600 mb-3">
                    Approximately 45 minutes from Stone
                  </p>
                  <p className="text-sm text-gray-700">
                    One of the UK's busiest airports, serving destinations worldwide. 
                    We provide reliable transfers for all terminals.
                  </p>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Birmingham Airport</h3>
                  <p className="text-gray-600 mb-3">
                    Approximately 1 hour from Stone
                  </p>
                  <p className="text-sm text-gray-700">
                    Major international airport with excellent connections. 
                    We ensure timely arrivals for all flights.
                  </p>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">East Midlands Airport</h3>
                  <p className="text-gray-600 mb-3">
                    Approximately 1 hour from Stone
                  </p>
                  <p className="text-sm text-gray-700">
                    Popular for holiday flights and business travel. 
                    Convenient transfers available.
                  </p>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Liverpool John Lennon</h3>
                  <p className="text-gray-600 mb-3">
                    Approximately 1 hour from Stone
                  </p>
                  <p className="text-sm text-gray-700">
                    Regional airport with great connections. 
                    Reliable transfer service available.
                  </p>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">London Airports</h3>
                  <p className="text-gray-600 mb-3">
                    Heathrow, Gatwick, Stansted, Luton
                  </p>
                  <p className="text-sm text-gray-700">
                    Long-distance transfers to all London airports. 
                    Comfortable vehicles for extended journeys.
                  </p>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Other UK Airports</h3>
                  <p className="text-gray-600 mb-3">
                    All major UK airports
                  </p>
                  <p className="text-sm text-gray-700">
                    We can arrange transfers to any UK airport. 
                    Contact us for a quote.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Why Choose Our Airport Transfer Service?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Flight Monitoring</h3>
                    <p className="text-gray-700">
                      We monitor your flight status and adjust pickup times for delays, 
                      ensuring we're there when you arrive.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Meet & Greet Service</h3>
                    <p className="text-gray-700">
                      Optional meet and greet service available. Your driver will meet 
                      you in the arrivals hall with a name board.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Luggage Assistance</h3>
                    <p className="text-gray-700">
                      Our drivers will help with your luggage, making your journey 
                      as smooth as possible.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Fixed Prices</h3>
                    <p className="text-gray-700">
                      No hidden charges or surge pricing. You'll know the exact cost 
                      upfront when you book.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Competitive Rates</h3>
                    <p className="text-gray-700">
                      Fair, competitive pricing for airport transfers. 
                      Book online or contact us for a quote.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Professional Drivers</h3>
                    <p className="text-gray-700">
                      All drivers are DBS checked, fully licensed, and experienced 
                      in airport transfers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary text-white rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Book Your Airport Transfer?</h2>
              <p className="text-xl mb-8 text-gray-200">
                Contact us today for a quote or book online. We're available 24/7, 
                365 days a year.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg">
                  Book Now
                </Link>
                <Link href="/contact" className="btn-secondary text-lg bg-white/20 hover:bg-white/30">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

