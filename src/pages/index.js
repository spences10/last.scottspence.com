import { Link } from 'gatsby'
import React from 'react'
import About from '../../content/copy/about'
import Now from '../../content/copy/now'
import Portfolio from '../../content/copy/portfolio'
import Uses from '../../content/copy/uses'
import { BackToTop } from '../components/back-to-top'

export default () => {
  return (
    <>
      <Link to="/garden">Garden</Link>
      <Link to="/tags">Tags</Link>
      <About />
      <section id={`back-to-top-intersection`}>
        <Portfolio />
        <Now />
        <Uses />
      </section>
      <BackToTop />
    </>
  )
}
