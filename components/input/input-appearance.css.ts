import { sys } from '@kalink-ui/seedly/styles';
import { style, createVar, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { transition } from '@/styles/transition';
import { typography } from '@/styles/typography.css';

const inputTextColor = createVar();
const outlineColor = createVar();

const inputAppearanceBase = style([
  typography.bodyLarge,
  {
    boxSizing: 'border-box',
    minHeight: 50,

    color: inputTextColor,

    backgroundColor: sys.color.background,

    transition: transition(['border-color', 'box-shadow'], {
      duration: 'shorter',
    }),

    selectors: {
      '&:disabled, &:has(:disabled)': {
        cursor: 'unset',

        backgroundColor: `color-mix(in srgb, ${sys.color.foreground} 3%, transparent)`,

        vars: {
          [inputTextColor]: `color-mix(in srgb, ${sys.color.foreground} 38%, transparent)`,
        },
      },
    },

    vars: {
      [inputTextColor]: sys.color.foreground,
    },
  },
]);

export const inputAppearance = recipe({
  base: inputAppearanceBase,

  variants: {
    outlined: {
      true: {
        paddingInline: sys.spacing[4],
        paddingBlock: sys.spacing[3],

        borderRadius: sys.shape.corner.small,
        borderColor: outlineColor,
        borderStyle: 'solid',
        borderWidth: 1,

        selectors: {
          '&:focus, &:focus-within, &:focus-visible': {
            boxShadow: `0 0 0 1px ${outlineColor} inset`,
            outline: 'none',

            vars: {
              [outlineColor]: sys.color.foreground,
            },
          },

          '&:disabled, &:has(:disabled)': {
            vars: {
              [outlineColor]: `color-mix(in srgb, ${sys.color.foreground} 38%, transparent)`,
            },
          },

          '&[aria-invalid], &:has([aria-invalid])': {
            vars: {
              [outlineColor]: sys.color.foreground,
            },
          },
        },

        vars: {
          [outlineColor]: `color-mix(in srgb, ${sys.color.foreground} 20%, transparent)`,
        },
      },

      false: {},
    },
  },

  defaultVariants: {
    outlined: true,
  },
});

globalStyle(`${inputAppearanceBase} input:is(:focus, :focus-visible)`, {
  outline: 'none',
});
