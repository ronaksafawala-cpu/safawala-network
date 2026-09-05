import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-lonavala", destination: "/safa-tying-service-in-lonavala", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-lonavala", destination: "/pagdi-tying-service-in-lonavala", permanent: true },
    { source: "/keywords/pagri-tying-services-in-lonavala", destination: "/pagri-tying-service-in-lonavala", permanent: true },
    { source: "/keywords/turban-tying-services-in-lonavala", destination: "/turban-tying-service-in-lonavala", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
