import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
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
    mono: ['Space Mono', ...defaults.fontFamily.mono],
    sans: ['Poppins', ...defaults.fontFamily.sans],
    serif: ['Pridi', ...defaults.fontFamily.serif],
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
    ...defaults.colors,
  },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fontFamily.sans};
    font-size: 16px;
    margin-left: calc(100vw - 100%);
    margin-right: 0;
  }
  body {
    min-height: 100%;
    line-height: ${({ theme }) => theme.lineHeight.relaxed};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    color: ${({ theme }) => theme.colors.gray[900]};
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.colors.gray[100]}
  }
`
