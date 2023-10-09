import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';
import { themeClass } from '@/styles/theme.css';
import { typography } from '@/styles/typography.css';

export const html = style({
  minHeight: '100vh',
});

export const body = style([
  themeClass,
  typography.bodyLarge,
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    minHeight: '100vh',

    backgroundColor: vars.color.surfaceContainer,

    WebkitFontSmoothing: 'antialiased',
  },
]);

export const footer = style({
  display: 'flex',
  justifyContent: 'center',

  marginTop: vars.spacing['3xl'],

  backgroundColor: vars.color.surfaceContainerHighest,
});
