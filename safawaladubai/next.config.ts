import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-dubai", destination: "/keywords/safa-tying-service-in-dubai", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-dubai", destination: "/keywords/pagdi-tying-service-in-dubai", permanent: true },
    { source: "/keywords/pagri-tying-services-in-dubai", destination: "/keywords/pagri-tying-service-in-dubai", permanent: true },
    { source: "/keywords/turban-tying-services-in-dubai", destination: "/keywords/turban-tying-service-in-dubai", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
