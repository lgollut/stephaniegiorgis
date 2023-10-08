import { ReactNode } from 'react';

import { DocumentationSound } from '@/slices/Documentation/documentation-sound';
import { DocumentationVideo } from '@/slices/Documentation/documentation-video';

import { DocumentationImage } from './documentation-image';
import { DocumentationProps } from './documentation.types';

/**
 * Component for "Documentation" Slices.
 */
export const Documentation = ({ slice }: DocumentationProps): ReactNode => {
  if (slice.variation === 'image') {
    return <DocumentationImage slice={slice} />;
  }

  if (slice.variation === 'sound') {
    return <DocumentationSound slice={slice} />;
  }

  if (slice.variation === 'video') {
    return <DocumentationVideo slice={slice} />;
  }

  return null;
};
