import { style } from '@vanilla-extract/css';

export const logo = style({
  textTransform: 'uppercase',
});

export const navigationLink = style({
  display: 'inline-block',

  position: 'relative',

  textTransform: 'uppercase',

  selectors: {
    '&[aria-current="page"]::after': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '1px',
      background: 'currentColor',
    },
  },
});
