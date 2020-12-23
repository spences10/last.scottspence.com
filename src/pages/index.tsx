// import { Link as GatsbyLink } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Heading, Text } from 'theme-ui'
import { InternalLink } from '../components/internal-link'

const IndexPage: FunctionComponent = () => {
  return (
    <>
      <Heading>Hi people</Heading>
      <Text
        sx={{
          fontSize: 'xl',
          my: 5,
        }}
      >
        Welcome to your new Gatsby site.
      </Text>
      <Text sx={{ fontSize: 'xl', my: 5 }}>
        Now go build something great.
      </Text>
      <InternalLink
        to="/garden/"
        sx={{
          textDecoration: 'underline',
          color: 'purple.500',
          fontSize: 'xl',
        }}
      >
        Go to garden
      </InternalLink>
      <br />
      <InternalLink
        to="/page-2/"
        sx={{
          textDecoration: 'underline',
          color: 'purple.500',
          fontSize: 'xl',
        }}
      >
        Go to page 2
      </InternalLink>
      <br />
      <InternalLink
        to="/using-typescript/"
        sx={{
          textDecoration: 'underline',
          color: 'purple.500',
          fontSize: 'xl',
        }}
      >
        Go to "Using TypeScript"
      </InternalLink>
    </>
  )
}

export default IndexPage
