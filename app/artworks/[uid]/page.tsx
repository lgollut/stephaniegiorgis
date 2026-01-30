import { Box, Cover, Heading, Stack } from '@kalink-ui/seedly';
import { notFound } from 'next/navigation';

import { RenderedDocumentation } from '@/app/artworks/[uid]/documentation';
import {
  artworkData,
  artworkDescription,
  artworkPage,
} from '@/app/artworks/[uid]/page.css';
import { Hidden } from '@/components/hidden';
import { RichText } from '@/components/rich-text/rich-text';
import { createClient } from '@/prismicio';
import { ArtworkDocument } from '@/prismicio-types';

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

  const artwork = await client.getByUID('artwork', uid).catch(() => notFound());

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

export default async function ArtworkPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const client = createClient();
  const { uid } = await params;

  const artwork = await client.getByUID('artwork', uid).catch(() => notFound());

  if (!artwork.uid) {
    notFound();
  }

  return (
    <div className={artworkPage}>
      <Cover>
        <Box data-cover-center className={artworkData}>
          <Stack spacing={5} align="end">
            <Heading
              variant="display"
              size="small"
              align="end"
              style={{ fontStyle: 'italic' }}
            >
              {artwork.data.title}
            </Heading>
            <Stack
              use={Heading}
              spacing={3}
              variant="headline"
              size="small"
              align="end"
            >
              <div>{artwork.data.medium}</div>
              <div>{artwork.data.measure}</div>
              <div>{artwork.data.year}</div>
            </Stack>
            <Hidden
              use={RenderedDocumentation}
              at="lgUp"
              useCss
              artwork={artwork as unknown as ArtworkDocument}
            />
          </Stack>
          <Box spacing={0} className={artworkDescription}>
            <RichText field={artwork.data.description} />
          </Box>
        </Box>
      </Cover>
      <Hidden
        use={RenderedDocumentation}
        at="mdDown"
        useCss
        artwork={artwork as unknown as ArtworkDocument}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const artworks = await client.getAllByType('artwork');

  return artworks.map((artwork) => {
    return { uid: artwork.uid };
  });
}
