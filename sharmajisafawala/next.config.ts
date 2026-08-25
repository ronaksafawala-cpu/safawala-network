import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-from-sharma-ji-s-family-team", destination: "/keywords/safa-tying-service-from-sharma-ji-s-family-team", permanent: true },
    { source: "/keywords/pagdi-tying-services-from-sharma-ji-s-family-team", destination: "/keywords/pagdi-tying-service-from-sharma-ji-s-family-team", permanent: true },
    { source: "/keywords/pagri-tying-services-from-sharma-ji-s-family-team", destination: "/keywords/pagri-tying-service-from-sharma-ji-s-family-team", permanent: true },
    { source: "/keywords/turban-tying-services-from-sharma-ji-s-family-team", destination: "/keywords/turban-tying-service-from-sharma-ji-s-family-team", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
