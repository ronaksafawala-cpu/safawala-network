import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-for-camera-ready-wedding-photography", destination: "/keywords/safa-tying-service-for-camera-ready-wedding-photography", permanent: true },
    { source: "/keywords/pagdi-tying-services-for-camera-ready-wedding-photography", destination: "/keywords/pagdi-tying-service-for-camera-ready-wedding-photography", permanent: true },
    { source: "/keywords/pagri-tying-services-for-camera-ready-wedding-photography", destination: "/keywords/pagri-tying-service-for-camera-ready-wedding-photography", permanent: true },
    { source: "/keywords/turban-tying-services-for-camera-ready-wedding-photography", destination: "/keywords/turban-tying-service-for-camera-ready-wedding-photography", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
