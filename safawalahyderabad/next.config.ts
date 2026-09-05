import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-hyderabad", destination: "/safa-tying-service-in-hyderabad", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-hyderabad", destination: "/pagdi-tying-service-in-hyderabad", permanent: true },
    { source: "/keywords/pagri-tying-services-in-hyderabad", destination: "/pagri-tying-service-in-hyderabad", permanent: true },
    { source: "/keywords/turban-tying-services-in-hyderabad", destination: "/turban-tying-service-in-hyderabad", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
