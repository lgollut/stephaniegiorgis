import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';

export const linkList = style({
  display: 'flex',
  gap: vars.spacing.base,
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
});

globalStyle(`${linkList} > *`, {
  // maxWidth: 'min-content',
});
