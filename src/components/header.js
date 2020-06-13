import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link, linkStyle } from './shared-styles'
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

// For the gradient thing, check
// https://github.com/fkhadra/react-toastify-doc/blob/e09ea2aabc/src/components/Actions.styles.ts
// https://github.com/ChristopherBiscardi/christopherbiscardi.github.com/blob/pure-mdx/packages/www/src/components/convertkit-form/index.js#L17
// https://github.com/ChristopherBiscardi/christopherbiscardi.github.com/blob/1fb406eafae449124f47179b08b2e2b2e4aa5dc6/packages/www/src/page-wrapper.js#L418

//  Examples: https://codesandbox.io/s/muddy-sun-gp0el?file=/src/App.js:105-504

const gradientAnimation = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  h1 {
    font-family: ${({ theme }) => theme.fontFamily.mono};
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
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: var(
      --colour-on-background,
      ${({ theme }) => theme.colors.gray[900]}
    );
    background: linear-gradient(
        90deg,
        var(--rainbow-one, #9349f0),
        var(--rainbow-two, #8f6f14),
        var(--rainbow-three, #da0498),
        var(--rainbow-four, #b05d2e),
        var(--rainbow-five, #864bfe),
        var(--rainbow-six, #cc4438),
        var(--rainbow-one, #a269ee)
      )
      0% 0% / 400%;
    animation: ${gradientAnimation} 180s ease-in-out infinite;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    &:hover {
      animation: ${gradientAnimation} 50s ease-in-out infinite;
    }
  }
  nav {
    display: flex;
    flex: 1;
    margin-top: 10px;
    ul {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      flex-wrap: wrap;
      padding: 0;
      li {
        bottom: 0;
        margin: 0 1rem;
        button {
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
          <li>
            <ToggleTheme />
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}
