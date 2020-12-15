import { Text } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React, { FunctionComponent } from 'react'

interface PostPageprops {
  data: {
    mdx: {
      id: string
      slug: string
      body: string
      frontmatter: {
        date: string
        title: string
      }
    }
  }
}

const PostPage: FunctionComponent<PostPageprops> = ({ data }) => {
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

export default PostPage

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
