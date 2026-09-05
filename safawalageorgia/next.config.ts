import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/pagri-tying-services-in-tbilisi", destination: "/pagri-tying-service-in-tbilisi", permanent: true },
    { source: "/keywords/safa-tying-services-in-borjomi", destination: "/safa-tying-service-in-borjomi", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-batumi", destination: "/pagdi-tying-service-in-batumi", permanent: true },
    { source: "/keywords/turban-tying-services-in-kutaisi", destination: "/turban-tying-service-in-kutaisi", permanent: true },,
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
