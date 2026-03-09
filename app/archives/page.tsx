import { SliceZone } from '@prismicio/react';

import { Center } from '@/components/center';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

import { archivesPage } from './page.css';

export default async function ArchivesPage() {
  const client = createClient();
  const archives = await client.getSingle('archives');

  return (
    <Center className={archivesPage} gutters={10}>
      <SliceZone slices={archives.data.slices} components={components} />
    </Center>
  );
}
