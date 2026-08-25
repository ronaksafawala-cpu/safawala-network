import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-chennai", destination: "/keywords/safa-tying-service-in-chennai", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-chennai", destination: "/keywords/pagdi-tying-service-in-chennai", permanent: true },
    { source: "/keywords/pagri-tying-services-in-chennai", destination: "/keywords/pagri-tying-service-in-chennai", permanent: true },
    { source: "/keywords/turban-tying-services-in-chennai", destination: "/keywords/turban-tying-service-in-chennai", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
