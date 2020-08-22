import {
  ColorModeProvider,
  CSSReset,
  theme,
  ThemeProvider,
} from '@chakra-ui/core'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}
