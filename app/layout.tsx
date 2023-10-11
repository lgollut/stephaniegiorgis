import '@/styles/globals.css';
import '@/styles/layers.css';

import { PrismicPreview } from '@prismicio/next';
import { SliceZone } from '@prismicio/react';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

import { Box } from '@/components/box';
import { Stack } from '@/components/stack';
import { Text } from '@/components/text';
import { createClient, repositoryName } from '@/prismicio';
import { components } from '@/slices';
import { fontClass } from '@/styles/font';

import { html, body, footer } from './layout.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stephaniegiorgis.ch'),
  title: 'Stéphanie Giorgis',
  description: 'Know your cyber risks, make better business decisions',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const client = createClient();

  const { data } = await client.getSingle('main_navigation', {
    fetchOptions: { next: { tags: ['main-navigation'] } },
  });

  return (
    <html lang="en" className={clsx(fontClass, html)}>
      <body className={body}>
        <Stack space="xl">
          <SliceZone slices={data.slices} components={components} />
          {children}
        </Stack>
        <PrismicPreview repositoryName={repositoryName} />
        <div className={footer}>
          <Box space="sm">
            <Text variant="bodySmall">
              {'Stéphanie Giorgis © 2023. All Rights Reserved'}
            </Text>
          </Box>
        </div>
      </body>
    </html>
  );
}
