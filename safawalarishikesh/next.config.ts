import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-rishikesh", destination: "/safa-tying-service-in-rishikesh", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-rishikesh", destination: "/pagdi-tying-service-in-rishikesh", permanent: true },
    { source: "/keywords/pagri-tying-services-in-rishikesh", destination: "/pagri-tying-service-in-rishikesh", permanent: true },
    { source: "/keywords/turban-tying-services-in-rishikesh", destination: "/turban-tying-service-in-rishikesh", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
