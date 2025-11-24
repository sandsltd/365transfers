import Link from "next/link";
import type { Metadata } from "next";
import BookNowButton from "@/components/BookNowButton";

export const metadata: Metadata = {
  title: "Group Airport Transfers: Larger Vehicle Options | Stone & Stoke on Trent | 365 Transfers",
  description: "Group airport transfers from Stone and Stoke on Trent using larger vehicles. Cost-effective transport for groups to all major UK airports. Book your group transfer today.",
  keywords: "group airport transfers, large vehicle airport taxi, group taxi Stone, group transport Stoke on Trent, minibus airport transfers, group travel Staffordshire",
  openGraph: {
    title: "Group Airport Transfers: Larger Vehicle Options | 365 Transfers",
    description: "Group airport transfers from Stone and Stoke on Trent using larger vehicles. Cost-effective transport for groups to all major UK airports.",
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

export default function GroupAirportTransfers() {
  return (
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
                Group Airport Transfers: Making the Most of Larger Vehicle Options
              </h1>
              <p className="text-gray-600">
                Published on{" "}
                {new Date("2025-11-10").toLocaleDateString("en-GB", {
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
                  Travelling as a group to the airport? Our larger vehicle options make group 
                  airport transfers from <strong>Stone</strong> and <strong>Stoke on Trent</strong> 
                  both comfortable and cost-effective. Whether you're a family, sports team, or 
                  corporate group, we have the perfect vehicle for your needs.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Benefits of Group Airport Transfers
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Cost-Effective</h3>
                  <p className="text-gray-700">
                    Share the cost among your group. One vehicle for multiple passengers is 
                    often more economical than multiple smaller taxis from Stone or Stoke on Trent.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Travel Together</h3>
                  <p className="text-gray-700">
                    Stay together as a group throughout your journey. Perfect for families, 
                    teams, or colleagues travelling from Staffordshire.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Luggage Space</h3>
                  <p className="text-gray-700">
                    Larger vehicles provide ample space for everyone's luggage. No need to 
                    worry about fitting bags into multiple cars.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Convenience</h3>
                  <p className="text-gray-700">
                    One pick-up point, one drop-off. Coordinate your group's travel easily 
                    from Stone, Stoke on Trent, or anywhere in Staffordshire.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Our Larger Vehicle Options
              </h2>
              <p className="text-gray-700 mb-4">
                From <strong>Stone</strong> and <strong>Stoke on Trent, Staffordshire</strong>, 
                we offer a range of larger vehicles perfect for group airport transfers:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>
                  <strong>8 Seater Taxi:</strong> Ideal for small groups and families. Comfortable 
                  for up to 8 passengers with luggage.
                </li>
                <li>
                  <strong>12 Seater Minibus:</strong> Perfect for medium-sized groups. Spacious 
                  interior with room for passengers and luggage.
                </li>
                <li>
                  <strong>16 Seater Minibus:</strong> Maximum capacity for large groups. Ideal 
                  for sports teams, corporate groups, or extended families.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Popular Group Travel Scenarios
              </h2>
              <div className="space-y-4 mb-8">
                <div className="bg-white border-l-4 border-accent p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Family Holidays</h3>
                  <p className="text-gray-700">
                    Travel together as a family from Stone or Stoke on Trent to the airport. 
                    Keep everyone together and make the journey part of the holiday experience.
                  </p>
                </div>
                <div className="bg-white border-l-4 border-accent p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Sports Teams</h3>
                  <p className="text-gray-700">
                    Transport your team and equipment in one vehicle. Perfect for football, 
                    rugby, or other sports teams travelling from Staffordshire.
                  </p>
                </div>
                <div className="bg-white border-l-4 border-accent p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Corporate Groups</h3>
                  <p className="text-gray-700">
                    Business travel made easy. Transport your team to conferences, meetings, 
                    or corporate events from Stone or Stoke on Trent.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Booking Your Group Airport Transfer
              </h2>
              <p className="text-gray-700 mb-4">
                When booking a group airport transfer from <strong>Stone</strong> or 
                <strong>Stoke on Trent</strong>, provide us with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>Number of passengers in your group</li>
                <li>Amount of luggage</li>
                <li>Pick-up location (Stone, Stoke on Trent, or elsewhere in Staffordshire)</li>
                <li>Destination airport</li>
                <li>Flight details for timing</li>
                <li>Any special requirements</li>
              </ul>

              <div className="bg-primary text-white rounded-lg p-8 mt-12">
                <h2 className="text-3xl font-bold mb-4">Book Your Group Transfer Today</h2>
                <p className="text-xl mb-6 text-gray-200">
                  Make your group travel stress-free with our larger vehicle options. Contact 
                  us to arrange your group airport transfer from Stone, Stoke on Trent, or 
                  anywhere in Staffordshire.
                </p>
                <BookNowButton className="text-lg">
                  Book Group Airport Transfer
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
  );
}

