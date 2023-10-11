import { isFilled, type Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import { Box } from '@/components/box';
import { Cluster } from '@/components/cluster';
import { Frame } from '@/components/frame/frame';
import { Image } from '@/components/image';
import { Stack } from '@/components/stack';
import { Text } from '@/components/text';

/**
 * Props for `LinkList`.
 */
export type LinkListProps = SliceComponentProps<Content.LinkListSlice>;

/**
 * Component for "LinkList" Slices.
 */
const LinkList = ({ slice }: LinkListProps): JSX.Element => {
  return (
    <Cluster
      space="lg"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.map(({ link, screenshot, label }) => {
        if (!link || !isFilled.link(link)) {
          return null;
        }

        return (
          <Box
            use="a"
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            color="surfaceContainerHigh"
            space="lg"
            rounded="base"
          >
            <Stack>
              <Frame use={Image} field={screenshot.Square} ratio="1:1" />
              <Text>{label}</Text>
            </Stack>
          </Box>
        );
      })}
    </Cluster>
  );
};

export default LinkList;
