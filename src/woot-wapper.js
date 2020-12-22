// import {
//   ChakraProvider,
//   Code,
//   Code as InlineCode,
// } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import Layout from './components/layout'

const components = {
  // a: props => <a {...props} />,
  // h1: props => <H1 {...props} />,
  // h2: props => <H2 {...props} />,
  // pre: props => (
  //   <Code fontFamily="mono" fontSize="xl" my="7" {...props} />
  // ),
  // 'p.inlineCode': props => (
  //   <InlineCode fontFamily="mono" fontSize="xl" {...props} />
  // ),
  // li: props => <Li {...props} />,
  // ol: props => <Ol {...props} />,
  // table: props => <Table {...props} />,
  // ul: props => <Ul {...props} />,
  // thead: props => <Thead {...props} />,
  // tbody: props => <Tbody {...props} />,
  // tr: props => <Tr {...props} />,
  // th: props => <Th {...props} />,
  // td: props => <Td {...props} />,
  // p: props => <P {...props} />,
}

export const wrapPageElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <Layout>{element}</Layout>
    </MDXProvider>
  )
}
