import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Celebrity & High-Profile Wedding Safa Styling | Celebrity Safawala",
  description:
    "Discreet, premium wedding safa and groom pagdi styling for celebrity and high-profile weddings. On-location service anywhere, coordinated with your planner or team.",
  alternates: { canonical: "https://celebritysafawala.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Celebrity Safawala",
    description: "Royal safa and pagdi styling for Celebrity Safawala weddings.",
    type: "website",
    locale: "en_IN",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Celebrity Safawala",
  "image": "https://celebritysafawala.com/og.png",
  "telephone": "+919725295691",
  "url": "https://celebritysafawala.com",
  "priceRange": "$$",
};

export default function Home() {
  return <>
    <HomeClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...orgSchema, areaServed: internalLocations.slice(0, 50).map((l) => l.name) }) }} />
  </>;
}
