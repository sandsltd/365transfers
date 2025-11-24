import Link from "next/link";
import type { Metadata } from "next";
import BookNowButton from "@/components/BookNowButton";

export const metadata: Metadata = {
  title: "Taxi for Every Occasion Stone | Special Event Taxi Stoke on Trent | Staffordshire | 365 Transfers",
  description: "Taxi service for every occasion in Stone, Stoke on Trent, and Staffordshire. Weddings, parties, celebrations, and special events. Professional transport for your memorable moments.",
  keywords: "wedding taxi Stone, party taxi Stoke on Trent, celebration taxi, special event taxi Staffordshire, wedding transport Stone, party transport Stoke on Trent, occasion taxi, special occasion transport, Staffordshire event taxi",
  openGraph: {
    title: "Taxi for Every Occasion Stone | Special Event Taxi Stoke on Trent | 365 Transfers",
    description: "Professional taxi service for every occasion in Stone, Stoke on Trent, and Staffordshire. Weddings, parties, celebrations, and special events.",
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

export default function EveryOccasion() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Service for Every Occasion
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">
              Stone, Stoke on Trent & Staffordshire
            </p>
            <p className="text-xl text-gray-200">
              Professional transport for weddings, parties, celebrations, and special events
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
                  Taxi Service for Every Occasion in Stone, Stoke on Trent & Staffordshire
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Make your special occasions even more memorable with professional transport from 365 Transfers. 
                  Whether you're celebrating a wedding, birthday, anniversary, or any special event in 
                  <strong>Stone</strong>, <strong>Stoke on Trent</strong>, or <strong>Staffordshire</strong>, 
                  we provide reliable, stylish taxi services to ensure your day is perfect.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Occasions We Cover
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Weddings</h3>
                  <p className="text-gray-700 mb-4">
                    Make your wedding day perfect with our professional wedding taxi service. From bridal 
                    party transport to guest services, we ensure everyone arrives on time and in style.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Bridal party transport</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Guest transport services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Luxury vehicles available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Wedding day coordination</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Parties & Celebrations</h3>
                  <p className="text-gray-700 mb-4">
                    Birthday parties, anniversaries, graduations, and milestone celebrations. Safe transport 
                    for you and your guests to and from your celebration.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Birthday party transport</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Anniversary celebrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Group bookings welcome</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Late night pick-ups</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Special Events</h3>
                  <p className="text-gray-700 mb-4">
                    From proms and formals to corporate events and galas. Professional transport that 
                    matches the importance of your special occasion.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Prom and formal events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Corporate galas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Charity events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>VIP transport</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Holiday Celebrations</h3>
                  <p className="text-gray-700 mb-4">
                    Christmas parties, New Year celebrations, and holiday events. Let us handle the 
                    transport so you can focus on enjoying the festivities.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Christmas party transport</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>New Year celebrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Holiday event transport</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Festive season availability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Book Transport for Your Special Occasion</h2>
              <p className="text-xl mb-8 text-gray-200">
                Make your special occasion memorable with reliable, professional transport. Contact us 
                to discuss your event transport needs in Stone, Stoke on Trent, or Staffordshire.
              </p>
              <BookNowButton className="text-lg">
                Book Occasion Transport
              </BookNowButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

