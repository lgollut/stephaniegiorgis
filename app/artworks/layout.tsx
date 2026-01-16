import { ReactNode } from 'react';

import { Center } from '@/components/center';
import { main } from './layout.css';

export default function ArtworksLayout({ children }: { children: ReactNode }) {
  return (
    <Center use="main" className={main} gutters={6}>
      {children}
    </Center>
  );
}
