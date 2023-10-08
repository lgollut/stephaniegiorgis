import { clsx } from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { Stack } from '@/components/stack';

import { heading, headingWrapper, subtitleStyle } from './heading.css';
import { HeadingProps, HeadingTypes } from './heading.types';

const Heading = <TUse extends HeadingTypes>(
  props: HeadingProps<TUse>,
  ref: ForwardedRef<any>,
) => {
  const {
    use: Comp = 'h1',
    variant = props.use || 'h1',
    className,
    subtitle,
    children,
    border,
    color,
    style,
    align,
    ...rest
  } = props;

  return (
    <Stack className={headingWrapper({ border, align })}>
      <Comp
        ref={ref}
        className={clsx(heading({ variant, color, style }), className)}
        {...rest}
      >
        {children}
      </Comp>
      {subtitle && <div className={subtitleStyle}>{subtitle}</div>}
    </Stack>
  );
};

const WrappedHeading = forwardRef(Heading);

export { WrappedHeading as Heading };
