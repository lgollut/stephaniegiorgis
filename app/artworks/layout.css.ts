import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';

export const main = style({
  contain: 'size',

  display: 'flex',
  flexGrow: 1,
  alignSelf: 'center',
  paddingBlockEnd: vars.spacing.base,

  position: 'relative',
});

export const mainStack = style({
  height: '100%',

  position: 'relative',
});
