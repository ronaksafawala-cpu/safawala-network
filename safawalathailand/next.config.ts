import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/pagdi-tying-services-in-chiang-mai", destination: "/keywords/pagdi-tying-service-in-chiang-mai", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
