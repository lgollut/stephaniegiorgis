import { Box, Grid, GridChild, Heading, Stack, Text } from '@kalink-ui/seedly';
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
import { breakpoints } from '@/style/breakpoints';

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
          <Heading use="h2" align="start" className={resumeHeading}>
            {'lang[ue]age et [re]présentation'}
          </Heading>
        </Box>
        <Grid spacing={{ xs: 10, md: 6, lg: 8 }}>
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
                          use="a"
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          variant="body"
                          size="medium"
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

              <Text align="end" use="div" variant="body" size="small">
                {data.resume_image.copyright}
              </Text>
            </Stack>
          </GridChild>
        </Grid>
      </Stack>
    </Center>
  );
}
