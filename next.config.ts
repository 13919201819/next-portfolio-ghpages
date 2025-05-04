// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   basePath: "/next-portfolio-ghpages", // Must match your GitHub repo name
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },

//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// export default nextConfig;


const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  basePath: isProd ? "/next-portfolio-ghpages" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

