import { sys, typography } from '@kalink-ui/seedly/styles';
import { style } from '@vanilla-extract/css';

export const html = style({
  minHeight: '100vh',
});

export const body = style([
  typography.body.medium,
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: sys.spacing[8],

    minHeight: '100vh',

    backgroundColor: sys.color.background,
  },
]);

export const footer = style({
  display: 'flex',
  justifyContent: 'center',

  backgroundColor: sys.color.background,
});
