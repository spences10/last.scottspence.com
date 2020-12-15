import { ChakraProvider } from '@chakra-ui/react'
import { GatsbyBrowser } from 'gatsby'
import React from 'react'
import Layout from './components/layout'
import { theme } from './theme'

interface Props {
  element: GatsbyBrowser
}

export const wrapPageElement = ({ element }: Props) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
