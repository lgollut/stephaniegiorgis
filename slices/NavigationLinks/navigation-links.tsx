'use client';

import { type Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { SliceComponentProps } from '@prismicio/react';
import { Instagram, Menu } from 'lucide-react';
import { Route } from 'next';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactNode } from 'react';

import { Box } from '@/components/box';
import { Cluster } from '@/components/cluster';
import { Container } from '@/components/container/container';
import { Heading } from '@/components/heading';
import { Hidden } from '@/components/hidden';
import { Panel } from '@/components/panel/panel';
import { PanelContent } from '@/components/panel/panel-content';
import { PanelTrigger } from '@/components/panel/panel-trigger';
import { Text } from '@/components/text';
import {
  logo,
  navigationLink,
} from '@/slices/NavigationLinks/navigation-links.css';

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
      <Text
        use={PrismicNextLink}
        key={item.label}
        href={item.href as Route}
        aria-current={segment === currentSegment ? 'page' : undefined}
        className={navigationLink}
        variant="bodyMedium"
      >
        {item.label}
      </Text>,
    );
  }

  items.push(
    <Text
      use={'a'}
      key={'instagram'}
      href={'https://www.instagram.com/stephaniegiorgis'}
      target="_blank"
      className={navigationLink}
      variant="bodyMedium"
    >
      <Instagram size="20" strokeWidth={1.5} />
    </Text>,
  );

  return (
    <Container use="nav" space="none">
      <Box space={['xl', 'base', 'none', 'base']}>
        <Cluster justify="spaceBetween">
          <Panel>
            <Cluster>
              <Hidden use={PanelTrigger} at="lgUp" icon={Menu} />
              <PrismicNextLink
                href={'/'}
                title="Go to the homepage"
                className={logo}
              >
                <Heading variant="titleMedium">Stéphanie Giorgis</Heading>
              </PrismicNextLink>
            </Cluster>
            <Hidden use={Cluster} at="mdDown" space="xl">
              {items}
            </Hidden>
            <Hidden use={PanelContent} at="lgUp">
              {items.map((item, index) => (
                <Box key={index}>{item}</Box>
              ))}
            </Hidden>
          </Panel>
        </Cluster>
      </Box>
    </Container>
  );
}
