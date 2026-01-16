import { Box, Heading, Stack, Text } from '@kalink-ui/seedly';
import { isFilled } from '@prismicio/client';
import { notFound } from 'next/navigation';

import { Center } from '@/components/center';
import { breakpoints } from '@/style/breakpoints';
import { presentationPage } from '@/app/presentation/page.css';
import { Aside } from '@/components/aside';
import { Frame } from '@/components/frame/frame';
import { Image } from '@/components/image';
import { RichText } from '@/components/rich-text/rich-text';
import { createClient } from '@/prismicio';

export default async function PresentationPage() {
  const client = createClient();

  const { data } = await client
    .getSingle('presentation', {
      fetchOptions: { cache: 'force-cache' },
    })
    .catch(() => notFound());

  return (
    <Center
      className={presentationPage}
      gutters={6}
      maxInlineSize={breakpoints.md}
    >
      <Stack spacing={10}>
        <RichText field={data.introduction} />
        <Box spacing={0}>
          <Heading use="h2" align="start">
            {'lang[ue]age et [re]présentation'}
          </Heading>
        </Box>
        <Aside
          space="xl"
          side="right"
          sideWidth={`${data.resume_image.dimensions?.width}px`}
        >
          <Stack>
            <RichText field={data.resume} />
            {data.links.map(
              (item: (typeof data.links)[number], index: number) => {
                const { link, label } = item;
                return (
                  isFilled.linkToMedia(link) && (
                    <Text
                      key={`${link.id ?? link.url ?? label ?? index}`}
                      use="a"
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      variant="body"
                      size="small"
                      align="end"
                    >
                      {label}
                    </Text>
                  )
                );
              },
            )}
          </Stack>
          <Stack spacing={3}>
            <Frame use={Image} field={data.resume_image} ratio="2:3" cover />
            <Text align="end" use="div" variant="body" size="small">
              {data.resume_image.copyright}
            </Text>
          </Stack>
        </Aside>
      </Stack>
    </Center>
  );
}
