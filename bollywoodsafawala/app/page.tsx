import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Cinematic Wedding Safa & Groom Pagdi Styling | Bollywood Safawala",
  description:
    "Camera-ready wedding safa and groom pagdi styling for real weddings, pre-wedding shoots and film or TV productions.",
  alternates: { canonical: "https://bollywoodsafawala.com/" },
  openGraph: {
    title: "Cinematic Wedding Safa & Groom Pagdi Styling",
    description: "Camera-ready wedding safa and groom pagdi styling for real weddings, pre-wedding shoots and film or TV productions.",
    url: "https://bollywoodsafawala.com/",
    siteName: "Bollywood Safawala",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Bollywood Safawala — cinematic, camera-ready wedding safa styling." }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bollywood Safawala",
  "image": "https://bollywoodsafawala.com/og.png",
  "telephone": "+919725295691",
  "url": "https://bollywoodsafawala.com",
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
