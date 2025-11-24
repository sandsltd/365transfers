import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - 365 Transfers | Cookie Usage & Management | Stone & Stoke on Trent",
  description: "Cookie policy for 365 Transfers. Learn about how we use cookies on our website and how to manage your cookie preferences.",
  keywords: "cookie policy, cookies, 365 transfers cookies, website cookies, cookie consent, Stone cookie policy, Stoke on Trent cookie policy",
  alternates: {
    canonical: "/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy - 365 Transfers",
    description: "Learn about how we use cookies on our website and how to manage your cookie preferences.",
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

export default function CookiePolicy() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-200">
              How we use cookies on our website
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
                  365 Transfers ("we", "our", or "us") uses cookies on our website to enhance 
                  your browsing experience and analyze site traffic. This Cookie Policy explains 
                  what cookies are, how we use them, and how you can manage your cookie preferences.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  What Are Cookies?
                </h2>
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are placed on your device (computer, tablet, 
                  or mobile) when you visit a website. They are widely used to make websites work 
                  more efficiently and provide information to website owners.
                </p>
                <p className="text-gray-700">
                  Cookies can be "persistent" (remain on your device until deleted or expired) or 
                  "session" cookies (deleted when you close your browser).
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  How We Use Cookies
                </h2>
                <p className="text-gray-700 mb-4">
                  We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Essential Cookies:</strong> These cookies are necessary for the website 
                    to function properly. They enable basic functions like page navigation and access 
                    to secure areas of the website.
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> We may use analytics cookies to understand 
                    how visitors interact with our website. This helps us improve our website's 
                    performance and user experience.
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> These cookies remember your preferences 
                    and settings (such as your cookie consent choice) to provide a more personalised 
                    experience.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Types of Cookies We Use
                </h2>
                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-primary p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">Strictly Necessary Cookies</h3>
                    <p className="text-gray-700">
                      These cookies are essential for you to browse the website and use its features. 
                      Without these cookies, services you have asked for cannot be provided. These 
                      cookies do not store any personally identifiable information.
                    </p>
                  </div>
                  <div className="bg-white border-l-4 border-primary p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">Performance Cookies</h3>
                    <p className="text-gray-700">
                      These cookies collect information about how you use our website, such as which 
                      pages you visit most often. This data helps us improve the website's performance 
                      and user experience.
                    </p>
                  </div>
                  <div className="bg-white border-l-4 border-primary p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">Functionality Cookies</h3>
                    <p className="text-gray-700">
                      These cookies allow the website to remember choices you make (such as your 
                      cookie preferences) and provide enhanced, more personal features.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-gray-700 mb-4">
                  You have the right to accept or decline cookies. Most web browsers automatically 
                  accept cookies, but you can usually modify your browser settings to decline cookies 
                  if you prefer. However, this may prevent you from taking full advantage of the website.
                </p>
                <p className="text-gray-700 mb-4">
                  To manage cookies in your browser:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>
                    <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                  </li>
                  <li>
                    <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
                  </li>
                  <li>
                    <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
                  </li>
                </ul>
                <p className="text-gray-700">
                  You can also clear cookies that have already been set by your browser. Please note 
                  that blocking or deleting cookies may impact your experience on our website.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Third-Party Cookies
                </h2>
                <p className="text-gray-700">
                  In addition to our own cookies, we may also use various third-party cookies to 
                  report usage statistics of the website and deliver advertisements. These cookies 
                  are set by domains other than ours and are subject to their respective privacy policies.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Changes to This Cookie Policy
                </h2>
                <p className="text-gray-700">
                  We may update this Cookie Policy from time to time to reflect changes in our 
                  practices or for other operational, legal, or regulatory reasons. We will notify 
                  you of any changes by posting the new Cookie Policy on this page and updating the 
                  "Last Updated" date.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please 
                  contact us:
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

              <div className="bg-primary text-white rounded-lg p-8 mt-12">
                <h2 className="text-2xl font-bold mb-4">Related Information</h2>
                <p className="text-gray-200 mb-4">
                  For more information about how we handle your personal data, please read our Privacy Policy.
                </p>
                <Link href="/privacy-policy" className="btn-secondary text-lg">
                  View Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

