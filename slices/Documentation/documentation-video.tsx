import { isFilled } from '@prismicio/client';
import { ReactNode, useMemo } from 'react';

import { MediaPlayer } from '@/components/media-player';
import { DocumentationSliceVideo } from '@/prismicio-types';
import { documentationImage } from '@/slices/Documentation/documentation-image.css';
import { documentationVideo } from '@/slices/Documentation/documentation-video.css';
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

      players.push(
        <MediaPlayer
          key={video.name}
          className={documentationVideo}
          type="video"
          poster={poster}
          ratio={ratio}
          src={video.url}
        />,
      );
    }

    return players;
  }, [slice]);

  return (
    <div className={documentationImage({ column: true })}>{videoElements}</div>
  );
};
