import React from 'react'
import styled from 'styled-components'
import { inlineCode } from './inline-code'

export const StyledLi = styled.li`
  list-style-type: circle;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  word-break: break-word;
  line-height: ${({ theme }) => theme.lineHeight.tight};
  p {
    margin-top: 10px;
  }
  code {
    ${inlineCode}
  }
  input[type='checkbox'] {
    appearance: none;
    position: relative;
    width: 1em;
    height: 1em;
    border: 1px solid gray;
    vertical-align: -4px;
    color: green;
    &:before {
      content: '✔';
      position: absolute;
      font-size: 1.6em;
      right: -5.3px;
      top: -0.6em;
      visibility: hidden;
    }
    &:checked::before {
      visibility: visible;
    }
    &::disabled {
      border-color: black;
      background: #ddd;
      color: gray;
    }
  }
`

export const Li = props => {
  return <StyledLi {...props}>{props.children}</StyledLi>
}
