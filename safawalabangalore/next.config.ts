import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-bengaluru", destination: "/safa-tying-service-in-bengaluru", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-bengaluru", destination: "/pagdi-tying-service-in-bengaluru", permanent: true },
    { source: "/keywords/pagri-tying-services-in-bengaluru", destination: "/pagri-tying-service-in-bengaluru", permanent: true },
    { source: "/keywords/turban-tying-services-in-bengaluru", destination: "/turban-tying-service-in-bengaluru", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
