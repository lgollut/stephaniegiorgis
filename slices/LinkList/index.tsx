import { SliceComponentProps } from '@prismicio/react';

import type { Content } from '@prismicio/client';

/**
 * Props for `LinkList`.
 */
export type LinkListProps = SliceComponentProps<Content.LinkListSlice>;

/**
 * Component for "LinkList" Slices.
 */
const LinkList = ({ slice }: LinkListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for link_list (variation: {slice.variation}) Slices
    </section>
  );
};

export default LinkList;
