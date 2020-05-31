import React from 'react'
import styled from 'styled-components'
import { Link } from './shared-styles'

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`

const StyledHeader = styled.header`
  display: flex;
  /* height: 75px; */
  /* max-width: 800px; */
  margin: auto;
  /* margin-top: 30px; */
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
        /* margin-top: 20px; */
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
            <Link to="/garden">Garden</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}
