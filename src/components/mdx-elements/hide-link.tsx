import styled from '@emotion/styled'
import React, { FunctionComponent, ReactNode } from 'react'
import { useThemeValues } from '../../hooks/theme-values'

export interface HideLinkProps {
  children: ReactNode
}

export const HideLink: FunctionComponent<HideLinkProps> = props => {
  const { theme } = useThemeValues()
  const svgFill = theme.colors?.text
  const HideLinkStyle = styled.span`
    a {
      float: left;
      margin-left: -25px;
    }
    svg {
      visibility: hidden;
      height: 35px;
      width: 20px;
      fill: ${svgFill};
    }
    &:hover {
      svg {
        visibility: visible;
        height: 35px;
        width: 20px;
      }
    }
  `

  return <HideLinkStyle {...props}>{props.children}</HideLinkStyle>
}
