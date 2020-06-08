/**
 * This is where to smoosh the Tailwind defaults
 * and the project defaults together
 */
import { defaults } from './default-config'

export const theme = {
  ...defaults,
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  fontFamily: {
    mono: [['Fira Code'], defaults.fontFamily.mono].join(`,`),
    sans: [['Manrope'], defaults.fontFamily.sans].join(`,`),
    serif: [['Hepta Slab'], defaults.fontFamily.serif].join(`,`),
  },
  colors: {
    primary: {
      100: '#aa7fd4',
      200: '#9966cc',
      300: '#884cc3',
      400: '#773bb2',
      500: '#663399',
      600: '#552b80',
      700: '#442266',
      800: '#331a4d',
      900: '#221133',
    },
    violet: {
      100: '#e69bc9',
      200: '#e38dc1',
      300: '#e07fba',
      400: '#dc72b2',
      500: '#d964ab',
      600: '#d656a4',
      700: '#d2499c',
      800: '#cf3b95',
      900: '#c8318d',
    },
    ...defaults.colors,
  },
}
