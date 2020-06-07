import React, { useRef } from 'react'
import SEO from 'react-seo-component'
import { down } from 'styled-breakpoints'
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
import { ogImageUrl } from '../util/build-og-image-url'

const Wrapper = styled.section`
  position: relative;
  display: grid;
  grid-auto-rows: min-content;
  min-height: 100vh;
  ${down('md')} {
    min-height: 90vh;
  }
  div {
    margin: 0 auto;
    margin-top: 30%;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    height: 200px;
    width: 200px;
    ${down('sm')} {
      height: 150px;
      width: 150px;
    }
  }
  h1 {
    text-align: center;
    margin-top: 30%;
    ${down('sm')} {
      margin-top: 10%;
    }
    span {
      &:before {
        content: ' ';
      }
    }
  }
  nav {
    position: relative;
    bottom: 0;
    margin: 0 -10rem;
    margin-top: 30%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 'about portfolio now uses';
    ${down('md')} {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        'about portfolio'
        'now uses';
      margin: 0;
      margin-top: 30%;
    }
    ${down('sm')} {
      margin-top: 20%;
    }
    grid-gap: 30px;
  }
`

const LandingPage = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
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
