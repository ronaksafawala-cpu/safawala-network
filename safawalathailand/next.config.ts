import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/pagdi-tying-services-in-chiang-mai", destination: "/pagdi-tying-service-in-chiang-mai", permanent: true },
    { source: "/keywords/safa-tying-services-in-phuket", destination: "/safa-tying-service-in-phuket", permanent: true },
    { source: "/keywords/pagri-tying-services-in-pattaya", destination: "/pagri-tying-service-in-pattaya", permanent: true },
    { source: "/keywords/turban-tying-services-in-krabi", destination: "/turban-tying-service-in-krabi", permanent: true },,
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
