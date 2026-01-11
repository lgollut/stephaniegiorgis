import { Center } from '@kalink-ui/seedly';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

import { archivesPage } from './page.css';

export default async function ArchivesPage() {
  const client = createClient();
  const archives = await client.getSingle('archives');

  return (
    <Center
      className={archivesPage}
      gutters={6}
      style={{ maxInlineSize: '1280px', width: '100%' }}
    >
      <SliceZone slices={archives.data.slices} components={components} />
    </Center>
  );
}
