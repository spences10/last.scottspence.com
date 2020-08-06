import React, { useRef } from 'react'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import About from '../../content/copy/about'
import Now from '../../content/copy/now'
import Portfolio from '../../content/copy/portfolio'
import Uses from '../../content/copy/uses'
import { BackToTop } from '../components/back-to-top'
import { MugFace } from '../components/mug-face'
import { NavItems } from '../components/nav-items'
import { useOnScreen } from '../hooks/use-on-screen'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { useWindowSize } from '../hooks/use-window-size'
import { ogImageUrl } from '../util/build-og-image-url'

const Wrapper = styled.section`
  min-height: 90vh;
  .gatsby-image-wrapper {
    margin: 0 auto;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    height: 200px;
    width: 200px;
  }
  h1 {
    text-align: center;
  }
  nav {
    position: relative;
    display: grid;
    grid-gap: 30px;
    bottom: 0;
    margin: 0 -10rem;
    margin-top: 25%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 'about portfolio now uses';
  }
`

const LandingPage = ({ children }) => {
  const { height } = useWindowSize()

  return <Wrapper height={height}>{children}</Wrapper>
}

export default () => {
  const {
    title,
    description,
    siteUrl,
    twitterUsername,
    authorName,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()
  const ref = useRef()
  const onScreen = useOnScreen(ref)

  return (
    <>
      <SEO
        title={`Home`}
        titleTemplate={title}
        description={description}
        image={ogImageUrl(
          authorName,
          'scottspence.com',
          `Scott's Digital Garden`
        )}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <LandingPage>
        <MugFace />
        <section ref={ref}>
          <NavItems />
        </section>
      </LandingPage>
      <About />
      <Portfolio />
      <Now />
      <Uses />
      <BackToTop visible={onScreen} />
    </>
  )
}
