import React from 'react'
import styled from 'styled-components'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { Footer } from './footer'
import { Header } from './header'

const Styles = styled.main`
  position: relative;
  max-width: 640px;
  margin: 0 auto;
  padding: 0 20px;
`

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <Styles>
      <Header title={title} description={description} />
      {children}
      <Footer />
    </Styles>
  )
}
