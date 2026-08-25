import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-at-our-groom-styling-studio", destination: "/keywords/safa-tying-service-at-our-groom-styling-studio", permanent: true },
    { source: "/keywords/pagdi-tying-services-at-our-groom-styling-studio", destination: "/keywords/pagdi-tying-service-at-our-groom-styling-studio", permanent: true },
    { source: "/keywords/pagri-tying-services-at-our-groom-styling-studio", destination: "/keywords/pagri-tying-service-at-our-groom-styling-studio", permanent: true },
    { source: "/keywords/turban-tying-services-at-our-groom-styling-studio", destination: "/keywords/turban-tying-service-at-our-groom-styling-studio", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
