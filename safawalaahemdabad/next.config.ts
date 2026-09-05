import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-ahmedabad", destination: "/safa-tying-service-in-ahmedabad", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-ahmedabad", destination: "/pagdi-tying-service-in-ahmedabad", permanent: true },
    { source: "/keywords/pagri-tying-services-in-ahmedabad", destination: "/pagri-tying-service-in-ahmedabad", permanent: true },
    { source: "/keywords/turban-tying-services-in-ahmedabad", destination: "/turban-tying-service-in-ahmedabad", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
