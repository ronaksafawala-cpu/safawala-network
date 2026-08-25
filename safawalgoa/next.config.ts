import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-goa", destination: "/keywords/safa-tying-service-in-goa", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-goa", destination: "/keywords/pagdi-tying-service-in-goa", permanent: true },
    { source: "/keywords/pagri-tying-services-in-goa", destination: "/keywords/pagri-tying-service-in-goa", permanent: true },
    { source: "/keywords/turban-tying-services-in-goa", destination: "/keywords/turban-tying-service-in-goa", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
