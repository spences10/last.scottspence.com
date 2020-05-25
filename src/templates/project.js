import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { A, H1, P } from '../components/page-elements'

export default ({ data }) => {
  const {
    frontmatter: { title, repo, demo },
    fields: { editLink, slug },
    body,
  } = data.mdx
  return (
    <>
      <H1>{title}</H1>
      <A href={repo}>
        <P>{repo}</P>
      </A>
      <A href={demo}>
        <P>{demo}</P>
      </A>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

export const query = graphql`
  query PROJECT_BY_SLUG($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
      timeToRead
      frontmatter {
        title
        repo
        demo
      }
      fields {
        slug
        editLink
      }
    }
  }
`
