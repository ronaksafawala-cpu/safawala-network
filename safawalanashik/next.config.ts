import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-nashik", destination: "/safa-tying-service-in-nashik", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-nashik", destination: "/pagdi-tying-service-in-nashik", permanent: true },
    { source: "/keywords/pagri-tying-services-in-nashik", destination: "/pagri-tying-service-in-nashik", permanent: true },
    { source: "/keywords/turban-tying-services-in-nashik", destination: "/turban-tying-service-in-nashik", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
