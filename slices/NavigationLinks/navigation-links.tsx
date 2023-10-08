'use client';

import { type Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { SliceComponentProps } from '@prismicio/react';
import { Route } from 'next';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactNode } from 'react';

import { logo } from '@/app/navigation.css';
import { Box } from '@/components/box';
import { Button } from '@/components/button';
import { Cluster } from '@/components/cluster';
import { Container } from '@/components/container/container';
import { Heading } from '@/components/heading';

/**
 * Props for `NavigationLinks`.
 */
export type NavigationLinksProps =
  SliceComponentProps<Content.NavigationLinksSlice>;

export function NavigationLinks({ slice }: NavigationLinksProps) {
  const segment = useSelectedLayoutSegment();

  let items: ReactNode[] = [];

  for (const item of slice.items) {
    if (!item.href) {
      continue;
    }

    const currentSegment =
      item.current_segment === 'null' ? null : item.current_segment;

    items.push(
      <Button
        key={item.label}
        href={item.href as Route}
        variant="ghost"
        aria-current={segment === currentSegment ? 'page' : undefined}
      >
        {item.label}
      </Button>,
    );
  }

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
          <Cluster>{items}</Cluster>
        </Cluster>
      </Box>
    </Container>
  );
}
