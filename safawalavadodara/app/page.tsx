import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Wedding Safa Wala in Vadodara | Groom Pagdi & Turban",
  description:
    "Professional wedding safa tying in Vadodara for grooms, families and baraatis. Explore styles, service areas and request availability on WhatsApp.",
  alternates: { canonical: "https://safawalavadodara.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Vadodara",
    description: "Royal safa and pagdi styling for Vadodara weddings.",
    type: "website",
    locale: "en_IN",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Safawala Vadodara",
  "image": "https://safawalavadodara.com/og.png",
  "telephone": "+919725295691",
  "url": "https://safawalavadodara.com",
  "priceRange": "$$",
};

export default function Home() {
  return <>
    <HomeClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...orgSchema, areaServed: internalLocations.slice(0, 50).map((l) => l.name) }) }} />
  </>;
}
