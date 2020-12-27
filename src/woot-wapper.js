import { css, Global } from '@emotion/react'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'theme-ui'
import Layout from './components/layout'
import { Code, H2 } from './components/mdx-elements'
import theme from './theme'

const components = {
  // a: props => <a {...props} />,
  // h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
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

const queryClient = new QueryClient()

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <Global
          styles={css`
            html {
              scroll-behavior: smooth;
            }
          `}
        />
        <QueryClientProvider client={queryClient}>
          <Layout>{element}</Layout>
        </QueryClientProvider>
      </MDXProvider>
    </ThemeProvider>
  )
}
