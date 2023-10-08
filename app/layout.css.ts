import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';
import { themeClass } from '@/styles/theme.css';
import { typography } from '@/styles/typography.css';

export const html = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

export const body = style([
  themeClass,
  typography.bodyLarge,
  {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,

    backgroundColor: vars.color.surfaceContainer,

    WebkitFontSmoothing: 'antialiased',
  },
]);

export const bodyContainer = style({
  flexGrow: 1,
});
