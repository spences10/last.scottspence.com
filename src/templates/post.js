import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import { H1, H4 } from '../components/page-elements'
import {
  Link,
  NegMargin,
  PostInfo,
} from '../components/shared-styles'
import { Share } from '../components/social-share'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const POPULAR_POSTS = [
  {
    title: `Build a coding blog from scratch with Gatsby and MDX`,
    slug: `/2019/10/31/build-an-mdx-blog/`,
  },
  {
    title: `Update Windows Subsystem Linux Ubuntu from 18.04 to 18.10`,
    slug: `2020/01/28/update-wsl-ubuntu-from-18.10-to-19.10`,
  },
  {
    title: `Add a Table of Contents with Smooth scroll using Gatsby and MDX`,
    slug: `/2020/02/13/smooth-scroll-toc-gatsby/`,
  },
  {
    title: `Upgrade Windows Subsystem Linux - Ubuntu 18.04 to Ubuntu 19.10`,
    slug: `/2019/04/01/update-wsl-from-18.04-18.10`,
  },
]

const PostWrapper = styled.article`
  padding-bottom: 40px;
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
  ${NegMargin}
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
      {POPULAR_POSTS.map(post => {
        return (
          <Link to={post.slug}>
            <H4>{post.title}</H4>
          </Link>
        )
      })}
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
