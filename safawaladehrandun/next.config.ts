import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-dehradun", destination: "/keywords/safa-tying-service-in-dehradun", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-dehradun", destination: "/keywords/pagdi-tying-service-in-dehradun", permanent: true },
    { source: "/keywords/pagri-tying-services-in-dehradun", destination: "/keywords/pagri-tying-service-in-dehradun", permanent: true },
    { source: "/keywords/turban-tying-services-in-dehradun", destination: "/keywords/turban-tying-service-in-dehradun", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
