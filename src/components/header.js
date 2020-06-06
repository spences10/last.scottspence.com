import React from 'react'
import styled from 'styled-components'
import { Link, linkStyle } from './shared-styles'

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
  ${linkStyle}
`

const StyledHeader = styled.header`
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  h1 {
    font-family: ${({ theme }) => theme.fontFamily.mono};
    font-size: ${({ theme }) => theme.fontSize['4xl']};
  }
  nav {
    display: flex;
    flex: 1;
    ul {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      flex-wrap: wrap;
      padding: 0;
      li {
        margin: 1rem;
      }
    }
  }
`
export const Header = ({ title, description }) => {
  return (
    <StyledHeader>
      <StyledLink to="/" id="top-of-page">
        <h1>{title}</h1>
        <p>{description}</p>
      </StyledLink>

      <nav>
        <ul>
          <li>
            <StyledLink to="/garden">Garden</StyledLink>
          </li>
          <li>
            <StyledLink to="/tags">Tags</StyledLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}
