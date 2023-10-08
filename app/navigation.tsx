'use client';

import { PrismicNextLink } from '@prismicio/next';
import { useSelectedLayoutSegment } from 'next/navigation';

import { logo } from '@/app/navigation.css';
import { Box } from '@/components/box';
import { Button } from '@/components/button';
import { Cluster } from '@/components/cluster';
import { Container } from '@/components/container/container';
import { Heading } from '@/components/heading';

export function Navigation() {
  const segment = useSelectedLayoutSegment();

  return (
    <Container use="nav" space="none">
      <Box>
        <Cluster justify="spaceBetween">
          <PrismicNextLink
            href={'/'}
            title="Go to the homepage"
            className={logo}
          >
            <Heading variant="titleMedium">Stéphanie Giorgis</Heading>
          </PrismicNextLink>
          <Cluster>
            <Button
              href={'/'}
              variant="ghost"
              aria-current={segment === null ? 'page' : undefined}
            >
              {'Travaux'}
            </Button>
            <Button
              href={'/presentation'}
              variant="ghost"
              aria-current={segment === 'presentation' ? 'page' : undefined}
            >
              {'Présentation'}
            </Button>
            <Button
              href={'/archives'}
              variant="ghost"
              aria-current={segment === 'archives' ? 'page' : undefined}
            >
              {'Archives'}
            </Button>
            <Button
              href={'/contact'}
              variant="ghost"
              aria-current={segment === 'contact' ? 'page' : undefined}
            >
              {'Contact'}
            </Button>
          </Cluster>
        </Cluster>
      </Box>
    </Container>
  );
}
