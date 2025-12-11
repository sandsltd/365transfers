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
    canonical: "/blog/christmas-new-year-taxi-stone-stoke-on-trent",
  },
  title: "Christmas & New Year Taxi Services in Stone & Stoke on Trent | 365 Transfers",
  description: "Book your Christmas and New Year taxi in Stone and Stoke on Trent. Airport transfers, party transport, and festive season rides available 24/7. Book early for the holidays!",
  keywords: "Christmas taxi Stone, New Year taxi Stoke on Trent, Christmas Eve taxi, New Year's Eve taxi, festive taxi service, holiday taxi Stone, Christmas airport transfer, Boxing Day taxi",
  openGraph: {
    title: "Christmas & New Year Taxi Services in Stone & Stoke on Trent | 365 Transfers",
    description: "Book your Christmas and New Year taxi in Stone and Stoke on Trent. Airport transfers, party transport, and festive season rides available 24/7.",
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

export default function ChristmasNewYearTaxi() {
  const articleSchema = createArticleSchema(
    "Christmas & New Year Taxi Services in Stone & Stoke on Trent",
    "Book your Christmas and New Year taxi in Stone and Stoke on Trent. Airport transfers, party transport, and festive season rides available 24/7.",
    "2025-12-11"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Blog", url: "https://taxisstone.co.uk/blog" },
    {
      name: "Christmas & New Year Taxi",
      url: "https://taxisstone.co.uk/blog/christmas-new-year-taxi-stone-stoke-on-trent",
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
                  Seasonal Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Christmas & New Year Taxi Services in Stone & Stoke on Trent
              </h1>
              <p className="text-gray-600">
                Published on{" "}
                {new Date("2025-12-11").toLocaleDateString("en-GB", {
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
                  The festive season is here, and whether you're heading to the airport to visit
                  family, attending a Christmas party, or celebrating New Year's Eve in style,
                  <strong> 365 Transfers</strong> is here to get you there safely. We operate
                  <strong> 24/7 throughout Christmas and New Year</strong> in Stone, Stoke on Trent,
                  and across Staffordshire.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Available Throughout the Festive Season
              </h2>
              <p className="text-gray-700 mb-4">
                True to our name, <strong>365 Transfers</strong> operates every single day of the
                year. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>
                  <strong>Christmas Eve:</strong> Late-night airport pickups, last-minute shopping
                  trips, and family gatherings in Stone and Stoke on Trent
                </li>
                <li>
                  <strong>Christmas Day:</strong> Airport transfers for those travelling to be with
                  loved ones, hospital visits, or emergency travel needs
                </li>
                <li>
                  <strong>Boxing Day:</strong> Shopping trips, visiting family across Staffordshire,
                  or getting home after staying with relatives
                </li>
                <li>
                  <strong>New Year's Eve:</strong> Safe, reliable transport to and from parties,
                  restaurants, and celebrations across Stone and Stoke on Trent
                </li>
                <li>
                  <strong>New Year's Day:</strong> Airport runs, recovery missions, and getting
                  everyone home safely after the celebrations
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Christmas Airport Transfers
              </h2>
              <p className="text-gray-700 mb-4">
                Flying home for Christmas or jetting off for a winter break? Our airport transfer
                service from <strong>Stone</strong> and <strong>Stoke on Trent</strong> covers all
                major airports:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Manchester Airport</h3>
                  <p className="text-gray-700">
                    Approximately 45 minutes from Stone. We monitor flight times and adjust for
                    delays, ensuring you're collected promptly.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Birmingham Airport</h3>
                  <p className="text-gray-700">
                    Around 50 minutes from Stoke on Trent. Perfect for those early morning
                    Christmas getaway flights.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">East Midlands Airport</h3>
                  <p className="text-gray-700">
                    Convenient option for Staffordshire residents. We provide transfers throughout
                    the festive period.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">London Airports</h3>
                  <p className="text-gray-700">
                    Heathrow, Gatwick, Stansted, and Luton. Long-distance transfers available for
                    those catching international flights.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                New Year's Eve Party Transport
              </h2>
              <p className="text-gray-700 mb-4">
                Planning to celebrate New Year's Eve in <strong>Stone</strong>, <strong>Stoke on
                Trent</strong>, or elsewhere in Staffordshire? Leave the car at home and let us
                handle the driving:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>Pre-booked pickups at your chosen time</li>
                <li>Safe journey home after the midnight celebrations</li>
                <li>Group transport available in our 6, 7, 8, 12, and 16 seater vehicles</li>
                <li>No surge pricing - our rates stay fair even on the busiest night</li>
                <li>Reliable service when other taxi options may be unavailable</li>
              </ul>

              <div className="bg-accent/20 border-l-4 border-accent rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-primary mb-2">Book Early for New Year's Eve</h3>
                <p className="text-gray-700">
                  New Year's Eve is our busiest night of the year. We strongly recommend booking
                  your return journey in advance to guarantee availability. Don't leave it to
                  chance - secure your ride home now.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Christmas Work Parties & Events
              </h2>
              <p className="text-gray-700 mb-4">
                Got a work Christmas do coming up? We can help with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>Individual pickups and drop-offs across Stone and Stoke on Trent</li>
                <li>Group minibus hire for office parties (up to 16 passengers)</li>
                <li>Corporate account options for businesses booking multiple journeys</li>
                <li>Restaurant and venue transfers throughout Staffordshire</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Family Gatherings & Visits
              </h2>
              <p className="text-gray-700 mb-4">
                Christmas is about being together. Our larger vehicles are perfect for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>Picking up relatives from train stations (Stoke-on-Trent, Stafford, Stone)</li>
                <li>Transporting the whole family to Christmas dinner</li>
                <li>Boxing Day visits to relatives across Staffordshire</li>
                <li>Hospital and care home visits over the festive period</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Book with 365 Transfers This Christmas?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Genuinely Available</h3>
                  <p className="text-gray-700">
                    We don't just say we're open - we actually operate on Christmas Day, Boxing
                    Day, and New Year's Day. Your booking is guaranteed.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Local Knowledge</h3>
                  <p className="text-gray-700">
                    Our drivers know Stone and Stoke on Trent inside out. No getting lost on
                    dark winter evenings.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Fair Pricing</h3>
                  <p className="text-gray-700">
                    No excessive festive surcharges. We keep our rates reasonable even during the
                    busiest times of year.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Professional Drivers</h3>
                  <p className="text-gray-700">
                    All drivers are DBS checked and fully licensed. Safe, professional service
                    when you need it most.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                How to Book Your Festive Taxi
              </h2>
              <p className="text-gray-700 mb-4">
                Booking your Christmas or New Year taxi is simple:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
                <li>
                  <strong>Book Online:</strong> Use our booking form to reserve your taxi. Include
                  pickup and drop-off addresses, date, time, and number of passengers.
                </li>
                <li>
                  <strong>Call Us:</strong> Phone <a href="tel:01785335563" className="text-primary hover:underline font-semibold">01785 335563</a> to
                  speak directly with our team and arrange your booking.
                </li>
                <li>
                  <strong>Confirm Details:</strong> We'll confirm your booking and vehicle type
                  based on your requirements.
                </li>
              </ol>

              <div className="bg-primary text-white rounded-lg p-8 mt-12">
                <h2 className="text-3xl font-bold mb-4">Book Your Christmas & New Year Taxi</h2>
                <p className="text-xl mb-6 text-gray-200">
                  Don't leave your festive transport to chance. Book your taxi in Stone or Stoke
                  on Trent today and enjoy peace of mind this holiday season.
                </p>
                <BookNowButton className="text-lg">
                  Book Your Festive Taxi Now
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
