import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-jaipur", destination: "/keywords/safa-tying-service-in-jaipur", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-jaipur", destination: "/keywords/pagdi-tying-service-in-jaipur", permanent: true },
    { source: "/keywords/pagri-tying-services-in-jaipur", destination: "/keywords/pagri-tying-service-in-jaipur", permanent: true },
    { source: "/keywords/turban-tying-services-in-jaipur", destination: "/keywords/turban-tying-service-in-jaipur", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
