import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'

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
      <Box
        as="h1"
        sx={{
          fontSize: '4xl',
        }}
      >
        {title}
      </Box>
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
