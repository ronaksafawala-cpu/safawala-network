import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-pune", destination: "/keywords/safa-tying-service-in-pune", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-pune", destination: "/keywords/pagdi-tying-service-in-pune", permanent: true },
    { source: "/keywords/pagri-tying-services-in-pune", destination: "/keywords/pagri-tying-service-in-pune", permanent: true },
    { source: "/keywords/turban-tying-services-in-pune", destination: "/keywords/turban-tying-service-in-pune", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
