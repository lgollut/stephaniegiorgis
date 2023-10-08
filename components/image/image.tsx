import { PrismicNextImage } from '@prismicio/next';
import { clsx } from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { image } from './image.css';
import { ImageProps } from './image.types';

const Image = (
  { className, field, cover }: ImageProps,
  ref: ForwardedRef<any>,
) => {
  return (
    <div ref={ref} className={clsx(image({ cover }), className)}>
      <PrismicNextImage field={field} />
      {/* {field?.copyright && <Text variant="labelSmall">{field.copyright}</Text>} */}
    </div>
  );
};

const WrappedImage = forwardRef(Image);

export { WrappedImage as Image };
