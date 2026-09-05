import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-mahabaleshwar", destination: "/safa-tying-service-in-mahabaleshwar", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-mahabaleshwar", destination: "/pagdi-tying-service-in-mahabaleshwar", permanent: true },
    { source: "/keywords/pagri-tying-services-in-mahabaleshwar", destination: "/pagri-tying-service-in-mahabaleshwar", permanent: true },
    { source: "/keywords/turban-tying-services-in-mahabaleshwar", destination: "/turban-tying-service-in-mahabaleshwar", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
