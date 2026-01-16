import '@kalink-ui/seedly/styles/reset';
import '@kalink-ui/seedly/styles/layers';

import '@/style/refs-theme.css';
import '@/style/system-theme.css';

import { Box, Text } from '@kalink-ui/seedly';
import { PrismicPreview } from '@prismicio/next';
import { SliceZone } from '@prismicio/react';
import { Analytics } from '@vercel/analytics/react';
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

        <div className={footer}>
          <Box spacing={4}>
            <Text variant="body" size="small">
              {'Stéphanie Giorgis © 2026. All Rights Reserved'}
            </Text>
          </Box>
        </div>

        <Analytics />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
