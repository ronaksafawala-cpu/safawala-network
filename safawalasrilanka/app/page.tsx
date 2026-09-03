import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Wedding Safa Wala in Sri Lanka | Groom Pagdi & Turban",
  description:
    "Professional wedding safa tying in Sri Lanka for grooms, families and baraatis. Explore styles, service areas and request availability on WhatsApp.",
  alternates: { canonical: "https://safawalasrilanka.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Sri Lanka",
    description: "Royal safa and pagdi styling for Sri Lanka weddings.",
    url: "https://safawalasrilanka.com/",
    siteName: "Safawala Sri Lanka",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Safawala Sri Lanka — Wedding Safa, tied with care." }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wedding Safa & Pagdi Styling in Sri Lanka",
  "serviceType": "Wedding safa and groom pagdi styling",
  "provider": {
    "@type": "Organization",
    "name": "Safawala",
    "telephone": "+919725295691",
  },
  "image": "https://safawalasrilanka.com/og.png",
  "url": "https://safawalasrilanka.com",
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
