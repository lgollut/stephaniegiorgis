import { sys } from '@kalink-ui/seedly/styles';
import { style } from '@vanilla-extract/css';

export const contactPage = style({
  display: 'flex',
  gap: sys.spacing[7],
  alignItems: 'center',

  '@media': {
    'screen and (max-width: 1023px)': {
      flexDirection: 'column-reverse',
    },
  },
});

export const contactPageForm = style({
  flex: '1 1 70%',
  width: '100%',
});
