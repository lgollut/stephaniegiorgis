import { sys } from '@kalink-ui/seedly/styles';
import { style, createVar } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

const spaceVar = createVar();

const baseCluster = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: spaceVar,
});

export const cluster = recipe({
  base: baseCluster,

  variants: {
    /**
     * Distribution of elements on the main axis
     */
    justify: {
      spaceBetween: {
        justifyContent: 'space-between',
      },
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
      center: {
        justifyContent: 'center',
      },
    },

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
     * The space (margin) between each of the clustered elements
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

    grow: {
      true: {
        flexGrow: 1,
      },
    },
  },
});

export type ClusterVariants = NonNullable<RecipeVariants<typeof cluster>>;
