import { SliceZone } from '@prismicio/react';
import { notFound } from 'next/navigation';

import { Box } from '@/components/box';
import { container } from '@/components/container/container.css';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

import type { Metadata } from 'next';

interface Params {
  uid: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const client = createClient();
  const { uid } = await params;

  const page = await client
    .getByUID('standardPage', uid)
    .catch(() => notFound());

  return {
    title: page.data.title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? '' }],
    },
  };
}

export default async function StandardPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const client = createClient();
  const { uid } = await params;

  const page = await client
    .getByUID('standardPage', uid)
    .catch(() => notFound());

  return (
    <Box className={container({ space: 'lg', maxWidth: 'base' })}>
      <SliceZone slices={page.data.slices} components={components} />
    </Box>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType('standardPage');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
