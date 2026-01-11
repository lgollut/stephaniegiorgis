import { sys } from '@kalink-ui/seedly/styles';
import { style, createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { typography } from '@/styles/typography.css';

const colorVar = createVar();

const baseText = style({
  color: colorVar,

  vars: {
    [colorVar]: sys.color.foreground,
  },
});

export const text = recipe({
  base: baseText,

  variants: {
    variant: {
      labelLarge: typography.labelLarge,
      labelMedium: typography.labelMedium,
      labelSmall: typography.labelSmall,
      bodyLarge: typography.bodyLarge,
      bodyMedium: typography.bodyMedium,
      bodySmall: typography.bodySmall,
    },

    color: {
      primary: {
        vars: {
          [colorVar]: sys.color.foreground,
        },
      },

      muted: {
        vars: {
          [colorVar]: `color-mix(in srgb, ${sys.color.foreground} 60%, transparent)`,
        },
      },

      current: {
        vars: {
          [colorVar]: 'currentColor',
        },
      },
    },

    align: {
      end: {
        textAlign: 'end',
      },
    },
  },
});
