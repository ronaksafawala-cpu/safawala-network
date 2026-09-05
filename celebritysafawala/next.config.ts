import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-for-celebrity-and-high-profile-weddings", destination: "/safa-tying-service-for-celebrity-and-high-profile-weddings", permanent: true },
    { source: "/keywords/pagdi-tying-services-for-celebrity-and-high-profile-weddings", destination: "/pagdi-tying-service-for-celebrity-and-high-profile-weddings", permanent: true },
    { source: "/keywords/pagri-tying-services-for-celebrity-and-high-profile-weddings", destination: "/pagri-tying-service-for-celebrity-and-high-profile-weddings", permanent: true },
    { source: "/keywords/turban-tying-services-for-celebrity-and-high-profile-weddings", destination: "/turban-tying-service-for-celebrity-and-high-profile-weddings", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
