import React, { FunctionComponent } from 'react'
import { Box, Container } from 'theme-ui'
import { useSiteMetadata } from '../hooks/site-metadata'
import { Header } from './header'

const Layout: FunctionComponent = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <>
      <Header
        siteTitle={title || `Title`}
        description={`Scott's knowledge pamphlet`}
      />
      <Container
        sx={{
          maxWidth: 640,
          padding: ['20px', 0, 0],
        }}
      >
        <Box
          as="main"
          sx={{
            width: '100%',
            flex: '1 1 auto',
          }}
        >
          {children}
        </Box>
        <Box as="footer" variant="styles.p">
          © {new Date().getFullYear()} Scott Spence. All Rights
          Reserved.
        </Box>
      </Container>
    </>
  )
}

export default Layout
