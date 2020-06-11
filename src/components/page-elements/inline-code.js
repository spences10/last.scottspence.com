import React from 'react'
import styled, { css } from 'styled-components'

export const inlineCode = css`
  padding: 0 3px;
  background-color: var(
    --colour-on-secondary,
    ${({ theme }) => theme.colors.gray[300]}
  );
  font-family: ${({ theme }) => theme.fontFamily.mono};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`

const StyledText = styled.code`
  ${inlineCode}
`

export const InlineCode = ({ children }) => {
  return <StyledText>{children}</StyledText>
}
