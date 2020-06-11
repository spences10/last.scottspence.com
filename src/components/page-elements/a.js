import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAnalytics } from '../../contexts/event-tracking'
import { linkHover, linkStyle } from '../shared-styles'
import { inlineCode } from './inline-code'

export const StyledA = styled.a`
  text-decoration: underline;
  ${linkStyle};
  ${linkHover};
  code {
    ${inlineCode}
  }
`

export const A = props => {
  const fa = useAnalytics()
  const containsGoalId = props.href?.includes(`goalId`)
  const [goalId, goalIdSet] = useState(``)
  const [newHref, newHrefSet] = useState(``)

  useEffect(() => {
    if (containsGoalId) {
      const url = new URL(props.href)
      goalIdSet(url.searchParams.get(`goalId`))
      url.searchParams.delete(`goalId`)
      newHrefSet(url.href)
    }
  }, [containsGoalId, props.href])

  const onClick = () => {
    if (goalId) {
      fa(goalId, 0)
    }
  }
  return (
    <StyledA
      {...props}
      href={containsGoalId ? newHref : props.href}
      onClick={onClick}
    >
      {props.children}
    </StyledA>
  )
}
