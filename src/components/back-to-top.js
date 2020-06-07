import React from 'react'
import styled from 'styled-components'
import { linkHover, linkStyle } from './shared-styles'

const Wrapper = styled.a`
  position: fixed;
  bottom: 0;
  right: 30px;
  z-index: 1;
  cursor: pointer;
  pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};
  transform: ${({ visible }) =>
    visible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 150px, 0)'};
  transition: all 0.4s;
  max-width: 100px;
  border-radius: 10px 10px 0 0 !important;
  padding: 20px;
  text-align: center;
  -webkit-backdrop-filter: saturate(180%) blur(5px);
  backdrop-filter: saturate(80%) blur(5px);
  background-color: hsla(204, 45%, 98%, 0.8);
  text-decoration: none;
  ${linkStyle};
  ${linkHover};
`

export const BackToTop = ({ visible }) => {
  return (
    <Wrapper
      href="#top-of-page"
      aria-label="back to top navigation"
      visible={visible}
    >
      <p>Back to Top</p>
    </Wrapper>
  )
}
