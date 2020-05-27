import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import { H1 } from '../components/page-elements'
import { PopularPosts } from '../components/popular-posts'
import { negMargin, PostInfo } from '../components/shared-styles'
import { Share } from '../components/social-share'
import { useAnalytics } from '../contexts/fathom-event-tracking'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const PostWrapper = styled.article`
  padding-bottom: ${({ theme }) => theme.spacing[20]};
  h1 {
  }
  small {
  }
`

const Private = styled.div`
  background-color: var(
    --colour-warn,
    ${({ theme }) => theme.colors.red[500]}
  );
  color: var(--colour-on-warn);
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-family: ${({ theme }) => theme.fontFamily.mono};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: ${({ theme }) => theme.spacing[3]};
  margin: ${({ theme }) => theme.spacing[3]};
  text-align: center;
  font-style: italic;
  ${negMargin}
  span {
    font-style: normal;
    padding: 0 ${({ theme }) => theme.spacing[5]};
    ${down('sm')} {
      padding: 0;
      &:before {
        content: ' ';
      }
      &:after {
        content: ' ';
      }
    }
  }
`

export default ({ data }) => {
  const fa = useAnalytics()
  const { siteUrl, twitterUsername } = useSiteMetadata()
  const {
    frontmatter: { title, private: isPrivate },
    fields: { editLink, slug },
    timeToRead,
    body,
  } = data.mdx
  return (
    <>
      <PostWrapper>
        <H1>{title}</H1>
        {isPrivate && (
          <Private>
            <span role="img" aria-label="shushing face">
              🤫
            </span>
            This is a private post
            <span role="img" aria-label="eyes">
              👀
            </span>
          </Private>
        )}
        <PostInfo>
          <span className="postTimeToRead">
            {timeToRead * 2} minutes to read
          </span>
          <span className="postEditOnGitHub">
            <a
              onClick={() => fa('8C4MCGZM')}
              href={editLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Edit on GitHub
            </a>
          </span>
        </PostInfo>
        <MDXRenderer>{body}</MDXRenderer>
      </PostWrapper>
      <Share
        url={`${siteUrl}${slug}`}
        title={title}
        twitterHandle={twitterUsername}
      />
      <PopularPosts />
    </>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
      timeToRead
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        private
      }
      fields {
        slug
        editLink
      }
    }
  }
`
