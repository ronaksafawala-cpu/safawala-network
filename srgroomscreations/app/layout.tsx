import type { Metadata } from "next";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://srgroomscreations.in"),
  title: { default: "SR Grooms Creations", template: "%s | SR Grooms Creations" },
  description: "Bespoke groom pagdis and coordinated wedding safas, created and tied at your venue for a truly one-off look.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    images: [{ url: "/og.png", width: 1745, height: 909, alt: "SR Grooms Creations — bespoke groom pagdi design and wedding safa creation." }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN" suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>;
}
