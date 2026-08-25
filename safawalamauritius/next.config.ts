import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/pagdi-tying-services-in-flic-en-flac", destination: "/keywords/pagdi-tying-service-in-flic-en-flac", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
