import { createVar, style } from '@vanilla-extract/css';

export const maxWidthVar = createVar();

export const mediaPlayer = style({
  maxWidth: maxWidthVar,

  overflow: 'hidden',

  vars: {
    [maxWidthVar]: '100%',
    '--video-border-radius': '0',
    '--video-border': 'none',
    '--audio-border-radius': '0',
  },
});
