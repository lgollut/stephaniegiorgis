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
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '50%',

  maxHeight: '100%',

  '@media': {
    'screen and (min-width: 1024px)': {
      overflow: 'scroll',
    },
  },
});

export const artworkData = style({
  width: '100%',

  textAlign: 'end',
});

export const artworkDescription = style({
  marginTop: vars.spacing.lg,

  '@media': {
    'screen and (max-width: 1023px)': {
      textAlign: 'start',
    },

    'screen and (min-width: 1024px)': {
      marginTop: `min(10vh, ${vars.spacing['6xl']})`,
    },
  },
});
