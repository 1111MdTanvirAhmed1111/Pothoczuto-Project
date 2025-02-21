/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
// next.config.js
const withSitemap = require('next-sitemap');

module.exports = withSitemap({
  reactStrictMode: true,
  // other Next.js configurations
});
