import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-mundra", destination: "/keywords/safa-tying-service-in-mundra", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-mundra", destination: "/keywords/pagdi-tying-service-in-mundra", permanent: true },
    { source: "/keywords/pagri-tying-services-in-mandvi", destination: "/keywords/pagri-tying-service-in-mandvi", permanent: true },
    { source: "/keywords/turban-tying-services-in-gandhidham", destination: "/keywords/turban-tying-service-in-gandhidham", permanent: true },
    ];
  },
  /* config options here */
};

export default nextConfig;
