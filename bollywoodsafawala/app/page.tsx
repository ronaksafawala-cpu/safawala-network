import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Cinematic Wedding Safa & Groom Pagdi Styling | Bollywood Safawala",
  description:
    "Camera-ready wedding safa and groom pagdi styling for real weddings, pre-wedding shoots and film or TV productions.",
  alternates: { canonical: "https://bollywoodsafawala.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Bollywood Safawala",
    description: "Royal safa and pagdi styling for Bollywood Safawala weddings.",
    type: "website",
    locale: "en_IN",
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
};

export default function Home() {
  return <>
    <HomeClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...orgSchema, areaServed: internalLocations.slice(0, 50).map((l) => l.name) }) }} />
  </>;
}
