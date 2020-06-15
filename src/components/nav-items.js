import React from 'react'
import styled from 'styled-components'
import { useAnalytics } from '../contexts/event-tracking'

const NavLink = styled.a`
  grid-area: ${({ gridArea }) => gridArea};
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[100]};
  background: linear-gradient(
    180turn,
    var(
      --title-gradient-from,
      ${({ theme }) => theme.colors.primary[200]}
    ),
    var(
      --title-gradient-to,
      ${({ theme }) => theme.colors.primary[500]}
    )
  );
  outline: none;
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.outline};
    border-radius: 50px !important;
  }
  padding: 0.65rem 1rem;
  text-align: center;
  text-decoration: none;
  height: min-content;
`

export const NavItems = () => {
  const fa = useAnalytics()
  return (
    <nav aria-label={`page navigation`}>
      <NavLink
        gridArea={`about`}
        href={`#hi-im-scott`}
        onClick={() => fa('2DRIXVSS')}
      >
        About
      </NavLink>
      <NavLink
        gridArea={`portfolio`}
        href={`#portfolio`}
        onClick={() => fa('NE5JFD1S')}
      >
        Portfolio
      </NavLink>
      <NavLink
        gridArea={`now`}
        href={`#what-im-doing-now`}
        onClick={() => fa('Z8N5C2XV')}
      >
        Now
      </NavLink>
      <NavLink
        gridArea={`uses`}
        href={`#uses`}
        onClick={() => fa('AALDN3U2')}
      >
        Uses
      </NavLink>
    </nav>
  )
}
