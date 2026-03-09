import '@kalink-ui/seedly/styles/reset';
import '@kalink-ui/seedly/styles/layers';

import '@/styles/refs.css';
import '@/styles/system-theme.css';
import '@/styles/input-overrides.css';

import { Box, Text } from '@kalink-ui/seedly-react';
import { PrismicPreview } from '@prismicio/next';
import { SliceZone } from '@prismicio/react';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

import { createClient, repositoryName } from '../prismicio';
import { components } from '../slices';
import { fontClass } from '../styles/font';

import { html, body, footer } from './layout.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stephaniegiorgis.ch'),
  title: 'Stéphanie Giorgis',
  description: 'Artiste plasticienne romande',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const client = createClient();

  const { data } = await client.getSingle('main_navigation', {
    fetchOptions: { cache: 'force-cache' },
  });

  return (
    <html lang="en" className={clsx(fontClass, html)}>
      <body className={body}>
        <SliceZone slices={data.slices} components={components} />

        {children}

        <Box
          colorSource="container"
          colorKey="low"
          variant="solid"
          spacing={2}
          className={footer}
        >
          <Text variant="body" size="small">
            {'Stéphanie Giorgis © 2026. All Rights Reserved'}
          </Text>
        </Box>

        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
