import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Wedding Safa Wala in Pune | Groom Pagdi & Turban",
  description:
    "Professional wedding safa tying in Pune for grooms, families and baraatis. Explore styles, service areas and request availability on WhatsApp.",
  alternates: { canonical: "https://safawalapune.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Pune",
    description: "Royal safa and pagdi styling for Pune weddings.",
    type: "website",
    locale: "en_IN",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Safawala Pune",
  "image": "https://safawalapune.com/og.png",
  "telephone": "+919725295691",
  "url": "https://safawalapune.com",
  "priceRange": "$$",
};

export default function Home() {
  return <>
    <HomeClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...orgSchema, areaServed: internalLocations.slice(0, 50).map((l) => l.name) }) }} />
  </>;
}
