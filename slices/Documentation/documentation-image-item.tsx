import { Frame } from '@/components/frame/frame';
import { Image } from '@/components/image';
import { DocumentationSliceImageItem } from '@/prismicio-types';
import { calculateRatio } from '@/utils/ratio';

import { Ratio, availableRatios } from './documentation.types';

export const DocumentationImageItem = ({
  item,
  style,
}: {
  style?: object;
  item: DocumentationSliceImageItem;
}) => {
  console.log(style);
  let ratio: Ratio = '2:3';

  if (item.image.dimensions) {
    const { width, height } = item.image.dimensions;

    if (width < height) {
      ratio = '2:3';
    } else if (width > height) {
      ratio = '3:2';
    } else {
      ratio = '1:1';
    }

    const calculatedRatio = calculateRatio({ width, height });

    for (const availableRatio of availableRatios) {
      if (calculatedRatio === availableRatio) {
        ratio = calculatedRatio;
      }
    }
  }

  return <Frame use={Image} field={item.image} ratio={ratio} style={style} />;
};
