import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Complete Groom Pagdi & Safa Styling Studio | SR Grooms",
  description:
    "Professional groom pagdi styling and wedding safa tying, delivered on-location for weddings across India.",
  alternates: { canonical: "https://srgrooms.com/" },
  openGraph: {
    title: "Complete Groom Pagdi & Safa Styling Studio",
    description: "Professional groom pagdi styling and wedding safa tying, delivered on-location for weddings across India.",
    url: "https://srgrooms.com/",
    siteName: "SR Grooms",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "SR Grooms — complete groom pagdi and wedding safa styling." }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SR Grooms",
  "image": "https://srgrooms.com/og.png",
  "telephone": "+919725295691",
  "url": "https://srgrooms.com",
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
