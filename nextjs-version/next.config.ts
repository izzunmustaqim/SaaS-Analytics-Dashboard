import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/SaaS-Analytics-Dashboard",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
