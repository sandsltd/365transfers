import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "365 Transfers - Reliable Taxi & Transfer Services",
  description: "Professional taxi and transfer services available 365 days a year. Book your ride today for reliable, comfortable, and safe transportation.",
  keywords: "taxi, transfers, transportation, 365 transfers, taxi service, airport transfers, reliable taxi",
  authors: [{ name: "365 Transfers" }],
  openGraph: {
    title: "365 Transfers - Reliable Taxi & Transfer Services",
    description: "Professional taxi and transfer services available 365 days a year.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "365 Transfers - Reliable Taxi & Transfer Services",
    description: "Professional taxi and transfer services available 365 days a year.",
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

