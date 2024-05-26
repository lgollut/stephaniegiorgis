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
