import { Box, Heading, Link, Text } from '@chakra-ui/react'
import { graphql, Link as GatsbyLink } from 'gatsby'
import React, { FunctionComponent } from 'react'

interface IndexPost {
  id: string
  slug: string
  excerpt: string
  frontmatter: {
    date: string
    title: string
  }
}
interface IndexPageProps {
  data: {
    allMdx: {
      // I've abstracted the keys within "nodes" so we can use the IndexPost interface elsewhere, the [] after IndexPost denote its an array of this shape
      nodes: IndexPost[]
      // You could also type it like this
      // nodes: {
      //   id: string
      //   slug: string
      //   excerpt: string
      //   frontmatter: {
      //     date: string
      //     title: string
      //   }
      // }[]
    }
  }
}

// IndexPage is of type FunctionComponent which accets a generic. <T>
// A generica can be of any shape but in your case its the shape of the data object which you define in the page query below
export const IndexPage: FunctionComponent<IndexPageProps> = ({
  data,
}) => {
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
      {posts.map((post: IndexPost, index: number) => {
        // you don't have to destructure but its my preference
        const {
          // id,
          slug,
          excerpt,
          frontmatter: { title },
        } = post

        return (
          <Box
            // you could use id as the key and remove index from the map if you like
            // key={id}
            key={index}
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
              to={slug}
            >
              <Text fontSize="3xl">{title}</Text>
              <Text fontSize="xl">{excerpt}</Text>
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

// This shape is up to you, it has nothing to do with Gatsby or MDX. You define the query shape however you want
// A Gatsby page query return it inside a "data" object
// It the data object you need to type. As seen above in IndexPageProps
export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
