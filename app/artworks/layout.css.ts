import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';

export const main = style({
  display: 'flex',
  flexGrow: 1,
  alignSelf: 'center',
  justifyContent: 'center',

  paddingBlockEnd: vars.spacing.base,

  position: 'relative',
});

export const mainStack = style({
  height: '100%',

  position: 'relative',
});
