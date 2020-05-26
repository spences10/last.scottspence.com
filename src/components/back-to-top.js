import React from 'react'
import styled from 'styled-components'

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
  border-radius: 10px 10px 0 0;
  padding: 20px;
  text-align: center;
  backdrop-filter: saturate(80%) blur(5px);
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
