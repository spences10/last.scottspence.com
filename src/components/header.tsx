import React, { FunctionComponent } from 'react'
import { Box, Container, Flex, Text } from 'theme-ui'
import { InternalLink } from './internal-link'
import ThemeToggle from './theme-toggle'

interface HeaderProps {
  siteTitle: string
  description: string
}

export const Header: FunctionComponent<HeaderProps> = ({
  siteTitle,
  description,
}) => (
  <Box
    as="header"
    sx={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <Container
      sx={{
        maxWidth: '640px',
      }}
    >
      <Flex>
        <Box as="h2" variant="styles.h2">
          <InternalLink to="/">{siteTitle}</InternalLink>
          <Text>{description}</Text>
        </Box>
        <Box as="div" sx={{ flex: 1 }} />
        <Box
          as="div"
          sx={{ position: 'relative', alignSelf: 'center' }}
        >
          <ThemeToggle />
        </Box>
      </Flex>
    </Container>
  </Box>
)
