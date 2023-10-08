import { SliceZone } from '@prismicio/react';
import { Metadata } from 'next';

import { Container } from '@/components/container/container';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

import type { Content } from '@prismicio/client';

export default async function Page() {
  const client = createClient();
  const works = await client.getSingle<
    Content.WorksDocument & {
      items: {
        artwork: {
          data: Pick<Content.ArtworkDocument['data'], 'title' | 'cover'>;
        };
      };
    }
  >('works', {
    fetchLinks: ['artwork.title', 'artwork.cover'],
  });

  return (
    <Container>
      <SliceZone slices={works.data.slices} components={components} />
    </Container>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const works = await client.getSingle('works');

  return {
    title: works.data.meta_title,
    description: works.data.meta_description,
  };
}
