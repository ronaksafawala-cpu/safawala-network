import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-bengaluru", destination: "/keywords/safa-tying-service-in-bengaluru", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-bengaluru", destination: "/keywords/pagdi-tying-service-in-bengaluru", permanent: true },
    { source: "/keywords/pagri-tying-services-in-bengaluru", destination: "/keywords/pagri-tying-service-in-bengaluru", permanent: true },
    { source: "/keywords/turban-tying-services-in-bengaluru", destination: "/keywords/turban-tying-service-in-bengaluru", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
