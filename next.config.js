/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   swcMinify: false,
   distDir: 'build',
   images: {
      unoptimized: true,
   },
};

module.exports = nextConfig;
