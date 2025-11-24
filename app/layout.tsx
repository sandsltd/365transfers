import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taxi Stone | Taxi Stoke on Trent | Airport Taxi | 365 Transfers",
  description: "Taxi near me in Stone and Stoke on Trent. Professional airport taxi and transfer services available 365 days a year. Book your taxi Stone or Stoke on Trent today.",
  keywords: "taxi near me, taxi Stone, taxi Stoke on Trent, airport taxi, Stone taxi, Stoke on Trent taxi, airport transfers, taxi service Stone, taxi service Stoke on Trent, 365 transfers",
  authors: [{ name: "365 Transfers" }],
  openGraph: {
    title: "Taxi Stone | Taxi Stoke on Trent | Airport Taxi | 365 Transfers",
    description: "Taxi near me in Stone and Stoke on Trent. Professional airport taxi and transfer services available 365 days a year.",
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
  twitter: {
    card: "summary_large_image",
    title: "Taxi Stone | Taxi Stoke on Trent | Airport Taxi | 365 Transfers",
    description: "Taxi near me in Stone and Stoke on Trent. Professional airport taxi and transfer services available 365 days a year.",
    images: ["/logo/365logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

