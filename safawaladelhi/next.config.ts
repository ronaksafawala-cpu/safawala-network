import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-delhi", destination: "/keywords/safa-tying-service-in-delhi", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-delhi", destination: "/keywords/pagdi-tying-service-in-delhi", permanent: true },
    { source: "/keywords/pagri-tying-services-in-delhi", destination: "/keywords/pagri-tying-service-in-delhi", permanent: true },
    { source: "/keywords/turban-tying-services-in-delhi", destination: "/keywords/turban-tying-service-in-delhi", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
