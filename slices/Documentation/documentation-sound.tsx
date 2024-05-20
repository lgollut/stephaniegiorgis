import { isFilled } from '@prismicio/client';
import { ReactNode, useMemo } from 'react';

import { MediaPlayer } from '@/components/media-player';
import { DocumentationSliceSound } from '@/prismicio-types';
import { assertSliceVariation } from '@/utils/assert-variation';

type DocumentationSoundProps = {
  slice: DocumentationSliceSound;
};

export const DocumentationSound = ({ slice }: DocumentationSoundProps) => {
  assertSliceVariation('sound', slice);

  const audioElements = useMemo(() => {
    let players: ReactNode[] = [];

    for (const { sound } of slice.items) {
      if (!sound || !isFilled.linkToMedia(sound)) {
        continue;
      }

      players.push(<MediaPlayer key={sound.name} src={sound.url} />);
    }

    return players;
  }, [slice]);

  return audioElements;
};
