import { recipe } from '@vanilla-extract/recipes';

import { screen } from '@/style/breakpoints';
import { utilities } from '@/styles/layers.css';

export const hidden = recipe({
  variants: {
    at: {
      never: {},

      always: {
        display: 'none',
      },

      xsUp: {
        '@layer': {
          [utilities]: {
            '@media': {
              [screen.sm]: {
                display: 'none',
              },
            },
          },
        },
      },

      xsDown: {
        '@layer': {
          [utilities]: {
            '@media': {
              [screen.maxXs]: {
                display: 'none',
              },
            },
          },
        },
      },

      smUp: {
        '@layer': {
          [utilities]: {
            '@media': {
              [screen.sm]: {
                display: 'none',
              },
            },
          },
        },
      },

      smDown: {
        '@layer': {
          [utilities]: {
            '@media': {
              [screen.maxSm]: {
                display: 'none',
              },
            },
          },
        },
      },

      mdUp: {
        '@layer': {
          [utilities]: {
            '@media': {
              [screen.md]: {
                display: 'none',
              },
            },
          },
        },
      },

      mdDown: {
        '@layer': {
          [utilities]: {
            '@media': {
              [screen.maxMd]: {
                display: 'none',
              },
            },
          },
        },
      },

      lgUp: {
        '@layer': {
          [utilities]: {
            '@media': {
              [screen.lg]: {
                display: 'none',
              },
            },
          },
        },
      },

      lgDown: {
        '@layer': {
          [utilities]: {
            '@media': {
              [screen.maxLg]: {
                display: 'none',
              },
            },
          },
        },
      },

      xlUp: {
        '@layer': {
          [utilities]: {
            '@media': {
              [screen.xl]: {
                display: 'none',
              },
            },
          },
        },
      },
    },
  },
});
