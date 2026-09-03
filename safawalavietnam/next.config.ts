import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/turban-tying-services-in-ho-chi-minh-city", destination: "/keywords/turban-tying-service-in-ho-chi-minh-city", permanent: true },
    { source: "/keywords/safa-tying-services-in-hanoi", destination: "/keywords/safa-tying-service-in-hanoi", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-ho-chi-minh-city", destination: "/keywords/pagdi-tying-service-in-ho-chi-minh-city", permanent: true },
    { source: "/keywords/pagri-tying-services-in-hanoi", destination: "/keywords/pagri-tying-service-in-hanoi", permanent: true },
    ];
  },
  /* config options here */
};

export default nextConfig;
