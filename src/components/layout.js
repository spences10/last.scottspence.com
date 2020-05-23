import React from 'react'
import styled from 'styled-components'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { Header } from './header'

const Styles = styled.main`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 20px;
  a {
    color: inherit;
    outline: none;
    &:focus {
      box-shadow: ${({ theme }) => theme.boxShadow.outline};
      border-radius: ${({ theme }) => theme.borderRadius.lg};
    }
    &:visited {
      color: inherit;
    }
  }
`

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <Styles>
      <Header title={title} description={description} />
      {children}
    </Styles>
  )
}
