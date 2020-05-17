import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import React from 'react'
import { Layout } from './components/layout'
import { Code } from './components/page-elements'

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
}

export const wrapPageElement = ({ element }) => (
  <MDXProvider components={components}>
    <Layout>{element}</Layout>
  </MDXProvider>
)
