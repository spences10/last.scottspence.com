import { render } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import { Header } from './header'

test('Renders the table', () => {
  render(
    <ThemeProvider theme={theme}>
      <Header siteTitle={`Yo`} description={`a site`} />
    </ThemeProvider>
  )
})
