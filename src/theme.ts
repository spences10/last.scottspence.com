import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    key: 'chakra-ui-no-flash',
  },
  sizes: {
    lg: '100ch',
  },
  colors: {
    brand: {
      100: '#E0AAFF',
      200: '#C77DFF',
      300: '#9D4EDD',
      400: '#7B2CBF',
      500: '#5A189A',
      600: '#3C096C',
      700: '#240046',
      800: '#10002B',
      900: '#070014',
    },
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fonts: {
    heading: 'Comic Sans MS',
    body: 'Times New Roman',
    mono: 'Victor Mono',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  breakpoints: ['30em', '48em', '62em', '80em'],
  styles: {
    global: props => ({
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'white')(props),
        bg: mode('white', 'gray.800')(props),
        lineHeight: 'base',
        // marginLeft: 'calc(100vw - 100%)',
      },
      '.highlight': { backgroundColor: 'brand.400' },
    }),
  },
})
