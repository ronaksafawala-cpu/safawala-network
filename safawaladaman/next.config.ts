import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-daman", destination: "/safa-tying-service-in-daman", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-daman", destination: "/pagdi-tying-service-in-daman", permanent: true },
    { source: "/keywords/pagri-tying-services-in-daman", destination: "/pagri-tying-service-in-daman", permanent: true },
    { source: "/keywords/turban-tying-services-in-daman", destination: "/turban-tying-service-in-daman", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
