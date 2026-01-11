import { Center } from '@kalink-ui/seedly';
import { ReactNode } from 'react';

import { main } from './layout.css';

export default function ArtworksLayout({ children }: { children: ReactNode }) {
  return (
    <Center
      use="main"
      className={main}
      gutters={6}
      style={{ maxInlineSize: '1280px', width: '100%' }}
    >
      {children}
    </Center>
  );
}
