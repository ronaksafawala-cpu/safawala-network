import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-chandigarh", destination: "/keywords/safa-tying-service-in-chandigarh", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-chandigarh", destination: "/keywords/pagdi-tying-service-in-chandigarh", permanent: true },
    { source: "/keywords/pagri-tying-services-in-chandigarh", destination: "/keywords/pagri-tying-service-in-chandigarh", permanent: true },
    { source: "/keywords/turban-tying-services-in-chandigarh", destination: "/keywords/turban-tying-service-in-chandigarh", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
