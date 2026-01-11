import nextConfig from '@kalink-ui/eslint-config/next';

export default [
  ...nextConfig,
  {
    ignores: ['eslint.config.*', 'next.config.js', 'prismicio-types.d.ts'],
  },
];
