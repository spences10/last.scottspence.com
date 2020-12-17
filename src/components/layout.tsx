import { Box } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import { useSiteMetadata } from '../hooks/site-metadata'
import Header from './header'

const Layout: FunctionComponent = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <>
      <Header siteTitle={title || `Title`} />
      <Box
        as="div"
        margin="0 auto"
        maxWidth="640px"
        padding="0 1.0875rem 1.45rem"
      >
        <Box as="main">{children}</Box>
        <Box as="footer" marginTop="2rem" fontSize="xl">
          © {new Date().getFullYear()} Scott Spence. All Rights
          Reserved.
        </Box>
      </Box>
    </>
  )
}

export default Layout
