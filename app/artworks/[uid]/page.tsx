import { PrismicRichText } from '@prismicio/react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { RenderedDocumentation } from '@/app/artworks/[uid]/documentation';
import {
  artworkData,
  artworkDescription,
  artworkPage,
} from '@/app/artworks/[uid]/page.css';
import { Box } from '@/components/box';
import { Cover } from '@/components/cover';
import { Heading } from '@/components/heading';
import { Hidden } from '@/components/hidden';
import { Stack } from '@/components/stack';
import { Text } from '@/components/text';
import { createClient } from '@/prismicio';

type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const artwork = await client
    .getByUID('artwork', params.uid)
    .catch(() => notFound());

  return {
    title: artwork.data.meta_title,
    description: artwork.data.meta_description,
    openGraph: {
      title: artwork.data.meta_title || undefined,
      images: [
        {
          url: artwork.data.meta_image.url || '',
        },
      ],
    },
  };
}

export default async function ArtworkPage({ params }: { params: Params }) {
  const client = createClient();

  const artwork = await client
    .getByUID('artwork', params.uid)
    .catch(() => notFound());

  return (
    <div className={artworkPage}>
      <Cover>
        <Box data-cover-center className={artworkData}>
          <Stack space="md">
            <Heading variant="displaySmall" style="italic">
              {artwork.data.title}
            </Heading>
            <Stack space="sm">
              <Heading variant="headlineSmall">{artwork.data.medium}</Heading>
              <Heading variant="headlineSmall">{artwork.data.measure}</Heading>
              <Heading variant="headlineSmall">{artwork.data.year}</Heading>
            </Stack>
            <Hidden
              use={RenderedDocumentation}
              at="lgUp"
              useCss
              artwork={artwork}
            />
          </Stack>
          <Box space="none" className={artworkDescription}>
            <PrismicRichText
              field={artwork.data.description}
              components={{
                paragraph: ({ children }) => <Text>{children}</Text>,
              }}
            />
          </Box>
        </Box>
      </Cover>
      <Hidden
        use={RenderedDocumentation}
        at="mdDown"
        useCss
        artwork={artwork}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const artworks = await client.getAllByType('artwork');

  /**
   * Define a path for every Document.
   */
  return artworks.map((artwork) => {
    return { uid: artwork.uid };
  });
}
