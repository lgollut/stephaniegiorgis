'use client';

import {
  ButtonIcon,
  Cluster,
  Heading,
  menuItem,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetBody,
  Stack,
  Text,
  SheetFooter,
} from '@kalink-ui/seedly';
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
  navigationLink,
  navigationLinks,
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

  return (
    <Center use="nav" gutters={{ xs: 4, md: 5 }} className={navigation}>
      <Cluster justify="spaceBetween" align="center">
        <Cluster spacing={4} align="center">
          <Sheet onOpenChange={setOpen} open={open}>
            <Hidden use={SheetTrigger} at="lgUp" asChild>
              <ButtonIcon label="Open navigation" variant="ghost" size="sm">
                <Menu size="24" strokeWidth={1.5} />
              </ButtonIcon>
            </Hidden>
            <SheetContent side="left" size="sm">
              <SheetHeader
                side="left"
                closeBtn={
                  <ButtonIcon
                    label="Close navigation"
                    variant="ghost"
                    size="sm"
                  >
                    <X size="24" strokeWidth={1.5} />
                  </ButtonIcon>
                }
              >
                <SheetTitle variant="title" size="medium">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <SheetBody>
                <Stack
                  spacing={6}
                  align="stretch"
                  className={navigationPanelBodyLinks}
                >
                  <Stack
                    use="ul"
                    spacing={4}
                    align="stretch"
                    className={navigationLinks}
                  >
                    {items.map((item, index) => (
                      <li
                        key={index}
                        className={menuItem()}
                        onClick={() => setOpen(false)}
                      >
                        {item}
                      </li>
                    ))}
                  </Stack>
                </Stack>
              </SheetBody>
              <SheetFooter>
                <Center>
                  <ButtonIcon
                    use="a"
                    href={'https://www.instagram.com/stephaniegiorgis'}
                    label="Instagram"
                    variant="ghost"
                    size="sm"
                  >
                    <Instagram size="20" strokeWidth={1.5} />
                  </ButtonIcon>
                </Center>
              </SheetFooter>
            </SheetContent>
          </Sheet>
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

        <Hidden use={Cluster} at="mdDown" spacing={8} align="center">
          {items}
        </Hidden>
      </Cluster>
    </Center>
  );
}
