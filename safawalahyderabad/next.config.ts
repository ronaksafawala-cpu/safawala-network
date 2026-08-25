import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-hyderabad", destination: "/keywords/safa-tying-service-in-hyderabad", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-hyderabad", destination: "/keywords/pagdi-tying-service-in-hyderabad", permanent: true },
    { source: "/keywords/pagri-tying-services-in-hyderabad", destination: "/keywords/pagri-tying-service-in-hyderabad", permanent: true },
    { source: "/keywords/turban-tying-services-in-hyderabad", destination: "/keywords/turban-tying-service-in-hyderabad", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
