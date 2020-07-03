import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { down } from 'styled-breakpoints'
import styled, { css, keyframes } from 'styled-components'

// For the gradient thing, check
// https://github.com/fkhadra/react-toastify-doc/blob/e09ea2aabc/src/components/Actions.styles.ts
// https://github.com/ChristopherBiscardi/christopherbiscardi.github.com/blob/pure-mdx/packages/www/src/components/convertkit-form/index.js#L17
// https://github.com/ChristopherBiscardi/christopherbiscardi.github.com/blob/1fb406eafae449124f47179b08b2e2b2e4aa5dc6/packages/www/src/page-wrapper.js#L418

// Examples: https://codesandbox.io/s/muddy-sun-gp0el?file=/src/App.js:105-504

const gradientAnimation = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`

export const rainbowAnimation = css`
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
`

export const focusOutline = css`
  outline: none;
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.outline};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }
`

export const linkStyle = css`
  color: inherit;
  &:visited {
    color: inherit;
  }
  ${focusOutline}
`

export const linkHover = css`
  &:hover {
    transition: opacity 300ms;
    opacity: 0.5;
  }
`

export const Link = styled(props => <GatsbyLink {...props} />)``

export const StyledLink = styled(Link)`
  ${linkStyle}
`

export const PostInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing[1]};
  color: var(
    --colour-primary,
    ${({ theme }) => theme.colors.primary[100]}
  );
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-transform: uppercase;
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  grid-template-areas: 'date ttr edit';
  ${down('sm')} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      'ttr'
      'edit';
  }
  .postTimeToRead {
    grid-area: ttr;
    margin-right: ${({ theme }) => theme.spacing[1]};
  }
  .postEditOnGitHub {
    grid-area: edit;
    &:before {
      content: '· ';
    }
    ${down('sm')} {
      &:before {
        content: '';
      }
    }
    a {
      text-decoration: underline;
      ${linkStyle};
      ${linkHover};
      color: var(
        --colour-primary,
        ${({ theme }) => theme.colors.primary[100]}
      );
      cursor: pointer;
    }
  }
`

export const negMargin = css`
  margin-left: -${({ theme }) => theme.spacing[12]};
  margin-right: -${({ theme }) => theme.spacing[12]};
  ${down('sm')} {
    margin-left: -${({ theme }) => theme.spacing[0]};
    margin-right: -${({ theme }) => theme.spacing[0]};
  }
`

// https://css-tricks.com/the-current-state-of-styling-scrollbars/
export const CustomScroll = css`
  scrollbar-width: thin;
  scrollbar-color: var(--thumb-bg) var(--scrollbar-bg);
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    background: var(--scrollbar-bg);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--thumb-bg);
    border-radius: 14px;
    border: 3px solid var(--scrollbar-bg);
  }
`

export const Toc = styled.aside`
  position: fixed;
  left: calc(50% + 400px);
  top: 80px;
  max-height: 50vh;
  width: 310px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--box-shadow-xl);
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: ${({ theme }) => theme.spacing[3]};
  margin: ${({ theme }) => theme.spacing[3]} 0;
  font-size: ${({ theme }) => theme.fontSize.md};
  * {
    width: 100%;
  }
  a {
    color: var(
      --colour-on-background,
      ${({ theme }) => theme.colors.gray[900]}
    );
    text-decoration: none;
    ${linkStyle};
    ${linkHover};
  }
  ${down('sm')} {
    display: none;
  }
  h3 {
    margin: 0 ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-family: ${({ theme }) => theme.fontFamily.serif};
    padding: ${({ theme }) => theme.spacing[1]};
  }
  ul {
    overflow: hidden;
    overflow-y: auto;
    margin: ${({ theme }) => theme.spacing[3]};
    ${CustomScroll}
    &::-webkit-scrollbar {
      width: 11px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 14px;
    }
  }
  li {
    padding: ${({ theme }) => theme.spacing[1]};
    line-height: ${({ theme }) => theme.lineHeight.tight};
    margin-bottom: ${({ theme }) => theme.spacing[1]};
    margin-right: ${({ theme }) => theme.spacing[4]};
  }
`
