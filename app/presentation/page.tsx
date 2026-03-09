import { breakpoints } from '@kalink-ui/seedly/styles';
import {
  Box,
  Grid,
  GridChild,
  Heading,
  Stack,
  Text,
} from '@kalink-ui/seedly-react';
import { isFilled } from '@prismicio/client';
import { notFound } from 'next/navigation';

import {
  presentationPage,
  resumeHeading,
  resumeLink,
} from '@/app/presentation/page.css';
import { Center } from '@/components/center';
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
      gutters={10}
      maxInlineSize={breakpoints.md}
    >
      <Stack spacing={10}>
        <RichText field={data.introduction} />
        <Box spacing={0}>
          <Heading.Root
            level="h2"
            align="start"
            variant="headline"
            size="medium"
            className={resumeHeading}
          >
            {'lang[ue]age et [re]présentation'}
          </Heading.Root>
        </Box>
        <Grid spacing={6}>
          <GridChild colSpan={{ xs: 4, md: 4, lg: 8 }}>
            <Stack align="stretch" spacing={6}>
              <RichText field={data.resume} />

              <Stack spacing={4} align="start">
                {data.links.map(
                  (item: (typeof data.links)[number], index: number) => {
                    const { link, label } = item;
                    return (
                      isFilled.linkToMedia(link) && (
                        <Text
                          key={`${link.id ?? link.url ?? label ?? index}`}
                          render={
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                            />
                          }
                          variant="body"
                          size="small"
                          className={resumeLink}
                        >
                          {label}
                        </Text>
                      )
                    );
                  },
                )}
              </Stack>
            </Stack>
          </GridChild>
          <GridChild colStart={{ xs: 1, md: 5, lg: 9 }} colEnd={-1}>
            <Stack spacing={3}>
              <Frame use={Image} field={data.resume_image} ratio="2:3" cover />

              <Text align="end" render={<div />} variant="body" size="small">
                {data.resume_image.copyright}
              </Text>
            </Stack>
          </GridChild>
        </Grid>
      </Stack>
    </Center>
  );
}
