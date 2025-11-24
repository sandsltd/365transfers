import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - 365 Transfers | Data Protection & Privacy | Stone & Stoke on Trent",
  description: "Privacy policy for 365 Transfers. Learn how we collect, use, and protect your personal data when using our taxi services in Stone, Stoke on Trent, and Staffordshire.",
  keywords: "privacy policy, data protection, 365 transfers privacy, taxi service privacy, Stone privacy policy, Stoke on Trent privacy",
  openGraph: {
    title: "Privacy Policy - 365 Transfers",
    description: "Privacy policy for 365 Transfers. Learn how we collect, use, and protect your personal data.",
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

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-700">
                  365 Transfers ("we", "our", or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you use our taxi and transfer services.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  We may collect information about you in a variety of ways. The information we 
                  may collect includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Personal Information:</strong> Name, email address, phone number, 
                    and postal address when you book a service or contact us.
                  </li>
                  <li>
                    <strong>Booking Information:</strong> Pick-up and drop-off locations, journey 
                    dates and times, and special requirements.
                  </li>
                  <li>
                    <strong>Payment Information:</strong> Payment card details (processed securely 
                    through our payment providers - we do not store full card details).
                  </li>
                  <li>
                    <strong>Communication Data:</strong> Records of correspondence when you contact 
                    us via email, phone, or our contact form.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Process and manage your bookings and reservations</li>
                  <li>Communicate with you about your bookings and respond to your enquiries</li>
                  <li>Process payments and send invoices</li>
                  <li>Improve our services and customer experience</li>
                  <li>Comply with legal obligations and regulatory requirements</li>
                  <li>Send you service-related communications (you can opt out at any time)</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  3. Data Sharing and Disclosure
                </h2>
                <p className="text-gray-700 mb-4">
                  We do not sell your personal information. We may share your information only in 
                  the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Service Providers:</strong> With trusted third-party service providers 
                    who assist us in operating our business (e.g., payment processors, email services)
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or to protect our 
                    rights, property, or safety
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with any merger, sale, or 
                    transfer of assets
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  4. Data Security
                </h2>
                <p className="text-gray-700">
                  We implement appropriate technical and organisational measures to protect your 
                  personal information against unauthorised access, alteration, disclosure, or 
                  destruction. However, no method of transmission over the internet or electronic 
                  storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  5. Your Rights
                </h2>
                <p className="text-gray-700 mb-4">
                  Under UK data protection laws, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise any of these rights, please contact us using the details provided 
                  in the Contact section below.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  6. Cookies and Tracking
                </h2>
                <p className="text-gray-700">
                  Our website may use cookies and similar tracking technologies to enhance your 
                  experience. You can set your browser to refuse cookies, but this may limit some 
                  functionality of our website.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  7. Data Retention
                </h2>
                <p className="text-gray-700">
                  We retain your personal information only for as long as necessary to fulfil the 
                  purposes outlined in this Privacy Policy, unless a longer retention period is 
                  required or permitted by law.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  8. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the "Last 
                  Updated" date.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  9. Contact Us
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your 
                  rights, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2">
                    <strong>365 Transfers</strong>
                  </p>
                  <p className="text-gray-700 mb-2">
                    Phone: <a href="tel:03333355365" className="text-primary hover:underline">03333 355365</a>
                  </p>
                  <p className="text-gray-700">
                    Email: <Link href="/contact" className="text-primary hover:underline">Contact Form</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

