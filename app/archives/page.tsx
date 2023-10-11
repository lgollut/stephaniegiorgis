import { SliceZone } from '@prismicio/react';

import { Container } from '@/components/container/container';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

export default async function ArchivesPage() {
  const client = createClient();
  const archives = await client.getSingle('archives', {
    fetchOptions: { next: { tags: ['prismic', 'archives'] } },
  });

  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <SliceZone slices={archives.data.slices} components={components} />
    </Container>
  );
}
