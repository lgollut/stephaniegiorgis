import { isFilled, type Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { VideoMimeType, VideoSrc } from '@vidstack/react';

import { MediaPlayer } from '@/components/media-player';

import { videoWrapper } from './video.css';

/**
 * Props for `Video`.
 */
export type VideoProps = SliceComponentProps<Content.VideoSlice>;

/**
 * Component for "Video" Slices.
 */
export const Video = ({ slice }: VideoProps) => {
  const mediaRatio = slice.primary.ratio.replace(':', '/') as
    | '16/9'
    | '4/3'
    | '1/1';

  const src: VideoSrc[] = [];

  if (isFilled.linkToMedia(slice.primary.av1)) {
    src.push({
      src: slice.primary.av1.url,
      type: 'video/mp4; codecs=av01.0.05M.08' as VideoMimeType,
      width: 1280,
      height: 720,
    });
  }

  if (isFilled.linkToMedia(slice.primary.h264)) {
    src.push({
      src: slice.primary.h264.url,
      type: 'video/mp4; codecs=avc1.4D401E' as VideoMimeType,
      width: 1280,
      height: 720,
    });
  }

  return (
    <div className={videoWrapper({ ratio: mediaRatio })}>
      <MediaPlayer
        poster={slice.primary.poster}
        ratio={mediaRatio}
        src={src}
        maxWidth={slice.primary.max_width}
      />
    </div>
  );
};
