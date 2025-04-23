const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/next-portfolio-ghpages' : '',
  assetPrefix: isProd ? '/next-portfolio-ghpages/' : '',
};

export default nextConfig;
