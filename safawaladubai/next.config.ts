import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-dubai", destination: "/safa-tying-service-in-dubai", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-dubai", destination: "/pagdi-tying-service-in-dubai", permanent: true },
    { source: "/keywords/pagri-tying-services-in-dubai", destination: "/pagri-tying-service-in-dubai", permanent: true },
    { source: "/keywords/turban-tying-services-in-dubai", destination: "/turban-tying-service-in-dubai", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
