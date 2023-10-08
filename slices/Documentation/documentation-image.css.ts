import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';

const documentationImageBase = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: vars.spacing.base,

  width: '100%',
  height: '100%',

  position: 'relative',
});

export const documentationImage = recipe({
  base: documentationImageBase,

  variants: {
    column: {
      true: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
    },
  },
});
