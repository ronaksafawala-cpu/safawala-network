import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-daman", destination: "/keywords/safa-tying-service-in-daman", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-daman", destination: "/keywords/pagdi-tying-service-in-daman", permanent: true },
    { source: "/keywords/pagri-tying-services-in-daman", destination: "/keywords/pagri-tying-service-in-daman", permanent: true },
    { source: "/keywords/turban-tying-services-in-daman", destination: "/keywords/turban-tying-service-in-daman", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
