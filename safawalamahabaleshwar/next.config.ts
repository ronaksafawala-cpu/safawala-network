import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-mahabaleshwar", destination: "/keywords/safa-tying-service-in-mahabaleshwar", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-mahabaleshwar", destination: "/keywords/pagdi-tying-service-in-mahabaleshwar", permanent: true },
    { source: "/keywords/pagri-tying-services-in-mahabaleshwar", destination: "/keywords/pagri-tying-service-in-mahabaleshwar", permanent: true },
    { source: "/keywords/turban-tying-services-in-mahabaleshwar", destination: "/keywords/turban-tying-service-in-mahabaleshwar", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
