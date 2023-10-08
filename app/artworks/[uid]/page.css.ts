import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';

export const artworkPage = style({
  display: 'flex',
  gap: vars.spacing.xl,
  width: '100%',
  alignItems: 'center',

  position: 'relative',
});

globalStyle(`${artworkPage} > *`, {
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: '50%',

  maxHeight: '100%',
  overflow: 'scroll',
});

export const artworkData = style({
  width: '100%',

  textAlign: 'end',
});

export const artworkDescription = style({
  marginTop: `min(10vh, ${vars.spacing['6xl']}) !important`,
});
