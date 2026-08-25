import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-mumbai", destination: "/keywords/safa-tying-service-in-mumbai", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-mumbai", destination: "/keywords/pagdi-tying-service-in-mumbai", permanent: true },
    { source: "/keywords/pagri-tying-services-in-mumbai", destination: "/keywords/pagri-tying-service-in-mumbai", permanent: true },
    { source: "/keywords/turban-tying-services-in-mumbai", destination: "/keywords/turban-tying-service-in-mumbai", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
