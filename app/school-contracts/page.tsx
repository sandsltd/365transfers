import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Contracts Taxi Stone | School Transport Stoke on Trent | Staffordshire | 365 Transfers",
  description: "School transport contracts in Stone, Stoke on Trent, and Staffordshire. Reliable school taxi service with DBS checked drivers. Professional school transport for educational institutions.",
  keywords: "school taxi Stone, school transport Stoke on Trent, school contracts Staffordshire, school taxi service, educational transport Stone, school bus Stoke on Trent, DBS checked school drivers, Staffordshire school transport",
  openGraph: {
    title: "School Contracts Taxi Stone | School Transport Stoke on Trent | 365 Transfers",
    description: "Reliable school transport contracts in Stone, Stoke on Trent, and Staffordshire. DBS checked drivers and safe vehicles for educational institutions.",
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

export default function SchoolContracts() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              School Contracts & Transport
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">
              Stone, Stoke on Trent & Staffordshire
            </p>
            <p className="text-xl text-gray-200">
              Reliable school transport with DBS checked drivers and safe vehicles
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  School Transport Contracts in Stone, Stoke on Trent & Staffordshire
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  365 Transfers provides professional school transport services for educational institutions 
                  throughout <strong>Stone</strong>, <strong>Stoke on Trent</strong>, and <strong>Staffordshire</strong>. 
                  Our school taxi service is designed with safety, reliability, and punctuality in mind, ensuring 
                  students arrive at school on time, every time.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Why Choose Our School Transport Service?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">DBS Checked Drivers</h3>
                  <p className="text-gray-700 mb-4">
                    All our drivers working on school contracts are fully DBS (Disclosure and Barring Service) 
                    checked, ensuring the highest levels of safety for students in Stone, Stoke on Trent, 
                    and Staffordshire.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Enhanced DBS checks for all school drivers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Regular background checks and updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Fully licensed and insured</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Safe & Reliable Vehicles</h3>
                  <p className="text-gray-700 mb-4">
                    Our school transport fleet includes vehicles from 4-seaters to 16-seater minibuses, all 
                    regularly maintained and inspected to ensure student safety.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Regular vehicle safety inspections</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Wheelchair accessible options available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>GPS tracking for route monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                School Transport Services
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Regular Routes</h3>
                  <p className="text-gray-700">
                    Consistent daily transport for students to and from school. Reliable service for 
                    Stone, Stoke on Trent, and Staffordshire schools.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">School Trips</h3>
                  <p className="text-gray-700">
                    Transport for educational trips, museum visits, and school excursions. Group bookings 
                    for school activities.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Special Needs Transport</h3>
                  <p className="text-gray-700">
                    Wheelchair accessible vehicles and trained drivers for students with special transport 
                    requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Interested in School Transport Contracts?</h2>
              <p className="text-xl mb-8 text-gray-200">
                Contact us to discuss school transport contracts for your educational institution in 
                Stone, Stoke on Trent, or Staffordshire.
              </p>
              <Link href="/contact" className="btn-primary text-lg">
                Contact Us About School Contracts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

