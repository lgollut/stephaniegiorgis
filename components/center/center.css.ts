import { gutterSize } from '@kalink-ui/seedly';
import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { breakpoints } from '@/style/breakpoints';

export const centerMaxInlineSize = createVar();

export const center = style({
  inlineSize: `min(${centerMaxInlineSize}, ${calc('100vw').subtract(calc.multiply(gutterSize, 2)).toString()})`,
  maxInlineSize: centerMaxInlineSize,

  vars: {
    [centerMaxInlineSize]: `${breakpoints.xl}px`,
  },
});
