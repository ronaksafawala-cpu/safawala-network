import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-mumbai", destination: "/safa-tying-service-in-mumbai", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-mumbai", destination: "/pagdi-tying-service-in-mumbai", permanent: true },
    { source: "/keywords/pagri-tying-services-in-mumbai", destination: "/pagri-tying-service-in-mumbai", permanent: true },
    { source: "/keywords/turban-tying-services-in-mumbai", destination: "/turban-tying-service-in-mumbai", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
