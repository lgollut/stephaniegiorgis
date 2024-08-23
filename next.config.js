// @ts-check

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  async redirects() {
    return [
      {
        source: '/archives',
        destination: '/links',
        permanent: true,
      },
    ];
  },
};

module.exports = withVanillaExtract(nextConfig);
