import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/turban-tying-services-in-baa-atoll", destination: "/turban-tying-service-in-baa-atoll", permanent: true },
    { source: "/keywords/safa-tying-services-in-mal", destination: "/safa-tying-service-in-mal", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-baa-atoll", destination: "/pagdi-tying-service-in-baa-atoll", permanent: true },
    { source: "/keywords/pagri-tying-services-in-ari-atoll", destination: "/pagri-tying-service-in-ari-atoll", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
