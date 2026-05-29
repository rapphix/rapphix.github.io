/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages requires basePath if not using custom domain with GitHub Pages
  // If using custom domain (which you are with rapphix.me), basePath can be empty
  basePath: '',
  // Enable static exports for GitHub Pages
  output: 'export',
};

module.exports = nextConfig;
