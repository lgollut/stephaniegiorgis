import { Item } from 'react-photoswipe-gallery';

import { Frame } from '@/components/frame/frame';
import { Image } from '@/components/image';
import { DocumentationSliceImageItem } from '@/prismicio-types';
import { documentationImageItem } from '@/slices/Documentation/documentation-image-item.css';

function getImageURL(url: string, quality: string) {
  const imageURL = new URL(url);
  const params = new URLSearchParams();

  params.set('q', quality);
  params.set('auto', 'format');

  imageURL.search = params.toString();

  return imageURL.toString();
}

export const DocumentationImageItem = ({
  item,
}: {
  item: DocumentationSliceImageItem;
}) => {
  return (
    <Item
      original={getImageURL(item.image.url ?? '', '70')}
      thumbnail={getImageURL(item.image.url ?? '', '10')}
      cropped
      {...item.image.dimensions}
    >
      {({ ref, open }) => (
        <Frame
          ref={ref}
          use={Image}
          field={item.image[item.image_ratio]}
          ratio={item.image_ratio}
          className={documentationImageItem}
          onClick={open}
          cover
        />
      )}
    </Item>
  );
};
