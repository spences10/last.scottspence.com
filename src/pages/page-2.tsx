// import { Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Box } from 'theme-ui'

const SecondPage = () => (
  <>
    <Box as="h1">Hi from the second page</Box>
    <Box
      as="p"
      sx={{
        fontSize: 'xl',
        my: 5,
      }}
    >
      Welcome to page 2
    </Box>
    {/* <Link
      as={GatsbyLink}
      to="/"
      color="purple.500"
      fontSize="xl"
      textDecor="underline"
    > */}
    Go back to the homepage
    {/* </Link> */}
  </>
)

export default SecondPage
