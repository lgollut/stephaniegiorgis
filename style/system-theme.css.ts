import { sys } from '@kalink-ui/seedly/styles';
import { createGlobalTheme } from '@vanilla-extract/css';

import { refs } from './refs.css';

createGlobalTheme(':root', sys, {
  layout: {
    measure: '75ch',
    direction: '1',
  },

  color: {
    background: refs.colors.palette.neutral94,
    foreground: refs.colors.palette.neutral20,
  },

  state: {
    hovered: {
      opacity: '0.08',
    },
    focused: {
      opacity: '0.12',
    },
    pressed: {
      opacity: '0.12',
    },
    muted: {
      dark: '0.3',
      light: '0.9',
    },
  },

  shape: {
    corner: {
      none: refs.radius.none,
      sharp: refs.radius.xs,
      small: refs.radius.sm,
      medium: refs.radius.base,
      rounded: refs.radius.md,
      circle: refs.radius.full,
    },
  },

  elevation: {
    none: refs.elevation[0],
    minimal: refs.elevation[1],
    low: refs.elevation[3],
    moderate: refs.elevation[6],
    high: refs.elevation[8],
    peak: refs.elevation[12],
  },

  motion: {
    duration: {
      short: {
        1: refs.duration.shorter,
        2: refs.duration.short,
        3: refs.duration.base,
        4: refs.duration.long,
      },
      medium: {
        1: refs.duration.shorter,
        2: refs.duration.short,
        3: refs.duration.base,
        4: refs.duration.long,
      },
      long: {
        1: refs.duration.shorter,
        2: refs.duration.short,
        3: refs.duration.base,
        4: refs.duration.long,
      },
    },
    easing: {
      standard: refs.easing.inOut,
      decelerate: {
        standard: refs.easing.inOut,
        emphasized: refs.easing.inOut,
      },
      accelerate: {
        standard: refs.easing.inOut,
        emphasized: refs.easing.inOut,
      },
    },
  },

  typography: {
    display: {
      large: {
        font: refs.typeface.brand,
        weight: refs.fontWeight.bold,
        lineHeight: '1',
        tracking: '0',
        size: refs.fontSize['8xl'],
      },
      medium: {
        font: refs.typeface.brand,
        weight: refs.fontWeight.regular,
        lineHeight: '1',
        tracking: '0',
        size: refs.fontSize['7xl'],
      },
      small: {
        font: refs.typeface.brand,
        weight: refs.fontWeight.bold,
        lineHeight: '1',
        tracking: '0',
        size: refs.fontSize['6xl'],
      },
    },
    headline: {
      large: {
        font: refs.typeface.brand,
        weight: refs.fontWeight.regular,
        lineHeight: '1.3em',
        tracking: '0',
        size: refs.fontSize['5xl'],
      },
      medium: {
        font: refs.typeface.brand,
        weight: refs.fontWeight.regular,
        lineHeight: '1.3em',
        tracking: '0',
        size: refs.fontSize['3xl'],
      },
      small: {
        font: refs.typeface.brand,
        weight: refs.fontWeight.regular,
        lineHeight: '1.3em',
        tracking: '0',
        size: refs.fontSize['2xl'],
      },
    },
    title: {
      large: {
        font: refs.typeface.brand,
        weight: refs.fontWeight.regular,
        lineHeight: '1em',
        tracking: '0',
        size: refs.fontSize.xl,
      },
      medium: {
        font: refs.typeface.plain,
        weight: refs.fontWeight.medium,
        lineHeight: '24px',
        tracking: '0.15px',
        size: refs.fontSize.base,
      },
      small: {
        font: refs.typeface.plain,
        weight: refs.fontWeight.medium,
        lineHeight: '1em',
        tracking: '0',
        size: refs.fontSize.sm,
      },
    },
    label: {
      large: {
        font: refs.typeface.plain,
        weight: refs.fontWeight.medium,
        lineHeight: '20px',
        tracking: '0.1px',
        size: refs.fontSize.sm,
      },
      medium: {
        font: refs.typeface.plain,
        weight: refs.fontWeight.medium,
        lineHeight: '1em',
        tracking: '0',
        size: refs.fontSize.xs,
      },
      small: {
        font: refs.typeface.plain,
        weight: refs.fontWeight.medium,
        lineHeight: '1em',
        tracking: '0',
        size: refs.fontSize['2xs'],
      },
    },
    body: {
      large: {
        font: refs.typeface.plain,
        weight: refs.fontWeight.regular,
        lineHeight: '24px',
        tracking: '0.5px',
        size: refs.fontSize.base,
      },
      medium: {
        font: refs.typeface.plain,
        weight: refs.fontWeight.regular,
        lineHeight: '20px',
        tracking: '0.25px',
        size: refs.fontSize.sm,
      },
      small: {
        font: refs.typeface.plain,
        weight: refs.fontWeight.regular,
        lineHeight: '16px',
        tracking: '0.4px',
        size: refs.fontSize.xs,
      },
    },
  },

  spacing: {
    0: refs.spacing.none,
    1: refs.spacing['2xs'],
    2: refs.spacing.xs,
    3: refs.spacing.sm,
    4: refs.spacing.base,
    5: refs.spacing.md,
    6: refs.spacing.lg,
    7: refs.spacing.xl,
    8: refs.spacing['2xl'],
    9: refs.spacing['3xl'],
    10: refs.spacing['4xl'],
    11: refs.spacing['5xl'],
    12: refs.spacing['6xl'],
    13: refs.spacing['6xl'],
    14: refs.spacing['6xl'],
    15: refs.spacing['6xl'],
    16: refs.spacing['6xl'],
    17: refs.spacing['6xl'],
    18: refs.spacing['6xl'],
  },
});
