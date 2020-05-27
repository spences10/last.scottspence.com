import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            lastBuildDate
            siteUrl
            twitterUsername
            authorName
            siteLanguage
            siteLocale
          }
        }
      }
    `
  )
  return site.siteMetadata
}
