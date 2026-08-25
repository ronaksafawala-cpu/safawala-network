import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-vadodara", destination: "/keywords/safa-tying-service-in-vadodara", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-vadodara", destination: "/keywords/pagdi-tying-service-in-vadodara", permanent: true },
    { source: "/keywords/pagri-tying-services-in-vadodara", destination: "/keywords/pagri-tying-service-in-vadodara", permanent: true },
    { source: "/keywords/turban-tying-services-in-vadodara", destination: "/keywords/turban-tying-service-in-vadodara", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
