import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Wedding Safa Wala in Thailand | Groom Pagdi & Turban",
  description:
    "Professional wedding safa tying in Thailand for grooms, families and baraatis. Explore styles, service areas and request availability on WhatsApp.",
  alternates: { canonical: "https://safawalathailand.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Thailand",
    description: "Royal safa and pagdi styling for Thailand weddings.",
    type: "website",
    locale: "en_IN",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Safawala Thailand",
  "image": "https://safawalathailand.com/og.png",
  "telephone": "+919725295691",
  "url": "https://safawalathailand.com",
  "priceRange": "$$",
};

export default function Home() {
  return <>
    <HomeClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...orgSchema, areaServed: internalLocations.slice(0, 50).map((l) => l.name) }) }} />
  </>;
}
