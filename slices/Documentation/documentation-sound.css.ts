import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';

export const documentationSound = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: vars.spacing.base,

  position: 'relative',
});
