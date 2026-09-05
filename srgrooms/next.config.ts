import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-at-our-groom-styling-studio", destination: "/safa-tying-service-at-our-groom-styling-studio", permanent: true },
    { source: "/keywords/pagdi-tying-services-at-our-groom-styling-studio", destination: "/pagdi-tying-service-at-our-groom-styling-studio", permanent: true },
    { source: "/keywords/pagri-tying-services-at-our-groom-styling-studio", destination: "/pagri-tying-service-at-our-groom-styling-studio", permanent: true },
    { source: "/keywords/turban-tying-services-at-our-groom-styling-studio", destination: "/turban-tying-service-at-our-groom-styling-studio", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
