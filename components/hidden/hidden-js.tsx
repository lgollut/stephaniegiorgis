'use client';

import { useWindowSize } from '@uidotdev/usehooks';

import { breakpoints } from '@/style/breakpoints';

import { HiddenJsProps } from './hidden-js.types';

const hiddenBreakpoints = {
  xsUp: breakpoints.sm,
  xsDown: breakpoints.sm - 1,
  smUp: breakpoints.sm,
  smDown: breakpoints.md - 1,
  mdUp: breakpoints.md,
  mdDown: breakpoints.lg - 1,
  lgUp: breakpoints.lg,
  lgDown: breakpoints.xl - 1,
  xlUp: breakpoints.xl,
} as const;

export const HiddenJs = (props: HiddenJsProps) => {
  const { at = 'never', children } = props;

  const size = useWindowSize();

  if (at === 'never' || size.width === null) {
    return null;
  } else if (at === 'always') {
    return children;
  }

  const up = at.includes('Up');
  const breakpoint = hiddenBreakpoints[at as keyof typeof hiddenBreakpoints];

  if (up) {
    return size.width < breakpoint && children;
  }

  return size.width > breakpoint && children;
};
