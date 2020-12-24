import React, { FunctionComponent, ReactNode } from 'react'
import { Box } from 'theme-ui'

export interface H2Props {
  children: ReactNode
}

export const H2: FunctionComponent<H2Props> = props => {
  return (
    <Box {...props} as="h2" variant="styles.h2">
      <Box as="span" variant="styles.hideLink">
        {props.children}
      </Box>
    </Box>
  )
}
