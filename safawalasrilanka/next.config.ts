import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-negombo", destination: "/safa-tying-service-in-negombo", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-negombo", destination: "/pagdi-tying-service-in-negombo", permanent: true },
    { source: "/keywords/pagri-tying-services-in-galle", destination: "/pagri-tying-service-in-galle", permanent: true },
    { source: "/keywords/turban-tying-services-in-colombo", destination: "/turban-tying-service-in-colombo", permanent: true },,
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
