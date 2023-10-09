import '@/styles/globals.css';
import '@/styles/layers.css';

import { PrismicPreview } from '@prismicio/next';
import { SliceZone } from '@prismicio/react';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

import { Stack } from '@/components/stack';
import { createClient, repositoryName } from '@/prismicio';
import { components } from '@/slices';
import { fontClass } from '@/styles/font';

import { html, body, bodyContainer } from './layout.css';

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

  const { data } = await client.getSingle('main_navigation');

  return (
    <html lang="en" className={clsx(fontClass, html)}>
      <body className={body}>
        <Stack space="xl" className={bodyContainer}>
          <SliceZone slices={data.slices} components={components} />
          {children}
        </Stack>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
