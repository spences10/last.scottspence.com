import React from 'react'
import { Box } from 'theme-ui'

const NotFoundPage = () => (
  <>
    <Box as="h1">404: Not Found</Box>
    <Box
      as="p"
      sx={{
        fontSize: 'xl',
        my: 5,
      }}
    >
      You just hit a route that doesn&#39;t exist... the sadness.
    </Box>
  </>
)

export default NotFoundPage
