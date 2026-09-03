import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-kuta", destination: "/keywords/safa-tying-service-in-kuta", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-seminyak", destination: "/keywords/pagdi-tying-service-in-seminyak", permanent: true },
    { source: "/keywords/pagri-tying-services-in-nusa-dua", destination: "/keywords/pagri-tying-service-in-nusa-dua", permanent: true },
    { source: "/keywords/turban-tying-services-in-denpasar", destination: "/keywords/turban-tying-service-in-denpasar", permanent: true },
    ];
  },
  /* config options here */
};

export default nextConfig;
