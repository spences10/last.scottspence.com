const siteMetadata = {
  title: `Scott Spence`,
  description: `Scott's Digital Garden.`,
  lastBuildDate: new Date(Date.now()).toISOString(),
  siteUrl: `https://scottspence.com`,
  twitterUsername: `@spences10`,
}
module.exports = {
  siteMetadata,
  plugins: [
    `@pauliescanlon/gatsby-mdx-embed`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `MDXImages`,
        path: `${__dirname}/content`,
      },
      __key: `${__dirname}/content`,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:400,500,600,700`,
          `pridi\:400,700`,
          `space mono\:400,700`,
        ],
        display: 'swap',
      },
    },
  ],
}
