import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-chandigarh", destination: "/safa-tying-service-in-chandigarh", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-chandigarh", destination: "/pagdi-tying-service-in-chandigarh", permanent: true },
    { source: "/keywords/pagri-tying-services-in-chandigarh", destination: "/pagri-tying-service-in-chandigarh", permanent: true },
    { source: "/keywords/turban-tying-services-in-chandigarh", destination: "/turban-tying-service-in-chandigarh", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
