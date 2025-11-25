import Link from "next/link";
import type { Metadata } from "next";
import BookNowButton from "@/components/BookNowButton";
import StructuredData from "@/components/StructuredData";
import FAQ from "@/components/FAQ";
import {
  createServiceSchema,
  createBreadcrumbSchema,
  createFAQSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Days Out Taxi Stone | Taxi Stoke on Trent | Family Days Out Transport | 365 Transfers",
  description: "Taxi for days out in Stone and Stoke on Trent, Staffordshire. Perfect for family days out, leisure trips, and weekend getaways. Book your days out taxi Stone or Stoke on Trent today.",
  keywords: "days out taxi Stone, days out taxi Stoke on Trent, family days out taxi, leisure taxi Stone, weekend taxi Stoke on Trent, days out transport Staffordshire, family taxi Stone, Stone days out, Stoke on Trent days out",
  alternates: {
    canonical: "/days-out",
  },
  openGraph: {
    title: "Days Out Taxi Stone | Taxi Stoke on Trent | 365 Transfers",
    description: "Perfect taxi service for family days out, leisure trips, and weekend getaways in Stone, Stoke on Trent, and Staffordshire.",
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

export default function DaysOut() {
  const serviceSchema = createServiceSchema(
    "Days Out Taxi Service",
    "Perfect taxi service for family days out, leisure trips, and weekend getaways in Stone, Stoke on Trent, and Staffordshire."
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    {
      name: "Days Out",
      url: "https://taxisstone.co.uk/days-out",
    },
  ]);

  const faqSchema = createFAQSchema([
    {
      question: "What types of days out do you provide transport for?",
      answer: "We provide transport for all types of days out including family trips, leisure activities, weekend getaways, theme parks, coastal visits, city breaks, shopping trips, and more.",
    },
    {
      question: "Can I request a return journey for my day out?",
      answer: "Yes, we offer both one-way and return journeys for days out. Requesting a return journey ensures you have reliable transport home after your day out.",
    },
    {
      question: "What vehicle sizes are available for family days out?",
      answer: "We have vehicles ranging from saloon cars to 16-seater minibuses, perfect for families and groups of all sizes. All vehicles are comfortable and well-maintained.",
    },
    {
      question: "How do I request a taxi for a day out?",
      answer: "You can request a booking online through our booking form or call us on 01785 335563. We recommend requesting in advance, especially for popular destinations or weekends.",
    },
    {
      question: "Do you provide transport to theme parks and attractions?",
      answer: "Yes, we provide transport to theme parks, attractions, and leisure destinations throughout the UK. Popular destinations include Alton Towers, Drayton Manor, and many more.",
    },
    {
      question: "How much does a days out taxi cost?",
      answer: "Prices vary depending on the destination, distance, and vehicle type. Contact us for a competitive quote for your day out. We offer transparent pricing with no hidden fees.",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Days Out Taxi Services
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">
              Stone, Stoke on Trent & Staffordshire
            </p>
            <p className="text-xl text-gray-200">
              Perfect transport for family days out, leisure trips, and weekend getaways
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
                  Days Out Taxi in Stone, Stoke on Trent & Staffordshire
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Make your family days out and leisure trips stress-free with 365 Transfers. Whether you're 
                  planning a day trip from <strong>Stone</strong> or <strong>Stoke on Trent</strong>, visiting 
                  attractions in <strong>Staffordshire</strong>, or heading further afield, our comfortable 
                  taxi service ensures you arrive relaxed and ready to enjoy your day.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Perfect For Your Days Out
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Family Days Out</h3>
                  <p className="text-gray-700">
                    Stress-free transport for family trips to theme parks, zoos, museums, and attractions. 
                    Spacious vehicles perfect for families from Stone and Stoke on Trent.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Weekend Getaways</h3>
                  <p className="text-gray-700">
                    Comfortable transport for weekend breaks and short trips. Travel in style from Stone or 
                    Stoke on Trent to your destination.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Leisure Activities</h3>
                  <p className="text-gray-700">
                    Taxi service for shopping trips, cinema visits, restaurants, and entertainment venues 
                    throughout Staffordshire.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Countryside Trips</h3>
                  <p className="text-gray-700">
                    Explore the beautiful Staffordshire countryside, Peak District, and surrounding areas 
                    with our reliable taxi service.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Beach & Coast</h3>
                  <p className="text-gray-700">
                    Day trips to the coast from Stone or Stoke on Trent. We'll get you there and back 
                    comfortably and safely.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">City Breaks</h3>
                  <p className="text-gray-700">
                    Visit nearby cities like Manchester, Birmingham, or Liverpool for shopping, dining, 
                    and entertainment.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <FAQ
              title="Days Out Taxi FAQs"
              description="Common questions about our days out taxi services in Stone and Stoke on Trent"
              faqs={[
                {
                  question: "What types of days out do you provide transport for?",
                  answer: "We provide transport for all types of days out including family trips, leisure activities, weekend getaways, theme parks, coastal visits, city breaks, shopping trips, and more.",
                },
                {
                  question: "Can I request a return journey for my day out?",
                  answer: "Yes, we offer both one-way and return journeys for days out. Requesting a return journey ensures you have reliable transport home after your day out.",
                },
                {
                  question: "What vehicle sizes are available for family days out?",
                  answer: "We have vehicles ranging from saloon cars to 16-seater minibuses, perfect for families and groups of all sizes. All vehicles are comfortable and well-maintained.",
                },
                {
                  question: "How do I request a taxi for a day out?",
                  answer: "You can request a booking online through our booking form or call us on 01785 335563. We recommend requesting in advance, especially for popular destinations or weekends.",
                },
                {
                  question: "Do you provide transport to theme parks and attractions?",
                  answer: "Yes, we provide transport to theme parks, attractions, and leisure destinations throughout the UK. Popular destinations include Alton Towers, Drayton Manor, and many more.",
                },
                {
                  question: "How much does a days out taxi cost?",
                  answer: "Prices vary depending on the destination, distance, and vehicle type. Contact us for a competitive quote for your day out. We offer transparent pricing with no hidden fees.",
                },
              ]}
            />

            <div className="bg-primary text-white rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Book Your Days Out Taxi Today</h2>
              <p className="text-xl mb-8 text-gray-200">
                Make your next day out memorable with reliable transport from Stone, Stoke on Trent, 
                or anywhere in Staffordshire.
              </p>
                <BookNowButton className="text-lg">
                Book Your Days Out Taxi
              </BookNowButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

