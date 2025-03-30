/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  output: 'export', // This is used for static file generation
  distDir: 'dist'
};

module.exports = nextConfig;
