import type { Metadata } from "next";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sharmajisafawale.com"),
  title: { default: "Sharma Ji's Safawala", template: "%s | Sharma Ji's Safawala" },
  description: "Family-run groom pagdi and wedding safa styling, delivered with the same care as three generations before.",
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
    url: "https://sharmajisafawale.com/",
    siteName: "Sharma Ji's Safawala",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Sharma Ji's Safawala — trusted, family-run wedding safa and groom pagdi service." }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sharma Ji's Safawala",
  "url": "https://sharmajisafawale.com/",
  "logo": "https://sharmajisafawale.com/safawala-logo-current.png",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sharma Ji's Safawala",
  "url": "https://sharmajisafawale.com/",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN" suppressHydrationWarning><body suppressHydrationWarning>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} /></body></html>;
}
