import { Stack } from '@kalink-ui/seedly';
import { SliceComponentProps } from '@prismicio/react';

import { richText } from '../../components/rich-text/rich-text.css';
import { RichText } from '@/components/rich-text/rich-text';

import type { Content } from '@prismicio/client';

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export function RichTextSlice({ slice }: RichTextProps) {
  return (
    <Stack use="section" spacing={6} className={richText}>
      <RichText field={slice.primary.content} />
    </Stack>
  );
}
