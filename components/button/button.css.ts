import { sys } from '@kalink-ui/seedly/styles';
import { style, createVar } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

const containerColor = createVar();
const stateLayerColor = createVar();
const labelColor = createVar();

const size = createVar();
const inlineSpace = createVar();
const spacing = createVar();

export const baseButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing,

  height: size,
  paddingInline: inlineSpace,

  position: 'relative',

  color: labelColor,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',

  backgroundColor: containerColor,
  borderRadius: sys.shape.corner.small,

  cursor: 'pointer',

  ':disabled': {
    cursor: 'unset',
    pointerEvents: 'none',
  },

  '::before': {
    content: '""',

    width: '100%',
    height: '100%',

    position: 'absolute',
    top: 0,
    left: 0,

    backgroundColor: stateLayerColor,
    opacity: 0,
    borderRadius: 'inherit',

    transition: `opacity ${sys.motion.duration.short[1]} ${sys.motion.easing.standard}`,
    pointerEvents: 'none',
  },

  selectors: {
    '&:focus, &:focus-visible': {
      outline: 'none',
    },

    '&:hover::before': {
      opacity: sys.state.hovered.opacity,
    },

    '&:focus::before, &:focus-visible::before': {
      opacity: sys.state.focused.opacity,
    },

    '&:active::before': {
      opacity: sys.state.pressed.opacity,
    },
  },
});

export const button = recipe({
  base: baseButton,

  variants: {
    /**
     * The visual variants of the Button
     */
    variant: {
      bare: {},

      filled: {
        borderStyle: 'none',

        ':hover': {
          boxShadow: sys.elevation.minimal,
        },

        ':disabled': {
          vars: {
            [labelColor]: `color-mix(in srgb, ${sys.color.foreground} 38%, transparent)`,
            [containerColor]: `color-mix(in srgb, ${sys.color.foreground} 12%, transparent)`,
          },
        },

        vars: {
          [labelColor]: sys.color.background,
          [containerColor]: sys.color.foreground,
          [stateLayerColor]: sys.color.background,
        },
      },

      outlined: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: `color-mix(in srgb, ${sys.color.foreground} 20%, transparent)`,

        ':focus, :focus-visible': {
          borderColor: sys.color.foreground,
        },

        ':disabled': {
          borderColor: `color-mix(in srgb, ${sys.color.foreground} 12%, transparent)`,

          vars: {
            [labelColor]: `color-mix(in srgb, ${sys.color.foreground} 38%, transparent)`,
          },
        },

        vars: {
          [labelColor]: sys.color.foreground,
          [containerColor]: 'transparent',
          [stateLayerColor]: sys.color.foreground,
        },
      },

      ghost: {
        ':focus, :focus-visible': {
          borderColor: sys.color.foreground,
        },

        ':disabled': {
          borderColor: `color-mix(in srgb, ${sys.color.foreground} 12%, transparent)`,

          vars: {
            [labelColor]: `color-mix(in srgb, ${sys.color.foreground} 38%, transparent)`,
          },
        },

        selectors: {
          '&[aria-current="page"]::before': {
            opacity: sys.state.hovered.opacity,

            vars: {
              [stateLayerColor]: sys.color.foreground,
            },
          },
        },

        vars: {
          [labelColor]: sys.color.foreground,
          [containerColor]: 'transparent',
          [stateLayerColor]: sys.color.foreground,
        },
      },
    },

    size: {
      sm: {
        vars: {
          [size]: sys.spacing[6],
          [inlineSpace]: sys.spacing[4],
          [spacing]: sys.spacing[3],
        },
      },
      base: {
        vars: {
          [size]: sys.spacing[7],
          [inlineSpace]: sys.spacing[5],
          [spacing]: sys.spacing[4],
        },
      },
      lg: {
        vars: {
          [size]: sys.spacing[8],
          [inlineSpace]: sys.spacing[7],
          [spacing]: sys.spacing[6],
        },
      },
      xl: {
        vars: {
          [size]: sys.spacing[10],
          [inlineSpace]: sys.spacing[8],
          [spacing]: sys.spacing[7],
        },
      },
    },

    flow: {
      reverse: {
        flexDirection: 'row-reverse',
      },
    },

    iconOnly: {
      true: {
        paddingInline: 'unset',
        width: size,
      },
    },
  },
});

export type ButtonVariants = NonNullable<RecipeVariants<typeof button>>;
