/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "dist",
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
