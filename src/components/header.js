import React from 'react'
import styled from 'styled-components'
import { Link, linkStyle, rainbowAnimation } from './shared-styles'
import { ToggleTheme } from './toggle-theme'

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
  position: relative;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  &:hover {
    .dot-com {
      display: contents;
    }
  }
  h1 {
    font-family: Inconsolata, monospace;
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    background: linear-gradient(
      var(
        --title-gradient-from,
        ${({ theme }) => theme.colors.primary[200]}
      ),
      var(
        --title-gradient-to,
        ${({ theme }) => theme.colors.primary[500]}
      )
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    .first-name {
      font-weight: 300;
    }
    .last-name {
      font-weight: 800;
    }
    .dot-com {
      display: none;
    }
  }
  p {
    margin-top: -${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.fontSize.xs};
    ${rainbowAnimation}
  }

  button {
    position: absolute;
    right: 0;
    margin-top: 3px;
    background: none;
    border: none;
    img {
      width: 20px;
    }
    border-radius: ${({ theme }) => theme.borderRadius.full};
    outline: none;
    &:focus {
      box-shadow: ${({ theme }) => theme.boxShadow.outline};
    }
  }
`

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  ul {
    display: grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    grid-gap: 2.5rem;
    padding-inline-start: 0;
  }
`

export const Header = ({ title, description }) => {
  return (
    <>
      <StyledHeader>
        <StyledLink to="/" id="top-of-page">
          <h1>
            <span className="first-name">Scott</span>
            <span className="last-name">Spence</span>
            <span className="dot-com">.com</span>
          </h1>
          <p>{description}</p>
        </StyledLink>
        <ToggleTheme />
      </StyledHeader>
      <StyledNav>
        <ul>
          <li>
            <StyledLink to="/garden">Garden</StyledLink>
          </li>
          <li>
            <StyledLink to="/tags">Tags</StyledLink>
          </li>
          <li>
            <StyledLink to="/speaking">Speaking</StyledLink>
          </li>
        </ul>
      </StyledNav>
    </>
  )
}
