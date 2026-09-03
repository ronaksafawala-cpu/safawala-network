import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Wedding Safa Wala in Chandigarh | Groom Pagdi & Turban",
  description:
    "Professional wedding safa tying in Chandigarh for grooms, families and baraatis. Explore styles, service areas and request availability on WhatsApp.",
  alternates: { canonical: "https://safawalachandigarh.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Chandigarh",
    description: "Royal safa and pagdi styling for Chandigarh weddings.",
    url: "https://safawalachandigarh.com/",
    siteName: "Safawala Chandigarh",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Safawala Chandigarh — Wedding Safa, tied with care." }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Safawala Chandigarh",
  "image": "https://safawalachandigarh.com/og.png",
  "telephone": "+919725295691",
  "url": "https://safawalachandigarh.com",
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
