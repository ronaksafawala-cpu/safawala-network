import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Destination Wedding Safa & Groom Pagdi Team | Destination Safawala",
  description:
    "A travel-ready wedding safa and groom pagdi team for destination weddings — resorts, hill stations, beaches and heritage venues, in India or abroad.",
  alternates: { canonical: "https://destinationsafawala.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Destination Safawala",
    description: "Royal safa and pagdi styling for Destination Safawala weddings.",
    type: "website",
    locale: "en_IN",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Destination Safawala",
  "image": "https://destinationsafawala.com/og.png",
  "telephone": "+919725295691",
  "url": "https://destinationsafawala.com",
  "priceRange": "$$",
};

export default function Home() {
  return <>
    <HomeClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...orgSchema, areaServed: internalLocations.slice(0, 50).map((l) => l.name) }) }} />
  </>;
}
