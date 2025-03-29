/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export
    distDir: "out", // Default export directory
    images: {
      unoptimized: true, // GitHub Pages doesn’t support Next.js Image Optimization
    },
  };
  
  module.exports = nextConfig;
  