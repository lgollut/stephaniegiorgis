'use client';

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
    <SliceZone
      slices={artwork.data.slices}
      components={components}
      context={props}
    />
  );
};
