import { sys } from '@kalink-ui/seedly/styles';
import { style } from '@vanilla-extract/css';

import { refs } from '@/style/refs.css';

export const presentationPage = style({
  textAlign: 'justify',
});

export const resumeSection = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: sys.spacing[8],
});

export const resumeLink = style({
  color: refs.colors.palette.primary30,
});

export const resumeHeading = style({
  color: refs.colors.palette.neutral40,
  fontSize: sys.typography.headline.medium.size,
});
