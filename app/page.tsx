import { SliceZone } from '@prismicio/react';

import { Container } from '@/components/container/container';
import { Stack } from '@/components/stack';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

import type { Metadata } from 'next';

export default async function Homepage() {
  const client = createClient();
  const page = await client.getSingle('homepage');

  return (
    <Container>
      <Stack space="4xl">
        <SliceZone slices={page.data.slices} components={components} />
      </Stack>
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
