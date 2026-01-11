import { Box, Cluster, Stack, Text } from '@kalink-ui/seedly';
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
            use="a"
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="solid"
            spacing={6}
            radius="rounded"
          >
            <Stack>
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
