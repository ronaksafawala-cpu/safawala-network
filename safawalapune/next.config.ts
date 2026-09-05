import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-pune", destination: "/safa-tying-service-in-pune", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-pune", destination: "/pagdi-tying-service-in-pune", permanent: true },
    { source: "/keywords/pagri-tying-services-in-pune", destination: "/pagri-tying-service-in-pune", permanent: true },
    { source: "/keywords/turban-tying-services-in-pune", destination: "/turban-tying-service-in-pune", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
