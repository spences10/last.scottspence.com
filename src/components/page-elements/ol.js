import React from 'react'
import styled from 'styled-components'
import { inlineCode } from './inline-code'

const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
  ul {
    margin: 0 ${({ theme }) => theme.spacing[4]};
    li {
      list-style-type: decimal;
    }
  }
  code {
    ${inlineCode}
  }
`

export const Ol = props => {
  return (
    <Wrapper>
      <ul {...props}>{props.children}</ul>
    </Wrapper>
  )
}
