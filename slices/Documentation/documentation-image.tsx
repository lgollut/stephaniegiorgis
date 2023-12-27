import 'photoswipe/dist/photoswipe.css';

import { DocumentationSlice } from '@/prismicio-types';

import { DocumentationImageWrapper } from './documentation-image-wrapper';

type DocumentationImageProps = {
  slice: DocumentationSlice;
  className?: string;
};

export const DocumentationImage = ({ slice }: DocumentationImageProps) => {
  if (slice.variation !== 'image') {
    return null;
  }

  return <DocumentationImageWrapper slice={slice} />;
};
