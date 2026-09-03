import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Wedding Safa Wala in Georgia | Groom Pagdi & Turban",
  description:
    "Professional wedding safa tying in Georgia for grooms, families and baraatis. Explore styles, service areas and request availability on WhatsApp.",
  alternates: { canonical: "https://safawalageorgia.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Georgia",
    description: "Royal safa and pagdi styling for Georgia weddings.",
    url: "https://safawalageorgia.com/",
    siteName: "Safawala Georgia",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Safawala Georgia — Wedding Safa, tied with care." }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wedding Safa & Pagdi Styling in Georgia",
  "serviceType": "Wedding safa and groom pagdi styling",
  "provider": {
    "@type": "Organization",
    "name": "Safawala",
    "telephone": "+919725295691",
  },
  "image": "https://safawalageorgia.com/og.png",
  "url": "https://safawalageorgia.com",
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
