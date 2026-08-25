import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-with-a-bespoke-pagdi-design", destination: "/keywords/safa-tying-service-with-a-bespoke-pagdi-design", permanent: true },
    { source: "/keywords/pagdi-tying-services-with-a-bespoke-pagdi-design", destination: "/keywords/pagdi-tying-service-with-a-bespoke-pagdi-design", permanent: true },
    { source: "/keywords/pagri-tying-services-with-a-bespoke-pagdi-design", destination: "/keywords/pagri-tying-service-with-a-bespoke-pagdi-design", permanent: true },
    { source: "/keywords/turban-tying-services-with-a-bespoke-pagdi-design", destination: "/keywords/turban-tying-service-with-a-bespoke-pagdi-design", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
