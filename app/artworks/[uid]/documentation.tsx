'use client';

import { Stack } from '@kalink-ui/seedly-react';
import { SliceZone } from '@prismicio/react';

import { ArtworkDocument } from '@/prismicio-types';
import { components } from '@/slices';

export const RenderedDocumentation = ({
  artwork,
  ...props
}: {
  artwork: ArtworkDocument;
}) => {
  return (
    <Stack spacing={4} {...props}>
      <SliceZone slices={artwork.data.slices} components={components} />
    </Stack>
  );
};
