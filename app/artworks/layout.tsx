import { clsx } from 'clsx';
import { ReactNode } from 'react';

import { Box } from '@/components/box';
import { container } from '@/components/container/container.css';

import { main } from './layout.css';

export default function ArtworksLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      use="main"
      className={clsx(container({ space: 'lg', maxWidth: 'base' }), main)}
    >
      {children}
    </Box>
  );
}
