import { SliceZone } from '@prismicio/react';
import {
  SliceSimulator,
  getSlices,
} from '@slicemachine/adapter-next/simulator';

import { components } from '@/slices';

export default async function SliceSimulatorPage({
  searchParams,
}: {
  searchParams: Promise<{ state?: string }>;
}) {
  const { state } = await searchParams;
  const slices = getSlices(state);

  return (
    <SliceSimulator>
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  );
}
