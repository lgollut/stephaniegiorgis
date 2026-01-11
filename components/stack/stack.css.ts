import { sys } from '@kalink-ui/seedly/styles';
import { style, globalStyle, createVar } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

const marginBlockStart = createVar();

const baseStack = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',

  vars: {
    [marginBlockStart]: sys.spacing[0],
  },
});

export const stack = recipe({
  base: baseStack,

  variants: {
    /**
     * The space (margin) between successive sibling elements
     */
    space: {
      '6xl': {},
      '5xl': {},
      '4xl': {},
      '3xl': {},
      '2xl': {},
      xl: {},
      lg: {},
      base: {},
      md: {},
      sm: {},
      xs: {},
      none: {},
    },

    divided: {
      none: {},
      solid: {},
      dashed: {},
    },
  },
});

globalStyle(`${stack.classNames.base} > * + *`, {
  marginBlockStart,
});

globalStyle(`${stack.classNames.variants.space['6xl']} > * + *`, {
  vars: {
    [marginBlockStart]: sys.spacing[12],
  },
});

globalStyle(`${stack.classNames.variants.space['5xl']} > * + *`, {
  vars: {
    [marginBlockStart]: sys.spacing[11],
  },
});

globalStyle(`${stack.classNames.variants.space['4xl']} > * + *`, {
  vars: {
    [marginBlockStart]: sys.spacing[10],
  },
});

globalStyle(`${stack.classNames.variants.space['3xl']} > * + *`, {
  vars: {
    [marginBlockStart]: sys.spacing[9],
  },
});

globalStyle(`${stack.classNames.variants.space['2xl']} > * + *`, {
  vars: {
    [marginBlockStart]: sys.spacing[8],
  },
});

globalStyle(`${stack.classNames.variants.space.xl} > * + *`, {
  vars: {
    [marginBlockStart]: sys.spacing[7],
  },
});

globalStyle(`${stack.classNames.variants.space.lg} > * + *`, {
  vars: {
    [marginBlockStart]: sys.spacing[6],
  },
});

globalStyle(`${stack.classNames.variants.space.md} > * + *`, {
  vars: {
    [marginBlockStart]: sys.spacing[5],
  },
});

globalStyle(`${stack.classNames.variants.space.base} > * + *`, {
  vars: {
    [marginBlockStart]: sys.spacing[4],
  },
});

globalStyle(`${stack.classNames.variants.space.sm} > * + *`, {
  vars: {
    [marginBlockStart]: sys.spacing[3],
  },
});

globalStyle(`${stack.classNames.variants.space.xs} > * + *`, {
  vars: {
    [marginBlockStart]: sys.spacing[2],
  },
});

globalStyle(`${stack.classNames.variants.space.none} > * + *`, {
  vars: {
    [marginBlockStart]: sys.spacing[0],
  },
});

globalStyle(
  `:is(${stack.classNames.variants.divided.solid}, ${stack.classNames.variants.divided.dashed}) > * + *`,
  {
    position: 'relative',
  },
);

globalStyle(
  `:is(${stack.classNames.variants.divided.solid}, ${stack.classNames.variants.divided.dashed}) > * + *::before`,
  {
    content: '""',

    width: '100%',
    height: 1,

    position: 'absolute',
    top: calc(marginBlockStart).divide(-2).toString(),

    borderBlockStartWidth: 1,
    borderBlockStartColor: `color-mix(in srgb, ${sys.color.foreground} 20%, transparent)`,
  },
);

globalStyle(`${stack.classNames.variants.divided.solid} > * + *::before`, {
  borderBlockStartStyle: 'solid',
});

globalStyle(`${stack.classNames.variants.divided.dashed} > * + *::before`, {
  borderBlockStartStyle: 'dashed',
});

export type StackVariants = RecipeVariants<typeof stack>;
