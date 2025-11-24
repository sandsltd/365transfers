// Structured Data (JSON-LD) Schema Definitions

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "365 Transfers",
  url: "https://www.365transfers.co.uk",
  logo: "https://www.365transfers.co.uk/logo/365logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+44-3333-355365",
    contactType: "Customer Service",
    areaServed: ["GB"],
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61576144679794",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.365transfers.co.uk/#organization",
  name: "365 Transfers",
  image: "https://www.365transfers.co.uk/logo/365logo.png",
  telephone: "03333355365",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stone",
    addressRegion: "Staffordshire",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "52.9069",
    longitude: "-2.1394",
  },
  url: "https://www.365transfers.co.uk",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Stone",
    },
    {
      "@type": "City",
      name: "Stoke on Trent",
    },
    {
      "@type": "State",
      name: "Staffordshire",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  serviceType: "Taxi Service",
  description:
    "Professional taxi and transfer services in Stone, Stoke on Trent, and Staffordshire. Available 24/7, 365 days a year.",
};

export const taxiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "365 Transfers",
  provider: {
    "@id": "https://www.365transfers.co.uk/#organization",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Stone",
    },
    {
      "@type": "City",
      name: "Stoke on Trent",
    },
    {
      "@type": "State",
      name: "Staffordshire",
    },
  ],
  description:
    "Professional taxi and transfer services available 24/7, 365 days a year.",
};

export function createServiceSchema(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    provider: {
      "@id": "https://www.365transfers.co.uk/#organization",
    },
    description: description,
    areaServed: [
      {
        "@type": "City",
        name: "Stone",
      },
      {
        "@type": "City",
        name: "Stoke on Trent",
      },
      {
        "@type": "State",
        name: "Staffordshire",
      },
    ],
    serviceType: "Taxi Service",
  };
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createArticleSchema(
  title: string,
  description: string,
  datePublished: string,
  dateModified?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: "365 Transfers",
    },
    publisher: {
      "@id": "https://www.365transfers.co.uk/#organization",
    },
  };
}

