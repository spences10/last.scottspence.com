import React from 'react'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import { H2, Li, Ul } from '../components/page-elements'
import { Link } from '../components/shared-styles'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Wrapper = styled.article`
  a {
    &:hover {
      opacity: 0.5 !important;
    }
  }
`

export default ({ pageContext }) => {
  const {
    title: siteTitle,
    siteUrl,
    twitterUsername,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()
  const { posts, tag } = pageContext
  // reverse order the posts this is
  // destructive as it mutates the array
  posts.reverse()
  return (
    <Wrapper>
      <SEO
        title={`Posts about ${tag}`}
        titleTemplate={siteTitle}
        description={`Posts about ${tag}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <H2>Posts about {tag}</H2>
      <Ul>
        {posts.map(({ node }) => {
          const {
            id,
            fields: { slug },
            frontmatter: { title },
          } = node
          return (
            <Li key={id}>
              <Link to={slug}>{title}</Link>
            </Li>
          )
        })}
      </Ul>
    </Wrapper>
  )
}
