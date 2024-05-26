import { SliceZone } from '@prismicio/react';
import { Metadata } from 'next';

import { Stack } from '@/components/stack';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

import type { Content } from '@prismicio/client';

export default async function Page() {
  const client = createClient();
  const artworks = await client.getSingle<
    Content.ArtworksDocument & {
      items: {
        artwork: {
          data: Pick<Content.ArtworkDocument['data'], 'title' | 'cover_image'>;
        };
      };
    }
  >('artworks', {
    fetchLinks: ['artwork.title', 'artwork.cover_image'],
    fetchOptions: { next: { tags: ['prismic', 'artworks'] } },
  });

  return (
    <Stack space="6xl" divided="solid">
      <SliceZone slices={artworks.data.slices} components={components} />
    </Stack>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const artworks = await client.getSingle('artworks');

  return {
    title: artworks.data.meta_title,
    description: artworks.data.meta_description,
  };
}
