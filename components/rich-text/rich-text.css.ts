import { sys } from '@kalink-ui/seedly/styles';
import { style } from '@vanilla-extract/css';

import { typography } from '@/styles/typography.css';

export const richText = style({});

export const blockquote = style([
  typography.bodyMedium,
  {
    paddingInline: sys.spacing[8],
    fontStyle: 'italic',
  },
]);

export const alignEnd = style({
  textAlign: 'end',
});
