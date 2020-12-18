import { graphql, useStaticQuery } from 'gatsby'

type SiteMetadataProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
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
            author
          }
        }
      }
    `
  )
  return site.siteMetadata
}
