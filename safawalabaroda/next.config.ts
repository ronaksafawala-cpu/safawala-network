import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-vadodara", destination: "/safa-tying-service-in-vadodara", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-vadodara", destination: "/pagdi-tying-service-in-vadodara", permanent: true },
    { source: "/keywords/pagri-tying-services-in-vadodara", destination: "/pagri-tying-service-in-vadodara", permanent: true },
    { source: "/keywords/turban-tying-services-in-vadodara", destination: "/turban-tying-service-in-vadodara", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
