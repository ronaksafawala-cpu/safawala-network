import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/pagri-tying-services-in-tbilisi", destination: "/keywords/pagri-tying-service-in-tbilisi", permanent: true },
    { source: "/keywords/safa-tying-services-in-borjomi", destination: "/keywords/safa-tying-service-in-borjomi", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-batumi", destination: "/keywords/pagdi-tying-service-in-batumi", permanent: true },
    { source: "/keywords/turban-tying-services-in-kutaisi", destination: "/keywords/turban-tying-service-in-kutaisi", permanent: true },
    ];
  },
  /* config options here */
};

export default nextConfig;
