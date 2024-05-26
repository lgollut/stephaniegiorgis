import { clsx } from 'clsx';
import { ElementType, ForwardedRef, forwardRef } from 'react';

import { stack } from './stack.css';
import { StackProps } from './stack.types';

const Stack = <TUse extends ElementType = 'div'>(
  props: StackProps<TUse>,
  ref: ForwardedRef<any>,
) => {
  const {
    use: Comp = 'div',
    space = 'base',
    className,
    divided,
    ...rest
  } = props;

  return (
    <Comp
      ref={ref}
      className={clsx(className, stack({ space, divided }))}
      {...rest}
    />
  );
};

/**
 * A custom element for injecting white space (margin) between flow
 * (block) elements along a vertical axis.
 *
 * https://every-layout.dev/layouts/stack
 */
const WrappedStack = forwardRef(Stack);

export { WrappedStack as Stack };
