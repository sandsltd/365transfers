import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: {
    canonical: "/blog",
  },
  title: "Blog - Taxi Stone & Stoke on Trent | 365 Transfers News & Tips",
  description: "Read our latest blog posts about taxi services in Stone, Stoke on Trent, and Staffordshire. Airport transfers, wheelchair accessible transport, and local taxi tips.",
  keywords: "taxi blog Stone, taxi blog Stoke on Trent, airport transfer tips, wheelchair accessible taxi, group transport, 365 transfers blog",
  openGraph: {
    title: "Blog - Taxi Stone & Stoke on Trent | 365 Transfers",
    description: "Read our latest blog posts about taxi services, airport transfers, and transport tips in Stone, Stoke on Trent, and Staffordshire.",
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

const blogPosts = [
  {
    slug: "wheelchair-accessible-airport-transfers",
    title: "Wheelchair Accessible Airport Transfers: A Complete Guide",
    excerpt: "Everything you need to know about wheelchair accessible airport transfers from Stone and Stoke on Trent. Comfortable, safe, and reliable transport for all passengers.",
    date: "2025-12-15",
    category: "Airport Transfers",
  },
  {
    slug: "group-airport-transfers-larger-vehicles",
    title: "Group Airport Transfers: Making the Most of Larger Vehicle Options",
    excerpt: "Planning a group trip? Discover how our larger vehicle options make group airport transfers from Stone and Stoke on Trent comfortable and cost-effective.",
    date: "2025-11-10",
    category: "Airport Transfers",
  },
  {
    slug: "taxi-near-me-stone-stoke-on-trent",
    title: "Taxi Near Me: Your Guide to Reliable Taxi Services in Stone & Stoke on Trent",
    excerpt: "Looking for a taxi near me in Stone or Stoke on Trent? Learn about our comprehensive taxi services covering Staffordshire and how to book your ride.",
    date: "2025-10-05",
    category: "Local Services",
  },
];

export default function Blog() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.365transfers.co.uk" },
    {
      name: "Blog",
      url: "https://www.365transfers.co.uk/blog",
    },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">
              Taxi Tips, Guides & News
            </p>
            <p className="text-xl text-gray-200">
              Stay informed about taxi services, airport transfers, and transport tips in Stone, Stoke on Trent, and Staffordshire
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                >
                  <div className="relative h-48 bg-primary">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/logo/365logo.png"
                        alt="365 Transfers Logo"
                        width={150}
                        height={150}
                        className="opacity-20"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h2 className="text-2xl font-bold text-primary mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <span className="text-primary font-semibold hover:underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

