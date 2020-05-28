import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { down } from 'styled-breakpoints'
import styled, { css } from 'styled-components'

export const Link = styled(props => <GatsbyLink {...props} />)``

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
      text-decoration-color: ${({ theme }) => theme.colors.gray[700]};
      &:hover {
        opacity: 0.5;
      }
      cursor: pointer;
    }
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
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
  }
  ${down('sm')} {
    display: none;
  }
  h3 {
    margin: 0 ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-family: ${({ theme }) => theme.fontFamily.serif};
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
    line-height: ${({ theme }) => theme.lineHeight.tight};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
    margin-right: ${({ theme }) => theme.spacing[4]};
  }
  a {
    text-decoration: none;
  }
`
