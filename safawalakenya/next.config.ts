import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-kisumu", destination: "/safa-tying-service-in-kisumu", permanent: true },
    { source: "/keywords/turban-tying-services-in-nairobi", destination: "/turban-tying-service-in-nairobi", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
