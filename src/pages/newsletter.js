import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import { H1, Hr, P } from '../components/page-elements'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { ogImageUrl } from '../util/build-og-image-url'
import happyForm from '../util/happy-form'
import useForm from '../util/use-from'

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
    description,
    siteUrl,
    twitterUsername,
    authorName,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "stickers.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const { values, updateValue } = useForm({ name: ``, email: `` })
  return (
    <>
      <SEO
        title={`Newsletter`}
        titleTemplate={title}
        description={description}
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
          Occasional details about intersting things I'm working on.
        </P>
        <P>
          Get involved to be in with a chance to win a dev sticker
          pack!
        </P>
        <form
          class="kwes-form"
          onSubmit={e => {
            e.preventDefault()
            happyForm(
              values.email,
              values.name,
              '785c6867-cc31-46e9-84af-c5bf6935acd7'
            )
          }}
          action="https://kwes.io/api/foreign/forms/j7gBZsxccB5zeDXJ6ZNY"
        >
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            name="name"
            rules="required|max:255"
            value={values.name}
            onChange={updateValue}
          ></input>
          <label htmlFor="email">Your Email:</label>
          <input
            type="text"
            name="email"
            rules="required|max:255"
            value={values.email}
            onChange={updateValue}
          ></input>
          <button type="submit">Submit</button>
        </form>
        <Hr />
        <Img
          alt="stickers"
          fluid={data.placeholderImage.childImageSharp.fluid}
          // fadeIn={false}
          // loading="eager"
        />
      </Wrapper>
    </>
  )
}
