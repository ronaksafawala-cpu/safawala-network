import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/pagdi-tying-services-in-flic-en-flac", destination: "/keywords/pagdi-tying-service-in-flic-en-flac", permanent: true },
    { source: "/keywords/safa-tying-services-in-mah-bourg", destination: "/keywords/safa-tying-service-in-mah-bourg", permanent: true },
    { source: "/keywords/pagri-tying-services-in-grand-baie", destination: "/keywords/pagri-tying-service-in-grand-baie", permanent: true },
    { source: "/keywords/turban-tying-services-in-port-louis", destination: "/keywords/turban-tying-service-in-port-louis", permanent: true },
    ];
  },
  /* config options here */
};

export default nextConfig;
