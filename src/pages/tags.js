import { graphql } from 'gatsby'
import React from 'react'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import { H2, Li, Ul } from '../components/page-elements'
import {
  Link,
  linkHover,
  linkStyle,
} from '../components/shared-styles'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const StyledTags = styled.article`
  ul {
    display: flex;
    justify-content: start;
    flex-flow: row wrap;
    padding: 0rem;
    margin: 0rem;
  }
  li {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    list-style-type: none;
    margin: 1rem;
    margin-left: 0;
  }
  a {
    &:hover {
      opacity: 0.5 !important;
      text-decoration: underline;
    }
    ${linkStyle};
    ${linkHover};
    text-decoration: none;
  }
`

export default ({
  data: {
    allMdx: { group },
  },
}) => {
  const {
    title: siteTitle,
    siteUrl,
    twitterUsername,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()
  return (
    <>
      <SEO
        title={`Tags`}
        titleTemplate={siteTitle}
        description={`Tags`}
        pathname={`${siteUrl}/tags`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <H2>Tags</H2>
      <StyledTags>
        <Ul>
          {group.map(({ fieldValue, totalCount }) => {
            return (
              <Li key={fieldValue}>
                <Link to={`/tags/${fieldValue}/`}>
                  {fieldValue} ({totalCount})
                </Link>
              </Li>
            )
          })}
        </Ul>
      </StyledTags>
    </>
  )
}

export const query = graphql`
  query SITE_TAGS_QUERY {
    allMdx(filter: { frontmatter: { private: { eq: false } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      nodes {
        id
        fields {
          slug
        }
      }
    }
  }
`
