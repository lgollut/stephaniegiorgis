import { sys } from '@kalink-ui/seedly/styles';
import { style, createVar } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

const spaceBlockStartVar = createVar();
const spaceInlineEndVar = createVar();
const spaceBlockEndVar = createVar();
const spaceInlineStartVar = createVar();
const bgVar = createVar();
const colorVar = createVar();
const borderColorVar = createVar();
const radiusVar = createVar();

const spaceScale = (cssVar: ReturnType<typeof createVar>) => ({
  xl: {
    vars: {
      [cssVar]: sys.spacing[7],
    },
  },
  lg: {
    vars: {
      [cssVar]: sys.spacing[6],
    },
  },
  md: {
    vars: {
      [cssVar]: sys.spacing[5],
    },
  },
  base: {
    vars: {
      [cssVar]: sys.spacing[4],
    },
  },
  sm: {
    vars: {
      [cssVar]: sys.spacing[3],
    },
  },
  xs: {
    vars: {
      [cssVar]: sys.spacing[2],
    },
  },
  none: {
    vars: {
      [cssVar]: sys.spacing[0],
    },
  },
});

const baseBox = style({
  display: 'block',
  paddingBlockStart: spaceBlockStartVar,
  paddingInlineEnd: spaceInlineEndVar,
  paddingBlockEnd: spaceBlockEndVar,
  paddingInlineStart: spaceInlineStartVar,

  position: 'relative',

  color: colorVar,
  backgroundColor: bgVar,
  borderRadius: radiusVar,
  borderColor: borderColorVar,
  borderStyle: 'solid',
  borderWidth: 1,

  vars: {
    [colorVar]: sys.color.foreground,
    [borderColorVar]: bgVar,
  },
});

export const box = recipe({
  base: baseBox,

  variants: {
    /**
     * Define the `background-color` as well as the appropriate
     * `color` to the Box
     */
    color: {
      transparent: {
        vars: {
          [bgVar]: 'transparent',
        },
      },
      surfaceBright: {
        vars: {
          [bgVar]: sys.color.background,
        },
      },
      surface: {
        vars: {
          [bgVar]: sys.color.background,
        },
      },
      surfaceDim: {
        vars: {
          [bgVar]: sys.color.background,
        },
      },
      surfaceContainerHighest: {
        vars: {
          [bgVar]: sys.color.background,
        },
      },
      surfaceContainerHigh: {
        vars: {
          [bgVar]: sys.color.background,
        },
      },
      surfaceContainer: {
        vars: {
          [bgVar]: sys.color.background,
        },
      },
      surfaceContainerLow: {
        vars: {
          [bgVar]: sys.color.background,
        },
      },
      surfaceContainerLowest: {
        vars: {
          [bgVar]: sys.color.background,
        },
      },
      primary: {
        vars: {
          [colorVar]: sys.color.background,
          [bgVar]: sys.color.foreground,
        },
      },
    },

    /**
     * The amount by with the Box is padded on all sides
     */
    spaceBlockStart: spaceScale(spaceBlockStartVar),
    spaceInlineEnd: spaceScale(spaceInlineEndVar),
    spaceBlockEnd: spaceScale(spaceBlockEndVar),
    spaceInlineStart: spaceScale(spaceInlineStartVar),

    /**
     * The amount by with the Box is rounded
     */
    rounded: {
      none: {
        vars: {
          [radiusVar]: sys.shape.corner.none,
        },
      },
      xs: {
        vars: {
          [radiusVar]: sys.shape.corner.sharp,
        },
      },
      sm: {
        vars: {
          [radiusVar]: sys.shape.corner.small,
        },
      },
      base: {
        vars: {
          [radiusVar]: sys.shape.corner.medium,
        },
      },
      md: {
        vars: {
          [radiusVar]: sys.shape.corner.rounded,
        },
      },
      lg: {
        vars: {
          [radiusVar]: sys.shape.corner.rounded,
        },
      },
      xl: {
        vars: {
          [radiusVar]: sys.shape.corner.rounded,
        },
      },
      full: {
        vars: {
          [radiusVar]: sys.shape.corner.circle,
        },
      },
    },

    outlined: {
      true: {
        vars: {
          [borderColorVar]: `color-mix(in srgb, ${sys.color.foreground} 20%, transparent)`,
        },
      },
    },
  },
});

export type BoxVariants = NonNullable<RecipeVariants<typeof box>>;
