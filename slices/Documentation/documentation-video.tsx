import { isFilled } from '@prismicio/client';
import { ReactNode, useMemo } from 'react';

import { MediaPlayer } from '@/components/media-player';
import { DocumentationSliceVideo } from '@/prismicio-types';
import { assertSliceVariation } from '@/utils/assert-variation';

type DocumentationVideoProps = {
  slice: DocumentationSliceVideo;
};

export const DocumentationVideo = ({ slice }: DocumentationVideoProps) => {
  assertSliceVariation('video', slice);

  const videoElements = useMemo(() => {
    let players: ReactNode[] = [];

    for (const { video, poster, ratio } of slice.items) {
      if (!video || !isFilled.linkToMedia(video)) {
        continue;
      }

      const mediaRatio = ratio.replace(':', '/') as '16/9' | '4/3' | '1/1';

      players.push(
        <MediaPlayer
          key={video.name}
          poster={poster}
          ratio={mediaRatio}
          src={video.url}
        />,
      );
    }

    return players;
  }, [slice]);

  return videoElements;
};
