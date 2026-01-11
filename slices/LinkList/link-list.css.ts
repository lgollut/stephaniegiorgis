import { sys } from '@kalink-ui/seedly/styles';
import { globalStyle, style } from '@vanilla-extract/css';

export const linkList = style({
  display: 'flex',
  gap: sys.spacing[4],
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
});

globalStyle(`${linkList} > *`, {
  // maxWidth: 'min-content',
});
