import React, { useRef } from 'react'
import About from '../../content/copy/about'
import Now from '../../content/copy/now'
import Portfolio from '../../content/copy/portfolio'
import Uses from '../../content/copy/uses'
import { BackToTop } from '../components/back-to-top'
import { useOnScreen } from '../hooks/use-on-screen'

export default () => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, '-100px')
  return (
    <>
      <About />
      <section ref={ref}>
        <Portfolio />
        <Now />
        <Uses />
      </section>
      <BackToTop visible={onScreen} />
    </>
  )
}
