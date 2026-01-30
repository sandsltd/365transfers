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
    canonical: "/blog/local-taxi-service-stone-staffordshire",
  },
  title: "Local Taxi Service in Stone, Staffordshire | 365 Transfers",
  description: "Looking for a reliable local taxi in Stone, Staffordshire? 365 Transfers provides 24/7 taxi services across Stone, Stoke on Trent, and surrounding areas. Call today.",
  keywords: "taxi Stone, taxis Stone, Stone taxi, Stone taxi service, local taxi Stone, cab Stone Staffordshire, taxi Stone Staffordshire, Stone cabs",
  openGraph: {
    title: "Local Taxi Service in Stone, Staffordshire | 365 Transfers",
    description: "Reliable 24/7 taxi services in Stone, Staffordshire. Local trips, school runs, shopping, appointments and more. Professional drivers, fair prices.",
    type: "article",
    locale: "en_GB",
    images: [
      {
        url: "/blog/local-taxi-stone.png",
        width: 1200,
        height: 630,
        alt: "Local taxi service in Stone, Staffordshire",
      },
    ],
  },
};

export default function LocalTaxiStone() {
  const articleSchema = createArticleSchema(
    "Local Taxi Service in Stone, Staffordshire: Your Reliable Local Ride",
    "Looking for a reliable local taxi in Stone, Staffordshire? 365 Transfers provides 24/7 taxi services across Stone, Stoke on Trent, and surrounding areas.",
    "2026-01-30"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Blog", url: "https://taxisstone.co.uk/blog" },
    {
      name: "Local Taxi Service Stone",
      url: "https://taxisstone.co.uk/blog/local-taxi-service-stone-staffordshire",
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
                Local Taxi Service in Stone, Staffordshire
              </h1>
              <p className="text-gray-600">
                Published on{" "}
                {new Date("2026-01-30").toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src="/blog/local-taxi-stone.png"
                alt="Local taxi service in Stone, Staffordshire"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  When you need a <strong>taxi in Stone</strong>, you want someone local,
                  reliable, and available when you need them. 365 Transfers has been providing
                  taxi services in <strong>Stone, Staffordshire</strong> for over 20 years.
                  We know the town, we know the roads, and we know what our customers expect —
                  a straightforward, dependable service at a fair price.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Stone Chooses 365 Transfers
              </h2>
              <p className="text-gray-700 mb-4">
                There's no shortage of taxi firms out there, but finding one you can actually
                rely on is a different story. Here's what sets us apart as Stone's local taxi
                service:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>
                  <strong>Genuinely local:</strong> We're based right here in Stone. Our drivers
                  know every street, every shortcut, and every awkward one-way system in town.
                </li>
                <li>
                  <strong>Available 24/7:</strong> Early morning appointment? Late night pickup?
                  We're here around the clock, every single day of the year.
                </li>
                <li>
                  <strong>Professional drivers:</strong> All DBS checked, fully licensed, with
                  BTEC qualifications and C.S.E training. You're in safe hands.
                </li>
                <li>
                  <strong>Fair pricing:</strong> Competitive rates with no hidden charges. We tell
                  you what it costs upfront.
                </li>
                <li>
                  <strong>Range of vehicles:</strong> From saloon cars to 16-seater minibuses.
                  Whatever the journey, we've got the right vehicle.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Local Journeys in and Around Stone
              </h2>
              <p className="text-gray-700 mb-4">
                Most of our work in Stone is the everyday stuff — the journeys that keep life
                moving. We're here for all of it:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Shopping Trips</h3>
                  <p className="text-gray-700">
                    Into Stone town centre, out to Stafford, or wherever you need to go.
                    We'll wait or come back for you — whatever works best.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Medical Appointments</h3>
                  <p className="text-gray-700">
                    Hospital visits, doctor's appointments, physiotherapy sessions. Reliable
                    transport when it matters most.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">School Runs</h3>
                  <p className="text-gray-700">
                    Regular school transport with DBS-checked drivers. Safe, punctual, and
                    trusted by parents across Stone.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Getting to Work</h3>
                  <p className="text-gray-700">
                    Daily commutes, early shifts, late finishes. We'll get you there on time,
                    every time.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Beyond Stone: Where We Go
              </h2>
              <p className="text-gray-700 mb-4">
                While we're proudly based in Stone, our service doesn't stop at the town
                boundary. We regularly take passengers to and from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>Stoke on Trent (all six towns)</li>
                <li>Stafford</li>
                <li>Newcastle-under-Lyme</li>
                <li>Eccleshall</li>
                <li>Barlaston</li>
                <li>Trentham</li>
                <li>Uttoxeter</li>
                <li>And anywhere else you need to go — locally or nationally</li>
              </ul>
              <p className="text-gray-700 mb-8">
                Whether it's a five-minute trip across Stone or a longer journey to another
                town, the same professional service applies.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Vehicles for Every Journey
              </h2>
              <p className="text-gray-700 mb-4">
                One thing that catches people out with other taxi firms is being told they don't
                have the right vehicle. With 365 Transfers, that's not a problem:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li><strong>Saloon cars</strong> — up to 4 passengers, perfect for most local trips</li>
                <li><strong>Estate cars</strong> — extra boot space for luggage or shopping</li>
                <li><strong>6, 7, and 8 seaters</strong> — ideal for families or small groups</li>
                <li><strong>12 and 16 seater minibuses</strong> — for larger groups and events</li>
                <li><strong>Wheelchair accessible vehicles</strong> — comfortable transport for passengers with mobility needs</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                How to Book Your Stone Taxi
              </h2>
              <p className="text-gray-700 mb-4">
                Booking is simple. You can:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
                <li>
                  <strong>Call us</strong> on <a href="tel:01785335563" className="text-primary hover:underline">01785 335563</a> —
                  speak to a real person, not an automated system
                </li>
                <li>
                  <strong>Book online</strong> through our website — quick and easy, any time of day
                </li>
                <li>
                  <strong>Book in advance</strong> for regular journeys, events, or anything where
                  you want guaranteed availability
                </li>
              </ol>

              <div className="bg-primary text-white rounded-lg p-8 mt-12">
                <h2 className="text-3xl font-bold mb-4">Need a Taxi in Stone?</h2>
                <p className="text-xl mb-6 text-gray-200">
                  Whether it's a quick trip across town or a longer journey, we're here for you.
                  24/7, 365 days a year. That's not just our name — it's our promise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <BookNowButton className="text-lg">
                    Book Your Taxi Now
                  </BookNowButton>
                  <a
                    href="tel:01785335563"
                    className="bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center"
                  >
                    Call 01785 335563
                  </a>
                </div>
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
