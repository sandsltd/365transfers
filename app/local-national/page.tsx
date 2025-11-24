import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import BookNowButton from "@/components/BookNowButton";
import StructuredData from "@/components/StructuredData";
import {
  createServiceSchema,
  createBreadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Local & National Taxi Stone | Taxi Stoke on Trent | Staffordshire Taxi | 365 Transfers",
  description: "Local and national taxi services in Stone, Stoke on Trent, and Staffordshire. Professional taxi for local journeys and long-distance travel across the UK. Book your taxi Stone or Stoke on Trent today.",
  keywords: "taxi Stone, taxi Stoke on Trent, local taxi Stone, local taxi Stoke on Trent, national taxi Staffordshire, Stone taxi service, Stoke on Trent taxi service, Staffordshire taxi, taxi near me Stone, taxi near me Stoke on Trent, long distance taxi",
  alternates: {
    canonical: "/local-national",
  },
  openGraph: {
    title: "Local & National Taxi Stone | Taxi Stoke on Trent | 365 Transfers",
    description: "Professional local and national taxi services in Stone, Stoke on Trent, and Staffordshire. Available 24/7 for local journeys and UK-wide travel.",
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

export default function LocalNational() {
  const serviceSchema = createServiceSchema(
    "Local & National Taxi Services",
    "Professional local and national taxi services in Stone, Stoke on Trent, and Staffordshire. Available 24/7 for local journeys and UK-wide travel."
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.365transfers.co.uk" },
    {
      name: "Local & National",
      url: "https://www.365transfers.co.uk/local-national",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Local & National Taxi Services
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">
              Stone, Stoke on Trent & Staffordshire
            </p>
            <p className="text-xl text-gray-200">
              Professional taxi services for local journeys and long-distance travel across the UK
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
                  Local & National Taxi in Stone, Stoke on Trent & Staffordshire
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you need a quick local taxi in <strong>Stone</strong> or <strong>Stoke on Trent</strong>, 
                  or a long-distance journey across the UK, 365 Transfers provides reliable, professional taxi 
                  services throughout <strong>Staffordshire</strong> and beyond. Our experienced drivers know the 
                  local area intimately and are equipped to handle journeys of any distance.
                </p>
              </div>
            </div>

            {/* Local Services */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Local Taxi Services
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Taxi Stone</h3>
                  <p className="text-gray-700 mb-4">
                    Professional local taxi services in <strong>Stone, Staffordshire</strong>. Whether you need 
                    transport to the shops, appointments, or around town, our Stone taxi service is available 
                    24/7 to get you where you need to go.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Quick and reliable Stone taxi service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Local knowledge of Stone and surrounding areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Available 24/7, 365 days a year</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Taxi Stoke on Trent</h3>
                  <p className="text-gray-700 mb-4">
                    Reliable taxi services in <strong>Stoke on Trent, Staffordshire</strong>. From city centre 
                    trips to outlying areas, our Stoke on Trent taxi drivers know the best routes to get you 
                    there quickly and safely.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Expert knowledge of Stoke on Trent routes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Fast response times in Stoke on Trent</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Competitive rates for Stoke on Trent taxi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* National Services */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                National Taxi Services
              </h2>
              <div className="bg-primary text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Long-Distance Travel Across the UK</h3>
                <p className="text-lg mb-6 text-gray-200">
                  From our base in <strong>Stone, Staffordshire</strong>, we provide comfortable long-distance 
                  taxi services to destinations throughout the United Kingdom. Whether you're travelling to 
                  London, Manchester, Birmingham, or anywhere else in the UK, we've got you covered.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-accent mb-2">Major Cities</h4>
                    <p className="text-sm">London, Manchester, Birmingham, Liverpool, Leeds</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-accent mb-2">Airports</h4>
                    <p className="text-sm">All major UK airports from Stone and Stoke on Trent</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-accent mb-2">Anywhere in UK</h4>
                    <p className="text-sm">Long-distance journeys to any UK destination</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    <span>Comfortable vehicles for extended journeys</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    <span>Fixed prices with no hidden charges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    <span>Professional drivers with extensive UK route knowledge</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Why Choose 365 Transfers for Local & National Taxi?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Local Expertise</h3>
                  <p className="text-gray-700">
                    Deep knowledge of Stone, Stoke on Trent, and Staffordshire. We know the best routes and 
                    can navigate efficiently.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">24/7 Availability</h3>
                  <p className="text-gray-700">
                    Available every day of the year, around the clock. Book your local or national taxi 
                    whenever you need it.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Safe & Reliable</h3>
                  <p className="text-gray-700">
                    All drivers are DBS checked, fully licensed, and experienced. Your safety is our priority 
                    for every journey.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary text-white rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Book Your Local or National Taxi?</h2>
              <p className="text-xl mb-8 text-gray-200">
                Whether you need a taxi in Stone, Stoke on Trent, or a long-distance journey across the UK, 
                we're here to help. Contact us today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookNowButton className="text-lg">
                  Book Now
                </BookNowButton>
                <Link href="/" className="btn-secondary text-lg bg-white/20 hover:bg-white/30">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

