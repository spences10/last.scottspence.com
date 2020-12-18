import {
  ChakraProvider,
  Code as InlineCode,
  Text,
} from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { GatsbyBrowser } from 'gatsby'
import React, { ReactNode } from 'react'
import Layout from './components/layout'
import { H2, Li, Ol, Ul } from './components/mdx-elements'
import { theme } from './theme'

const components = {
  a: (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLAnchorElement> &
      React.AnchorHTMLAttributes<HTMLAnchorElement>
  ) => <a {...props} />,
  h1: (props: { children: ReactNode }) => (
    <Text
      fontSize="4xl"
      my={3}
      fontFamily="heading"
      color="brand.100"
    >
      {props.children}
    </Text>
  ),
  h2: (props: { children: ReactNode }) => <H2 {...props} />,
  // pre: props => <Code {...props} />,
  'p.inlineCode': (props: { children: ReactNode }) => (
    <InlineCode {...props} />
  ),
  ul: props => <Ul {...props} />,
  ol: props => <Ol {...props} />,
  li: props => <Li {...props} />,
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
