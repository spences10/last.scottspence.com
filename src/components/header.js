import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  height: 75px;
  max-width: 800px;
  margin: auto;
  margin-top: 30px;
  flex-wrap: wrap;
  h1 {
    font-family: 'Space Mono';
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
        margin-left: 2rem;
        margin-top: 20px;
      }
    }
  }
`
export const Header = ({ title, description }) => {
  return (
    <StyledHeader>
      <Link to="/" id="top-of-page">
        <h1>{title}</h1>
        <p>{description}</p>
      </Link>

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
