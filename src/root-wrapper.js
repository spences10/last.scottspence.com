import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Layout } from './components/layout'

const components = {}

export const wrapPageElement = ({ element }) => (
  <MDXProvider components={components}>
    <Layout>{element}</Layout>
  </MDXProvider>
)
