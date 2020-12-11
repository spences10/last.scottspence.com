import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
// import styled from 'styled-components'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { Footer } from './footer'
import { Header } from './header'

// const Styles = styled.main`
//   position: relative;
//   max-width: 640px;
//   margin: 0 auto;
//   padding: 0 20px;
// `

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const { title, description } = useSiteMetadata()
  return (
    <Box as="main" maxW={['100%', '50%', 'auto']} m="0 auto">
      <Header title={title} description={description} />
      {children}
      <Footer />
    </Box>
  )
}
