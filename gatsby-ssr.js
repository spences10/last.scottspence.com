import { ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import { wrapPageElement as wrap } from './src/root-wrapper'

export const wrapPageElement = wrap

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript
      initialColorMode="dark"
      key="chakra-ui-no-flash"
    />,
  ])
}
