import { PrismicNextImage } from '@prismicio/next';
import { clsx } from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { image } from './image.css';
import { ImageProps } from './image.types';

type ImageElement = HTMLDivElement;

const Image = (
  { className, field, cover, ...rest }: ImageProps,
  ref: ForwardedRef<ImageElement>,
) => {
  return (
    <div ref={ref} className={clsx(image({ cover }), className)} {...rest}>
      <PrismicNextImage field={field} fallbackAlt="" />
      {/* {field?.copyright && <Text variant="labelSmall">{field.copyright}</Text>} */}
    </div>
  );
};

const WrappedImage = forwardRef(Image);

export { WrappedImage as Image };
