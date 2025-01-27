/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false,
  },
  reactStrictMode: true,
  images: {
    domains: [''], 
  },
};

module.exports = nextConfig;
