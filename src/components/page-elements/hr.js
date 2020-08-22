import React from 'react'
import styled from 'styled-components'

const StyledHr = styled.hr`
  margin-top: ${({ theme }) => theme.spacing[6]};
  opacity: 0.5;
  color: var(
    --colour-secondary,
    ${({ theme }) => theme.colors.gray[300]}
  );
`

export const Hr = props => {
  return <StyledHr {...props}>{props.children}</StyledHr>
}
