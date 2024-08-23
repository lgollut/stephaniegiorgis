import { SliceZone } from '@prismicio/react';
import { notFound } from 'next/navigation';

import { Container } from '@/components/container/container';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

import type { Metadata } from 'next';

type Params = { uid: string };

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID('standardPage', params.uid)
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

export default async function StandardPage({ params }: { params: Params }) {
  const client = createClient();

  const page = await client
    .getByUID('standardPage', params.uid, {
      fetchOptions: { next: { tags: ['prismic', params.uid] } },
    })
    .catch(() => notFound());

  return (
    <Container>
      <SliceZone slices={page.data.slices} components={components} />
    </Container>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType('standardPage');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
