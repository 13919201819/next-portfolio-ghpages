import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/3122113151919-Updated-", // Must match your GitHub repo name
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
