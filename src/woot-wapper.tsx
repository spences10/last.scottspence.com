import { ChakraProvider, Text } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { GatsbyBrowser } from 'gatsby'
import React from 'react'
import Layout from './components/layout'
import { theme } from './theme'

const components = {
  h2: (props: { children: React.ReactNode }) => (
    <Text fontSize="3xl" my={3} fontFamily="heading">
      {props.children}
    </Text>
  ),
}

interface Props {
  element: GatsbyBrowser
}

export const wrapPageElement = ({ element }: Props) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <MDXProvider components={components}>
        <Layout>{element}</Layout>
      </MDXProvider>
    </ChakraProvider>
  )
}
