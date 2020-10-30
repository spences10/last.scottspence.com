import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
  font-weight: ${({ fontWeight }) => fontWeight};
`

export const Sarcasm = ({ children, fontWeight }) => {
  const sarky = children
    .split('')
    .map((char, i) => char[`to${i % 2 ? 'Upper' : 'Lower'}Case`]())
    .join('')
  return <Wrapper fontWeight={fontWeight}>{sarky}</Wrapper>
}
