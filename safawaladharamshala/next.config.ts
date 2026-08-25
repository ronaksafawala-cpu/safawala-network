import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-dharamshala", destination: "/keywords/safa-tying-service-in-dharamshala", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-dharamshala", destination: "/keywords/pagdi-tying-service-in-dharamshala", permanent: true },
    { source: "/keywords/pagri-tying-services-in-dharamshala", destination: "/keywords/pagri-tying-service-in-dharamshala", permanent: true },
    { source: "/keywords/turban-tying-services-in-dharamshala", destination: "/keywords/turban-tying-service-in-dharamshala", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
