// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
};

const theme = extendTheme({ breakpoints });

export default theme;
