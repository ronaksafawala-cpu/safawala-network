import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-for-destination-weddings", destination: "/safa-tying-service-for-destination-weddings", permanent: true },
    { source: "/keywords/pagdi-tying-services-for-destination-weddings", destination: "/pagdi-tying-service-for-destination-weddings", permanent: true },
    { source: "/keywords/pagri-tying-services-for-destination-weddings", destination: "/pagri-tying-service-for-destination-weddings", permanent: true },
    { source: "/keywords/turban-tying-services-for-destination-weddings", destination: "/turban-tying-service-for-destination-weddings", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
