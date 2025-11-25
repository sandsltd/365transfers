import Link from "next/link";
import type { Metadata } from "next";
import BookNowButton from "@/components/BookNowButton";
import StructuredData from "@/components/StructuredData";
import {
  createArticleSchema,
  createBreadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  alternates: {
    canonical: "/blog/taxi-near-me-stone-stoke-on-trent",
  },
  title: "Taxi Near Me: Guide to Reliable Taxi Services in Stone & Stoke on Trent | 365 Transfers",
  description: "Looking for a taxi near me in Stone or Stoke on Trent? Complete guide to reliable local taxi services in Staffordshire. Book your taxi Stone or Stoke on Trent today.",
  keywords: "taxi near me Stone, taxi near me Stoke on Trent, Stone taxi service, Stoke on Trent taxi, local taxi Stone, local taxi Stoke on Trent, taxi Stone Staffordshire, Stoke on Trent taxi company",
  openGraph: {
    title: "Taxi Near Me: Guide to Reliable Taxi Services in Stone & Stoke on Trent | 365 Transfers",
    description: "Complete guide to reliable taxi services in Stone and Stoke on Trent, Staffordshire. Find your local taxi service and book today.",
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

export default function TaxiNearMeStoneStoke() {
  const articleSchema = createArticleSchema(
    "Taxi Near Me: Your Guide to Reliable Taxi Services in Stone & Stoke on Trent",
    "Looking for a taxi near me in Stone or Stoke on Trent? Learn about our comprehensive taxi services covering Staffordshire and how to book your ride.",
    "2025-10-05"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Blog", url: "https://taxisstone.co.uk/blog" },
    {
      name: "Taxi Near Me",
      url: "https://taxisstone.co.uk/blog/taxi-near-me-stone-stoke-on-trent",
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
                  Local Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Taxi Near Me: Your Guide to Reliable Taxi Services in Stone & Stoke on Trent
              </h1>
              <p className="text-gray-600">
                Published on{" "}
                {new Date("2025-10-05").toLocaleDateString("en-GB", {
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
                  Searching for a "taxi near me" in <strong>Stone</strong> or 
                  <strong>Stoke on Trent</strong>? You've come to the right place. 365 Transfers 
                  provides reliable, professional taxi services throughout <strong>Staffordshire</strong>, 
                  with over 20 years of experience serving the local community. This guide will help 
                  you understand our services and how to book your next journey.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Choose 365 Transfers for Your Local Taxi Needs?
              </h2>
              <p className="text-gray-700 mb-4">
                When you need a taxi in <strong>Stone</strong> or <strong>Stoke on Trent</strong>, 
                you want reliability, professionalism, and local knowledge. Here's why 365 Transfers 
                is your best choice:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>
                  <strong>Local Expertise:</strong> Our drivers know Stone, Stoke on Trent, and 
                  Staffordshire inside out. We know the best routes, shortcuts, and can navigate 
                  efficiently to get you where you need to go.
                </li>
                <li>
                  <strong>24/7 Availability:</strong> Need a taxi at 3am? No problem. We're available 
                  every day of the year, around the clock, serving Stone and Stoke on Trent.
                </li>
                <li>
                  <strong>Professional Service:</strong> All our drivers are DBS checked, fully 
                  licensed, and have completed BTEC qualifications and C.S.E courses.
                </li>
                <li>
                  <strong>Competitive Rates:</strong> Fair, transparent pricing for taxi services 
                  in Stone and Stoke on Trent. No hidden charges.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Taxi Services in Stone, Staffordshire
              </h2>
              <p className="text-gray-700 mb-4">
                Based in <strong>Stone, Staffordshire</strong>, we provide comprehensive taxi services 
                for local journeys and beyond. Whether you need:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Local Trips</h3>
                  <p className="text-gray-700">
                    Quick journeys around Stone, to the shops, appointments, or local destinations. 
                    Fast, reliable Stone taxi service.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Stoke on Trent</h3>
                  <p className="text-gray-700">
                    Regular transfers between Stone and Stoke on Trent. Expert knowledge of both 
                    areas ensures efficient travel.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Staffordshire Coverage</h3>
                  <p className="text-gray-700">
                    Travel throughout Staffordshire and beyond. From local Stone trips to 
                    long-distance journeys across the UK.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Airport & Stations</h3>
                  <p className="text-gray-700">
                    Airport transfers and train station pickups. Professional service from Stone 
                    to all major transport hubs.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Taxi Services in Stoke on Trent
              </h2>
              <p className="text-gray-700 mb-4">
                Our <strong>Stoke on Trent taxi</strong> service covers the entire city and 
                surrounding areas. We provide:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>City centre taxi services throughout Stoke on Trent</li>
                <li>Quick response times for Stoke on Trent bookings</li>
                <li>Knowledge of all Stoke on Trent routes and areas</li>
                <li>Reliable service for Stoke on Trent residents and visitors</li>
                <li>Connections to Stone, Stafford, and other Staffordshire locations</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                How to Book Your Taxi Near Me
              </h2>
              <p className="text-gray-700 mb-4">
                Booking a taxi in <strong>Stone</strong> or <strong>Stoke on Trent</strong> is easy:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
                <li>
                  <strong>Online Booking:</strong> Use our contact form to book online. Quick and 
                  convenient for Stone and Stoke on Trent taxi bookings.
                </li>
                <li>
                  <strong>Phone Booking:</strong> Call us on <a href="tel:01785335563" className="text-primary hover:underline">01785 335563</a> 
                  for immediate bookings or to speak with our team.
                </li>
                <li>
                  <strong>Advance Booking:</strong> Book in advance for peace of mind. Perfect for 
                  airport transfers, events, or important appointments from Stone or Stoke on Trent.
                </li>
              </ol>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Our Fleet for Stone & Stoke on Trent
              </h2>
              <p className="text-gray-700 mb-4">
                From saloons to 16-seater minibuses, we have the perfect vehicle for your journey 
                in <strong>Stone</strong> or <strong>Stoke on Trent</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>Saloons and estate cars for up to 4 passengers</li>
                <li>Executive vehicles for premium comfort</li>
                <li>6, 7, and 8 seater vehicles for families and small groups</li>
                <li>12 and 16 seater minibuses for larger groups</li>
                <li>Wheelchair accessible vehicles for passengers with mobility needs</li>
              </ul>

              <div className="bg-primary text-white rounded-lg p-8 mt-12">
                <h2 className="text-3xl font-bold mb-4">Need a Taxi Near You?</h2>
                <p className="text-xl mb-6 text-gray-200">
                  Whether you're in Stone, Stoke on Trent, or anywhere in Staffordshire, we're 
                  here to help. Book your reliable local taxi service today.
                </p>
                <BookNowButton className="text-lg">
                  Book Your Taxi Now
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

