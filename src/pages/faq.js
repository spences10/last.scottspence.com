import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import SEO from 'react-seo-component'
import { A, H1 } from '../components/page-elements'
import { Toc } from '../components/shared-styles'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { ogImageUrl } from '../util/build-og-image-url'

export default function FAQ({ data }) {
  const {
    title,
    description,
    siteUrl,
    twitterUsername,
    authorName,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()
  const { body, tableOfContents } = data.mdx
  return (
    <>
      <SEO
        title={`FAQ`}
        titleTemplate={title}
        description={description}
        image={ogImageUrl(
          authorName,
          'last.scottspence.com',
          `Recruiter - FAQ`
        )}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      {typeof tableOfContents.items === 'undefined' ? null : (
        <Toc>
          <h3>Table of contents</h3>
          <ul>
            {tableOfContents.items.map(i => (
              <li key={i.url}>
                <A href={i.url} key={i.url}>
                  {i.title}
                </A>
              </li>
            ))}
          </ul>
        </Toc>
      )}
      <H1>For recruiters - FAQ</H1>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

export const query = graphql`
  query FAQ_PAGE_QUERY {
    mdx(fields: { slug: { eq: "/copy/faq/" } }) {
      body
      tableOfContents
    }
  }
`
