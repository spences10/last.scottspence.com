import React from 'react'
import styled from 'styled-components'
import { AutoLink } from './linked-headers'

const StyledText = styled.h3`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-family: ${({ theme }) => theme.fontFamily.serif};
  font-weight: 500;
  margin-top: ${({ theme }) => theme.spacing[8]};
  line-height: ${({ theme }) => theme.lineHeight.none};
  ${AutoLink};
`

export const H3 = props => {
  return <StyledText {...props}>{props.children}</StyledText>
}
