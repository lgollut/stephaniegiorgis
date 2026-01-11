import { Box, Stack } from '@kalink-ui/seedly';
import { SliceZone } from '@prismicio/react';

import { createClient } from '../prismicio';
import { components } from '../slices';

import type { Metadata } from 'next';

export default async function Homepage() {
  const client = createClient();
  const page = await client.getSingle('homepage');

  return (
    <Box
      use="main"
      spacing={{ xs: 4, md: 6 }}
      style={{ width: '100%', maxWidth: '1280px', marginInline: 'auto' }}
    >
      <Stack spacing={8}>
        <SliceZone slices={page.data.slices} components={components} />
      </Stack>
    </Box>
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
