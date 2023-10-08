import { recipe } from '@vanilla-extract/recipes';

export const breakpoints = {
  always: 0,
  xsUp: 376,
  xsDown: 567,
  smUp: 568,
  smDown: 767,
  mdUp: 768,
  mdDown: 1023,
  lgUp: 1024,
  lgDown: 1279,
  xlUp: 1280,
  never: Infinity,
} as const;

export const hidden = recipe({
  variants: {
    at: {
      never: {},

      always: {
        display: 'none',
      },

      xsUp: {
        '@media': {
          [`screen and (min-width: ${breakpoints.xsUp}px)`]: {
            display: 'none',
          },
        },
      },

      xsDown: {
        '@media': {
          [`screen and (max-width: ${breakpoints.xsDown}px)`]: {
            display: 'none',
          },
        },
      },

      smUp: {
        '@media': {
          [`screen and (min-width: ${breakpoints.smUp}px)`]: {
            display: 'none',
          },
        },
      },

      smDown: {
        '@media': {
          [`screen and (max-width: ${breakpoints.smDown}px)`]: {
            display: 'none',
          },
        },
      },

      mdUp: {
        '@media': {
          [`screen and (min-width: ${breakpoints.mdUp}px)`]: {
            display: 'none',
          },
        },
      },

      mdDown: {
        '@media': {
          [`screen and (max-width: ${breakpoints.mdDown}px)`]: {
            display: 'none',
          },
        },
      },

      lgUp: {
        '@media': {
          [`screen and (min-width: ${breakpoints.lgUp}px)`]: {
            display: 'none',
          },
        },
      },

      lgDown: {
        '@media': {
          [`screen and (max-width: ${breakpoints.lgDown}px)`]: {
            display: 'none',
          },
        },
      },

      xlUp: {
        '@media': {
          [`screen and (min-width: ${breakpoints.xlUp}px)`]: {
            display: 'none',
          },
        },
      },
    },
  },
});
