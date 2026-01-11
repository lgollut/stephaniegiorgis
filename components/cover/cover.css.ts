import { sys } from '@kalink-ui/seedly/styles';
import { style, createVar, globalStyle } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

const spaceVar = createVar();
export const minHeightVar = createVar();

const baseCover = style({
  display: 'flex',
  flexDirection: 'column',

  minBlockSize: minHeightVar,

  vars: {
    [minHeightVar]: 'initial',
  },
});

globalStyle(`${baseCover} > *`, {
  marginBlock: spaceVar,
});

globalStyle(`${baseCover} > :first-child:not([data-cover-center])`, {
  marginBlockStart: 0,
});

globalStyle(`${baseCover} > :last-child:not([data-cover-center])`, {
  marginBlockEnd: 0,
});

globalStyle(`${baseCover} > [data-cover-center]`, {
  marginBlock: 'auto',
});

export const cover = recipe({
  base: baseCover,

  variants: {
    /**
     * Distribution of elements on the cross axis
     */
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },

    /**
     * The minimum space between and around the child elements
     */
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
  },
});

export type CoverVariants = RecipeVariants<typeof cover>;
