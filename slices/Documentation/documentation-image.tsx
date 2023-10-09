import { clsx } from 'clsx';

import {
  DocumentationSlice,
  DocumentationSliceImagePrimary,
} from '@/prismicio-types';

import { DocumentationImageWrapper } from './documentation-image-wrapper';
import { documentationImage } from './documentation-image.css';

type DocumentationImageProps = {
  slice: DocumentationSlice;
  className?: string;
};

type Layout<T = DocumentationSliceImagePrimary['layout']> =
  T extends `${infer _} ${infer LayoutGrid}` ? LayoutGrid : undefined;

export const DocumentationImage = ({
  slice,
  className,
  ...props
}: DocumentationImageProps) => {
  if (slice.variation !== 'image') {
    return null;
  }

  const grid = slice.primary.layout?.includes('Grid');

  const layout = slice.primary.layout?.split(' ')[1] as Layout;

  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(documentationImage({ column: grid }), className)}
    >
      <DocumentationImageWrapper grid={grid} slice={slice} layout={layout} />
    </div>
  );
};
