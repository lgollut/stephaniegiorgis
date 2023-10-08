import { DocumentationSlice } from '@/prismicio-types';

import { DocumentationImageWrapper } from './documentation-image-wrapper';
import { documentationImage } from './documentation-image.css';

type DocumentationImageProps = {
  slice: DocumentationSlice;
};

export const DocumentationImage = ({ slice }: DocumentationImageProps) => {
  if (slice.variation !== 'image') {
    return null;
  }

  const grid = slice.primary.layout.includes('Grid');

  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={documentationImage({ column: grid })}
    >
      <DocumentationImageWrapper grid={grid} slice={slice} layout={'2/2'} />
    </div>
  );
};
