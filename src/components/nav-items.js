import React from 'react'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import { useAnalytics } from '../contexts/fathom-event-tracking'

export const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 'about portfolio now uses';
  ${down('sm')} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'about portfolio'
      'now uses';
    margin: 0;
  }
  align-items: center;
  justify-items: center;
  grid-gap: 30px;
  margin: 0 -10rem;
`

const NavLink = styled.a`
  grid-area: ${({ gridArea }) => gridArea};
  align-items: center;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.gray[100]};
  background: linear-gradient(
    180turn,
    ${({ theme }) => theme.colors.primary[500]},
    ${({ theme }) => theme.colors.violet[500]}
  );
  outline: none;
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.outline};
    border-radius: 50px;
  }
  padding: 0.65rem 1rem;
  width: 100%;
  text-align: center;
  text-decoration: none;
`

export const NavItems = () => {
  const fa = useAnalytics()
  return (
    <NavWrapper aria-label={`Site navigation`}>
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
    </NavWrapper>
  )
}
