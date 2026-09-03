import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wow Grooms",
    short_name: "Wow Grooms",
    icons: [
      { src: "/android-chrome-192x192.png?v=3", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
  };
}
