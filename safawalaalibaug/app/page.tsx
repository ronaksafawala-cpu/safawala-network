import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Wedding Safa Wala in Alibaug | Groom Pagdi & Turban",
  description:
    "Professional wedding safa tying in Alibaug for grooms, families and baraatis. Explore styles, service areas and request availability on WhatsApp.",
  alternates: { canonical: "https://safawalaalibaug.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Alibaug",
    description: "Royal safa and pagdi styling for Alibaug weddings.",
    url: "https://safawalaalibaug.com/",
    siteName: "Safawala Alibaug",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Safawala Alibaug — Wedding Safa, tied with care." }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Safawala Alibaug",
  "image": "https://safawalaalibaug.com/og.png",
  "telephone": "+919725295691",
  "url": "https://safawalaalibaug.com",
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
