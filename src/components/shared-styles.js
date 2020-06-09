import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { down } from 'styled-breakpoints'
import styled, { css } from 'styled-components'

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
  margin-top: ${({ theme }) => theme.spacing[0]};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
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
      color: ${({ theme }) => theme.colors.gray[700]};
      text-decoration: underline;
      ${linkStyle};
      ${linkHover};
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
    padding: 0 ${({ theme }) => theme.spacing[1]};
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
