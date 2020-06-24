import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { DateDistance } from './components/date-distance'
import { DateUpdated } from './components/date-updated'
import { GetInTouch } from './components/get-in-touch'
import { GitHubContributions } from './components/gh-contributions'
import { TopLanguages } from './components/gh-top-languages'
import { Layout } from './components/layout'
import {
  A,
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  H4,
  Hr,
  InlineCode,
  Li,
  Ol,
  P,
  Small,
  Table,
  Ul,
} from './components/page-elements'
import { Projects } from './components/projects'
import { AnalyticsProvider } from './contexts/event-tracking'
import { GlobalStyle, theme } from './theme'

const components = {
  a: props => <A {...props} />,
  blockquote: props => <Blockquote {...props} />,
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  hr: props => <Hr {...props} />,
  li: props => <Li {...props} />,
  ol: props => <Ol {...props} />,
  p: props => <P {...props} />,
  'p.inlineCode': props => <InlineCode {...props} />,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
  small: props => <Small {...props} />,
  table: props => <Table {...props} />,
  ul: props => <Ul {...props} />,
  Small,
  DateDistance,
  DateUpdated,
  TopLanguages,
  GitHubContributions,
  Projects,
  GetInTouch,
}

export const wrapPageElement = ({ element }) => (
  <>
    <Helmet>
      <script
        src={`${process.env.GATSBY_FATHOM_TRACKING_URL_SCOTTSPENCE_COM}/script.js`}
        spa="auto"
        site={process.env.GATSBY_FATHOM_TRACKING_ID_SCOTTSPENCE_COM}
        defer
      ></script>
    </Helmet>
    <AnalyticsProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MDXProvider components={components}>
          <Layout>{element}</Layout>
        </MDXProvider>
      </ThemeProvider>
    </AnalyticsProvider>
  </>
)
