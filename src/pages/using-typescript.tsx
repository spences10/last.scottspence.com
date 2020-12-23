// If you don't want to use TypeScript you can delete this file!
// import { Heading, Link, Text } from '@chakra-ui/react'
import { graphql, PageProps } from 'gatsby'
import React from 'react'
import { Box, Link } from 'theme-ui'
import { InternalLink } from '../components/internal-link'

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  path,
}) => (
  <>
    <Box as="h1">Gatsby supports TypeScript by default!</Box>
    <Box
      as="p"
      sx={{
        fontSize: 'xl',
        my: 6,
      }}
    >
      This means that you can create and write <em>.ts/.tsx</em> files
      for your pages, components etc. Please note that the{' '}
      <em>gatsby-*.js</em> files (like gatsby-node.js) currently don't
      support TypeScript yet.
    </Box>
    <Box
      as="p"
      sx={{
        fontSize: 'xl',
        my: 6,
      }}
    >
      For type checking you'll want to install <em>typescript</em> via
      npm and run <em>tsc --init</em> to create a <em>.tsconfig</em>{' '}
      file.
    </Box>
    <Box
      as="p"
      sx={{
        fontSize: 'xl',
        my: 6,
      }}
    >
      You're currently on the page "{path}" which was built on{' '}
      {data.site.buildTime}.
    </Box>
    <Box
      as="p"
      sx={{
        fontSize: 'xl',
        my: 6,
      }}
    >
      To learn more, head over to our{' '}
      <Link
        sx={{
          textDecoration: 'underline',
          color: 'purple.500',
        }}
        href="https://www.gatsbyjs.com/docs/typescript/"
        target="_blank"
        rel="noopener noreferrer"
      >
        documentation about TypeScript
      </Link>
      .
    </Box>
    <InternalLink
      to="/"
      sx={{
        textDecoration: 'underline',
        color: 'purple.500',
        fontSize: 'xl',
      }}
    >
      Go back to the homepage
    </InternalLink>
  </>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
