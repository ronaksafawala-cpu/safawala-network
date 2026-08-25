import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Family Wedding Safa & Groom Pagdi Service | Sharma Ji's Safawala",
  description:
    "Trusted, family-run wedding safa rental and groom pagdi styling, on-location for weddings across India.",
  alternates: { canonical: "https://sharmajisafawala.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Sharma Ji's Safawala",
    description: "Royal safa and pagdi styling for Sharma Ji's Safawala weddings.",
    type: "website",
    locale: "en_IN",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sharma Ji's Safawala",
  "image": "https://sharmajisafawala.com/og.png",
  "telephone": "+919725295691",
  "url": "https://sharmajisafawala.com",
  "priceRange": "$$",
};

export default function Home() {
  return <>
    <HomeClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...orgSchema, areaServed: internalLocations.slice(0, 50).map((l) => l.name) }) }} />
  </>;
}
