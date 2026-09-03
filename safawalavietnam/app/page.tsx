import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Wedding Safa Wala in Vietnam | Groom Pagdi & Turban",
  description:
    "Professional wedding safa tying in Vietnam for grooms, families and baraatis. Explore styles, service areas and request availability on WhatsApp.",
  alternates: { canonical: "https://safawalavietnam.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Vietnam",
    description: "Royal safa and pagdi styling for Vietnam weddings.",
    url: "https://safawalavietnam.com/",
    siteName: "Safawala Vietnam",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Safawala Vietnam — Wedding Safa, tied with care." }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wedding Safa & Pagdi Styling in Vietnam",
  "serviceType": "Wedding safa and groom pagdi styling",
  "provider": {
    "@type": "Organization",
    "name": "Safawala",
    "telephone": "+919725295691",
  },
  "image": "https://safawalavietnam.com/og.png",
  "url": "https://safawalavietnam.com",
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
