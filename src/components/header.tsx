import {
  Container,
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React, { FunctionComponent } from 'react'
import ThemeToggle from './theme-toggle'

interface HeaderProps {
  siteTitle: string
  description: string
}

export const Header: FunctionComponent<HeaderProps> = ({
  siteTitle,
  description,
}) => (
  <Box as="header" background="rebeccapurple" marginBottom="1.45rem">
    <Container maxW="lg">
      <Box as="div" m="0 auto" p="1.45rem 1.0875rem">
        <Flex>
          <Heading margin="0">
            <Link
              as={GatsbyLink}
              to="/"
              color="white"
              _hover={{ textDecor: 'none' }}
            >
              {siteTitle}
            </Link>
            <Text>{description}</Text>
          </Heading>
          <Spacer />
          <Box as="div" position="relative">
            <ThemeToggle />
          </Box>
        </Flex>
      </Box>
    </Container>
  </Box>
)
