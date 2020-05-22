import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { themeVariables } from './theme-variables'

export const GlobalStyle = createGlobalStyle`
  ${reset}
    
  ${themeVariables}
    
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
