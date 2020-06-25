import React, { useState } from 'react'
import styled from 'styled-components'
import { copyToClipboard } from '../util/copy-to-clipboard'
import { focusOutline, linkStyle } from './shared-styles'

const GetInTouchWrapper = styled.a`
  position: relative;
  ${linkStyle}
  div {
    padding: 0 5px;
    position: absolute;
    bottom: 30px;
    left: 20%;
    margin-left: -100px;
    margin-right: -100px;
    background: var(
      --colour-background-two,
      ${({ theme }) => theme.colors.gray[100]}
    );
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    button {
      font-size: ${({ theme }) => theme.fontSize.sm};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      ${focusOutline}
      background: none;
      color: inherit;
      border: none;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    a {
      font-size: ${({ theme }) => theme.fontSize.sm};
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
      ${focusOutline}
      color: inherit;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
    span {
      position: absolute;
      left: 50%;
      width: 15px;
      height: 15px;
      display: block;
      background: var(
        --colour-background-two,
        ${({ theme }) => theme.colors.gray[100]}
      );
      transform: translateY(-50%) rotate(45deg);
      z-index: -1;
    }
  }
`

export const GetInTouch = ({ children }) => {
  const [isShowing, isShowingSet] = useState(false)

  const handleClick = () => {
    copyToClipboard(`yo@scottspence.dev`)
    isShowingSet(false)
  }
  return (
    <GetInTouchWrapper href="#" onClick={() => isShowingSet(true)}>
      {isShowing && (
        <div onMouseLeave={() => isShowingSet(false)}>
          <button onClick={() => handleClick()}>Copy Email</button>
          <a
            href="mailto:yo@scottspence.dev?subject=Reaching out to say hi!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Email Client
          </a>
          <span />
        </div>
      )}
      {children}
    </GetInTouchWrapper>
  )
}
