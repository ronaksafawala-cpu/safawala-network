import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Family Wedding Safa & Groom Pagdi Service | Sharma Ji's Safawala",
  description:
    "Trusted, family-run wedding safa rental and groom pagdi styling, on-location for weddings across India.",
  alternates: { canonical: "https://sharmajisafawale.com/" },
  openGraph: {
    title: "Family Wedding Safa & Groom Pagdi Service",
    description: "Trusted, family-run wedding safa rental and groom pagdi styling, on-location for weddings across India.",
    url: "https://sharmajisafawale.com/",
    siteName: "Sharma Ji's Safawala",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Sharma Ji's Safawala — trusted, family-run wedding safa and groom pagdi service." }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sharma Ji's Safawala",
  "image": "https://sharmajisafawale.com/og.png",
  "telephone": "+919725295691",
  "url": "https://sharmajisafawale.com",
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
