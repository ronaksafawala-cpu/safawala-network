import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-for-destination-weddings", destination: "/keywords/safa-tying-service-for-destination-weddings", permanent: true },
    { source: "/keywords/pagdi-tying-services-for-destination-weddings", destination: "/keywords/pagdi-tying-service-for-destination-weddings", permanent: true },
    { source: "/keywords/pagri-tying-services-for-destination-weddings", destination: "/keywords/pagri-tying-service-for-destination-weddings", permanent: true },
    { source: "/keywords/turban-tying-services-for-destination-weddings", destination: "/keywords/turban-tying-service-for-destination-weddings", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
