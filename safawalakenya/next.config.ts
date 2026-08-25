import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-kisumu", destination: "/keywords/safa-tying-service-in-kisumu", permanent: true },
    { source: "/keywords/turban-tying-services-in-nairobi", destination: "/keywords/turban-tying-service-in-nairobi", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
