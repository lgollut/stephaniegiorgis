import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';
import { slices } from '@/styles/layers.css';

export const documentationVideo = style({
  '@layer': {
    [slices]: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: vars.spacing.base,

      width: '100%',
      height: '100%',

      position: 'relative',
    },
  },
});
