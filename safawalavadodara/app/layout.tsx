import type { Metadata } from "next";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://safawalavadodara.com"),
  title: { default: "Safawala Vadodara", template: "%s | Safawala Vadodara" },
  description: "Professional wedding safa and groom pagdi styling across Vadodara and nearby destinations.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/favicon-16x16.png?v=3", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png?v=3", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png?v=3", type: "image/png", sizes: "48x48" },
      { url: "/android-chrome-192x192.png?v=3", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png?v=3", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: [{ url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/mstile-150x150.png?v=3",
    "msapplication-config": "/browserconfig.xml?v=3",
  },
  openGraph: {
    url: "https://safawalavadodara.com/",
    siteName: "Safawala Vadodara",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Safawala Vadodara — Wedding Safa, tied with care." }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Safawala Vadodara",
  "url": "https://safawalavadodara.com/",
  "logo": "https://safawalavadodara.com/safawala-logo-current.png",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Safawala Vadodara",
  "url": "https://safawalavadodara.com/",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN" suppressHydrationWarning><body suppressHydrationWarning>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} /></body></html>;
}
