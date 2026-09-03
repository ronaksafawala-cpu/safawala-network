import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Destination Wedding Safa & Groom Pagdi Team | Destination Safawala",
  description:
    "A travel-ready wedding safa and groom pagdi team for destination weddings — resorts, hill stations, beaches and heritage venues, in India or abroad.",
  alternates: { canonical: "https://destinationsafawala.com/" },
  openGraph: {
    title: "Destination Wedding Safa & Groom Pagdi Team",
    description: "A travel-ready wedding safa and groom pagdi team for destination weddings — resorts, hill stations, beaches and heritage venues, in India or abroad.",
    url: "https://destinationsafawala.com/",
    siteName: "Destination Safawala",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Destination Safawala — travel-ready wedding safa styling for destination weddings." }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Destination Safawala",
  "image": "https://destinationsafawala.com/og.png",
  "telephone": "+919725295691",
  "url": "https://destinationsafawala.com",
  "priceRange": "$$",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": 5000,
      "maxPrice": 15000,
      "priceCurrency": "INR",
    },
  },
};

export default function Home() {
  return <>
    <HomeClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...orgSchema, areaServed: internalLocations.slice(0, 50).map((l) => l.name) }) }} />
  </>;
}
