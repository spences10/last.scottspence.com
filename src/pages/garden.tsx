import {
  Box,
  Container,
  FormLabel,
  Input,
  Link,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import Fuse from 'fuse.js'
import { graphql, Link as GatsbyLink } from 'gatsby'
import React, { FunctionComponent, useRef, useState } from 'react'

interface IndexPost {
  id: string
  slug: string
  excerpt: string
  frontmatter: {
    date: string
    title: string
    tags: []
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
const GardenIndex: FunctionComponent<IndexPageProps> = ({ data }) => {
  const { nodes } = data.allMdx
  const [query, updateQuery] = useState('')

  const options = {
    includeScore: true,
    keys: ['frontmatter.title', 'excerpt', 'frontmatter.tags'],
    includeMatches: true,
    threshold: 0.3,
  }
  const fuse = new Fuse(nodes, options)
  const results = fuse.search(query)
  const searchRef = useRef(null)
  const searchResults = query
    ? results.map(result => result.item)
    : nodes

  function onSearch({ currentTarget = {} }) {
    updateQuery(currentTarget?.value)
  }

  return (
    <>
      <Box as="form" mt="5" mb="8">
        <FormLabel htmlFor="search" fontSize="xl">
          Search:
        </FormLabel>
        <Input
          name="search"
          id="search"
          type="text"
          placeholder="Search posts!"
          value={query}
          onChange={onSearch}
          ref={searchRef}
        />
      </Box>
      <UnorderedList m="0">
        {searchResults.map(post => {
          const {
            id,
            slug,
            frontmatter: { title },
            excerpt,
          } = post
          return (
            <ListItem
              key={id}
              listStyleType="none"
              boxShadow="lg"
              border="1px solid brand.100"
              borderRadius="xl"
            >
              <Link
                as={GatsbyLink}
                to={`/${slug}`}
                textDecor="underline"
                fontWeight="bold"
                _hover={{
                  color: 'brand.400',
                  textDecor: 'none',
                }}
              >
                <Container m="0">
                  <Box as="h2" fontSize="3xl" my="4">
                    {title}
                  </Box>
                  {excerpt}
                </Container>
              </Link>
            </ListItem>
          )
        })}
      </UnorderedList>
    </>
  )
}

export default GardenIndex

// This shape is up to you, it has nothing to do with Gatsby or MDX. You define the query shape however you want
// A Gatsby page query return it inside a "data" object
// It the data object you need to type. As seen above in IndexPageProps
export const query = graphql`
  {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { private: { eq: false } } }
    ) {
      nodes {
        id
        slug
        excerpt
        frontmatter {
          date
          title
          tags
        }
      }
    }
  }
`
