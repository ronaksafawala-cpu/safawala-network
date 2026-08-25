import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-lonavala", destination: "/keywords/safa-tying-service-in-lonavala", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-lonavala", destination: "/keywords/pagdi-tying-service-in-lonavala", permanent: true },
    { source: "/keywords/pagri-tying-services-in-lonavala", destination: "/keywords/pagri-tying-service-in-lonavala", permanent: true },
    { source: "/keywords/turban-tying-services-in-lonavala", destination: "/keywords/turban-tying-service-in-lonavala", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
