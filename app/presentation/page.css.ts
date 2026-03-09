import { sys } from '@kalink-ui/seedly/styles';
import { style } from '@vanilla-extract/css';

import { refs } from '@/styles/refs.css';

export const presentationPage = style({
  textAlign: 'justify',
});

export const resumeSection = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: sys.spacing[8],
});

export const resumeLink = style({
  color: refs.colors.light.primary13,

  ':hover': {
    textDecoration: 'underline',
  },
});

export const resumeHeading = style({
  color: refs.colors.light.neutral14,
});
