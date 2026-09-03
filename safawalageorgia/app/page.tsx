import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Designer Wedding Safa in Georgia | Groom & Baraati Safa | Safawala",
  description:
    "Explore designer wedding safa in Georgia for grooms, family, baraat members and wedding guests. Find royal pagdi, traditional safa, Rajasthani & Gujarati styles, kalgi and groom accessories at Safawala.",
  alternates: { canonical: "https://safawalageorgia.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Georgia",
    description: "Royal safa and pagdi styling for Georgia weddings.",
    url: "https://safawalageorgia.com/",
    siteName: "Safawala Georgia",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Safawala Georgia — Wedding Safa, tied with care." }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wedding Safa & Pagdi Styling in Georgia",
  "serviceType": "Wedding safa and groom pagdi styling",
  "provider": {
    "@type": "Organization",
    "name": "Safawala",
    "telephone": "+919725295691",
  },
  "image": "https://safawalageorgia.com/og.png",
  "url": "https://safawalageorgia.com",
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
