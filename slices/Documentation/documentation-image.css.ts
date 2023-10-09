import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';
import { slices } from '@/styles/layers.css';

const documentationImageBase = style({
  '@layer': {
    [slices]: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: vars.spacing.base,

      width: '100%',
      maxHeight: '100%',
      overflow: 'scroll',

      position: 'relative',

      '@media': {
        'screen and (min-width: 1024px)': {
          // contain: 'size',
          justifyContent: 'center',
        },
      },
    },
  },
});

export const documentationImage = recipe({
  base: documentationImageBase,

  variants: {
    column: {
      true: {
        '@layer': {
          [slices]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          },
        },
      },
    },
  },
});
