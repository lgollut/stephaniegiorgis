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
    gap: vars.spacing['2xl'],

    minHeight: '100vh',

    backgroundColor: vars.color.surfaceContainer,

    WebkitFontSmoothing: 'antialiased',
  },
]);

export const footer = style({
  display: 'flex',
  justifyContent: 'center',

  backgroundColor: vars.color.surfaceContainerHighest,
});
