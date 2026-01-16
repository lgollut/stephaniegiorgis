'use client';

import {
  Box,
  Cluster,
  Heading,
  Sheet,
  SheetClose,
  SheetPortal,
  SheetTrigger,
  Text,
} from '@kalink-ui/seedly';
import { type Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { SliceComponentProps } from '@prismicio/react';
import { Instagram, Menu, X } from 'lucide-react';
import { Route } from 'next';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactNode } from 'react';

import { Center } from '@/components/center';
import { Hidden } from '@/components/hidden';

import { logo, navigationLink } from './navigation-links.css';

/**
 * Props for `NavigationLinks`.
 */
export type NavigationLinksProps =
  SliceComponentProps<Content.NavigationLinksSlice>;

export function NavigationLinks({ slice }: NavigationLinksProps) {
  const segment = useSelectedLayoutSegment();

  const items: ReactNode[] = [];

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
        variant="body"
        size="medium"
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
      variant="body"
      size="medium"
    >
      <Instagram size="20" strokeWidth={1.5} />
    </Text>,
  );

  return (
    <Center use="nav" gutters={{ xs: 4, md: 5 }}>
      <Cluster justify="spaceBetween" align="center">
        <Sheet>
          <Cluster spacing={3} align="center">
            <Hidden use={SheetTrigger} at="lgUp" asChild>
              <Box
                use="button"
                aria-label="Open navigation"
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                }}
              >
                <Menu size="24" strokeWidth={1.5} />
              </Box>
            </Hidden>
            <PrismicNextLink
              href={'/'}
              title="Go to the homepage"
              className={logo}
            >
              <Heading variant="title" size="medium">
                Stéphanie Giorgis
              </Heading>
            </PrismicNextLink>
          </Cluster>

          <Hidden use={Cluster} at="mdDown" spacing={4} align="center">
            {items}
          </Hidden>

          <Hidden use={SheetPortal} at="lgUp">
            <Box
              style={{
                position: 'fixed',
                inset: 0,
                display: 'flex',
                justifyContent: 'flex-start',
                backgroundColor: 'hsl(0 0% 0% / 0.4)',
                backdropFilter: 'blur(4px)',
                zIndex: 9999,
              }}
            >
              <Box
                spacing={4}
                style={{
                  width: '80%',
                  maxWidth: 320,
                  height: '100%',
                  backgroundColor: 'var(--color-surface, white)',
                  padding: '24px',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
                }}
              >
                <Cluster justify="spaceBetween" align="center">
                  <Heading variant="title" size="medium">
                    Menu
                  </Heading>
                  <SheetClose asChild>
                    <Box
                      use="button"
                      aria-label="Close navigation"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        padding: 0,
                      }}
                    >
                      <X size="24" strokeWidth={1.5} />
                    </Box>
                  </SheetClose>
                </Cluster>

                <Cluster spacing={4} direction="row">
                  {items.map((item, index) => (
                    <SheetClose asChild key={index}>
                      <Box>{item}</Box>
                    </SheetClose>
                  ))}
                </Cluster>
              </Box>
            </Box>
          </Hidden>
        </Sheet>
      </Cluster>
    </Center>
  );
}
