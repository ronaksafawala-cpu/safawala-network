import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-by-the-sharma-family-safa-team", destination: "/keywords/safa-tying-service-by-the-sharma-family-safa-team", permanent: true },
    { source: "/keywords/pagdi-tying-services-by-the-sharma-family-safa-team", destination: "/keywords/pagdi-tying-service-by-the-sharma-family-safa-team", permanent: true },
    { source: "/keywords/pagri-tying-services-by-the-sharma-family-safa-team", destination: "/keywords/pagri-tying-service-by-the-sharma-family-safa-team", permanent: true },
    { source: "/keywords/turban-tying-services-by-the-sharma-family-safa-team", destination: "/keywords/turban-tying-service-by-the-sharma-family-safa-team", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
