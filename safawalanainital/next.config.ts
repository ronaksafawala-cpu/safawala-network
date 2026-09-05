import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-nainital", destination: "/safa-tying-service-in-nainital", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-nainital", destination: "/pagdi-tying-service-in-nainital", permanent: true },
    { source: "/keywords/pagri-tying-services-in-nainital", destination: "/pagri-tying-service-in-nainital", permanent: true },
    { source: "/keywords/turban-tying-services-in-nainital", destination: "/turban-tying-service-in-nainital", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
