import { sys } from '@kalink-ui/seedly/styles';
import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const spaceVar = createVar();
const maxWidthVar = createVar();

const containerBase = style({
  width: '100%',
  maxWidth: maxWidthVar,
  marginInline: 'auto',

  paddingInline: spaceVar,
});

export const container = recipe({
  base: containerBase,

  variants: {
    space: {
      xl: {
        vars: {
          [spaceVar]: sys.spacing[7],
        },
      },
      lg: {
        vars: {
          [spaceVar]: sys.spacing[6],
        },
      },
      md: {
        vars: {
          [spaceVar]: sys.spacing[5],
        },
      },
      base: {
        vars: {
          [spaceVar]: sys.spacing[4],
        },
      },
      sm: {
        vars: {
          [spaceVar]: sys.spacing[3],
        },
      },
      xs: {
        vars: {
          [spaceVar]: sys.spacing[2],
        },
      },
      none: {
        vars: {
          [spaceVar]: sys.spacing[0],
        },
      },
    },

    maxWidth: {
      base: {
        vars: {
          [maxWidthVar]: '1280px',
        },
      },
      small: {
        vars: {
          [maxWidthVar]: '960px',
        },
      },
      extraSmall: {
        vars: {
          [maxWidthVar]: '768px',
        },
      },
    },
  },
});
