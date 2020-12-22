import React from 'react'
import { WootWrapper } from './src/woot-wapper'

export const wrapPageElement = ({ element }) => {
  return <WootWrapper>{element}</WootWrapper>
}
