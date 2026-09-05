import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-goa", destination: "/safa-tying-service-in-goa", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-goa", destination: "/pagdi-tying-service-in-goa", permanent: true },
    { source: "/keywords/pagri-tying-services-in-goa", destination: "/pagri-tying-service-in-goa", permanent: true },
    { source: "/keywords/turban-tying-services-in-goa", destination: "/turban-tying-service-in-goa", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
