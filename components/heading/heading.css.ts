import { sys } from '@kalink-ui/seedly/styles';
import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { typography } from '@/styles/typography.css';

const colorVar = createVar();

const baseHeading = style({
  color: colorVar,

  vars: {
    [colorVar]: sys.color.foreground,
  },
});

export const heading = recipe({
  base: baseHeading,

  variants: {
    variant: {
      displayLarge: typography.displayLarge,
      displayMedium: typography.displayMedium,
      displaySmall: typography.displaySmall,
      headlineLarge: typography.headlineLarge,
      headlineMedium: typography.headlineMedium,
      headlineSmall: typography.headlineSmall,
      titleLarge: typography.titleLarge,
      titleMedium: typography.titleMedium,
      titleSmall: typography.titleSmall,
      h1: typography.headlineLarge,
      h2: typography.headlineMedium,
      h3: typography.headlineSmall,
      h4: typography.titleLarge,
      h5: typography.titleMedium,
      h6: typography.titleSmall,
    },

    style: {
      italic: {
        fontStyle: 'italic',
      },
    },

    color: {
      current: {
        vars: {
          [colorVar]: 'currentColor',
        },
      },
      muted: {
        vars: {
          [colorVar]: `color-mix(in srgb, ${sys.color.foreground} 60%, transparent)`,
        },
      },
    },
  },
});

export const subtitleStyle = style([
  typography.titleMedium,
  {
    color: sys.color.foreground,
  },
]);

export const headingWrapper = recipe({
  variants: {
    border: {
      true: {
        paddingBottom: sys.spacing[4],
        borderBottom: `1px solid color-mix(in srgb, ${sys.color.foreground} 20%, transparent)`,
      },
    },

    align: {
      start: {
        textAlign: 'start',
      },

      center: {
        textAlign: 'center',
      },

      end: {
        textAlign: 'end',
      },

      justify: {
        textAlign: 'justify',
      },
    },
  },
});
