import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';
import { slices } from '@/styles/layers.css';

export const documentationSound = style({
  '@layer': {
    [slices]: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: vars.spacing.base,

      position: 'relative',
    },
  },
});
