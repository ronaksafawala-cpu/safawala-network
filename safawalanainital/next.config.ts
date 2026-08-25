import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-nainital", destination: "/keywords/safa-tying-service-in-nainital", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-nainital", destination: "/keywords/pagdi-tying-service-in-nainital", permanent: true },
    { source: "/keywords/pagri-tying-services-in-nainital", destination: "/keywords/pagri-tying-service-in-nainital", permanent: true },
    { source: "/keywords/turban-tying-services-in-nainital", destination: "/keywords/turban-tying-service-in-nainital", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
