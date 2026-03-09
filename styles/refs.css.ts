import { toFluidClampFor } from '@kalink-ui/seedly/styles';
import { createGlobalTheme } from '@vanilla-extract/css';

type UnionToIntersection<U> = (
  U extends unknown ? (value: U) => void : never
) extends (value: infer I) => void
  ? I
  : never;
type Prettify<T> = { [K in keyof T]: T[K] } & {};

type ColorScale = Readonly<Record<string, string>>;
type Palette = Readonly<Record<string, ColorScale>>;
type ColorMap<T extends Palette> = Prettify<
  UnionToIntersection<
    {
      [G in keyof T & string]: {
        [S in keyof T[G] & (string | number) as `${G}${S}`]: T[G][S];
      };
    }[keyof T & string]
  >
>;

function mapPaletteScales<T extends Palette>(palette: T): ColorMap<T> {
  return Object.fromEntries(
    Object.entries(palette).flatMap(([scale, stops]) =>
      Object.entries(stops).map(([stop, value]) => [`${scale}${stop}`, value]),
    ),
  ) as ColorMap<T>;
}
const fluidSpacing = (px: number) => {
  if (px === 0) {
    return '0px';
  }

  return toFluidClampFor(px, {
    lowMin: 2,
    lowMax: 72,
    highMin: 6,
    highMax: 176,
    exponent: 1.5,
    rounding: 'none',
  });
};

const typeScaleClamp = (value: number) =>
  toFluidClampFor(value, {
    lowMin: 12,
    lowMax: 40,
    highMin: 14,
    highMax: 72,
    exponent: 1.5,
    rounding: 'none',
  });

export const lightPalette = {
  primary: {
    '1': 'oklch(99.4% 0.0041 73.742)',
    '2': 'oklch(98.54% 0.0191 85.392)',
    '3': 'oklch(96.83% 0.0463 88.45)',
    '4': 'oklch(94.75% 0.0754 87.856)',
    '5': 'oklch(92.6% 0.1009 86.048)',
    '6': 'oklch(90.46% 0.1253 84.481)',
    '7': 'oklch(88.15% 0.1306 79.84)',
    '8': 'oklch(84.6% 0.136 77.038)',
    '9': 'oklch(78% 0.16 75)',
    '10': 'oklch(75.16% 0.1738 69.582)',
    '11': 'oklch(74.45% 0.1885 67.044)',
    '12': 'oklch(72.34% 0.1843 66.18)',
    '13': 'oklch(63.9% 0.1685 61.808)',
    '14': 'oklch(49.77% 0.1368 57.462)',
    '15': 'oklch(34.17% 0.0539 50.363)',
  },
  neutral: {
    '1': 'oklch(99.18% 0.0012 261.472)',
    '2': 'oklch(98.41% 0.0033 260.208)',
    '3': 'oklch(96.78% 0.0055 257.43)',
    '4': 'oklch(94.83% 0.0084 255.974)',
    '5': 'oklch(92.9% 0.0123 256.769)',
    '6': 'oklch(91.01% 0.0162 257.501)',
    '7': 'oklch(88.87% 0.0199 256.937)',
    '8': 'oklch(86.05% 0.024 256.492)',
    '9': 'oklch(82.2% 0.0294 255.755)',
    '10': 'oklch(76.63% 0.0372 254.465)',
    '11': 'oklch(65.36% 0.0511 255.274)',
    '12': 'oklch(61.11% 0.0532 253.558)',
    '13': 'oklch(56.18% 0.0517 250.108)',
    '14': 'oklch(45.89% 0.0452 245.076)',
    '15': 'oklch(34.6% 0.035 256.3)',
  },
} as const satisfies Palette;

const darkPalette = {
  primary: {
    '1': 'oklch(18.4% 0.013 77.719)',
    '2': 'oklch(20.6% 0.0169 78.825)',
    '3': 'oklch(23.83% 0.0329 76.774)',
    '4': 'oklch(27.16% 0.0536 75.613)',
    '5': 'oklch(30.19% 0.0724 76.723)',
    '6': 'oklch(33.41% 0.0803 76.852)',
    '7': 'oklch(37.27% 0.0789 75.92)',
    '8': 'oklch(42% 0.08 75.271)',
    '9': 'oklch(47.67% 0.086 74.721)',
    '10': 'oklch(55.89% 0.1019 74.582)',
    '11': 'oklch(78% 0.16 75)',
    '12': 'oklch(88.49% 0.1959 92.111)',
    '13': 'oklch(88.83% 0.1926 92.479)',
    '14': 'oklch(88.47% 0.1529 85.716)',
    '15': 'oklch(93.5% 0.072 86.44)',
  },
  neutral: {
    '1': 'oklch(18.29% 0.0095 280.542)',
    '2': 'oklch(20.64% 0.0104 268.831)',
    '3': 'oklch(23.92% 0.017 263.473)',
    '4': 'oklch(27.09% 0.025 260.915)',
    '5': 'oklch(29.74% 0.0313 259.306)',
    '6': 'oklch(32.37% 0.0336 259.711)',
    '7': 'oklch(34.6% 0.035 256.3)',
    '8': 'oklch(39.21% 0.0381 257.125)',
    '9': 'oklch(44.29% 0.0421 255.067)',
    '10': 'oklch(50.75% 0.0485 252.643)',
    '11': 'oklch(55.62% 0.059 259.878)',
    '12': 'oklch(59.36% 0.0568 262.182)',
    '13': 'oklch(67.76% 0.0491 261.891)',
    '14': 'oklch(80.45% 0.0362 260.677)',
    '15': 'oklch(93.73% 0.0152 260.341)',
  },
} as const satisfies Palette;

export const refs = createGlobalTheme(':root', {
  colors: {
    light: mapPaletteScales(lightPalette),
    dark: mapPaletteScales(darkPalette),
  },

  typeface: {
    brand: 'var(--font-brand)',
    plain: 'var(--font-plain)',
  },

  lineHeight: {
    md: '1',
    lg: '1.2',
    xl: '1.6',
  },

  fontWeight: {
    regular: '400',
    medium: '600',
    bold: '800',
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

  spacing: {
    0: fluidSpacing(0),
    1: fluidSpacing(2),
    2: fluidSpacing(4),
    3: fluidSpacing(6),
    4: fluidSpacing(8),
    5: fluidSpacing(10),
    6: fluidSpacing(12),
    7: fluidSpacing(14),
    8: fluidSpacing(16),
    9: fluidSpacing(20),
    10: fluidSpacing(24),
    11: fluidSpacing(28),
    12: fluidSpacing(32),
    13: fluidSpacing(36),
    14: fluidSpacing(40),
    15: fluidSpacing(48),
    16: fluidSpacing(56),
    17: fluidSpacing(64),
    18: fluidSpacing(72),
  },

  typeScale: {
    displayLarge: typeScaleClamp(40),
    displayMedium: typeScaleClamp(36),
    displaySmall: typeScaleClamp(32),
    headlineLarge: typeScaleClamp(32),
    headlineMedium: typeScaleClamp(28),
    headlineSmall: typeScaleClamp(24),
    titleLarge: typeScaleClamp(24),
    titleMedium: typeScaleClamp(20),
    titleSmall: typeScaleClamp(18),
    bodyLarge: typeScaleClamp(18),
    bodyMedium: typeScaleClamp(16),
    bodySmall: typeScaleClamp(14),
    labelLarge: typeScaleClamp(16),
    labelMedium: typeScaleClamp(14),
    labelSmall: typeScaleClamp(12),
  },
});
