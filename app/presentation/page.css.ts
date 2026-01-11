import { sys } from '@kalink-ui/seedly/styles';
import { style } from '@vanilla-extract/css';

export const presentationPage = style({
  textAlign: 'justify',
});

export const resumeSection = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: sys.spacing[8],
});
