'use client';

import {
  Box,
  Button,
  Cluster,
  Drawer,
  List,
  Stack,
  Text,
} from '@kalink-ui/seedly-react';
import { type Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { SliceComponentProps } from '@prismicio/react';
import { Instagram, Menu, X } from 'lucide-react';
import { Route } from 'next';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactNode, useState } from 'react';

import { Center } from '@/components/center';
import { Hidden } from '@/components/hidden';

import {
  logo,
  navigation,
  navigationDrawer,
  navigationLink,
  navigationPanelBodyLinks,
} from './navigation-links.css';

/**
 * Props for `NavigationLinks`.
 */
export type NavigationLinksProps =
  SliceComponentProps<Content.NavigationLinksSlice>;

export function NavigationLinks({ slice }: NavigationLinksProps) {
  const segment = useSelectedLayoutSegment();
  const [open, setOpen] = useState(false);

  const items: ReactNode[] = [];

  for (const item of slice.items) {
    if (!item.href) {
      continue;
    }

    const currentSegment =
      item.current_segment === 'null' ? null : item.current_segment;

    items.push(
      <Text
        render={<PrismicNextLink href={item.href as Route} />}
        key={item.label}
        aria-current={segment === currentSegment ? 'page' : undefined}
        className={navigationLink}
        variant="body"
        size="small"
      >
        {item.label}
      </Text>,
    );
  }

  return (
    <Center render={<nav />} gutters={10} className={navigation}>
      <Cluster justify="spaceBetween" align="center">
        <Cluster spacing={4} align="center">
          <Drawer.Root onOpenChange={setOpen} open={open}>
            <Hidden
              use={Drawer.Trigger}
              at="lgUp"
              useCss
              variant="ghost"
              tone="neutral"
              size="sm"
              icon={<Menu size="24" strokeWidth={1.5} />}
              aria-label="Open navigation"
            />
            <Drawer.Portal className={navigationDrawer}>
              <Drawer.Backdrop />
              <Drawer.Viewport>
                <Drawer.Popup>
                  <Drawer.Content>
                    <Box spacing={8}>
                      <Stack spacing={10} align="stretch">
                        <Cluster
                          spacing={6}
                          align="center"
                          justify="spaceBetween"
                        >
                          <Drawer.Title variant="title" size="small">
                            Stéphanie Giorgis
                          </Drawer.Title>
                          <Drawer.Close
                            variant="ghost"
                            tone="neutral"
                            size="sm"
                            icon={<X size="24" strokeWidth={1.5} />}
                            aria-label="Close navigation"
                          />
                        </Cluster>
                        <Stack
                          spacing={6}
                          align="stretch"
                          className={navigationPanelBodyLinks}
                        >
                          <List.Root
                            align="stretch"
                            itemSpacing={8}
                            itemInlineSpacing={8}
                          >
                            {items.map((item, index) => (
                              <List.Item
                                key={index}
                                onClick={() => setOpen(false)}
                              >
                                {item}
                              </List.Item>
                            ))}
                          </List.Root>
                        </Stack>
                        <Center>
                          <Button
                            render={
                              <a href="https://www.instagram.com/stephaniegiorgis" />
                            }
                            nativeButton={false}
                            icon={<Instagram size="20" strokeWidth={1.5} />}
                            variant="ghost"
                            tone="neutral"
                            size="sm"
                            aria-label="Instagram"
                          />
                        </Center>
                      </Stack>
                    </Box>
                  </Drawer.Content>
                </Drawer.Popup>
              </Drawer.Viewport>
            </Drawer.Portal>
          </Drawer.Root>
          <PrismicNextLink
            href={'/'}
            title="Go to the homepage"
            className={logo}
          >
            <Text render={<h1 />} variant="body" size="medium">
              Stéphanie Giorgis
            </Text>
          </PrismicNextLink>
        </Cluster>

        <Hidden use={Cluster} at="mdDown" spacing={10} align="center">
          {items}
          <Button
            render={
              <a
                href="https://www.instagram.com/stephaniegiorgis"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            nativeButton={false}
            icon={<Instagram size="20" strokeWidth={1.5} />}
            variant="ghost"
            tone="neutral"
            size="sm"
            aria-label="Instagram"
          />
        </Hidden>
      </Cluster>
    </Center>
  );
}
