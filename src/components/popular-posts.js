import React from 'react'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import { H3, P } from './page-elements'
import { linkStyle, StyledLink } from './shared-styles'

const POPULAR_POSTS = [
  {
    title: `Build a coding blog from scratch with Gatsby and MDX`,
    slug: `2019/10/31/build-an-mdx-blog/`,
  },
  {
    title: `Update Windows Subsystem Linux Ubuntu from 18.04 to 18.10`,
    slug: `2020/01/28/update-wsl-ubuntu-from-18.10-to-19.10`,
  },
  {
    title: `Add a Table of Contents with Smooth scroll using Gatsby and MDX`,
    slug: `2020/02/13/smooth-scroll-toc-gatsby/`,
  },
  {
    title: `Upgrade Windows Subsystem Linux - Ubuntu 18.04 to Ubuntu 19.10`,
    slug: `2019/04/01/update-wsl-from-18.04-18.10`,
  },
]

const Wrapper = styled.aside`
  padding-top: ${({ theme }) => theme.spacing[32]};
  padding-bottom: ${({ theme }) => theme.spacing[6]};
  margin-left: -${({ theme }) => theme.spacing[40]};
  margin-right: -${({ theme }) => theme.spacing[40]};
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
    ${down('sm')} {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  article {
    margin: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => theme.spacing[6]};
    border: 1px solid ${({ theme }) => theme.colors.gray[500]};
    color: ${({ theme }) => theme.colors.gray[700]};
    background: ${({ theme }) => theme.colors.gray[100]};
    z-index: 1;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray[200]};
      transition: background-color 300ms;
    }
  }
  a {
    display: inline-block;
    text-decoration: none !important;
    h3 {
      margin: 0;
    }
    ${linkStyle}
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
