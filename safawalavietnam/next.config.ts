import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/turban-tying-services-in-ho-chi-minh-city", destination: "/keywords/turban-tying-service-in-ho-chi-minh-city", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
