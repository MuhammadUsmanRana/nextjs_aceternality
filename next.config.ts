/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.aceternity.com"], // Allow external images from this hostname
  },
};

module.exports = nextConfig;
