import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Safawala Seychelles",
    short_name: "Safawala Seychelles",
    icons: [
      { src: "/android-chrome-192x192.png?v=3", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
  };
}
