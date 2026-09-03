import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/pagdi-tying-services-in-chiang-mai", destination: "/keywords/pagdi-tying-service-in-chiang-mai", permanent: true },
    { source: "/keywords/safa-tying-services-in-phuket", destination: "/keywords/safa-tying-service-in-phuket", permanent: true },
    { source: "/keywords/pagri-tying-services-in-pattaya", destination: "/keywords/pagri-tying-service-in-pattaya", permanent: true },
    { source: "/keywords/turban-tying-services-in-krabi", destination: "/keywords/turban-tying-service-in-krabi", permanent: true },
    ];
  },
  /* config options here */
};

export default nextConfig;
