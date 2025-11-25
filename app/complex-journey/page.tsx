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
  title: "Complex Journey Taxi Stone | Multi-Stop Taxi Stoke on Trent | Staffordshire | 365 Transfers",
  description: "Complex journey and multi-stop taxi services in Stone, Stoke on Trent, and Staffordshire. We handle intricate routes and multi-destination journeys with ease. Book your complex journey taxi.",
  keywords: "complex journey taxi Stone, multi-stop taxi Stoke on Trent, complex route taxi, multi-destination taxi Staffordshire, intricate journey taxi, Stone complex routes, Stoke on Trent multi-stop, Staffordshire complex transport",
  alternates: {
    canonical: "/complex-journey",
  },
  openGraph: {
    title: "Complex Journey Taxi Stone | Multi-Stop Taxi Stoke on Trent | 365 Transfers",
    description: "Professional complex journey and multi-stop taxi services in Stone, Stoke on Trent, and Staffordshire. We handle intricate routes with ease.",
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

export default function ComplexJourney() {
  const serviceSchema = createServiceSchema(
    "Complex Journey Taxi Service",
    "Professional complex journey and multi-stop taxi services in Stone, Stoke on Trent, and Staffordshire. We handle intricate routes with ease."
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    {
      name: "Complex Journey",
      url: "https://taxisstone.co.uk/complex-journey",
    },
  ]);

  const faqSchema = createFAQSchema([
    {
      question: "What is a complex journey?",
      answer: "A complex journey involves multiple stops, intricate routes, or special requirements that need careful planning. This includes multi-stop trips, routes with multiple destinations, or journeys requiring specific timing.",
    },
    {
      question: "How do you handle multi-stop journeys?",
      answer: "Our experienced drivers are skilled at handling multi-stop journeys efficiently. We plan the optimal route and ensure all stops are made on time. Just provide us with all your destinations when requesting a booking.",
    },
    {
      question: "Can you handle journeys with specific timing requirements?",
      answer: "Yes, we can accommodate journeys with specific timing requirements. Whether you need to arrive at multiple locations at set times, we'll plan the route accordingly. Discuss your timing needs when requesting a booking.",
    },
    {
      question: "How do I request a complex journey?",
      answer: "You can request a complex journey online through our booking form or call us on 01785 335563. Please provide details of all stops, destinations, and any special requirements. We recommend requesting in advance for complex routes.",
    },
    {
      question: "How much does a complex journey cost?",
      answer: "Prices for complex journeys depend on the number of stops, total distance, duration, and vehicle type. Contact us for a competitive quote - we offer transparent pricing with no hidden fees.",
    },
    {
      question: "Do you provide vehicles for large groups on complex journeys?",
      answer: "Yes, we have vehicles ranging from saloon cars to 16-seater minibuses, perfect for complex journeys with groups of various sizes. We can coordinate multiple vehicles if needed.",
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
              Complex Journey Services
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">
              Stone, Stoke on Trent & Staffordshire
            </p>
            <p className="text-xl text-gray-200">
              Multi-stop journeys and complex routes handled with expertise
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
                  Complex Journey Taxi in Stone, Stoke on Trent & Staffordshire
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Need a taxi for a complex journey with multiple stops? 365 Transfers specialises in 
                  handling intricate routes and multi-destination journeys throughout <strong>Stone</strong>, 
                  <strong>Stoke on Trent</strong>, and <strong>Staffordshire</strong>. Our experienced 
                  drivers and route planning expertise ensure your complex journey runs smoothly.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Complex Journey Solutions
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Multi-Stop Journeys</h3>
                  <p className="text-gray-700 mb-4">
                    Whether you need to make several stops in Stone, Stoke on Trent, or across Staffordshire, 
                    we plan and execute your route efficiently.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Multiple pick-up and drop-off points</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Optimised route planning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Flexible timing arrangements</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Intricate Routes</h3>
                  <p className="text-gray-700 mb-4">
                    Complex routes requiring detailed planning and local knowledge. Our drivers know Stone, 
                    Stoke on Trent, and Staffordshire inside out.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Local area expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Traffic-aware routing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Real-time route adjustments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-12">
                When You Need Complex Journey Service
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Business Rounds</h3>
                  <p className="text-gray-700">
                    Multiple client visits or business appointments across Stone, Stoke on Trent, 
                    and Staffordshire in one day.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Shopping Trips</h3>
                  <p className="text-gray-700">
                    Multiple shopping destinations or errands requiring several stops throughout 
                    the day.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Group Transport</h3>
                  <p className="text-gray-700">
                    Collecting or dropping off multiple passengers at different locations. 
                    Perfect for group activities and events.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <FAQ
              title="Complex Journey FAQs"
              description="Common questions about our complex journey and multi-stop taxi services in Stone and Stoke on Trent"
              faqs={[
                {
                  question: "What is a complex journey?",
                  answer: "A complex journey involves multiple stops, intricate routes, or special requirements that need careful planning. This includes multi-stop trips, routes with multiple destinations, or journeys requiring specific timing.",
                },
                {
                  question: "How do you handle multi-stop journeys?",
                  answer: "Our experienced drivers are skilled at handling multi-stop journeys efficiently. We plan the optimal route and ensure all stops are made on time. Just provide us with all your destinations when requesting a booking.",
                },
                {
                  question: "Can you handle journeys with specific timing requirements?",
                  answer: "Yes, we can accommodate journeys with specific timing requirements. Whether you need to arrive at multiple locations at set times, we'll plan the route accordingly. Discuss your timing needs when requesting a booking.",
                },
                {
                  question: "How do I request a complex journey?",
                  answer: "You can request a complex journey online through our booking form or call us on 01785 335563. Please provide details of all stops, destinations, and any special requirements. We recommend requesting in advance for complex routes.",
                },
                {
                  question: "How much does a complex journey cost?",
                  answer: "Prices for complex journeys depend on the number of stops, total distance, duration, and vehicle type. Contact us for a competitive quote - we offer transparent pricing with no hidden fees.",
                },
                {
                  question: "Do you provide vehicles for large groups on complex journeys?",
                  answer: "Yes, we have vehicles ranging from saloon cars to 16-seater minibuses, perfect for complex journeys with groups of various sizes. We can coordinate multiple vehicles if needed.",
                },
              ]}
            />

            <div className="bg-primary text-white rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Book Your Complex Journey Today</h2>
              <p className="text-xl mb-8 text-gray-200">
                Don't let complex routes worry you. Our expert drivers handle multi-stop journeys 
                and intricate routes throughout Stone, Stoke on Trent, and Staffordshire.
              </p>
              <BookNowButton className="text-lg">
                Book Complex Journey
              </BookNowButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

