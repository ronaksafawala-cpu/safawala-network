import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-negombo", destination: "/keywords/safa-tying-service-in-negombo", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
