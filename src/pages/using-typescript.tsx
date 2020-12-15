// If you don't want to use TypeScript you can delete this file!
import { Heading, Link, Text } from '@chakra-ui/react'
import { graphql, Link as GatsbyLink, PageProps } from 'gatsby'
import React from 'react'

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
    <Heading>Gatsby supports TypeScript by default!</Heading>
    <Text fontSize="xl" my={6}>
      This means that you can create and write <em>.ts/.tsx</em> files
      for your pages, components etc. Please note that the{' '}
      <em>gatsby-*.js</em> files (like gatsby-node.js) currently don't
      support TypeScript yet.
    </Text>
    <Text fontSize="xl" my={6}>
      For type checking you'll want to install <em>typescript</em> via
      npm and run <em>tsc --init</em> to create a <em>.tsconfig</em>{' '}
      file.
    </Text>
    <Text fontSize="xl" my={6}>
      You're currently on the page "{path}" which was built on{' '}
      {data.site.buildTime}.
    </Text>
    <Text fontSize="xl" my={6}>
      To learn more, head over to our{' '}
      <Link
        isExternal
        textDecor="underline"
        color="purple.500"
        href="https://www.gatsbyjs.com/docs/typescript/"
      >
        documentation about TypeScript
      </Link>
      .
    </Text>
    <Link
      as={GatsbyLink}
      textDecor="underline"
      color="purple.500"
      fontSize="xl"
      to="/"
    >
      Go back to the homepage
    </Link>
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
