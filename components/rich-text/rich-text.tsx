import { PrismicRichText, JSXMapSerializer } from '@prismicio/react';

import { Stack } from '@/components/stack';
import { Text } from '@/components/text';

import { alignEnd, blockquote, richText } from './rich-text.css';
import { RichTextProps } from './rich-text.types';

const components: JSXMapSerializer = {
  paragraph: ({ children, ...rest }) => {
    const labelSpan = rest.node.spans.find((span) => span.type === 'label');

    if (!labelSpan || labelSpan.type !== 'label') {
      return <Text use="p">{children}</Text>;
    }

    switch (labelSpan.data.label) {
      case 'quote':
        return (
          <Text use="blockquote" className={blockquote}>
            {children}
          </Text>
        );
      case 'align-end':
        return (
          <Text use="p" className={alignEnd}>
            {children}
          </Text>
        );
      default:
        return <Text use="p">{children}</Text>;
    }
  },
  label: ({ node, children }) => {
    switch (node.data.label) {
      case 'codespan':
        return <Text use="code">{children}</Text>;
      case 'quote':
      case 'align-end':
        return <>{children}</>;
      default:
        return <Text className={node.data.label}>{children}</Text>;
    }
  },
};

export function RichText({ field }: RichTextProps) {
  return (
    <Stack space="lg" className={richText}>
      <PrismicRichText field={field} components={components} />
    </Stack>
  );
}
