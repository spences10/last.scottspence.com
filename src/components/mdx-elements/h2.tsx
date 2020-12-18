import { Text } from '@chakra-ui/react'
import React, { FunctionComponent, ReactNode } from 'react'

export interface H2Props {
  children: ReactNode
}

export const H2: FunctionComponent<H2Props> = ({ children }) => {
  // const yo = useColorModeValue('light', 'dark')
  return (
    <Text
      fontSize="4xl"
      my={3}
      fontFamily="heading"
      color="brand.100"
    >
      {children}
    </Text>
  )
}
