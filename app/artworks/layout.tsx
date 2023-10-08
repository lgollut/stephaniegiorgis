import { ReactNode } from 'react';

import { Container } from '@/components/container/container';

import { main } from './layout.css';

export default function ArtworksLayout({ children }: { children: ReactNode }) {
  return (
    <Container use="main" className={main}>
      {children}
    </Container>
  );
}
