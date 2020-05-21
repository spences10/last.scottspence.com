import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { H1, Small } from '../components/page-elements'

export default ({ data }) => {
  const { frontmatter, body } = data.mdx
  return (
    <>
      <H1>{frontmatter.title}</H1>
      <Small>{frontmatter.date}</Small>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`
