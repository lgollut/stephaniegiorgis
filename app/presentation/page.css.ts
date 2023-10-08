import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';

export const presentationPage = style({
  marginBlock: vars.spacing['3xl'],

  textAlign: 'justify',
});

export const resumeSection = style({
  display: 'grid',
  // gridTemplateColumns: '2fr 1fr',
  gridTemplateColumns: '2fr 1fr',
  gap: vars.spacing['2xl'],
});
