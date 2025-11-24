import Link from "next/link";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Taxi Stone & Stoke on Trent | 365 Transfers",
  description: "Learn about 365 Transfers - trusted taxi service in Stone and Stoke on Trent with over 20 years of experience. Professional taxi near me serving Staffordshire, Shropshire, and Cheshire.",
  keywords: "taxi Stone, taxi Stoke on Trent, taxi near me, Stone taxi service, Stoke on Trent taxi service, 365 transfers, taxi company Stone, taxi company Stoke on Trent",
  openGraph: {
    title: "About Us - Taxi Stone & Stoke on Trent | 365 Transfers",
    description: "Trusted taxi service in Stone and Stoke on Trent with over 20 years of experience serving Staffordshire, Shropshire, and Cheshire.",
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

export default function About() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About 365 Transfers
            </h1>
            <p className="text-2xl text-accent font-semibold">
              Trusted Taxi Service in the United Kingdom
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We are a local and reliable taxi service with over{" "}
                <strong className="text-primary">20 years of experience</strong>,
                proudly serving{" "}
                <strong className="text-primary">
                  Staffordshire, Shropshire, and Cheshire
                </strong>{" "}
                as part of the 365TransfersGroup. Specializing in long-distance
                travel and airport transfers, we cover every journey to and
                from your desired location.
              </p>

              <div className="bg-gray-50 rounded-lg p-8 my-8 border-l-4 border-accent">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Our Fleet & Services
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                      <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold mr-3">
                        1
                      </span>
                      Vehicle Options
                    </h3>
                    <p className="text-gray-700">
                      With a fleet of <strong>4 to 16 seater taxis</strong>,
                      including wheelchair-friendly options, we cater to all
                      travel needs and group sizes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                      <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold mr-3">
                        2
                      </span>
                      Payment Options
                    </h3>
                    <p className="text-gray-700">
                      Book and pay online with ease, either by card or in the
                      taxi. Corporate clients can set up an account for monthly
                      payments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Why Choose Us?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        Fully Qualified & Vetted Drivers
                      </h3>
                      <p className="text-gray-700">
                        Rest assured, all our drivers are{" "}
                        <strong>DBS checked</strong> and have completed relevant{" "}
                        <strong>BTEC qualifications</strong> and{" "}
                        <strong>C.S.E courses</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        Competitive Rates
                      </h3>
                      <p className="text-gray-700">
                        Experience our competitive rates and top-notch service
                        firsthand. We believe in providing value without
                        compromising on quality.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        Comfortable & Convenient
                      </h3>
                      <p className="text-gray-700">
                        Our comfortable and convenient Private Taxi service
                        ensures a pleasant journey every time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white rounded-lg p-8 my-8">
                <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
                <p className="text-xl mb-6">
                  We proudly serve the following regions:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <h3 className="text-xl font-bold text-accent mb-2">
                      Staffordshire
                    </h3>
                    <p>Comprehensive coverage</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <h3 className="text-xl font-bold text-accent mb-2">
                      Shropshire
                    </h3>
                    <p>Reliable service</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <h3 className="text-xl font-bold text-accent mb-2">
                      Cheshire
                    </h3>
                    <p>Professional transport</p>
                  </div>
                </div>
              </div>

              <div className="text-center my-12">
                <p className="text-2xl font-semibold text-primary mb-6">
                  Try 365TransfersUK and discover why so many trust us for
                  their transportation needs.
                </p>
                <Link href="/contact" className="btn-primary text-lg">
                  Book Your Journey Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

