import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-alibaug", destination: "/safa-tying-service-in-alibaug", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-alibaug", destination: "/pagdi-tying-service-in-alibaug", permanent: true },
    { source: "/keywords/pagri-tying-services-in-alibaug", destination: "/pagri-tying-service-in-alibaug", permanent: true },
    { source: "/keywords/turban-tying-services-in-alibaug", destination: "/turban-tying-service-in-alibaug", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
