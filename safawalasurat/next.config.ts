import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-surat", destination: "/safa-tying-service-in-surat", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-surat", destination: "/pagdi-tying-service-in-surat", permanent: true },
    { source: "/keywords/pagri-tying-services-in-surat", destination: "/pagri-tying-service-in-surat", permanent: true },
    { source: "/keywords/turban-tying-services-in-surat", destination: "/turban-tying-service-in-surat", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
