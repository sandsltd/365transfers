import Link from "next/link";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  createArticleSchema,
  createBreadcrumbSchema,
} from "@/lib/schema";
import BookNowButton from "@/components/BookNowButton";

export const metadata: Metadata = {
  alternates: {
    canonical: "/blog/wheelchair-accessible-airport-transfers",
  },
  title: "Wheelchair Accessible Airport Transfers: Complete Guide | Stone & Stoke on Trent | 365 Transfers",
  description: "Complete guide to wheelchair accessible airport transfers from Stone and Stoke on Trent. Comfortable, safe transport to all major UK airports for passengers with mobility needs.",
  keywords: "wheelchair accessible airport transfers, accessible taxi Stone, wheelchair taxi Stoke on Trent, accessible airport taxi, disabled transport Stone, mobility taxi Staffordshire",
  openGraph: {
    title: "Wheelchair Accessible Airport Transfers: Complete Guide | 365 Transfers",
    description: "Complete guide to wheelchair accessible airport transfers from Stone and Stoke on Trent. Comfortable, safe transport to all major UK airports.",
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

export default function WheelchairAccessibleAirportTransfers() {
  const articleSchema = createArticleSchema(
    "Wheelchair Accessible Airport Transfers: A Complete Guide",
    "Everything you need to know about wheelchair accessible airport transfers from Stone and Stoke on Trent. Comfortable, safe, and reliable transport for all passengers.",
    "2025-12-15"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "http://taxisstone.co.uk" },
    { name: "Blog", url: "http://taxisstone.co.uk/blog" },
    {
      name: "Wheelchair Accessible Airport Transfers",
      url: "http://taxisstone.co.uk/blog/wheelchair-accessible-airport-transfers",
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
                  Airport Transfers
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Wheelchair Accessible Airport Transfers: A Complete Guide
              </h1>
              <p className="text-gray-600">
                Published on{" "}
                {new Date("2025-12-15").toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Travelling to or from the airport with mobility requirements shouldn't be stressful. 
                  At 365 Transfers, we provide professional wheelchair accessible airport transfers 
                  from <strong>Stone</strong> and <strong>Stoke on Trent</strong> to all major UK airports. 
                  This guide covers everything you need to know about our accessible transport services.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Choose Wheelchair Accessible Airport Transfers?
              </h2>
              <p className="text-gray-700 mb-4">
                Our wheelchair accessible vehicles are specifically designed to provide comfortable, 
                safe transport for passengers with mobility needs. Whether you're travelling from 
                <strong>Stone, Staffordshire</strong> or <strong>Stoke on Trent</strong>, we ensure 
                your journey to the airport is smooth and stress-free.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Features of Our Wheelchair Accessible Vehicles
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Ramp Access</h3>
                  <p className="text-gray-700">
                    Easy-to-use ramps for smooth wheelchair access. Our drivers are trained to 
                    assist with boarding and securing wheelchairs safely.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Spacious Interior</h3>
                  <p className="text-gray-700">
                    Ample space for wheelchairs and mobility aids. Comfortable seating for 
                    accompanying passengers and luggage.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Safety Features</h3>
                  <p className="text-gray-700">
                    Wheelchair restraint systems and safety belts. All vehicles meet UK 
                    accessibility standards and are regularly inspected.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Trained Drivers</h3>
                  <p className="text-gray-700">
                    Our drivers are trained in assisting passengers with mobility needs. 
                    DBS checked and experienced in accessible transport.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Airports We Serve
              </h2>
              <p className="text-gray-700 mb-4">
                From <strong>Stone</strong> and <strong>Stoke on Trent, Staffordshire</strong>, 
                we provide wheelchair accessible transfers to all major UK airports:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li><strong>Manchester Airport</strong> - Approximately 45 minutes from Stone</li>
                <li><strong>Birmingham Airport</strong> - Approximately 1 hour from Stone</li>
                <li><strong>East Midlands Airport</strong> - Approximately 1 hour from Stone</li>
                <li><strong>Liverpool John Lennon Airport</strong> - Approximately 1 hour from Stone</li>
                <li><strong>London Airports</strong> - Heathrow, Gatwick, Stansted, and Luton</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Booking Your Wheelchair Accessible Airport Transfer
              </h2>
              <p className="text-gray-700 mb-4">
                When booking your accessible airport transfer from <strong>Stone</strong> or 
                <strong>Stoke on Trent</strong>, please let us know:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>Your wheelchair or mobility aid specifications</li>
                <li>Number of accompanying passengers</li>
                <li>Luggage requirements</li>
                <li>Any special assistance needs</li>
                <li>Flight details for timing coordination</li>
              </ul>

              <div className="bg-primary text-white rounded-lg p-8 mt-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
                <p className="text-xl mb-6 text-gray-200">
                  Experience stress-free wheelchair accessible airport transfers from Stone and 
                  Stoke on Trent. Contact us today to book your journey.
                </p>
                <BookNowButton className="text-lg">
                  Book Your Accessible Airport Transfer
                </BookNowButton>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/blog"
                className="text-primary hover:underline font-semibold"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
    </>
  );
}

