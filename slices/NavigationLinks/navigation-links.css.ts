import { sys } from '@kalink-ui/seedly/styles';
import { style } from '@vanilla-extract/css';

export const navigation = style({
  paddingBlockStart: sys.spacing[8],
});

export const logo = style({
  textTransform: 'uppercase',
});

export const navigationPanelBodyLinks = style({
  height: '100%',
});

export const navigationLinks = style({
  paddingInlineStart: 0,
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
