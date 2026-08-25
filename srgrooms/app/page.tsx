import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Complete Groom Pagdi & Safa Styling Studio | SR Grooms",
  description:
    "Professional groom pagdi styling and wedding safa tying, delivered on-location for weddings across India.",
  alternates: { canonical: "https://srgrooms.com/" },
  openGraph: {
    title: "Wedding Safa Wala in SR Grooms",
    description: "Royal safa and pagdi styling for SR Grooms weddings.",
    type: "website",
    locale: "en_IN",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SR Grooms",
  "image": "https://srgrooms.com/og.png",
  "telephone": "+919725295691",
  "url": "https://srgrooms.com",
  "priceRange": "$$",
};

export default function Home() {
  return <>
    <HomeClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...orgSchema, areaServed: internalLocations.slice(0, 50).map((l) => l.name) }) }} />
  </>;
}
