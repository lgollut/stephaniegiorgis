import {
  createGlobalTheme,
  createVar,
  globalStyle,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { refs } from './refs.css';

const sysFluidityMin = createVar();
const sysFluidityMax = createVar();
const sysFluidityInterpolation = createVar();

globalStyle(':root', {
  vars: {
    [sysFluidityMin]: '23.5',
    [sysFluidityMax]: '80',
    [sysFluidityInterpolation]: calc.divide(
      calc.subtract('100vw', calc.multiply(sysFluidityMin, '1rem')),
      calc.subtract(sysFluidityMax, sysFluidityMin),
    ),
  },
});

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

createGlobalTheme(':root', refs, {
  colors: {
    neutral: {
      0: '#000000',
      100: '#FFFFFF',
    },
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
      neutral96: `hsl(${hsl.neutral96})`,
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
  },

  fluidity: {
    min: sysFluidityMin,
    max: sysFluidityMax,
    interpolation: sysFluidityInterpolation,
  },

  typeface: {
    brand: 'var(--font-brand)',
    plain: 'var(--font-plain)',
  },

  lineHeight: {
    md: '1',
    lg: '1.2',
    xl: '1.4',
  },

  fontSize: {
    '2xs': '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.375rem',
    '2xl': '1.5rem',
    '3xl': '1.75rem',
    '4xl': '1.875rem',
    '5xl': '2rem',
    '6xl': '2.25rem',
    '7xl': '3rem',
    '8xl': '3.625rem',
  },

  fontWeight: {
    regular: '400',
    medium: '600',
    bold: '800',
  },

  spacing: {
    none: '0',
    '2xs': '0.125rem',
    xs: '0.25rem',
    sm: '0.5rem',
    base: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem',
    '2xl': '3rem',
    '3xl': '3.5rem',
    '4xl': '4rem',
    '5xl': '6rem',
    '6xl': '8rem',
  },

  radius: {
    none: '0',
    xs: '0.125rem',
    sm: '0.25rem',
    base: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
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
