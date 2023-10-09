import { Frame } from '@/components/frame/frame';
import { Image } from '@/components/image';
import { DocumentationSliceImageItem } from '@/prismicio-types';

export const DocumentationImageItem = ({
  item,
}: {
  item: DocumentationSliceImageItem;
}) => {
  return (
    <Frame
      use={Image}
      field={item.image[item.image_ratio]}
      ratio={item.image_ratio}
    />
  );
};
