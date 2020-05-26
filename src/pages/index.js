import React, { useRef } from 'react'
import styled from 'styled-components'
import About from '../../content/copy/about'
import Now from '../../content/copy/now'
import Portfolio from '../../content/copy/portfolio'
import Uses from '../../content/copy/uses'
import { BackToTop } from '../components/back-to-top'
import { MugFace } from '../components/mug-face'
import { NavItems } from '../components/nav-items'
import { useOnScreen } from '../hooks/use-on-screen'

const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 4vh 0px;
  span {
    &:before {
      content: ' ';
    }
  }
  h1 {
    display: inline-block;
    text-align: center;
  }
`

const LandingPage = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default () => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, '-100px')
  return (
    <>
      <LandingPage>
        <MugFace />
        <NavItems />
      </LandingPage>
      <section ref={ref}>
        <About />
        <Portfolio />
        <Now />
        <Uses />
      </section>
      <BackToTop visible={onScreen} />
    </>
  )
}
