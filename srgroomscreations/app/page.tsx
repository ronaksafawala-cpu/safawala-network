import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Bespoke Groom Pagdi Creations & Wedding Safa Design | SR Grooms Creations",
  description:
    "Custom-designed groom pagdi and wedding safa creations, tied on-location and built around your individual outfit and story.",
  alternates: { canonical: "https://srgroomscreations.in/" },
  openGraph: {
    title: "Bespoke Groom Pagdi Creations & Wedding Safa Design",
    description: "Custom-designed groom pagdi and wedding safa creations, tied on-location and built around your individual outfit and story.",
    url: "https://srgroomscreations.in/",
    siteName: "SR Grooms Creations",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "SR Grooms Creations — bespoke groom pagdi design and wedding safa creation." }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SR Grooms Creations",
  "image": "https://srgroomscreations.in/og.png",
  "telephone": "+919725295691",
  "url": "https://srgroomscreations.in",
  "priceRange": "$$",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": 5000,
      "maxPrice": 15000,
      "priceCurrency": "INR",
    },
  },
};

export default function Home() {
  return <>
    <HomeClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...orgSchema, areaServed: internalLocations.slice(0, 50).map((l) => l.name) }) }} />
  </>;
}
