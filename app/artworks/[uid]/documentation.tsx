'use client';

import { SliceZone } from '@prismicio/react';

import { documentation } from '@/app/artworks/[uid]/page.css';
import { ArtworkDocument } from '@/prismicio-types';
import { components } from '@/slices';

export const RenderedDocumentation = ({
  artwork,
  ...props
}: {
  artwork: ArtworkDocument;
}) => {
  return (
    <div className={documentation} {...props}>
      <SliceZone slices={artwork.data.slices} components={components} />
    </div>
  );
};
