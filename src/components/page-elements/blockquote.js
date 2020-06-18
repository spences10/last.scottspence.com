import React from 'react'
import styled from 'styled-components'

const StyledBlockquote = styled.blockquote`
  margin: 20px;
  p {
    margin-top: 0;
    padding: 20px;
    border-left: 5px solid ${({ theme }) => theme.colors.gray[700]};
    background-color: var(
      --colour-background-two,
      ${({ theme }) => theme.colors.gray[200]}
    );
    padding-left: 15px;
    font-style: italic;
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    color: var(--colour-on-background);
    word-break: break-word;
  }
  svg {
    margin: -20px;
    margin-left: 20px;
  }
`

export const Blockquote = ({ children }) => {
  return (
    <StyledBlockquote>
      <Quote fill="#4a5568" />
      {children}
      <Quote fill="#4a5568" rotate="180" />
    </StyledBlockquote>
  )
}

const Quote = ({ fill, rotate }) => {
  return (
    <div style={{ transform: `rotate(${rotate}deg)` }}>
      <svg width="52" height="40" viewBox="0 0 62 50" fill="none">
        <path
          d="M61.8 0C45.63 4.36 35.4 20.33 35.4 34.65 35.4 44.19 41.33 50 49.3 50 56.68 50 62 44.2 62 37.14c0-6.85-4.5-12.04-10.44-12.87-1.63-.2-2.25-.83-2.25-2.28 0-8.3 4.91-17.22 12.69-21.58L61.8 0zM26.6 0C10.44 4.36 0 20.33 0 34.65 0 44.19 6.14 50 13.91 50c7.37 0 12.9-5.8 12.9-12.86 0-6.85-4.5-12.04-10.44-12.87-1.84-.2-2.25-.83-2.25-2.28 0-8.3 4.91-17.22 12.69-21.58L26.6 0z"
          fill={fill}
        ></path>
      </svg>
    </div>
  )
}
