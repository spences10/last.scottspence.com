import React from 'react'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import { H1, P } from '../components/page-elements'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { ogImageUrl } from '../util/build-og-image-url'

const Wrapper = styled.main`
  min-height: 60vh;
  form {
    display: grid;
    label,
    button {
      padding: 1rem 0;
    }
    input {
      margin: 1rem 0;
      height: 2rem;
    }
  }
`

export default function MailingList() {
  const {
    title,
    description,
    siteUrl,
    twitterUsername,
    authorName,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()
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
          action="https://kwes.io/api/foreign/forms/j7gBZsxccB5zeDXJ6ZNY"
        >
          <label for="name">Your Name:</label>
          <input
            type="text"
            name="name"
            rules="required|max:255"
          ></input>
          <label for="email">Your Email:</label>
          <input
            type="text"
            name="email"
            rules="required|max:255"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </Wrapper>
    </>
  )
}
