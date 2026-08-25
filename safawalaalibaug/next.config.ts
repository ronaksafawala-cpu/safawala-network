import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-alibaug", destination: "/keywords/safa-tying-service-in-alibaug", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-alibaug", destination: "/keywords/pagdi-tying-service-in-alibaug", permanent: true },
    { source: "/keywords/pagri-tying-services-in-alibaug", destination: "/keywords/pagri-tying-service-in-alibaug", permanent: true },
    { source: "/keywords/turban-tying-services-in-alibaug", destination: "/keywords/turban-tying-service-in-alibaug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
