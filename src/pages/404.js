import React from 'react'
import styled from 'styled-components'
import { H1, H2, P } from '../components/page-elements'
import { PopularPosts } from '../components/popular-posts'
import {
  Link,
  linkStyle,
  rainbowAnimation,
} from '../components/shared-styles'

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
  ${linkStyle}
  ${rainbowAnimation}
`

export default () => {
  return (
    <>
      <H1>
        That's a nop!
        <span role="img" aria-label="crying face">
          😢
        </span>
      </H1>
      <H2>It looks like that page doesn't exist</H2>
      <P>
        There's plenty more content on the rest of the site, take a
        stroll through my{' '}
        <StyledLink to={`/garden`}>garden</StyledLink>.
      </P>
      <PopularPosts />
    </>
  )
}
