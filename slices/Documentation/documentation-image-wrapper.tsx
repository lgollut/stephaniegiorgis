import { useMemo } from 'react';

import { Stack } from '@/components/stack';
import {
  DocumentationSliceImage,
  DocumentationSliceImageItem,
} from '@/prismicio-types';
import { imageRow } from '@/slices/Documentation/documentation-image-wrapper.css';

import { DocumentationImageItem } from './documentation-image-item';

export const DocumentationImageWrapper = ({
  slice,
}: {
  slice: DocumentationSliceImage;
}) => {
  const [upperRow, lowerRow] = useMemo(() => {
    const layout = slice.primary.layout?.split(' ')[1];
    const cells = layout?.split('/') || ['1'];
    const images = [...slice.items];

    let upperItems: DocumentationSliceImageItem[] = [];

    for (const cell of cells) {
      const nb = Number(cell);
      upperItems = upperItems.concat(images.splice(0, nb));

      if (upperItems.length === 2 || layout === '1/2') {
        break;
      }
    }

    return [
      <div key="upperRow" className={imageRow({ column: cells[0] !== '2' })}>
        {upperItems.map((item, index) => (
          <DocumentationImageItem item={item} key={index} />
        ))}
      </div>,
      <div key="lowerRow" className={imageRow()}>
        {images.map((item, index) => (
          <DocumentationImageItem item={item} key={index} />
        ))}
      </div>,
    ];
  }, [slice]);

  return (
    <Stack>
      {upperRow}
      {lowerRow}
    </Stack>
  );
};
