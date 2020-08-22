import React from 'react'
import { TwitterShareButton } from 'react-share'
import styled from 'styled-components'
import { focusOutline } from './shared-styles'
const ShareWrapper = styled.section`
  h6 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    background: linear-gradient(
      0.25turn,
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
  span {
    font-weight: 900;
  }
  button {
    ${focusOutline}
  }
`

export const Share = ({ url, title, twitterHandle }) => {
  return (
    <ShareWrapper>
      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle.split('@').join('')}
      >
        <h6>
          Useful? Please consider <span>sharing</span> this on
          Twitter.
        </h6>
      </TwitterShareButton>
    </ShareWrapper>
  )
}
