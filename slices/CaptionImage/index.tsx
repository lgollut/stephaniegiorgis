import { SliceComponentProps } from '@prismicio/react';

import { Frame } from '@/components/frame/frame';
import { Image } from '@/components/image';
import { Stack } from '@/components/stack';
import { Text } from '@/components/text';
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
const CaptionImage = ({ slice, context }: CaptionImageProps): JSX.Element => {
  return (
    <Stack
      use="section"
      space="sm"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Frame
        use={Image}
        field={slice.primary.image['4/3']}
        ratio={context.ratio}
      />
      <Text use="div" variant="bodyMedium" align="end">
        {slice.primary.caption}
      </Text>
    </Stack>
  );
};

export default CaptionImage;
