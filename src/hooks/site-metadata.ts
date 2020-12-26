import { graphql, useStaticQuery } from 'gatsby'

type SiteMetadataProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
      lastBuildDate: string
      siteUrl: string
      authorName: string
      twitterUsername: string
      siteLanguage: string
      siteLocale: string
    }
  }
}

export const useSiteMetadata = () => {
  const { site } = useStaticQuery<SiteMetadataProps>(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            lastBuildDate
            siteUrl
            authorName
            twitterUsername
            siteLanguage
            siteLocale
          }
        }
      }
    `
  )
  return site.siteMetadata
}
