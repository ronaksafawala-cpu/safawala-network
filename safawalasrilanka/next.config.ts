import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-negombo", destination: "/keywords/safa-tying-service-in-negombo", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-negombo", destination: "/keywords/pagdi-tying-service-in-negombo", permanent: true },
    { source: "/keywords/pagri-tying-services-in-galle", destination: "/keywords/pagri-tying-service-in-galle", permanent: true },
    { source: "/keywords/turban-tying-services-in-colombo", destination: "/keywords/turban-tying-service-in-colombo", permanent: true },
    ];
  },
  /* config options here */
};

export default nextConfig;
