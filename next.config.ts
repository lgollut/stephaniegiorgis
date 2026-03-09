import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

import type { NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,

  transpilePackages: ['@kalink-ui/seedly', '@kalink-ui/seedly-react'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        port: '',
        pathname: '/stephaniegiorgis/**',
      },
    ],
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

export default withVanillaExtract(nextConfig);
