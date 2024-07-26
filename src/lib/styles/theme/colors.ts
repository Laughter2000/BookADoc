import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: Record<string, string> = {
  primary: '#101728',
  customPink: '#fd1774',
  grey1: '#ebedf1',
  grey2: '#98a2b3',
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
