import { isFilled } from '@prismicio/client';
import { notFound } from 'next/navigation';

import { presentationPage } from '@/app/presentation/page.css';
import { Aside } from '@/components/aside';
import { Box } from '@/components/box';
import { Container } from '@/components/container/container';
import { Frame } from '@/components/frame/frame';
import { Heading } from '@/components/heading';
import { Image } from '@/components/image';
import { RichText } from '@/components/rich-text/rich-text';
import { Stack } from '@/components/stack';
import { Text } from '@/components/text';
import { createClient } from '@/prismicio';

export default async function PresentationPage() {
  const client = createClient();

  const { data } = await client
    .getSingle('presentation', {
      fetchOptions: { next: { tags: ['prismic', 'presentation'] } },
    })
    .catch(() => notFound());

  return (
    <Container maxWidth="extraSmall" className={presentationPage}>
      <Stack space="4xl">
        <RichText field={data.introduction} />
        <Box space="none">
          <Heading use="h2" color="muted" align="start">
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
            {data.links.map(({ link, label }) => {
              return (
                isFilled.linkToMedia(link) && (
                  <Text
                    use="a"
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    color="primary"
                    variant="bodySmall"
                    align="end"
                  >
                    {label}
                  </Text>
                )
              );
            })}
          </Stack>
          <Stack space="sm">
            <Frame use={Image} field={data.resume_image} ratio="2:3" cover />
            <Text align="end" use="div" variant="bodySmall">
              {data.resume_image.copyright}
            </Text>
          </Stack>
        </Aside>
      </Stack>
    </Container>
  );
}
