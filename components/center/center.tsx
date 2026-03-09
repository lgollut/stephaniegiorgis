'use client';

import { breakpoints } from '@kalink-ui/seedly/styles';
import { Center as SeedlyCenter } from '@kalink-ui/seedly-react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx';
import { type ComponentProps } from 'react';

import { center, centerMaxInlineSize } from './center.css';

type CenterOverrideProps = ComponentProps<typeof SeedlyCenter> & {
  maxInlineSize?: number;
};

export function Center({
  className,
  maxInlineSize = breakpoints.xl,
  style,
  ...props
}: CenterOverrideProps) {
  const inlineVars = assignInlineVars({
    [centerMaxInlineSize]: `${maxInlineSize}px`,
  });

  return (
    <SeedlyCenter
      className={clsx(center, className)}
      style={style ? { ...style, ...inlineVars } : inlineVars}
      {...props}
    />
  );
}
