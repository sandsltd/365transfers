import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
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
              <Link href="/contact" className="btn-primary text-lg">
                Book Your Ride
              </Link>
              <Link href="/contact" className="btn-secondary text-lg">
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
            <Link href="/contact" className="btn-primary">
              Book Your Vehicle
            </Link>
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
                <Link href="/airport-transfers" className="btn-primary">
                  Learn More About Airport Transfers
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
                <Link href="/contact" className="btn-primary bg-accent text-primary hover:bg-accent-dark">
                  Book Airport Transfer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Train Station Transfers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Train Station Transfers
              </h2>
              <p className="text-xl text-gray-600">
                Convenient transfers to and from train stations across the region
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-primary rounded-lg p-6 hover:bg-primary hover:text-white transition-colors">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Stoke on Trent Station</h3>
                <p className="text-sm mb-4">
                  Quick transfers to and from Stoke on Trent railway station, 
                  connecting you to the national rail network.
                </p>
              </div>
              <div className="border-2 border-primary rounded-lg p-6 hover:bg-primary hover:text-white transition-colors">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Stafford Station</h3>
                <p className="text-sm mb-4">
                  Reliable transfers to Stafford railway station for your 
                  train connections.
                </p>
              </div>
              <div className="border-2 border-primary rounded-lg p-6 hover:bg-primary hover:text-white transition-colors">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Other Stations</h3>
                <p className="text-sm mb-4">
                  We also serve Crewe, Birmingham New Street, and other major 
                  railway stations. Contact us for your specific station.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Need a transfer to or from a train station? We'll get you there on time, 
                every time. Book in advance or call for immediate service.
              </p>
              <Link href="/contact" className="btn-primary">
                Book Train Station Transfer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Ride?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us today and experience reliable transportation service.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

