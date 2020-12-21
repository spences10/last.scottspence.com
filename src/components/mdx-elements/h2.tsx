import { Text } from '@chakra-ui/react'
import React, { FunctionComponent, ReactNode } from 'react'
import { HideLink } from './hide-link'

export interface H2Props {
  children: ReactNode
}

export const H2: FunctionComponent<H2Props> = props => {
  return (
    <Text
      {...props}
      fontSize="3xl"
      my={3}
      fontFamily="heading"
      color="brand.100"
    >
      <HideLink>{props.children}</HideLink>
    </Text>
  )
}
