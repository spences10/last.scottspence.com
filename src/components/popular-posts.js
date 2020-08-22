import React from 'react'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import { H3, P } from './page-elements'
import { linkHover, linkStyle, StyledLink } from './shared-styles'

const POPULAR_POSTS = [
  {
    title: `Build a coding blog from scratch with Gatsby and MDX`,
    slug: `2019/10/31/build-an-mdx-blog/`,
  },
  {
    title: `Add a Table of Contents with Smooth scroll using Gatsby and MDX`,
    slug: `2020/02/13/smooth-scroll-toc-gatsby/`,
  },
  {
    title: `Globally Style the Gatsby Default Starter with styled-components v5`,
    slug: `2020/02/06/globally-style-gatsby-styled-components/`,
  },
  {
    title: `Windows Web-dev bootstrap`,
    slug: `2018/12/24/wsl-bootstrap-2019/`,
  },
]

const Wrapper = styled.aside`
  padding-top: ${({ theme }) => theme.spacing[32]};
  padding-bottom: ${({ theme }) => theme.spacing[6]};
  margin-left: -${({ theme }) => theme.spacing[40]};
  margin-right: -${({ theme }) => theme.spacing[40]};
  ${down('md')} {
    margin-left: ${({ theme }) => theme.spacing[5]};
    margin-right: ${({ theme }) => theme.spacing[5]};
  }
  ${down('sm')} {
    margin-left: -${({ theme }) => theme.spacing[3]};
    margin-right: -${({ theme }) => theme.spacing[3]};
  }
  p {
    margin-left: ${({ theme }) => theme.spacing[3]};
  }
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    ${down('md')} {
      grid-template-columns: repeat(2, 1fr);
    }
    ${down('sm')} {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  article {
    margin: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => theme.spacing[6]};
    color: var(
      --colour-on-background,
      ${({ theme }) => theme.colors.gray[900]}
    );
    background: var(
      --colour-background,
      ${({ theme }) => theme.colors.gray[100]}
    );
    z-index: 1;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: var(--box-shadow-xl);
  }
  a {
    display: inline-block;
    text-decoration: none !important;
    h3 {
      margin: 0;
    }
    ${linkStyle}
    &:hover {
      ${linkHover}
    }
  }
`

export const PopularPosts = () => {
  return (
    <Wrapper>
      <P>Take a look at some popular content from me...</P>
      <div>
        {POPULAR_POSTS.map(post => (
          <article key={post.slug}>
            <StyledLink to={`/${post.slug}`}>
              <H3>{post.title}</H3>
            </StyledLink>
          </article>
        ))}
      </div>
    </Wrapper>
  )
}
