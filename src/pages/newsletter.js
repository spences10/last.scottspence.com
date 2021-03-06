import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import { NewsLetterForm } from '../components/newsletter-form'
import { H1, Hr, P } from '../components/page-elements'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { ogImageUrl } from '../util/build-og-image-url'

const Wrapper = styled.main`
  min-height: 60vh;
  p {
    margin-bottom: 2rem;
  }
  form {
    display: grid;
    label,
    button {
      padding: 1rem 0;
    }
    input {
      height: 2rem;
    }
    button {
      margin-top: 2rem;
      border-radius: 50px;
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
      color: ${({ theme }) => theme.colors.gray[100]};
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
      outline: none;
      border: none;
    }
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
