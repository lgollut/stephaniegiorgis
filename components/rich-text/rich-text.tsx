import { Heading, Stack, Text } from '@kalink-ui/seedly';
import { wrapMapSerializer, serialize } from '@prismicio/richtext';
import Image from 'next/image';
import { Children, ReactNode, useMemo } from 'react';

import { blockquote, richText } from './rich-text.css';
import { RichTextProps } from './rich-text.types';

const replaceMap = {
  '« ': '«\u202F',
  ' »': '\u202F»',
  ' :': '\u202F:',
  ' ;': '\u202F;',
  ' !': '\u202F!',
  ' ?': '\u202F?',
};

function parseText(text: unknown): ReactNode {
  if (Array.isArray(text)) {
    return Children.toArray(text.map(parseText));
  }

  if (typeof text !== 'string') {
    return text as ReactNode;
  }

  let formattedText: string = text;

  for (const [key, value] of Object.entries(replaceMap)) {
    formattedText = formattedText.replaceAll(key, value);
  }

  return formattedText;
}

const toChildrenArray = (value: unknown) => Children.toArray(parseText(value));

const markdownSerializer = wrapMapSerializer({
  heading1: ({ children, key }) => (
    <Heading key={key} use="h1">
      {toChildrenArray(children)}
    </Heading>
  ),
  heading2: ({ children, key }) => (
    <Heading key={key} use="h2">
      {toChildrenArray(children)}
    </Heading>
  ),
  heading3: ({ children, key }) => (
    <Heading key={key} use="h3">
      {toChildrenArray(children)}
    </Heading>
  ),
  heading4: ({ children, key }) => (
    <Heading key={key} use="h4">
      {toChildrenArray(children)}
    </Heading>
  ),
  heading5: ({ children, key }) => (
    <Heading key={key} use="h5">
      {toChildrenArray(children)}
    </Heading>
  ),
  heading6: ({ children, key }) => (
    <Heading key={key} use="h6">
      {toChildrenArray(children)}
    </Heading>
  ),
  paragraph: ({ node, children, key }) => {
    const labelSpan = node.spans.find((span) => span.type === 'label');

    const parsedText = toChildrenArray(children) as NonNullable<ReactNode>;

    if (!labelSpan || labelSpan.type !== 'label') {
      return (
        <Text use="p" key={key} variant="body" size="large">
          {parsedText}
        </Text>
      );
    }

    switch (labelSpan.data.label) {
      case 'quote':
        return (
          <Text
            use="blockquote"
            className={blockquote}
            key={key}
            variant="body"
            size="large"
          >
            {parsedText}
          </Text>
        );
      case 'align-end':
        return (
          <Text use="p" align="end" key={key} variant="body" size="large">
            {parsedText}
          </Text>
        );
      case 'legend':
        return (
          <Text
            use="p"
            variant="body"
            size="medium"
            align={{ xs: 'start', md: 'end' }}
            key={key}
          >
            {parsedText}
          </Text>
        );
      default:
        return (
          <Text use="p" key={key} variant="body" size="large">
            {parsedText}
          </Text>
        );
    }
  },
  preformatted: ({ text, key }) => <pre key={key}>{text}</pre>,
  strong: ({ children, key }) => (
    <strong key={key}>{toChildrenArray(children)}</strong>
  ),
  em: ({ children, key }) => <em key={key}>{toChildrenArray(children)}</em>,
  listItem: ({ children, key }) => (
    <li key={key}>{toChildrenArray(children)}</li>
  ),
  oListItem: ({ children, key }) => (
    <li key={key}>{toChildrenArray(children)}</li>
  ),
  list: ({ children, key }) => <ul key={key}>{toChildrenArray(children)}</ul>,
  oList: ({ children, key }) => <ol key={key}>{toChildrenArray(children)}</ol>,
  image: ({ node, key }) => (
    <Image key={key} alt={node.alt ?? ''} src={node.url} />
  ),
  embed: ({ node }) => `${node.oembed.html}\n\n`,
  hyperlink: ({ node, children, key }) => (
    <Text
      use="a"
      variant="body"
      size="large"
      color="primary"
      href={node.data.url}
      key={key}
    >
      {toChildrenArray(children)}
    </Text>
  ),
  label: ({ node, children, key }) => {
    switch (node.data.label) {
      case 'codespan':
        return (
          <Text use="code" key={key} variant="body" size="large">
            {toChildrenArray(children)}
          </Text>
        );
      case 'quote':
      case 'align-end':
      case 'legend':
      case 'link':
        return toChildrenArray(children);
      default:
        return (
          <Text key={key} className={node.data.label}>
            {toChildrenArray(children)}
          </Text>
        );
    }
  },
  span: ({ text }) => text.replace('\n', '<br/>'),
});

export function RichText({ field }: RichTextProps) {
  const rendered = useMemo(
    () => serialize(field, markdownSerializer) as ReactNode,
    [field],
  );

  return (
    <Stack spacing={6} align="stretch" className={richText}>
      {rendered}
    </Stack>
  );
}
