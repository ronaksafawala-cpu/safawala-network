import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-from-sharma-ji-s-family-team", destination: "/safa-tying-service-from-sharma-ji-s-family-team", permanent: true },
    { source: "/keywords/pagdi-tying-services-from-sharma-ji-s-family-team", destination: "/pagdi-tying-service-from-sharma-ji-s-family-team", permanent: true },
    { source: "/keywords/pagri-tying-services-from-sharma-ji-s-family-team", destination: "/pagri-tying-service-from-sharma-ji-s-family-team", permanent: true },
    { source: "/keywords/turban-tying-services-from-sharma-ji-s-family-team", destination: "/turban-tying-service-from-sharma-ji-s-family-team", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
