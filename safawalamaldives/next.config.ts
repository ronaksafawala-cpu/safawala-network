import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/turban-tying-services-in-baa-atoll", destination: "/keywords/turban-tying-service-in-baa-atoll", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
