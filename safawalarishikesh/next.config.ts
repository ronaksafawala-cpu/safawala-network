import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-rishikesh", destination: "/keywords/safa-tying-service-in-rishikesh", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-rishikesh", destination: "/keywords/pagdi-tying-service-in-rishikesh", permanent: true },
    { source: "/keywords/pagri-tying-services-in-rishikesh", destination: "/keywords/pagri-tying-service-in-rishikesh", permanent: true },
    { source: "/keywords/turban-tying-services-in-rishikesh", destination: "/keywords/turban-tying-service-in-rishikesh", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
