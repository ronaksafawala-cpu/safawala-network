import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Wedding Safa Wala in Dubai | Groom Pagdi & Turban",
  description:
    "Professional wedding safa tying in Dubai for grooms, families and baraatis. Explore styles, service areas and request availability on WhatsApp.",
  alternates: { canonical: "https://safawaladubai.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Dubai",
    description: "Royal safa and pagdi styling for Dubai weddings.",
    type: "website",
    locale: "en_IN",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Safawala Dubai",
  "image": "https://safawaladubai.com/og.png",
  "telephone": "+919725295691",
  "url": "https://safawaladubai.com",
  "priceRange": "$$",
};

export default function Home() {
  return <>
    <HomeClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...orgSchema, areaServed: internalLocations.slice(0, 50).map((l) => l.name) }) }} />
  </>;
}
