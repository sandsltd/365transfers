import Link from "next/link";
import type { Metadata } from "next";
import BookNowButton from "@/components/BookNowButton";
import StructuredData from "@/components/StructuredData";
import {
  createServiceSchema,
  createBreadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  alternates: {
    canonical: "/account-work",
  },
  title: "Corporate Taxi Stone | Business Taxi Stoke on Trent | Account Work | 365 Transfers",
  description: "Corporate taxi and business transport in Stone, Stoke on Trent, and Staffordshire. Account work with monthly invoicing. Professional business taxi service for companies.",
  keywords: "corporate taxi Stone, business taxi Stoke on Trent, account work taxi, corporate transport Staffordshire, business taxi service, company taxi Stone, corporate account taxi, monthly invoicing taxi, Staffordshire business transport",
  openGraph: {
    title: "Corporate Taxi Stone | Business Taxi Stoke on Trent | 365 Transfers",
    description: "Professional corporate taxi and business transport services in Stone, Stoke on Trent, and Staffordshire. Account work with monthly invoicing available.",
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

export default function AccountWork() {
  const serviceSchema = createServiceSchema(
    "Corporate Taxi & Account Work",
    "Professional corporate taxi and business transport services in Stone, Stoke on Trent, and Staffordshire. Account work with monthly invoicing available."
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "http://taxisstone.co.uk" },
    {
      name: "Account Work",
      url: "http://taxisstone.co.uk/account-work",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Corporate & Account Work
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">
              Stone, Stoke on Trent & Staffordshire
            </p>
            <p className="text-xl text-gray-200">
              Professional business transport with monthly invoicing and account management
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
                  Corporate Taxi & Account Work in Stone, Stoke on Trent & Staffordshire
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  365 Transfers provides professional corporate taxi services for businesses throughout 
                  <strong>Stone</strong>, <strong>Stoke on Trent</strong>, and <strong>Staffordshire</strong>. 
                  Our account work service offers convenient monthly invoicing, making business transport 
                  simple and efficient for companies of all sizes.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Benefits of Corporate Account Work
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Monthly Invoicing</h3>
                  <p className="text-gray-700 mb-4">
                    Simplify your business expenses with convenient monthly invoicing. All your corporate 
                    taxi journeys from Stone, Stoke on Trent, and Staffordshire consolidated into one 
                    easy-to-manage invoice.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Single monthly invoice for all journeys</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Detailed journey reports</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Flexible payment terms</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Priority Service</h3>
                  <p className="text-gray-700 mb-4">
                    Corporate account holders receive priority booking and dedicated support. Your business 
                    transport needs are our priority.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Priority booking availability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>24/7 business support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Corporate Transport Services
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Client Meetings</h3>
                  <p className="text-gray-700">
                    Professional transport for client meetings and business appointments. Make the right 
                    impression with reliable corporate taxi service.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Airport Transfers</h3>
                  <p className="text-gray-700">
                    Corporate airport transfers for business travel. Reliable service to all major UK 
                    airports from Stone and Stoke on Trent.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Employee Transport</h3>
                  <p className="text-gray-700">
                    Regular employee transport services. Set up routes for staff commuting or business 
                    travel requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Set Up Your Corporate Account Today</h2>
              <p className="text-xl mb-8 text-gray-200">
                Streamline your business transport with our corporate account service. Contact us to 
                discuss your business taxi needs in Stone, Stoke on Trent, or Staffordshire.
              </p>
              <BookNowButton className="text-lg">
                Contact Us About Corporate Accounts
              </BookNowButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

