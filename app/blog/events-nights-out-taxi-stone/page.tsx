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
    canonical: "/blog/events-nights-out-taxi-stone",
  },
  title: "Events & Nights Out Taxi in Stone & Stoke on Trent | 365 Transfers",
  description: "Need a taxi for a night out, concert, party or event in Stone or Stoke on Trent? 365 Transfers provides reliable event transport across Staffordshire. Book today.",
  keywords: "event taxi Stone, night out taxi Stone, concert taxi Stoke on Trent, party taxi Stone, event transport Staffordshire, taxi for nights out Stone",
  openGraph: {
    title: "Events & Nights Out Taxi in Stone & Stoke on Trent | 365 Transfers",
    description: "Reliable taxi services for events, concerts, parties and nights out in Stone and Stoke on Trent. Available 24/7.",
    type: "article",
    locale: "en_GB",
    images: [
      {
        url: "/blog/events-night-out-taxi.png",
        width: 1200,
        height: 630,
        alt: "Events and nights out taxi service in Stone and Stoke on Trent",
      },
    ],
  },
};

export default function EventsNightsOutTaxi() {
  const articleSchema = createArticleSchema(
    "Events & Nights Out Taxi in Stone & Stoke on Trent",
    "Need a taxi for a night out, concert, party or event in Stone or Stoke on Trent? 365 Transfers provides reliable event transport across Staffordshire.",
    "2026-01-30"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Blog", url: "https://taxisstone.co.uk/blog" },
    {
      name: "Events & Nights Out Taxi",
      url: "https://taxisstone.co.uk/blog/events-nights-out-taxi-stone",
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
                  Local Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Events & Nights Out Taxi in Stone & Stoke on Trent
              </h1>
              <p className="text-gray-600">
                Published on{" "}
                {new Date("2026-01-30").toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src="/blog/events-night-out-taxi.png"
                alt="Events and nights out taxi service in Stone and Stoke on Trent"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Going out should be about enjoying yourself, not worrying about how you're
                  getting home. Whether it's a concert, a birthday party, a work do, or just
                  a night out with friends in <strong>Stone</strong> or <strong>Stoke on Trent</strong>,
                  having a reliable taxi booked means you can relax and make the most of it.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Concert & Gig Transport
              </h2>
              <p className="text-gray-700 mb-4">
                Stoke on Trent and the surrounding area host some brilliant live music and
                entertainment throughout the year. From gigs at local venues to larger events,
                getting there and back shouldn't be the stressful part.
              </p>
              <p className="text-gray-700 mb-4">
                We provide <strong>concert taxi services</strong> across Staffordshire. Tell us
                where the event is and what time it finishes, and we'll have a driver waiting
                for you. No standing around in the cold trying to flag down a cab, no surge
                pricing on apps when everyone leaves at the same time.
              </p>
              <p className="text-gray-700 mb-8">
                Book in advance and your ride home is sorted before you've even left the house.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Party & Night Out Taxi
              </h2>
              <p className="text-gray-700 mb-4">
                Birthdays, hen nights, stag dos, work Christmas parties, leaving dos — whatever
                the occasion, we'll get your group where they need to be and back home safely
                at the end of the night.
              </p>
              <p className="text-gray-700 mb-4">
                For larger groups, our <strong>6, 7, and 8 seater vehicles</strong> keep everyone
                together. No splitting up across multiple taxis, no one getting lost, and no
                arguments about who's paying for which cab. One vehicle, one fare, everyone together.
              </p>
              <p className="text-gray-700 mb-8">
                Need something even bigger? Our <strong>12 and 16 seater minibuses</strong> are
                perfect for larger parties heading out in Stone, Stoke on Trent, or further afield.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Why Book Your Event Taxi in Advance?
              </h2>
              <p className="text-gray-700 mb-4">
                We've all been there — the event finishes, everyone's trying to get home at the
                same time, and suddenly there isn't a taxi to be found. Booking in advance means:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>
                  <strong>Guaranteed pickup:</strong> Your driver will be there at the agreed
                  time, no matter how busy it is
                </li>
                <li>
                  <strong>Fixed price:</strong> Know exactly what you're paying before you go out.
                  No surge pricing, no surprises
                </li>
                <li>
                  <strong>No waiting around:</strong> Walk out and get straight in. No standing
                  in taxi queues or refreshing apps
                </li>
                <li>
                  <strong>Safe journey home:</strong> Professional, DBS-checked drivers who know
                  the area inside out
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Events We Cover
              </h2>
              <p className="text-gray-700 mb-4">
                Our <Link href="/events-tours">event taxi service</Link> covers all kinds of occasions across
                Stone, Stoke on Trent, and Staffordshire:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Concerts & Gigs</h3>
                  <p className="text-gray-700">
                    Live music venues across Stoke on Trent and Staffordshire. We'll drop you
                    off and pick you up when the encore's done.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Parties & Celebrations</h3>
                  <p className="text-gray-700">
                    Birthdays, anniversaries, engagements, or any excuse for a good night out.
                    We'll get you there and back.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Work Events</h3>
                  <p className="text-gray-700">
                    Team nights out, <Link href="/account-work">corporate events</Link>, conferences, and award ceremonies.
                    Professional transport for professional occasions.
                  </p>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Sporting Events</h3>
                  <p className="text-gray-700">
                    Football matches, cricket, rugby, or any sporting event. Travel as a group
                    and enjoy the atmosphere without worrying about driving.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Late Night Service
              </h2>
              <p className="text-gray-700 mb-4">
                We're available <strong>24 hours a day, 365 days a year</strong>. It doesn't
                matter if your event finishes at 11pm or 3am — we'll be there. No extra charge
                for late night pickups, no "sorry, we stop at midnight" nonsense. When you
                book with us, we're there when you need us.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Areas We Cover
              </h2>
              <p className="text-gray-700 mb-4">
                We provide event and night out taxi services across:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>Stone</li>
                <li><Link href="/taxi-stoke-on-trent">Stoke on Trent</Link> (Hanley, Burslem, Longton, Tunstall, Fenton, Stoke)</li>
                <li>Newcastle-under-Lyme</li>
                <li><Link href="/taxi-stafford">Stafford</Link></li>
                <li>Eccleshall</li>
                <li>Barlaston</li>
                <li>Trentham</li>
                <li>And across Staffordshire</li>
              </ul>

              <div className="bg-primary text-white rounded-lg p-8 mt-12">
                <h2 className="text-3xl font-bold mb-4">Book Your Event Taxi</h2>
                <p className="text-xl mb-6 text-gray-200">
                  Don't leave your ride home to chance. Book your event taxi in Stone or Stoke
                  on Trent today and enjoy your night out without the worry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <BookNowButton className="text-lg">
                    Book Your Taxi Now
                  </BookNowButton>
                  <a
                    href="tel:01785335563"
                    className="bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center"
                  >
                    Call 01785 335563
                  </a>
                </div>
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
