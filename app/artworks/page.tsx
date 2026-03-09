import { Stack } from '@kalink-ui/seedly-react';
import { SliceZone } from '@prismicio/react';

import { createClient } from '../../prismicio';
import { components } from '../../slices';

import { mainStack } from './page.css';

import type { Content } from '@prismicio/client';
import type { Metadata } from 'next';

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
  });

  return (
    <Stack className={mainStack} spacing={10} align="stretch">
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
