// import { Link as GatsbyLink } from 'gatsby'
import React, { FunctionComponent } from 'react'
import SEO from 'react-seo-component'
import { Box, Text } from 'theme-ui'
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
      <Box as="h2" variant="styles.h2">
        Hi people
      </Box>
      <Text variant="styles.p">Welcome to your new Gatsby site.</Text>
      <Text variant="styles.p">Now go build something great.</Text>
      <Box as="p" variant="styles.p">
        <InternalLink to={`/posts/`}>Go to garden</InternalLink>
      </Box>
    </p>
  )
}

export default IndexPage
