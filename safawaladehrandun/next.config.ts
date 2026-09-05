import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-dehradun", destination: "/safa-tying-service-in-dehradun", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-dehradun", destination: "/pagdi-tying-service-in-dehradun", permanent: true },
    { source: "/keywords/pagri-tying-services-in-dehradun", destination: "/pagri-tying-service-in-dehradun", permanent: true },
    { source: "/keywords/turban-tying-services-in-dehradun", destination: "/turban-tying-service-in-dehradun", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
