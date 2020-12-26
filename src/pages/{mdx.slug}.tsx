import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React, { FunctionComponent } from 'react'
import SEO from 'react-seo-component'
import { Box } from 'theme-ui'
import { useSiteMetadata } from '../hooks/site-metadata'
import { ogImageUrl } from '../util/get-og-image'

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
    title: siteTitle,
    siteUrl,
    authorName,
    twitterUsername,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()
  const {
    body,
    frontmatter: { title },
    tableOfContents,
    timeToRead,
    excerpt,
    slug,
    date,
  } = data.mdx
  return (
    <>
      <SEO
        title={title}
        titleTemplate={siteTitle}
        description={excerpt}
        image={ogImageUrl(authorName, 'scottspence.com', title)}
        pathname={`${siteUrl}${slug}`}
        article={true}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        datePublished={date}
        dateModified={new Date(Date.now()).toISOString()}
      />
      <Box as="h1" variant="styles.h1">
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
        date(formatString: "YYYY MMMM Do")
        title
      }
      tableOfContents
      timeToRead
      excerpt
    }
  }
`
