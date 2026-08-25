import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-for-a-standout-groom-look", destination: "/keywords/safa-tying-service-for-a-standout-groom-look", permanent: true },
    { source: "/keywords/pagdi-tying-services-for-a-standout-groom-look", destination: "/keywords/pagdi-tying-service-for-a-standout-groom-look", permanent: true },
    { source: "/keywords/pagri-tying-services-for-a-standout-groom-look", destination: "/keywords/pagri-tying-service-for-a-standout-groom-look", permanent: true },
    { source: "/keywords/turban-tying-services-for-a-standout-groom-look", destination: "/keywords/turban-tying-service-for-a-standout-groom-look", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
