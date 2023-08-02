/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "dist",
  experimental: {
    typedRoutes: true,
  },

  // css파일 한곳에 보관하는 경우
  // sassOptions: { includePaths: [path.join(__dirname, "styles")] },
};

module.exports = nextConfig;
