import { style, globalStyle, createVar } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';

const marginBlockStart = createVar();

const baseStack = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',

  vars: {
    [marginBlockStart]: vars.spacing.none,
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
    [marginBlockStart]: vars.spacing['6xl'],
  },
});

globalStyle(`${stack.classNames.variants.space['5xl']} > * + *`, {
  vars: {
    [marginBlockStart]: vars.spacing['5xl'],
  },
});

globalStyle(`${stack.classNames.variants.space['4xl']} > * + *`, {
  vars: {
    [marginBlockStart]: vars.spacing['4xl'],
  },
});

globalStyle(`${stack.classNames.variants.space['3xl']} > * + *`, {
  vars: {
    [marginBlockStart]: vars.spacing['3xl'],
  },
});

globalStyle(`${stack.classNames.variants.space['2xl']} > * + *`, {
  vars: {
    [marginBlockStart]: vars.spacing['2xl'],
  },
});

globalStyle(`${stack.classNames.variants.space.xl} > * + *`, {
  vars: {
    [marginBlockStart]: vars.spacing.xl,
  },
});

globalStyle(`${stack.classNames.variants.space.lg} > * + *`, {
  vars: {
    [marginBlockStart]: vars.spacing.lg,
  },
});

globalStyle(`${stack.classNames.variants.space.md} > * + *`, {
  vars: {
    [marginBlockStart]: vars.spacing.md,
  },
});

globalStyle(`${stack.classNames.variants.space.base} > * + *`, {
  vars: {
    [marginBlockStart]: vars.spacing.base,
  },
});

globalStyle(`${stack.classNames.variants.space.sm} > * + *`, {
  vars: {
    [marginBlockStart]: vars.spacing.sm,
  },
});

globalStyle(`${stack.classNames.variants.space.xs} > * + *`, {
  vars: {
    [marginBlockStart]: vars.spacing.xs,
  },
});

globalStyle(`${stack.classNames.variants.space.none} > * + *`, {
  vars: {
    [marginBlockStart]: vars.spacing.none,
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
    borderBlockStartColor: vars.color.outlineVariant,
  },
);

globalStyle(`${stack.classNames.variants.divided.solid} > * + *::before`, {
  borderBlockStartStyle: 'solid',
});

globalStyle(`${stack.classNames.variants.divided.dashed} > * + *::before`, {
  borderBlockStartStyle: 'dashed',
});

export type StackVariants = RecipeVariants<typeof stack>;
