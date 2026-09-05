import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-la-digue", destination: "/safa-tying-service-in-la-digue", permanent: true },
    { source: "/keywords/turban-tying-services-in-mah", destination: "/turban-tying-service-in-mah", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
