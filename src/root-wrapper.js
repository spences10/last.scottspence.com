import { ChakraProvider } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
// import ConvertKitForm from 'convertkit-react'
import React from 'react'
import { Helmet } from 'react-helmet'
// import { DateDistance } from './components/date-distance'
// import { DateUpdated } from './components/date-updated'
// import { GitHubContributions } from './components/gh-contributions'
// import { TopLanguages } from './components/gh-top-languages'
import { Layout } from './components/layout'
// import { MarkdownParser } from './components/markdown-parser'
// import { Projects } from './components/projects'
// import { Sarcasm } from './components/sarcasm'
import { AnalyticsProvider } from './contexts/event-tracking'

const components = {
  //   DateDistance,
  //   DateUpdated,
  //   TopLanguages,
  //   GitHubContributions,
  //   Projects,
  //   ConvertKitForm,
  //   MarkdownParser,
  //   Sarcasm,
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
      <meta
        name="monetization"
        content="$ilp.uphold.com/bzPBWkMBzLmN"
      />
    </Helmet>
    <AnalyticsProvider>
      <ChakraProvider resetCSS>
        <MDXProvider components={components}>
          <Layout>{element}</Layout>
        </MDXProvider>
      </ChakraProvider>
    </AnalyticsProvider>
  </>
)
