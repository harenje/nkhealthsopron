/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://nkhealthsopron-sgiu.vercel.app/"],
  },
};

module.exports = nextConfig;
