import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-chennai", destination: "/safa-tying-service-in-chennai", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-chennai", destination: "/pagdi-tying-service-in-chennai", permanent: true },
    { source: "/keywords/pagri-tying-services-in-chennai", destination: "/pagri-tying-service-in-chennai", permanent: true },
    { source: "/keywords/turban-tying-services-in-chennai", destination: "/turban-tying-service-in-chennai", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
