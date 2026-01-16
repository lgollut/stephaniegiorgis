'use client';

import { Center as SeedlyCenter, CenterProps } from '@kalink-ui/seedly';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx';
import { ElementType } from 'react';

import { breakpoints } from '@/style/breakpoints';

import { center, centerMaxInlineSize } from './center.css';

type CenterOverrideProps<TUse extends ElementType> = CenterProps<TUse> & {
  maxInlineSize?: number;
};

export function Center<TUse extends ElementType>({
  className,
  maxInlineSize = breakpoints.xl,
  style,
  ...props
}: CenterOverrideProps<TUse>) {
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
