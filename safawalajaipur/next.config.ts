import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-jaipur", destination: "/safa-tying-service-in-jaipur", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-jaipur", destination: "/pagdi-tying-service-in-jaipur", permanent: true },
    { source: "/keywords/pagri-tying-services-in-jaipur", destination: "/pagri-tying-service-in-jaipur", permanent: true },
    { source: "/keywords/turban-tying-services-in-jaipur", destination: "/turban-tying-service-in-jaipur", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
