import type { Metadata } from "next";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wowgrooms.in"),
  title: { default: "Wow Grooms", template: "%s | Wow Grooms" },
  description: "Coordinated wedding safas and groom pagdis, styled to get the reaction every groom wants on his wedding day.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    images: [{ url: "/og.png", width: 1745, height: 909, alt: "Wow Grooms — groom pagdi and wedding safa styling built to make an entrance." }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN" suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>;
}
