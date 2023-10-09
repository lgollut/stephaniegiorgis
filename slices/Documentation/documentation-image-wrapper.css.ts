import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';
import { slices } from '@/styles/layers.css';

export const container = style({
  width: '100%',

  '@media': {
    'screen and (min-width: 1024px)': {
      aspectRatio: '1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      height: '100%',
      maxWidth: '100%',
      width: 'unset',
    },
  },
});

export const baseDocumentationWrapper = style({
  '@layer': {
    [slices]: {
      // contain: 'size',

      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'flex-start',
      gap: vars.spacing.base,

      maxHeight: '100%',
      maxWidth: '100%',
    },
  },
});

export const documentationWrapper = recipe({
  base: baseDocumentationWrapper,

  variants: {
    layout: {
      '1/1': {
        // '@layer': {
        //   [slices]: {
        //     gridTemplateColumns: '1fr',
        //     gridTemplateRows: 'auto',
        //   },
        // },
      },
      '1/2': {
        // '@layer': {
        //   [slices]: {
        //     gridTemplateColumns: '1fr',
        //     gridTemplateRows: '1.54fr 0.5fr',
        //   },
        // },
      },
      '2/1': {},
      '2/2': {
        // '@layer': {
        //   [slices]: {
        //     gridTemplateColumns: '1fr',
        //     gridTemplateRows: '1.123fr 0.5fr',
        //   },
        // },
      },
    },
  },
});
