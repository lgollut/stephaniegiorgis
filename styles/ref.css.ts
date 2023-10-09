import { createGlobalTheme } from '@vanilla-extract/css';

const hsl = {
  primary0: '44deg 63% 0%',
  primary10: '44deg 63% 10%',
  primary20: '44deg 63% 20%',
  primary30: '44deg 63% 30%',
  primary40: '44deg 63% 40%',
  primary50: '44deg 63% 50%',
  primary60: '44deg 63% 60%',
  primary70: '44deg 63% 70%',
  primary80: '44deg 63% 80%',
  primary90: '44deg 63% 90%',
  primary100: '44deg 63% 100%',

  neutral0: '209deg 17% 0%',
  neutral10: '209deg 17% 12%',
  neutral20: '209deg 17% 24%',
  neutral30: '209deg 17% 30%',
  neutral40: '209deg 17% 40%',
  neutral50: '209deg 17% 50%',
  neutral60: '209deg 17% 60%',
  neutral70: '209deg 17% 70%',
  neutral80: '209deg 17% 80%',
  neutral87: '209deg 17% 87%',
  neutral90: '209deg 17% 90%',
  neutral92: '209deg 17% 92%',
  neutral94: '209deg 17% 94%',
  neutral96: '209deg 17% 96%',
  neutral98: '209deg 17% 98%',
  neutral100: '209deg 17% 100%',

  neutralVariant0: '0 0% 0%',
  neutralVariant10: '0 0% 10%',
  neutralVariant20: '0 0% 20%',
  neutralVariant30: '0 0% 30%',
  neutralVariant40: '0 0% 40%',
  neutralVariant50: '0 0% 50%',
  neutralVariant60: '0 0% 60%',
  neutralVariant70: '0 0% 70%',
  neutralVariant80: '0 0% 80%',
  neutralVariant90: '0 0% 90%',
  neutralVariant100: '0 0% 100%',
};

export const ref = createGlobalTheme(':root', {
  palette: {
    primary0: `hsl(${hsl.primary0})`,
    primary10: `hsl(${hsl.primary10})`,
    primary20: `hsl(${hsl.primary20})`,
    primary30: `hsl(${hsl.primary30})`,
    primary40: `hsl(${hsl.primary40})`,
    primary50: `hsl(${hsl.primary50})`,
    primary60: `hsl(${hsl.primary60})`,
    primary70: `hsl(${hsl.primary70})`,
    primary80: `hsl(${hsl.primary80})`,
    primary90: `hsl(${hsl.primary90})`,
    primary100: `hsl(${hsl.primary100})`,

    neutral0: `hsl(${hsl.neutral0})`,
    neutral10: `hsl(${hsl.neutral10})`,
    neutral20: `hsl(${hsl.neutral20})`,
    neutral30: `hsl(${hsl.neutral30})`,
    neutral40: `hsl(${hsl.neutral40})`,
    neutral50: `hsl(${hsl.neutral50})`,
    neutral60: `hsl(${hsl.neutral60})`,
    neutral70: `hsl(${hsl.neutral70})`,
    neutral80: `hsl(${hsl.neutral80})`,
    neutral87: `hsl(${hsl.neutral87})`,
    neutral90: `hsl(${hsl.neutral90})`,
    neutral92: `hsl(${hsl.neutral92})`,
    neutral94: `hsl(${hsl.neutral94})`,
    neutral96: `hsl(${hsl.neutral94})`,
    neutral98: `hsl(${hsl.neutral98})`,
    neutral100: `hsl(${hsl.neutral100})`,

    neutralVariant0: `hsl(${hsl.neutralVariant0})`,
    neutralVariant10: `hsl(${hsl.neutralVariant10})`,
    neutralVariant20: `hsl(${hsl.neutralVariant20})`,
    neutralVariant30: `hsl(${hsl.neutralVariant30})`,
    neutralVariant40: `hsl(${hsl.neutralVariant40})`,
    neutralVariant50: `hsl(${hsl.neutralVariant50})`,
    neutralVariant60: `hsl(${hsl.neutralVariant60})`,
    neutralVariant70: `hsl(${hsl.neutralVariant70})`,
    neutralVariant80: `hsl(${hsl.neutralVariant80})`,
    neutralVariant90: `hsl(${hsl.neutralVariant90})`,
    neutralVariant100: `hsl(${hsl.neutralVariant100})`,
  },

  hsl,

  fontSize: {
    '2xs': '0.625rem', // 10px
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    md: '1.125rem', // 18px
    lg: '1.25rem', // 20px
    xl: '1.375rem', // 22px
    '2xl': '1.5rem', // 24px
    '3xl': '1.75rem', // 28px
    '4xl': '1.875rem', // 30px
    '5xl': '2rem', // 32px
    '6xl': '2.25rem', // 36px
    '7xl': '3rem', // 48px
    '8xl': '3.625rem', // 58px
  },

  fontWeight: {
    regular: '400',
    medium: '600',
    bold: '800',
  },

  spacing: {
    none: '0', // 0px
    '2xs': '0.125rem', // 2px
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    base: '1rem', // 16px
    md: '1.5rem', // 24px
    lg: '2rem', // 32px
    xl: '2.5rem', // 40px
    '2xl': '3rem', // 48px
    '3xl': '3.5rem', // 56px
    '4xl': '4rem', // 64px
    '5xl': '6rem', // 96px
    '6xl': '8rem', // 128px
  },

  radius: {
    none: '0', // 0px
    xs: '0.125rem', // 2px
    sm: '0.25rem', // 4px
    base: '0.5rem', // 8px
    md: '0.75rem', // 12px
    lg: '1rem', // 16px
    xl: '1.5rem', // 24px
    full: '50%',
  },

  elevation: {
    0: 'none',
    1: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    3: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    6: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    8: '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    12: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
  },

  duration: {
    shorter: '150ms',
    short: '250ms',
    base: '300ms',
    long: '400ms',
  },

  easing: {
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
});
