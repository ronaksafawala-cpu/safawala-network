import type { Metadata } from "next";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://safawalasrilanka.com"),
  title: { default: "Safawala Sri Lanka", template: "%s | Safawala Sri Lanka" },
  description: "Professional wedding safa and groom pagdi styling across Sri Lanka and nearby destinations.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    images: [{ url: "/og.png", width: 1745, height: 909, alt: "Safawala Sri Lanka — Wedding Safa, tied with care." }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN" suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>;
}
