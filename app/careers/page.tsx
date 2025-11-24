import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join 365 Transfers | Taxi Driver Jobs Stone & Stoke on Trent | 365 Transfers",
  description: "Join the 365 Transfers team in Stone, Stoke on Trent, and Staffordshire. We're looking for professional taxi drivers. DBS checked, licensed drivers welcome. Apply today.",
  keywords: "taxi driver jobs Stone, taxi driver jobs Stoke on Trent, careers 365 transfers, taxi driver vacancies Staffordshire, driving jobs Stone, taxi company careers",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers - Join 365 Transfers | Taxi Driver Jobs",
    description: "Join the 365 Transfers team. We're looking for professional taxi drivers in Stone, Stoke on Trent, and Staffordshire.",
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

export default function Careers() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Careers at 365 Transfers
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">
              Join Our Team
            </p>
            <p className="text-xl text-gray-200">
              Professional taxi driver opportunities in Stone, Stoke on Trent, and Staffordshire
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
                  Join the 365 Transfers Team
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Are you a professional, reliable taxi driver looking for opportunities in 
                  <strong>Stone</strong>, <strong>Stoke on Trent</strong>, or <strong>Staffordshire</strong>? 
                  365 Transfers is always looking for experienced, licensed drivers to join our team. 
                  With over 20 years of experience, we offer competitive rates, regular work, and a 
                  supportive working environment.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                What We're Looking For
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Requirements</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">✓</span>
                      <span>Valid UK driving licence (held for minimum 2 years)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">✓</span>
                      <span>Valid taxi/private hire driver licence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">✓</span>
                      <span>DBS check (we can assist with application)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">✓</span>
                      <span>BTEC qualifications or C.S.E courses completed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">✓</span>
                      <span>Excellent knowledge of local area (Stone, Stoke on Trent, Staffordshire)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">✓</span>
                      <span>Professional, courteous, and reliable</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">What We Offer</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">•</span>
                      <span>Competitive commission rates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">•</span>
                      <span>Regular work and consistent bookings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">•</span>
                      <span>Flexible working hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">•</span>
                      <span>Supportive team environment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">•</span>
                      <span>Opportunity to work with a well-established company</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">•</span>
                      <span>24/7 support and assistance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                How to Apply
              </h2>
              <div className="bg-primary text-white rounded-lg p-8">
                <p className="text-lg mb-6 text-gray-200">
                  Interested in joining our team? We'd love to hear from you. Please contact us 
                  with the following information:
                </p>
                <ul className="space-y-3 text-gray-200 mb-8">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    <span>Your name and contact details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    <span>Details of your driving and taxi licences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    <span>Your experience as a taxi driver</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    <span>Your availability and preferred working hours</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="/contact" className="btn-primary text-lg">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Equal Opportunities
              </h3>
              <p className="text-gray-700">
                365 Transfers is an equal opportunities employer. We welcome applications from 
                all qualified individuals regardless of age, gender, race, religion, or background. 
                We are committed to creating a diverse and inclusive workplace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

