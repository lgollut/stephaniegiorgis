import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';

export const contactPage = style({
  display: 'flex',
  gap: vars.spacing.xl,

  '@media': {
    'screen and (max-width: 1023px)': {
      flexDirection: 'column-reverse',
    },
  },
});

export const contactPageForm = style({
  flex: '1 1 70%',
});
