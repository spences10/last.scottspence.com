import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { H1, Small } from '../components/page-elements'

export default ({ data }) => {
  const {
    frontmatter: { date, title },
    body,
  } = data.mdx
  return (
    <>
      <H1>{title}</H1>
      <Small>{date}</Small>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`
