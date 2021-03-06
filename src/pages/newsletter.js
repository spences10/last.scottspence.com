import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import SEO from 'react-seo-component'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import { NewsLetterForm } from '../components/newsletter-form'
import { H1, Hr, P } from '../components/page-elements'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { ogImageUrl } from '../util/build-og-image-url'

const Wrapper = styled.main`
  min-height: 60vh;
  .visuallyhidden {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  p {
    margin-bottom: 2rem;
  }
  form {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 2fr 1fr;
    margin-top: ${({ theme }) => theme.spacing[10]};
    ${down('sm')} {
      grid-template-columns: repeat(1, 1fr);
      margin: 0 auto;
    }
  }
  input,
  button {
    height: 30px;
    border-radius: 5px;
    border: none;
    box-shadow: var(--box-shadow-xl);
  }
  input {
    padding: 10px;
  }
  button {
    cursor: pointer;
    background: linear-gradient(
      180turn,
      var(
        --title-gradient-from,
        ${({ theme }) => theme.colors.primary[200]}
      ),
      var(
        --title-gradient-to,
        ${({ theme }) => theme.colors.primary[500]}
      )
    );
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`

export default function Newsletter() {
  const {
    title,
    siteUrl,
    twitterUsername,
    authorName,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()

  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "stickers.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
    }
  `)

  return (
    <>
      <SEO
        title={`Newsletter`}
        titleTemplate={title}
        description={`Sign up to Scott's weekly email to get sneak peeks on what he's working on and helpful links and tips for web developers.`}
        image={ogImageUrl(
          authorName,
          'scottspence.com',
          `Newsletter - Signup`
        )}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Wrapper>
        <H1>Newsletter</H1>
        <P>
          The people on my mailing list are the first to hear about my
          new content and what I'm working on.
        </P>
        <P>
          A weekly newsletter full of useful links for web developers.
        </P>
        <P>Signing up now to get the next issue!</P>
        <NewsLetterForm />
        <Hr />
        <GatsbyImage
          image={
            data.placeholderImage.childImageSharp.gatsbyImageData
          }
          alt="stickers"
        />
      </Wrapper>
    </>
  )
}
