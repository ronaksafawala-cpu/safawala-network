import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Designer Wedding Safa in Hyderabad | Groom & Baraati Safa | Safawala",
  description:
    "Explore designer wedding safa in Hyderabad for grooms, family, baraat members and wedding guests. Find royal pagdi, traditional safa, Rajasthani & Gujarati styles, kalgi and groom accessories at Safawala.",
  alternates: { canonical: "https://safawalahyderabad.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Hyderabad",
    description: "Royal safa and pagdi styling for Hyderabad weddings.",
    url: "https://safawalahyderabad.com/",
    siteName: "Safawala Hyderabad",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Safawala Hyderabad — Wedding Safa, tied with care." }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Safawala Hyderabad",
  "image": "https://safawalahyderabad.com/og.png",
  "telephone": "+919725295691",
  "url": "https://safawalahyderabad.com",
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
