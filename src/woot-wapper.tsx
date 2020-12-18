import { ChakraProvider, Code as InlineCode } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { GatsbyBrowser } from 'gatsby'
import React, { ReactNode } from 'react'
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
import { Td } from './components/mdx-elements/td'
import { theme } from './theme'

const components = {
  a: (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLAnchorElement> &
      React.AnchorHTMLAttributes<HTMLAnchorElement>
  ) => <a {...props} />,
  h1: (props: { children: ReactNode }) => <H1 {...props} />,
  h2: (props: { children: ReactNode }) => <H2 {...props} />,
  // pre: props => <Code {...props} />,
  'p.inlineCode': (props: { children: ReactNode }) => (
    <InlineCode {...props} />
  ),
  li: props => <Li {...props} />,
  ol: props => <Ol {...props} />,
  table: props => <Table {...props} />,
  ul: props => <Ul {...props} />,
  thead: props => <Thead {...props} />,
  tbody: props => <Tbody {...props} />,
  tr: props => <Tr {...props} />,
  th: props => <Th {...props} />,
  td: props => <Td {...props} />,
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
