import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-delhi", destination: "/safa-tying-service-in-delhi", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-delhi", destination: "/pagdi-tying-service-in-delhi", permanent: true },
    { source: "/keywords/pagri-tying-services-in-delhi", destination: "/pagri-tying-service-in-delhi", permanent: true },
    { source: "/keywords/turban-tying-services-in-delhi", destination: "/turban-tying-service-in-delhi", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
