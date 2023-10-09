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
  layout: DocumentationWrapperVariants['layout'];
}) => {
  const upperRow = useMemo(() => {
    const items =
      layout && ['1/2', '1/1'].includes(layout)
        ? slice.items.slice(0, 1)
        : slice.items.slice(0, 2);
    return (
      <div
        style={{
          display: 'flex',
          gap: '16px',
        }}
      >
        {items.map((item, index) => (
          <DocumentationImageItem item={item} key={index} />
        ))}
      </div>
    );
  }, [slice, layout]);

  const lowerRow = useMemo(() => {
    const items =
      layout && ['1/1', '1/2'].includes(layout)
        ? slice.items.slice(1)
        : slice.items.slice(2);
    return (
      <div
        style={{
          display: 'flex',
          gap: '16px',
        }}
      >
        {items.map((item, index) => (
          <DocumentationImageItem item={item} key={index} />
        ))}
      </div>
    );
  }, [slice, layout]);

  if (grid) {
    return (
      // <div className={container}>
      <div className={documentationWrapper({ layout })}>
        {upperRow}
        {lowerRow}
      </div>
      // </div>
    );
  }

  return upperRow;
};
