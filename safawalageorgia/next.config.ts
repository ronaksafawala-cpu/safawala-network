import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/pagri-tying-services-in-tbilisi", destination: "/keywords/pagri-tying-service-in-tbilisi", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
