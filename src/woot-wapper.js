import { ChakraProvider, Code as InlineCode } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import Layout from './components/layout'
import {
  H1,
  H2,
  Li,
  Ol,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Ul,
} from './components/mdx-elements'
import { P } from './components/mdx-elements/p'
import { Td } from './components/mdx-elements/td'
import { theme } from './theme'

const components = {
  a: props => <a {...props} />,
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  // pre: props => <Code {...props} />,
  'p.inlineCode': props => <InlineCode {...props} />,
  li: props => <Li {...props} />,
  ol: props => <Ol {...props} />,
  table: props => <Table {...props} />,
  ul: props => <Ul {...props} />,
  thead: props => <Thead {...props} />,
  tbody: props => <Tbody {...props} />,
  tr: props => <Tr {...props} />,
  th: props => <Th {...props} />,
  td: props => <Td {...props} />,
  p: props => <P {...props} />,
}

export const WootWrapper = ({ children }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <MDXProvider components={components}>
        <Layout>{children}</Layout>
      </MDXProvider>
    </ChakraProvider>
  )
}
