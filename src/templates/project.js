import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import SEO from 'react-seo-component'
import { A, H1, P } from '../components/page-elements'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export default ({ data }) => {
  const {
    title: siteTitle,
    siteUrl,
    twitterUsername,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()
  const {
    frontmatter: { title, repo, demo },
    body,
    excerpt,
  } = data.mdx
  return (
    <>
      <SEO
        title={title}
        titleTemplate={siteTitle}
        description={excerpt}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
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
      excerpt
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
