import { Box, Cluster, Stack, Text } from '@kalink-ui/seedly-react';
import { isFilled, type Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import { Image } from '@/components/image';

/**
 * Props for `LinkList`.
 */
export type LinkListProps = SliceComponentProps<Content.LinkListSlice>;

/**
 * Component for "LinkList" Slices.
 */
const LinkList = ({ slice }: LinkListProps) => {
  return (
    <Cluster
      spacing={6}
      justify="center"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.map(({ link, screenshot, label }) => {
        if (!link || !isFilled.link(link)) {
          return null;
        }

        return (
          <Box
            render={
              <a href={link.url} target="_blank" rel="noopener noreferrer" />
            }
            key={link.url}
            variant="solid"
            colorSource="container"
            colorKey="high"
            spacing={6}
            corner="small"
          >
            <Stack align="stretch" spacing={4}>
              <Image field={screenshot.Square} />
              <Text>{label}</Text>
            </Stack>
          </Box>
        );
      })}
    </Cluster>
  );
};

export default LinkList;
