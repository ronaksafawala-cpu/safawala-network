import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-for-celebrity-and-high-profile-weddings", destination: "/keywords/safa-tying-service-for-celebrity-and-high-profile-weddings", permanent: true },
    { source: "/keywords/pagdi-tying-services-for-celebrity-and-high-profile-weddings", destination: "/keywords/pagdi-tying-service-for-celebrity-and-high-profile-weddings", permanent: true },
    { source: "/keywords/pagri-tying-services-for-celebrity-and-high-profile-weddings", destination: "/keywords/pagri-tying-service-for-celebrity-and-high-profile-weddings", permanent: true },
    { source: "/keywords/turban-tying-services-for-celebrity-and-high-profile-weddings", destination: "/keywords/turban-tying-service-for-celebrity-and-high-profile-weddings", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
