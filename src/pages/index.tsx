import { Box, Heading, Link, Text } from '@chakra-ui/react'
import { graphql, Link as GatsbyLink, PageProps } from 'gatsby'
import React from 'react'

export default function IndexPage({ data }: PageProps) {
  const posts = data.allMdx.nodes

  return (
    <>
      <Heading>Hi people</Heading>
      <Text fontSize="xl" my={5}>
        Welcome to your new Gatsby site.
      </Text>
      <Text fontSize="xl" my={5}>
        Now go build something great.
      </Text>
      {posts.map(post => {
        return (
          <Box
            as="article"
            border="1px"
            borderColor="#663399"
            borderRadius="5px"
            my="5"
            p="5"
          >
            <Link
              as={GatsbyLink}
              textDecor=""
              _hover={{ textDecor: 'underline' }}
              fontSize="xl"
              to={post.slug}
            >
              <Text fontSize="3xl">{post.frontmatter.title}</Text>
              <Text fontSize="xl">{post.excerpt}</Text>
            </Link>
          </Box>
        )
      })}
      <Link
        as={GatsbyLink}
        textDecor="underline"
        color="purple.500"
        fontSize="xl"
        to="/page-2/"
      >
        Go to page 2
      </Link>
      <br />
      <Link
        as={GatsbyLink}
        textDecor="underline"
        color="purple.500"
        fontSize="xl"
        to="/using-typescript/"
      >
        Go to "Using TypeScript"
      </Link>
    </>
  )
}

export const query = graphql`
  {
    allMdx {
      nodes {
        id
        slug
        excerpt
        frontmatter {
          date
          title
        }
      }
    }
  }
`
