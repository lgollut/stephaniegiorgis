import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';

export const baseDocumentationWrapper = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  justifyContent: 'center',
  gap: vars.spacing.base,

  maxHeight: '100%',
  maxWidth: '100%',
});

export const documentationWrapper = recipe({
  base: baseDocumentationWrapper,

  variants: {
    layout: {
      '1/1': {
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto',
      },
      '1/2': {
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1.54fr 0.5fr',
      },
      '2/1': {},
      '2/2': {
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1.123fr 0.5fr',
      },
    },
  },
});
