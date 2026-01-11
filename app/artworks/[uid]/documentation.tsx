'use client';

import { Stack } from '@kalink-ui/seedly';
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
    <div {...props}>
      <Stack>
        <SliceZone slices={artwork.data.slices} components={components} />
      </Stack>
    </div>
  );
};
