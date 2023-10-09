import { SliceComponentProps } from '@prismicio/react';

import type { Content } from '@prismicio/client';

export type DocumentationProps =
  SliceComponentProps<Content.DocumentationSlice>;

export const availableRatios = ['1:1', '3:2', '2:3', '16:9', '9:16'] as const;

export type Ratio = (typeof availableRatios)[number];
