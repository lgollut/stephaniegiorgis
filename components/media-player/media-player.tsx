'use client';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/audio.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { PrismicImageProps } from '@prismicio/react';
import {
  MediaPlayer as MediaPlayerPrimitive,
  MediaProvider,
  Poster,
  VideoSrc,
} from '@vidstack/react';
import {
  DefaultAudioLayout,
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default';

type MediaPlayerProps = {
  poster?: PrismicImageProps['field'];
  src: VideoSrc[] | string;
  title?: string;
  ratio?: '16/9' | '4/3' | '1/1';
};

export const MediaPlayer = ({
  poster,
  src,
  title,
  ratio,
}: MediaPlayerProps) => {
  if (!src) {
    return null;
  }

  return (
    <MediaPlayerPrimitive
      title={title}
      src={src}
      poster={poster?.url || ''}
      playsInline
      crossOrigin
      style={{ overflow: 'hidden' }}
      aspectRatio={ratio}
    >
      <MediaProvider>
        <Poster
          className="vds-poster"
          src={poster?.url || ''}
          alt={poster?.alt || ''}
        />
      </MediaProvider>

      <DefaultAudioLayout icons={defaultLayoutIcons} />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayerPrimitive>
  );
};
