import { sys } from '@kalink-ui/seedly/styles';
import { createGlobalTheme } from '@vanilla-extract/css';

import { refs } from './refs.css';

createGlobalTheme(':root', sys, {
  layout: {
    measure: '75ch',
    direction: '1',
  },

  color: {
    surface: {
      dim: refs.colors.light.neutral5,
      base: refs.colors.light.neutral4,
      bright: refs.colors.light.neutral4,
    },
    container: {
      low: refs.colors.light.neutral5,
      base: refs.colors.light.neutral4,
      high: refs.colors.light.neutral3,
      top: refs.colors.light.neutral2,
    },
    content: {
      base: refs.colors.light.neutral15,
    },
    border: {
      low: `color-mix(in srgb, ${sys.color.content.base} 18%, transparent)`,
      base: `color-mix(in srgb, ${sys.color.content.base} 26%, transparent)`,
      high: `color-mix(in srgb, ${sys.color.content.base} 32%, transparent)`,
    },
    tone: {
      neutral: refs.colors.light.neutral15,
      onNeutral: refs.colors.light.neutral2,
      neutralContainer: refs.colors.light.neutral4,
      onNeutralContainer: refs.colors.light.neutral12,
      primary: refs.colors.light.primary10,
      onPrimary: refs.colors.light.primary15,
      primaryContainer: refs.colors.light.primary3,
      onPrimaryContainer: refs.colors.light.primary12,
      secondary: refs.colors.light.neutral5,
      onSecondary: refs.colors.light.neutral12,
      secondaryContainer: refs.colors.light.neutral4,
      onSecondaryContainer: refs.colors.light.neutral12,
      tertiary: refs.colors.light.primary7,
      onTertiary: refs.colors.light.primary1,
      tertiaryContainer: refs.colors.light.primary4,
      onTertiaryContainer: refs.colors.light.primary12,
      error: refs.colors.light.primary13,
      onError: refs.colors.light.neutral1,
      errorContainer: '#fce4ec',
      onErrorContainer: '#b71c1c',
    },
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
      text: '0.9',
      surface: '0.3',
    },
    disabled: {
      text: '0.5',
      border: '0.12',
      background: '0.08',
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
        weight: '700',
        lineHeight: refs.lineHeight.md,
        tracking: '0.1',
        size: refs.typeScale.displayLarge,
      },

      medium: {
        font: refs.typeface.brand,
        weight: '700',
        lineHeight: refs.lineHeight.md,
        tracking: '0.1',
        size: refs.typeScale.displayMedium,
      },

      small: {
        font: refs.typeface.brand,
        weight: '700',
        lineHeight: refs.lineHeight.md,
        tracking: '0.1',
        size: refs.typeScale.displaySmall,
      },
    },

    headline: {
      large: {
        font: refs.typeface.brand,
        weight: '400',
        lineHeight: refs.lineHeight.md,
        tracking: '0.1',
        size: refs.typeScale.headlineLarge,
      },

      medium: {
        font: refs.typeface.brand,
        weight: '400',
        lineHeight: refs.lineHeight.md,
        tracking: '0.1',
        size: refs.typeScale.headlineMedium,
      },

      small: {
        font: refs.typeface.brand,
        weight: '400',
        lineHeight: refs.lineHeight.md,
        tracking: '0.1',
        size: refs.typeScale.headlineSmall,
      },
    },

    title: {
      large: {
        font: refs.typeface.brand,
        weight: '400',
        lineHeight: refs.lineHeight.md,
        tracking: '0.1',
        size: refs.typeScale.titleLarge,
      },

      medium: {
        font: refs.typeface.brand,
        weight: '400',
        lineHeight: refs.lineHeight.md,
        tracking: '0.1',
        size: refs.typeScale.titleMedium,
      },

      small: {
        font: refs.typeface.brand,
        weight: '400',
        lineHeight: refs.lineHeight.md,
        tracking: '0.1',
        size: refs.typeScale.titleSmall,
      },
    },

    body: {
      large: {
        font: refs.typeface.plain,
        weight: '400',
        lineHeight: refs.lineHeight.lg,
        tracking: 'normal',
        size: refs.typeScale.bodyLarge,
      },

      medium: {
        font: refs.typeface.plain,
        weight: '400',
        lineHeight: refs.lineHeight.xl,
        tracking: 'normal',
        size: refs.typeScale.bodyMedium,
      },

      small: {
        font: refs.typeface.plain,
        weight: '400',
        lineHeight: refs.lineHeight.lg,
        tracking: 'normal',
        size: refs.typeScale.bodySmall,
      },
    },

    label: {
      large: {
        font: refs.typeface.plain,
        weight: '700',
        lineHeight: refs.lineHeight.xl,
        tracking: '0.1',
        size: refs.typeScale.labelLarge,
      },

      medium: {
        font: refs.typeface.plain,
        weight: '700',
        lineHeight: refs.lineHeight.lg,
        tracking: '0.1',
        size: refs.typeScale.labelMedium,
      },

      small: {
        font: refs.typeface.plain,
        weight: '700',
        lineHeight: refs.lineHeight.md,
        tracking: '0.1',
        size: refs.typeScale.labelSmall,
      },
    },
  },

  spacing: {
    0: refs.spacing[0],
    1: refs.spacing[1],
    2: refs.spacing[2],
    3: refs.spacing[3],
    4: refs.spacing[4],
    5: refs.spacing[5],
    6: refs.spacing[6],
    7: refs.spacing[7],
    8: refs.spacing[8],
    9: refs.spacing[9],
    10: refs.spacing[10],
    11: refs.spacing[11],
    12: refs.spacing[12],
    13: refs.spacing[13],
    14: refs.spacing[14],
    15: refs.spacing[15],
    16: refs.spacing[16],
    17: refs.spacing[17],
    18: refs.spacing[18],
  },
});
