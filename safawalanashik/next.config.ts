import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-nashik", destination: "/keywords/safa-tying-service-in-nashik", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-nashik", destination: "/keywords/pagdi-tying-service-in-nashik", permanent: true },
    { source: "/keywords/pagri-tying-services-in-nashik", destination: "/keywords/pagri-tying-service-in-nashik", permanent: true },
    { source: "/keywords/turban-tying-services-in-nashik", destination: "/keywords/turban-tying-service-in-nashik", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
