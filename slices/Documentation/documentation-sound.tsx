import { isFilled } from '@prismicio/client';
import { ReactNode, useMemo } from 'react';

import { MediaPlayer } from '@/components/media-player';
import { DocumentationSliceSound } from '@/prismicio-types';
import { documentationSound } from '@/slices/Documentation/documentation-sound.css';
import { assertSliceVariation } from '@/utils/assert-variation';

type DocumentationSoundProps = {
  slice: DocumentationSliceSound;
};

export const DocumentationSound = ({ slice }: DocumentationSoundProps) => {
  assertSliceVariation('sound', slice);

  const audioElements = useMemo(() => {
    let players: ReactNode[] = [];

    for (const { sound, poster, poster_ratio } of slice.items) {
      if (!sound || !isFilled.linkToMedia(sound)) {
        continue;
      }

      players.push(
        <MediaPlayer
          key={sound.name}
          className={documentationSound}
          type="audio"
          poster={poster}
          src={sound.url}
          ratio={poster_ratio}
        />,
      );
    }

    return players;
  }, [slice]);

  return audioElements;
};
