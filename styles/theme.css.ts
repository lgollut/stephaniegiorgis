import { createTheme } from '@vanilla-extract/css';

import { vars } from './contract.css';
import { ref } from './ref.css';

const typeface = {
  brand: 'var(--font-brand)',
  plain: 'var(--font-plain)',
};

export const themeClass = createTheme(vars, {
  color: {
    primary: ref.palette.primary30,
    onPrimary: ref.palette.primary100,

    surfaceDim: ref.palette.neutral87,
    surface: ref.palette.neutral98,
    surfaceBright: ref.palette.neutral98,
    onSurface: ref.palette.neutral20,
    onSurfaceMuted: ref.palette.neutral40,

    surfaceContainerLowest: ref.palette.neutral100,
    surfaceContainerLow: ref.palette.neutral96,
    surfaceContainer: ref.palette.neutral94,
    surfaceContainerHigh: ref.palette.neutral92,
    surfaceContainerHighest: ref.palette.neutral90,

    outline: ref.palette.neutral50,
    outlineVariant: ref.palette.neutral80,
  },

  hsl: {
    surfaceDim: ref.hsl.neutral87,
    surface: ref.hsl.neutral98,
    surfaceBright: ref.hsl.neutral98,
    onSurface: ref.hsl.neutral20,
    onSurfaceMuted: ref.hsl.neutral60,

    surfaceContainerLowest: ref.hsl.neutral100,
    surfaceContainerLow: ref.hsl.neutral96,
    surfaceContainer: ref.hsl.neutral94,
    surfaceContainerHigh: ref.hsl.neutral92,
    surfaceContainerHighest: ref.hsl.neutral90,

    outline: ref.hsl.neutral50,
    outlineVariant: ref.hsl.neutral80,
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
  },

  typeface,

  type: {
    display: {
      large: {
        font: typeface.brand,
        size: ref.fontSize['8xl'],
        weight: ref.fontWeight.regular,
        tracking: '0',
        lineHeight: '1em',
      },
      medium: {
        font: typeface.brand,
        size: ref.fontSize['7xl'],
        weight: ref.fontWeight.regular,
        tracking: '0',
        lineHeight: '1em',
      },
      small: {
        font: typeface.brand,
        size: ref.fontSize['6xl'],
        weight: ref.fontWeight.bold,
        tracking: '0',
        lineHeight: '1em',
      },
    },

    headline: {
      large: {
        font: typeface.brand,
        size: ref.fontSize['5xl'],
        weight: ref.fontWeight.regular,
        tracking: '0',
        lineHeight: '1.3em',
      },
      medium: {
        font: typeface.brand,
        size: ref.fontSize['3xl'],
        weight: ref.fontWeight.regular,
        tracking: '0',
        lineHeight: '1.3em',
      },
      small: {
        font: typeface.brand,
        size: ref.fontSize['2xl'],
        weight: ref.fontWeight.regular,
        tracking: '0',
        lineHeight: '1.3em',
      },
    },

    title: {
      large: {
        font: typeface.brand,
        size: ref.fontSize.xl,
        weight: ref.fontWeight.regular,
        tracking: '0',
        lineHeight: '1em',
      },
      medium: {
        font: typeface.plain,
        size: ref.fontSize.base,
        weight: ref.fontWeight.medium,
        tracking: '0.15px',
        lineHeight: '24px',
      },
      small: {
        font: typeface.plain,
        size: ref.fontSize.sm,
        weight: ref.fontWeight.medium,
        tracking: '0',
        lineHeight: '1em',
      },
    },

    label: {
      large: {
        font: typeface.plain,
        size: ref.fontSize.sm,
        weight: ref.fontWeight.medium,
        tracking: '0.1px',
        lineHeight: '20px',
      },
      medium: {
        font: typeface.plain,
        size: ref.fontSize.xs,
        weight: ref.fontWeight.medium,
        tracking: '0',
        lineHeight: '1em',
      },
      small: {
        font: typeface.plain,
        size: ref.fontSize['2xs'],
        weight: ref.fontWeight.medium,
        tracking: '0',
        lineHeight: '1em',
      },
    },

    body: {
      large: {
        font: typeface.plain,
        size: ref.fontSize.base,
        weight: ref.fontWeight.regular,
        tracking: '0.5px',
        lineHeight: '24px',
      },
      medium: {
        font: typeface.plain,
        size: ref.fontSize.sm,
        weight: ref.fontWeight.regular,
        tracking: '0.25px',
        lineHeight: '20px',
      },
      small: {
        font: typeface.plain,
        size: ref.fontSize.xs,
        weight: ref.fontWeight.regular,
        tracking: '0.4px',
        lineHeight: '16px',
      },
      smaller: {
        font: typeface.plain,
        size: ref.fontSize['2xs'],
        weight: ref.fontWeight.regular,
        tracking: '0.2px',
        lineHeight: '14px',
      },
    },
  },

  spacing: ref.spacing,

  radius: ref.radius,

  elevation: ref.elevation,

  duration: ref.duration,

  easing: ref.easing,
});
