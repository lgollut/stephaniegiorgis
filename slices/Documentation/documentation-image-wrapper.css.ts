import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';

export const baseImageRow = style({
  display: 'flex',
  gap: vars.spacing.base,
});

export const imageRow = recipe({
  base: baseImageRow,

  variants: {
    column: {
      true: {
        flexWrap: 'wrap',
      },
    },
  },
});
