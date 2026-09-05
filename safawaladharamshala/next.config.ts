import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/keywords/safa-tying-services-in-dharamshala", destination: "/safa-tying-service-in-dharamshala", permanent: true },
    { source: "/keywords/pagdi-tying-services-in-dharamshala", destination: "/pagdi-tying-service-in-dharamshala", permanent: true },
    { source: "/keywords/pagri-tying-services-in-dharamshala", destination: "/pagri-tying-service-in-dharamshala", permanent: true },
    { source: "/keywords/turban-tying-services-in-dharamshala", destination: "/turban-tying-service-in-dharamshala", permanent: true },
    { source: "/keywords/:slug", destination: "/:slug", permanent: true }
    ];
  },
  /* config options here */
};

export default nextConfig;
