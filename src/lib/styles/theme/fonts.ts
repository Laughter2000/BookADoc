import type { DeepPartial, Theme } from '@chakra-ui/react';
import { Lato as FontBody } from 'next/font/google';

export const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
  weight: '400',
});

export const fonts: DeepPartial<Theme['fonts']> = {
  heading: fontBody.style.fontFamily,
  body: fontBody.style.fontFamily,
};
