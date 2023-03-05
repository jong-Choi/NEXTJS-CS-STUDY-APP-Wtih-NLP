/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = withPWA({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
});

module.exports = nextConfig;
