import { Redirect } from '@reach/router'
import React from 'react'
import SEO from 'react-seo-component'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { ogImageUrl } from '../util/build-og-image-url'

const IndexPage = () => {
  const {
    title,
    siteUrl,
    twitterUsername,
    authorName,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()

  return (
    <>
      <SEO
        title={`Giveaway`}
        titleTemplate={title}
        description={`Win a Wes Bos Advanced React and GraphQL course worth $139, draws made every Monday, Wednesday and Friday throughout February 2021`}
        image={ogImageUrl(
          authorName,
          'scottspence.com',
          `Wes Bos > Advanced React and GraphQL - Giveaway`
        )}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />

      <Redirect from={`/giveaway`} to={`/newsletter/`} noThrow />
    </>
  )
}

export default IndexPage
