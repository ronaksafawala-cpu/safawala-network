import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-ahmedabad", destination: "/keywords/safa-tying-service-in-ahmedabad", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-ahmedabad", destination: "/keywords/pagdi-tying-service-in-ahmedabad", permanent: true },
    { source: "/keywords/pagri-tying-services-in-ahmedabad", destination: "/keywords/pagri-tying-service-in-ahmedabad", permanent: true },
    { source: "/keywords/turban-tying-services-in-ahmedabad", destination: "/keywords/turban-tying-service-in-ahmedabad", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
