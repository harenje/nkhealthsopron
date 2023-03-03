/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "https://nkhealthsopron-sgiu.vercel.app/",
      "https://nkhealthsopron-sgiu-cic70wosn-harenje.vercel.app/",
    ],
  },
};

module.exports = nextConfig;
