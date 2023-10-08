import { clsx } from 'clsx';
import { Montserrat, Open_Sans } from 'next/font/google';

const fontFamilyTitle = Open_Sans({
  subsets: ['latin'],
  weight: ['600', '800'],
  display: 'swap',
  style: ['italic', 'normal'],
  variable: '--font-brand',
});

const fontFamilyBody = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-plain',
});

export const fontClass = clsx(
  fontFamilyTitle.variable,
  fontFamilyBody.variable,
);
