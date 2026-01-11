import { sys } from '@kalink-ui/seedly/styles';
import { style, createVar, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const spaceVar = createVar();
export const sideWidthVar = createVar();
export const contentMinWidthVar = createVar();

const baseAside = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: spaceVar,

  vars: {
    [spaceVar]: sys.spacing[4],
    [contentMinWidthVar]: '50%',
  },
});

export const aside = recipe({
  base: baseAside,

  variants: {
    /**
     * The width of the sidebar (empty means not set; defaults to the content width)
     */
    sideWidth: {
      true: {},
    },

    /**
     * Whether the sided element is the :last-child
     */
    side: {
      right: {},
      left: {},
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
     * The space (margin) between the sidebar and non-sidebar
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

globalStyle(`${aside.classNames.variants.sideWidth.true} > *`, {
  flexBasis: sideWidthVar,
});

globalStyle(`${aside.classNames.variants.side.left} > :first-child`, {
  flexGrow: 1,
});

globalStyle(`${aside.classNames.variants.side.left} > :last-child`, {
  flexBasis: 0,
  flexGrow: 999,
  minInlineSize: contentMinWidthVar,
});

globalStyle(`${aside.classNames.variants.side.right} > :first-child`, {
  flexBasis: 0,
  flexGrow: 999,
  minInlineSize: contentMinWidthVar,
});

globalStyle(`${aside.classNames.variants.side.right} > :last-child`, {
  flexGrow: 1,
});
