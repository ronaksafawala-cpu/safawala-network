import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-surat", destination: "/keywords/safa-tying-service-in-surat", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-surat", destination: "/keywords/pagdi-tying-service-in-surat", permanent: true },
    { source: "/keywords/pagri-tying-services-in-surat", destination: "/keywords/pagri-tying-service-in-surat", permanent: true },
    { source: "/keywords/turban-tying-services-in-surat", destination: "/keywords/turban-tying-service-in-surat", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
