import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Groom Pagdi & Wedding Safa Styling | Wow Grooms",
  description:
    "Wedding safa rental and groom pagdi styling built to make an entrance — on-location service for weddings across India.",
  alternates: { canonical: "https://wowgrooms.in/" },
  openGraph: {
    title: "Wedding Safa Wala in Wow Grooms",
    description: "Royal safa and pagdi styling for Wow Grooms weddings.",
    type: "website",
    locale: "en_IN",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Wow Grooms",
  "image": "https://wowgrooms.in/og.png",
  "telephone": "+919725295691",
  "url": "https://wowgrooms.in",
  "priceRange": "$$",
};

export default function Home() {
  return <>
    <HomeClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...orgSchema, areaServed: internalLocations.slice(0, 50).map((l) => l.name) }) }} />
  </>;
}
