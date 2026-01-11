import { sys } from '@kalink-ui/seedly/styles';
import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';

const spaceVar = createVar();
const minWidth = createVar();

const gridBase = style({
  display: 'grid',
  gridGap: spaceVar,
  alignContent: 'start',
  gridTemplateColumns: `repeat(auto-fill, minmax(min(${minWidth}, 100%), 1fr))`,

  vars: {
    [spaceVar]: sys.spacing[4],
    [minWidth]: '100%',
  },
});

export const grid = recipe({
  base: gridBase,

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

    minWidth: {
      xl: {
        vars: {
          [minWidth]: calc.multiply(sys.spacing[4], 48),
        },
      },
      lg: {
        vars: {
          [minWidth]: calc.multiply(sys.spacing[4], 32),
        },
      },
      md: {
        vars: {
          [minWidth]: calc.multiply(sys.spacing[4], 20),
        },
      },
      base: {
        vars: {
          [minWidth]: calc.multiply(sys.spacing[4], 16),
        },
      },
      sm: {
        vars: {
          [minWidth]: calc.multiply(sys.spacing[4], 12),
        },
      },
      xs: {
        vars: {
          [minWidth]: calc.multiply(sys.spacing[4], 8),
        },
      },
    },

    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
});
