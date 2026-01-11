import { clsx } from 'clsx';
import { ElementType, ForwardedRef, forwardRef } from 'react';

import { container } from '@/components/container/container.css';
import { ContainerProps } from '@/components/container/container.types';

type ContainerElement = HTMLElement;

const Container = <TUse extends ElementType = 'div'>(
  props: ContainerProps<TUse>,
  ref: ForwardedRef<ContainerElement>,
) => {
  const {
    use: Comp = 'div',
    className,
    space = 'base',
    maxWidth = 'base',
    ...rest
  } = props;

  return (
    <Comp
      ref={ref}
      className={clsx(className, container({ space, maxWidth }))}
      {...rest}
    />
  );
};

const WrappedContainer = forwardRef(Container);

export { WrappedContainer as Container };
