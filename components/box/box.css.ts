import { style, createVar } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';

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
      [cssVar]: vars.spacing.xl,
    },
  },
  lg: {
    vars: {
      [cssVar]: vars.spacing.lg,
    },
  },
  md: {
    vars: {
      [cssVar]: vars.spacing.md,
    },
  },
  base: {
    vars: {
      [cssVar]: vars.spacing.base,
    },
  },
  sm: {
    vars: {
      [cssVar]: vars.spacing.sm,
    },
  },
  xs: {
    vars: {
      [cssVar]: vars.spacing.xs,
    },
  },
  none: {
    vars: {
      [cssVar]: vars.spacing.none,
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
    [colorVar]: vars.color.onSurface,
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
          [bgVar]: vars.color.surfaceBright,
        },
      },
      surface: {
        vars: {
          [bgVar]: vars.color.surface,
        },
      },
      surfaceDim: {
        vars: {
          [bgVar]: vars.color.surfaceDim,
        },
      },
      surfaceContainerHighest: {
        vars: {
          [bgVar]: vars.color.surfaceContainerHighest,
        },
      },
      surfaceContainerHigh: {
        vars: {
          [bgVar]: vars.color.surfaceContainerHigh,
        },
      },
      surfaceContainer: {
        vars: {
          [bgVar]: vars.color.surfaceContainer,
        },
      },
      surfaceContainerLow: {
        vars: {
          [bgVar]: vars.color.surfaceContainerLow,
        },
      },
      surfaceContainerLowest: {
        vars: {
          [bgVar]: vars.color.surfaceContainerLowest,
        },
      },
      primary: {
        vars: {
          [colorVar]: vars.color.onPrimary,
          [bgVar]: vars.color.primary,
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
          [radiusVar]: vars.radius.none,
        },
      },
      xs: {
        vars: {
          [radiusVar]: vars.radius.xs,
        },
      },
      sm: {
        vars: {
          [radiusVar]: vars.radius.sm,
        },
      },
      base: {
        vars: {
          [radiusVar]: vars.radius.base,
        },
      },
      md: {
        vars: {
          [radiusVar]: vars.radius.md,
        },
      },
      lg: {
        vars: {
          [radiusVar]: vars.radius.lg,
        },
      },
      xl: {
        vars: {
          [radiusVar]: vars.radius.xl,
        },
      },
      full: {
        vars: {
          [radiusVar]: vars.radius.full,
        },
      },
    },

    outlined: {
      true: {
        vars: {
          [borderColorVar]: vars.color.outlineVariant,
        },
      },
    },
  },
});

export type BoxVariants = NonNullable<RecipeVariants<typeof box>>;
