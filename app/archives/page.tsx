import { SliceZone } from '@prismicio/react';
import { clsx } from 'clsx';

import { Box } from '@/components/box';
import { container } from '@/components/container/container.css';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

import { archivesPage } from './page.css';

export default async function ArchivesPage() {
  const client = createClient();
  const archives = await client.getSingle('archives');

  return (
    <Box
      className={clsx(
        container({ space: 'lg', maxWidth: 'base' }),
        archivesPage,
      )}
    >
      <SliceZone slices={archives.data.slices} components={components} />
    </Box>
  );
}
