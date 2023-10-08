import {
  isFilled,
  type Content,
  type ContentRelationshipField,
} from '@prismicio/client';
import { PrismicLink, SliceComponentProps } from '@prismicio/react';

import { Frame } from '@/components/frame/frame';
import { Grid } from '@/components/grid';
import { Image } from '@/components/image';

/**
 * Props for `Grid`.
 */
export type GridProps = SliceComponentProps<Content.GridSlice>;

const hasArtworkData = <
  TContentRelationshipField extends ContentRelationshipField,
>(
  contentRelationshipField: TContentRelationshipField,
): contentRelationshipField is TContentRelationshipField &
  Content.ArtworkDocument => {
  return (
    isFilled.contentRelationship(contentRelationshipField) &&
    typeof contentRelationshipField.data === 'object' &&
    contentRelationshipField.data !== null &&
    contentRelationshipField.id !== null &&
    contentRelationshipField.uid !== null
  );
};
/**
 * Component for "Grid" Slices.
 */
const GridSlice = ({ slice }: GridProps): JSX.Element => {
  return (
    <Grid
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      minWidth="sm"
    >
      {slice.items.map(({ artwork }) => {
        if (!hasArtworkData(artwork)) {
          return null;
        }

        return (
          <PrismicLink key={artwork.id} href={`/artworks/${artwork.uid}`}>
            <Frame use={Image} field={artwork.data.cover.square} ratio="1:1" />
          </PrismicLink>
        );
      })}
    </Grid>
  );
};

export default GridSlice;
