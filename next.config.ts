import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  output: "export",
  ...(process.env.NODE_ENV === "production" && {
    distDir: "docs",
  }),
  images: {
    unoptimized: true,
  },
  env: {},
};

export default nextConfig;
