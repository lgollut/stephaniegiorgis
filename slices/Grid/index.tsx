import { Grid } from '@kalink-ui/seedly';
import {
  isFilled,
  type Content,
  type FilledContentRelationshipField,
} from '@prismicio/client';
import { PrismicLink, SliceComponentProps } from '@prismicio/react';
import { useMemo } from 'react';

import { Frame } from '@/components/frame/frame';
import { Image } from '@/components/image';

/**
 * Props for `Grid`.
 */
export type GridProps = SliceComponentProps<Content.GridSlice>;

type ArtworkRelationship = FilledContentRelationshipField<
  'artwork',
  Content.ArtworkDocument['lang'],
  Content.ArtworkDocument['data']
>;

const hasArtworkData = (
  field: unknown,
): field is ArtworkRelationship & Content.ArtworkDocument => {
  if (!field || typeof field !== 'object') {
    return false;
  }

  const content = field as FilledContentRelationshipField;

  return (
    isFilled.contentRelationship(content) &&
    content.type === 'artwork' &&
    content.uid !== null &&
    content.id !== null &&
    typeof content.data === 'object' &&
    content.data !== null
  );
};

const GridSlice = ({ slice }: GridProps) => {
  const items = useMemo(() => {
    return slice.items.reverse().map(({ artwork }) => {
      if (!hasArtworkData(artwork)) {
        return null;
      }

      const image = artwork.data.cover_image['1:1'];
      if (!image) {
        return null;
      }

      return (
        <PrismicLink key={artwork.id} href={`/artworks/${artwork.uid}`}>
          <Frame use={Image} field={image} ratio="1:1" />
        </PrismicLink>
      );
    });
  }, [slice]);

  return (
    <Grid
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      minSize="12rem"
      autoLayout="fill"
      style={{ width: '100%' }}
    >
      {items}
    </Grid>
  );
};

export default GridSlice;
