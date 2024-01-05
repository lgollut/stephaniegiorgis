import { SliceZone } from '@prismicio/react';
import { Metadata } from 'next';

import { Container } from '@/components/container/container';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

export default async function Homepage() {
  const client = createClient();
  const page = await client.getSingle('homepage', {
    fetchOptions: { next: { tags: ['prismic', 'homepage'] } },
  });

  return (
    <Container>
      <SliceZone slices={page.data.slices} components={components} />
    </Container>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('homepage');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
