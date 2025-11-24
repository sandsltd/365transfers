import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Taxi Stone & Stoke on Trent | Book Your Taxi | 365 Transfers",
  description: "Book your taxi in Stone or Stoke on Trent. Contact 365 Transfers for taxi near me, airport taxi, and transfer services. Available 24/7, 365 days a year.",
  keywords: "taxi Stone, taxi Stoke on Trent, taxi near me, book taxi Stone, book taxi Stoke on Trent, contact taxi service, 365 transfers contact",
  openGraph: {
    title: "Contact Us - Taxi Stone & Stoke on Trent | 365 Transfers",
    description: "Book your taxi in Stone or Stoke on Trent. Contact 365 Transfers for professional taxi and transfer services available 24/7.",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

