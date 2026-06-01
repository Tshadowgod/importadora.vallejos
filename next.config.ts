import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  outputFileTracingIncludes: {
    "/api/vehiculos": ["./data/**"],
  },
};

export default nextConfig;
