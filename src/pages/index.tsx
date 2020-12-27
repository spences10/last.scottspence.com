// import { Link as GatsbyLink } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { useQuery } from 'react-query'
import SEO from 'react-seo-component'
import { Heading, Text } from 'theme-ui'
import { InternalLink } from '../components/internal-link'
import { useSiteMetadata } from '../hooks/site-metadata'
import { ogImageUrl } from '../util/get-og-image'

const IndexPage: FunctionComponent = () => {
  const {
    title,
    description,
    siteUrl,
    twitterUsername,
    authorName,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()

  const { isLoading, error, data } = useQuery('nameData', () =>
    fetch('https://random-blog-name.vercel.app/api').then(res =>
      res.json()
    )
  )

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>An error has occurred: {error.message}</p>

  return (
    <p>
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
      <Heading>Hi people</Heading>
      <Text
        sx={{
          fontSize: 'xl',
          my: 5,
        }}
      >
        Welcome to your new Gatsby site.
      </Text>
      <Text sx={{ fontSize: 'xl', my: 5 }}>
        Now go build something great.
      </Text>
      <InternalLink
        to={`/posts/${data.slug}` || `/posts/blog`}
        sx={{
          textDecoration: 'underline',
          color: 'purple.500',
          fontSize: 'xl',
        }}
      >
        Go to garden
      </InternalLink>
    </p>
  )
}

export default IndexPage
