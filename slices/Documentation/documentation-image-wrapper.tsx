import { useMemo } from 'react';

import { DocumentationSliceImage } from '@/prismicio-types';
import { DocumentationWrapperVariants } from '@/slices/Documentation/documentation.types';

import { DocumentationImageItem } from './documentation-image-item';
import { documentationWrapper } from './documentation-image-wrapper.css';

export const DocumentationImageWrapper = ({
  grid,
  slice,
  layout,
}: {
  grid: boolean;
  slice: DocumentationSliceImage;
} & DocumentationWrapperVariants) => {
  const items = useMemo(
    () =>
      slice.items.map((item, index) => (
        <DocumentationImageItem item={item} key={index} />
      )),
    [slice],
  );

  if (grid) {
    return <div className={documentationWrapper({ layout })}>{items}</div>;
  }

  return items;
};
