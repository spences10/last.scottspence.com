import { Text } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
export default function PostPage({ data }) {
  const {
    body,
    frontmatter: { title },
  } = data.mdx
  return (
    <>
      <Text fontSize="4xl">{title}</Text>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}
export const query = graphql`
  query PostBySlug($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      slug
      body
      frontmatter {
        date
        title
      }
    }
  }
`
