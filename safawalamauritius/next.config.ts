import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/pagdi-tying-services-in-flic-en-flac", destination: "/pagdi-tying-service-in-flic-en-flac", permanent: true },
    { source: "/keywords/safa-tying-services-in-mah-bourg", destination: "/safa-tying-service-in-mah-bourg", permanent: true },
    { source: "/keywords/pagri-tying-services-in-grand-baie", destination: "/pagri-tying-service-in-grand-baie", permanent: true },
    { source: "/keywords/turban-tying-services-in-port-louis", destination: "/turban-tying-service-in-port-louis", permanent: true },,
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
