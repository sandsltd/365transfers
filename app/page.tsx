import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import BookNowButton from "@/components/BookNowButton";
import StructuredData from "@/components/StructuredData";
import FAQ from "@/components/FAQ";
import { createBreadcrumbSchema, createFAQSchema, taxiServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Taxi Near Me | Taxi Stone | Taxi Stoke on Trent | 365 Transfers",
  description: "Looking for a taxi near me? Professional taxi services in Stone and Stoke on Trent. Airport taxi, local taxi, and transfer services available 24/7. Book your taxi Stone or Stoke on Trent today.",
  keywords: "taxi near me, taxi Stone, taxi Stoke on Trent, Stone taxi, Stoke on Trent taxi, airport taxi, taxi service Stone, taxi service Stoke on Trent, local taxi, 365 transfers",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Taxi Near Me | Taxi Stone | Taxi Stoke on Trent | 365 Transfers",
    description: "Professional taxi services in Stone and Stoke on Trent. Airport taxi, local taxi, and transfer services available 24/7.",
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

export default function Home() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
  ]);

  const faqSchema = createFAQSchema([
    {
      question: "Do you provide taxi services in Stone and Stoke on Trent?",
      answer: "Yes, we provide comprehensive taxi services throughout Stone, Stoke on Trent, and the surrounding Staffordshire area. We're based in Stone and have extensive local knowledge of the area.",
    },
    {
      question: "How do I book a taxi?",
      answer: "You can request a booking in three ways: online through our booking request form, by calling us on 01785 335563, or by using our contact form. For urgent bookings within 24 hours, we recommend calling us directly.",
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Stone, Stoke on Trent, Staffordshire, and surrounding areas including Stafford, Newcastle-under-Lyme, and the wider West Midlands region. We also provide airport transfers to all major UK airports.",
    },
    {
      question: "Do you provide airport transfer services?",
      answer: "Yes, we specialise in airport transfers to all major UK airports including Manchester, Birmingham, Liverpool, East Midlands, and London airports. We offer both one-way and return transfers.",
    },
    {
      question: "What types of vehicles do you have?",
      answer: "Our fleet includes saloon cars, estate cars, executive vehicles, and larger vehicles from 4 to 16 seats. We also have wheelchair-accessible vehicles available. All vehicles are modern, comfortable, and well-maintained.",
    },
    {
      question: "Are your drivers licensed and insured?",
      answer: "Yes, all our drivers are fully licensed, DBS checked, and have completed relevant BTEC qualifications and C.S.E courses. All vehicles are fully insured and meet all safety requirements.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept card payments online, card payments in the taxi, and cash. For corporate clients, we can set up monthly account payments for convenience.",
    },
    {
      question: "Do you operate 24/7?",
      answer: "Yes, we operate 24 hours a day, 7 days a week, 365 days a year. Whether you need an early morning airport transfer, a late-night ride home, or any time in between, we're available.",
    },
    {
      question: "Can I book in advance?",
      answer: "Absolutely! We recommend requesting a booking in advance, especially for airport transfers, events, or important appointments. You can request a booking online or call us on 01785 335563 to secure your booking.",
    },
    {
      question: "Do you provide services for events and group travel?",
      answer: "Yes, we provide services for events, group travel, days out, school contracts, and corporate account work. We have vehicles ranging from 4 to 16 seats to accommodate groups of any size.",
    },
  ]);

  return (
    <>
      <StructuredData data={taxiServiceSchema} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative text-white py-20 min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/stokeontrentmap.png"
            alt="Stoke on Trent area map"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Taxi Services in Stone
              <span className="text-accent block">Near Stoke on Trent</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Professional, reliable taxi and transfer services serving Stone and the surrounding areas.
              Available 24/7, every day of the year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookNowButton className="text-xl px-10 py-5">
                Book Your Ride
              </BookNowButton>
              <Link href="/contact" className="btn-secondary text-xl px-10 py-5">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stone Focus Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Taxi Services in Stone, Staffordshire
              </h2>
              <p className="text-xl text-gray-600">
                Your trusted local taxi service in Stone, near Stoke on Trent
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Serving Stone & Surrounding Areas
                </h3>
                <p className="text-gray-700 mb-4">
                  Based in Stone, Staffordshire, we provide comprehensive taxi services 
                  throughout the local area and beyond. Whether you need a quick trip 
                  around Stone, a journey to Stoke on Trent, or transportation to 
                  destinations across Staffordshire, Shropshire, and Cheshire, we've got you covered.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Local Stone taxi services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Stoke on Trent transfers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Long-distance journeys</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>24/7 availability</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us in Stone?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    <span><strong>Local Knowledge:</strong> Expert knowledge of Stone and surrounding areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    <span><strong>Reliable Service:</strong> Over 20 years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    <span><strong>Flexible Fleet:</strong> 4 to 16 seater vehicles available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    <span><strong>Competitive Rates:</strong> Fair pricing for Stone residents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Fleet
            </h2>
            <p className="text-xl text-gray-600">
              From saloons to 16-seaters, we have the perfect vehicle for your journey
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Saloon Taxi */}
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src="/saloontaxi.png"
                  alt="Saloon Taxi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary mb-1">Saloon Taxi</h3>
                <p className="text-sm text-gray-600">Up to 4 passengers</p>
              </div>
            </div>

            {/* Estate Taxi */}
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src="/estatetaxi.png"
                  alt="Estate Taxi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary mb-1">Estate Taxi</h3>
                <p className="text-sm text-gray-600">Extra luggage space</p>
              </div>
            </div>

            {/* Executive Taxi */}
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src="/executivetaxi.png"
                  alt="Executive Taxi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary mb-1">Executive Taxi</h3>
                <p className="text-sm text-gray-600">Premium comfort</p>
              </div>
            </div>

            {/* 6 Seater Taxi */}
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src="/6seatertaxi.png"
                  alt="6 Seater Taxi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary mb-1">6 Seater Taxi</h3>
                <p className="text-sm text-gray-600">Perfect for small groups</p>
              </div>
            </div>

            {/* 7 Seater Taxi */}
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src="/7seatertaxi.png"
                  alt="7 Seater Taxi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary mb-1">7 Seater Taxi</h3>
                <p className="text-sm text-gray-600">Family-friendly</p>
              </div>
            </div>

            {/* 8 Seater Taxi */}
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src="/8seatertaxi.png"
                  alt="8 Seater Taxi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary mb-1">8 Seater Taxi</h3>
                <p className="text-sm text-gray-600">Ideal for larger groups</p>
              </div>
            </div>

            {/* 12 Seater Taxi */}
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src="/12seatertaxi.png"
                  alt="12 Seater Taxi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary mb-1">12 Seater Taxi</h3>
                <p className="text-sm text-gray-600">Minibus capacity</p>
              </div>
            </div>

            {/* 16 Seater Taxi */}
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src="/16seatertaxi.png"
                  alt="16 Seater Taxi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary mb-1">16 Seater Taxi</h3>
                <p className="text-sm text-gray-600">Maximum capacity</p>
              </div>
            </div>

            {/* Wheelchair Accessible Taxi */}
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src="/wheelchairaccessibletaxi.png"
                  alt="Wheelchair Accessible Taxi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary mb-1">Wheelchair Accessible</h3>
                <p className="text-sm text-gray-600">Fully accessible vehicle</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              All our vehicles are well-maintained, comfortable, and driven by professional, licensed drivers.
            </p>
            <BookNowButton className="text-xl px-10 py-5">
              Book Your Vehicle
            </BookNowButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-accent text-primary px-6 py-3 rounded-full mb-6">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-bold">YOUR ESSENTIAL TRAVEL</h2>
            </div>
            <h3 className="text-4xl font-bold mb-4">
              Comprehensive Travel Services
            </h3>
            <p className="text-xl text-gray-200">
              From local trips to complex journeys, we provide transport solutions for every need
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Local & National */}
            <Link href="/local-national" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors block">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-accent">LOCAL & NATIONAL</h4>
              <p className="text-sm text-gray-200">
                Reliable taxi services for local journeys in Stone and Stoke on Trent, as well as long-distance national travel across the UK.
              </p>
            </Link>

            {/* Airport Transfers */}
            <Link href="/airport-transfers" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors block">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-accent">AIRPORT TRANSFERS</h4>
              <p className="text-sm text-gray-200">
                Professional airport taxi services to and from all major UK airports. Flight monitoring and meet & greet available.
              </p>
            </Link>

            {/* Days Out */}
            <Link href="/days-out" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors block">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-accent">DAYS OUT</h4>
              <p className="text-sm text-gray-200">
                Perfect for family days out, leisure trips, and weekend getaways. Comfortable transport for your special occasions.
              </p>
            </Link>

            {/* Events and Tours */}
            <Link href="/events-tours" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors block">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-accent">EVENTS AND TOURS</h4>
              <p className="text-sm text-gray-200">
                Transport for concerts, sports events, weddings, and guided tours. Group bookings welcome.
              </p>
            </Link>

            {/* School Contracts */}
            <Link href="/school-contracts" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors block">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-accent">SCHOOL CONTRACTS</h4>
              <p className="text-sm text-gray-200">
                Reliable school transport services. DBS checked drivers and safe vehicles for educational institutions.
              </p>
            </Link>

            {/* Account Work */}
            <Link href="/account-work" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors block">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-accent">ACCOUNT WORK</h4>
              <p className="text-sm text-gray-200">
                Corporate account services with monthly invoicing. Perfect for businesses requiring regular transport solutions.
              </p>
            </Link>

            {/* Complex Journey */}
            <Link href="/complex-journey" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors block">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-accent">COMPLEX JOURNEY</h4>
              <p className="text-sm text-gray-200">
                Multi-stop journeys and complex routes handled with ease. We plan and execute intricate travel requirements.
              </p>
            </Link>

            {/* Service for Every Occasion */}
            <Link href="/every-occasion" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors block">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-accent">SERVICE FOR EVERY OCCASION</h4>
              <p className="text-sm text-gray-200">
                Weddings, parties, celebrations, and special events. We provide transport solutions for all your memorable moments.
              </p>
            </Link>
          </div>
          <div className="text-center mt-12">
            <BookNowButton className="text-xl px-10 py-5">
              Book Your Service
            </BookNowButton>
          </div>
        </div>
      </section>

      {/* Taxi Cab Visual Section */}
      <section className="relative py-32 min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/taxicabimage.png"
            alt="365 Transfers taxi cab"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
          {/* Green tint overlay using brand green */}
          <div className="absolute inset-0 bg-accent/20"></div>
          {/* Darker overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Available 24/7, Every Day of the Year
            </h2>
            <p className="text-xl md:text-2xl text-gray-200">
              Whether it's early morning, late night, or any time in between, we're here when you need us.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Why Choose 365 Transfers?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">24/7 Availability</h3>
              <p className="text-gray-600">
                We're available every day of the year, around the clock. Book your ride whenever you need it.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Safe & Reliable</h3>
              <p className="text-gray-600">
                Your safety is our priority. All our drivers are licensed, insured, and experienced professionals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Professional Service</h3>
              <p className="text-gray-600">
                Clean, comfortable vehicles and courteous drivers ensure a pleasant journey every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Transfers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Airport Transfers from Stone
              </h2>
              <p className="text-xl text-gray-600">
                Reliable airport transfer services to and from all major UK airports
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Stress-Free Airport Travel
                </h3>
                <p className="text-gray-700 mb-4">
                  Start or end your journey with peace of mind. Our professional airport 
                  transfer service from Stone ensures you arrive on time, every time. 
                  We monitor flight schedules and adjust pickup times accordingly.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Meet & Greet service available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Flight monitoring for delays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Luggage assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Fixed prices, no hidden charges</span>
                  </li>
                </ul>
                <Link href="/airport-transfers" className="btn-primary inline-block">
                  Learn More
                </Link>
              </div>
              <div className="bg-primary text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Airports We Serve</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-accent mb-2">Manchester</h4>
                    <p className="text-sm">~45 mins</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-accent mb-2">Birmingham</h4>
                    <p className="text-sm">~1 hour</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-accent mb-2">East Midlands</h4>
                    <p className="text-sm">~1 hour</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-accent mb-2">Liverpool</h4>
                    <p className="text-sm">~1 hour</p>
                  </div>
                </div>
                <p className="text-sm text-gray-200 mb-4">
                  We also provide transfers to London airports (Heathrow, Gatwick, Stansted, Luton) 
                  and other UK airports. Contact us for a quote.
                </p>
                <BookNowButton className="bg-accent text-primary hover:bg-accent-dark text-xl px-10 py-5">
                  Book Airport Transfer
                </BookNowButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Train Station Transfers Section */}
      <section className="relative py-32 min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/trainstationimage.png"
            alt="Train station"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
          {/* Green tint overlay using brand green */}
          <div className="absolute inset-0 bg-accent/20"></div>
          {/* Subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Train Station Transfers
              </h2>
              <p className="text-xl text-gray-200">
                Convenient transfers to and from train stations across the region
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/90 backdrop-blur-sm border-2 border-white rounded-lg p-6 hover:bg-white transition-colors">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Stone & Stoke on Trent Stations</h3>
                <p className="text-sm mb-4 text-gray-700">
                  Quick and convenient transfers to and from Stone and Stoke on Trent railway stations, 
                  connecting you to the national rail network.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm border-2 border-white rounded-lg p-6 hover:bg-white transition-colors">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Stafford Station</h3>
                <p className="text-sm mb-4 text-gray-700">
                  Reliable transfers to Stafford railway station for your 
                  train connections.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm border-2 border-white rounded-lg p-6 hover:bg-white transition-colors">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Other Stations</h3>
                <p className="text-sm mb-4 text-gray-700">
                  We serve Liverpool, Manchester, Sheffield, Nottingham, Leicester, Crewe, Birmingham New Street, and other major 
                  railway stations across the region. Contact us for your specific station.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-200 mb-4 text-lg">
                Need a transfer to or from a train station? We'll get you there on time, 
                every time. Book in advance or call for immediate service.
              </p>
              <BookNowButton className="bg-accent text-primary hover:bg-accent/90 text-xl px-10 py-5">
                Book Train Station Transfer
              </BookNowButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Frequently Asked Questions"
        description="Everything you need to know about our taxi services in Stone and Stoke on Trent"
        faqs={[
          {
            question: "Do you provide taxi services in Stone and Stoke on Trent?",
            answer: "Yes, we provide comprehensive taxi services throughout Stone, Stoke on Trent, and the surrounding Staffordshire area. We're based in Stone and have extensive local knowledge of the area.",
          },
          {
            question: "How do I book a taxi?",
            answer: (
              <>
                You can request a booking in three ways: online through our booking request form, by calling us on <a href="tel:01785335563" className="text-primary hover:underline font-semibold">01785 335563</a>, or by using our contact form. For urgent bookings within 24 hours, we recommend calling us directly.
              </>
            ),
          },
          {
            question: "What areas do you serve?",
            answer: "We serve Stone, Stoke on Trent, Staffordshire, and surrounding areas including Stafford, Newcastle-under-Lyme, and the wider West Midlands region. We also provide airport transfers to all major UK airports.",
          },
          {
            question: "Do you provide airport transfer services?",
            answer: (
              <>
                Yes, we specialise in airport transfers to all major UK airports including Manchester, Birmingham, Liverpool, East Midlands, and London airports. We offer both one-way and return transfers. <Link href="/airport-transfers" className="text-primary hover:underline font-semibold">Learn more about our airport transfer services</Link>.
              </>
            ),
          },
          {
            question: "What types of vehicles do you have?",
            answer: "Our fleet includes saloon cars, estate cars, executive vehicles, and larger vehicles from 4 to 16 seats. We also have wheelchair-accessible vehicles available. All vehicles are modern, comfortable, and well-maintained.",
          },
          {
            question: "Are your drivers licensed and insured?",
            answer: "Yes, all our drivers are fully licensed, DBS checked, and have completed relevant BTEC qualifications and C.S.E courses. All vehicles are fully insured and meet all safety requirements.",
          },
          {
            question: "What payment methods do you accept?",
            answer: "We accept card payments online, card payments in the taxi, and cash. For corporate clients, we can set up monthly account payments for convenience.",
          },
          {
            question: "Do you operate 24/7?",
            answer: "Yes, we operate 24 hours a day, 7 days a week, 365 days a year. Whether you need an early morning airport transfer, a late-night ride home, or any time in between, we're available.",
          },
          {
            question: "Can I book in advance?",
            answer: (
              <>
                Absolutely! We recommend requesting a booking in advance, especially for airport transfers, events, or important appointments. You can request a booking online or call us on <a href="tel:01785335563" className="text-primary hover:underline font-semibold">01785 335563</a> to secure your booking.
              </>
            ),
          },
          {
            question: "Do you provide services for events and group travel?",
            answer: "Yes, we provide services for events, group travel, days out, school contracts, and corporate account work. We have vehicles ranging from 4 to 16 seats to accommodate groups of any size.",
          },
        ]}
      />

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Ride?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us today and experience reliable transportation service.
          </p>
          <BookNowButton className="text-xl px-10 py-5">
            Get Started
          </BookNowButton>
        </div>
      </section>
    </div>
    </>
  );
}

