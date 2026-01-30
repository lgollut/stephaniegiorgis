import { Stack } from '@kalink-ui/seedly';
import { SliceZone } from '@prismicio/react';

import { createClient } from '../prismicio';
import { components } from '../slices';
import { Center } from '@/components/center';

import type { Metadata } from 'next';

export default async function Homepage() {
  const client = createClient();
  const page = await client.getSingle('homepage');

  return (
    <Center use="main" gutters={{ xs: 4, md: 5 }}>
      <Stack spacing={8}>
        <SliceZone slices={page.data.slices} components={components} />
      </Stack>
    </Center>
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
