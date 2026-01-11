import { clsx } from 'clsx';
import { ElementType, ForwardedRef, forwardRef } from 'react';

import { frame } from './frame.css';
import { FrameProps } from './frame.types';

type FrameElement = HTMLElement;

const Frame = <TUse extends ElementType>(
  props: FrameProps<TUse>,
  ref: ForwardedRef<FrameElement>,
) => {
  const { use: Comp = 'div', ratio, className, ...rest } = props;

  return (
    <Comp ref={ref} className={clsx(frame({ ratio }), className)} {...rest} />
  );
};

/**
 * A custom element for augmenting image ratios
 *
 * https://every-layout.dev/layouts/frame
 */
const WrappedFrame = forwardRef(Frame);

export { WrappedFrame as Frame };
