import { Stack } from '@kalink-ui/seedly';
import { SliceComponentProps } from '@prismicio/react';

import { Frame } from '@/components/frame/frame';
import { Image } from '@/components/image';
import { RichText } from '@/components/rich-text/rich-text';
import { CaptionImageSlice } from '@/prismicio-types';
import { Ratio } from '@/slices/Documentation/documentation.types';

/**
 * Props for `CaptionImage`.
 */
export type CaptionImageProps = SliceComponentProps<
  CaptionImageSlice,
  { ratio?: Ratio }
>;

/**
 * Component for "CaptionImage" Slices.
 */
const CaptionImage = ({ slice }: CaptionImageProps) => {
  return (
    <Stack
      use="section"
      spacing={3}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.image_ratio === 'original' ? (
        <Image field={slice.primary.image} cover />
      ) : (
        <Frame
          use={Image}
          field={slice.primary.image[slice.primary.image_ratio]}
          ratio={slice.primary.image_ratio}
        />
      )}
      <RichText field={slice.primary.caption} />
    </Stack>
  );
};

export default CaptionImage;
