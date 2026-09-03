import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Wedding Safa Wala in Ahmedabad | Groom Pagdi & Turban",
  description:
    "Professional wedding safa tying in Ahmedabad for grooms, families and baraatis. Explore styles, service areas and request availability on WhatsApp.",
  alternates: { canonical: "https://safawalaahemdabad.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Ahmedabad",
    description: "Royal safa and pagdi styling for Ahmedabad weddings.",
    url: "https://safawalaahemdabad.com/",
    siteName: "Safawala Ahmedabad",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Safawala Ahmedabad — Wedding Safa, tied with care." }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Safawala Ahmedabad",
  "image": "https://safawalaahemdabad.com/og.png",
  "telephone": "+919725295691",
  "url": "https://safawalaahemdabad.com",
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
