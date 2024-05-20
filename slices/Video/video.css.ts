import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';

const aspectRatio = createVar();

export const videoWrapper = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: vars.color.surfaceContainerHighest,
    aspectRatio,

    vars: {
      [aspectRatio]: '16 / 9',
    },
  },

  variants: {
    ratio: {
      '16/9': {
        vars: {
          [aspectRatio]: '16 / 9',
        },
      },
      '4/3': {
        vars: {
          [aspectRatio]: '4 / 3',
        },
      },
      '1/1': {
        vars: {
          [aspectRatio]: '1 / 1',
        },
      },
    },
  },
});
