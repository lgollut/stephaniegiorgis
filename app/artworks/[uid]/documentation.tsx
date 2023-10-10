'use client';

import { SliceZone } from '@prismicio/react';

import { Stack } from '@/components/stack';
import { ArtworkDocument } from '@/prismicio-types';
import { components } from '@/slices';

export const RenderedDocumentation = ({
  artwork,
  ...props
}: {
  artwork: ArtworkDocument;
}) => {
  return (
    <div {...props}>
      <Stack>
        <SliceZone slices={artwork.data.slices} components={components} />
      </Stack>
    </div>
  );
};
