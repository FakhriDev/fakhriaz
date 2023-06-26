/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpackage(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
module.exports = nextConfig;
