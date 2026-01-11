import { sys } from '@kalink-ui/seedly/styles';
import { style, createVar } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

const size = createVar();

const baseCenter = style({
  display: 'block',
  boxSizing: 'content-box',
  marginInline: 'auto',
  maxInlineSize: size,
});

export const center = recipe({
  base: baseCenter,

  variants: {
    /**
     * The maximum width of the centered element
     */
    maxSize: {
      xl: {
        vars: {
          [size]: calc.multiply(sys.spacing[4], 48),
        },
      },
      lg: {
        vars: {
          [size]: calc.multiply(sys.spacing[4], 32),
        },
      },
      md: {
        vars: {
          [size]: calc.multiply(sys.spacing[4], 20),
        },
      },
      base: {
        vars: {
          [size]: calc.multiply(sys.spacing[4], 16),
        },
      },
      sm: {
        vars: {
          [size]: calc.multiply(sys.spacing[4], 12),
        },
      },
      xs: {
        vars: {
          [size]: calc.multiply(sys.spacing[4], 8),
        },
      },
    },

    centerText: {
      true: {
        textAlign: 'center',
      },
    },
  },
});

export type CenterVariants = RecipeVariants<typeof center>;
