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
  alternates: {
    canonical: "/events-tours",
  },
  title: "Events & Tours Taxi Stone | Taxi Stoke on Trent | Event Transport | 365 Transfers",
  description: "Taxi for events and tours in Stone, Stoke on Trent, and Staffordshire. Transport for concerts, sports events, weddings, and guided tours. Book your event taxi Stone or Stoke on Trent.",
  keywords: "event taxi Stone, event taxi Stoke on Trent, concert taxi, wedding taxi Stone, sports event taxi, tour transport Staffordshire, event transport Stone, Stoke on Trent events, Staffordshire event taxi",
  openGraph: {
    title: "Events & Tours Taxi Stone | Taxi Stoke on Trent | 365 Transfers",
    description: "Professional taxi service for events and tours in Stone, Stoke on Trent, and Staffordshire. Concerts, weddings, sports events, and more.",
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

export default function EventsTours() {
  const serviceSchema = createServiceSchema(
    "Events & Tours Taxi Service",
    "Professional taxi service for events and tours in Stone, Stoke on Trent, and Staffordshire. Concerts, weddings, sports events, and more."
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    {
      name: "Events & Tours",
      url: "https://taxisstone.co.uk/events-tours",
    },
  ]);

  const faqSchema = createFAQSchema([
    {
      question: "What types of events do you provide transport for?",
      answer: "We provide transport for all types of events including concerts, sports events, weddings, corporate events, festivals, theatre shows, and more.",
    },
    {
      question: "Do you provide transport for wedding parties?",
      answer: "Yes, we provide professional wedding transport services. We can transport the wedding party, guests, or both. Our executive vehicles are perfect for making your special day even more memorable.",
    },
    {
      question: "Can you accommodate large groups for events?",
      answer: "Yes, we have vehicles ranging from saloon cars to 16-seater minibuses, perfect for groups of all sizes. We can also coordinate multiple vehicles for very large groups.",
    },
    {
      question: "How far in advance should I request transport for an event?",
      answer: "We recommend requesting transport at least 1-2 weeks in advance, especially for popular events, weddings, or during peak seasons. However, we can often accommodate last-minute requests - call us on 01785 335563.",
    },
    {
      question: "Do you provide guided tour transport?",
      answer: "Yes, we provide transport for guided tours and can work with tour operators to provide reliable transport for tour groups throughout Stone, Stoke on Trent, and Staffordshire.",
    },
    {
      question: "How much does event transport cost?",
      answer: "Prices vary depending on the event type, distance, vehicle type, and duration. Contact us for a competitive quote for your event transport. We offer transparent pricing with no hidden fees.",
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
              Events & Tours Taxi Services
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">
              Stone, Stoke on Trent & Staffordshire
            </p>
            <p className="text-xl text-gray-200">
              Professional transport for concerts, sports events, weddings, and guided tours
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
                  Events & Tours Taxi in Stone, Stoke on Trent & Staffordshire
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Make your special events and tours memorable with reliable transport from 365 Transfers. 
                  Whether you're attending a concert, wedding, sports event, or guided tour in <strong>Stone</strong>, 
                  <strong>Stoke on Trent</strong>, or anywhere in <strong>Staffordshire</strong>, we provide 
                  professional taxi services to ensure you arrive on time and in style.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Events We Cover
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Concerts & Music Events</h3>
                  <p className="text-gray-700 mb-4">
                    Transport to concerts, festivals, and music events. Drop-off and pick-up service from 
                    Stone and Stoke on Trent to venues across the UK.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Concert venues and festivals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Group transport available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Late night pick-ups</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Sports Events</h3>
                  <p className="text-gray-700 mb-4">
                    Reliable transport to football matches, rugby games, and sporting events. We know the 
                    best routes to avoid traffic and get you there on time.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Football and rugby matches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Race meetings and events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Pre-booked return journeys</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Weddings</h3>
                  <p className="text-gray-700 mb-4">
                    Special wedding transport service in Stone, Stoke on Trent, and Staffordshire. Make 
                    your big day perfect with our professional wedding taxi service.
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
                  </ul>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Guided Tours</h3>
                  <p className="text-gray-700 mb-4">
                    Transport for guided tours and group excursions. Comfortable vehicles for tour groups 
                    exploring Staffordshire and beyond.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Group tour transport</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Multi-stop journeys</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Flexible scheduling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <FAQ
              title="Events & Tours Taxi FAQs"
              description="Common questions about our event and tour transport services in Stone and Stoke on Trent"
              faqs={[
                {
                  question: "What types of events do you provide transport for?",
                  answer: "We provide transport for all types of events including concerts, sports events, weddings, corporate events, festivals, theatre shows, and more.",
                },
                {
                  question: "Do you provide transport for wedding parties?",
                  answer: "Yes, we provide professional wedding transport services. We can transport the wedding party, guests, or both. Our executive vehicles are perfect for making your special day even more memorable.",
                },
                {
                  question: "Can you accommodate large groups for events?",
                  answer: "Yes, we have vehicles ranging from saloon cars to 16-seater minibuses, perfect for groups of all sizes. We can also coordinate multiple vehicles for very large groups.",
                },
                {
                  question: "How far in advance should I request transport for an event?",
                  answer: "We recommend requesting transport at least 1-2 weeks in advance, especially for popular events, weddings, or during peak seasons. However, we can often accommodate last-minute requests - call us on 01785 335563.",
                },
                {
                  question: "Do you provide guided tour transport?",
                  answer: "Yes, we provide transport for guided tours and can work with tour operators to provide reliable transport for tour groups throughout Stone, Stoke on Trent, and Staffordshire.",
                },
                {
                  question: "How much does event transport cost?",
                  answer: "Prices vary depending on the event type, distance, vehicle type, and duration. Contact us for a competitive quote for your event transport. We offer transparent pricing with no hidden fees.",
                },
              ]}
            />

            <div className="bg-primary text-white rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Book Your Event Transport Today</h2>
              <p className="text-xl mb-8 text-gray-200">
                Don't let transport worries spoil your special event. Book reliable taxi service from 
                Stone, Stoke on Trent, or anywhere in Staffordshire.
              </p>
              <BookNowButton className="text-lg">
                Book Event Transport
              </BookNowButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

