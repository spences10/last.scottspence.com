const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

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
    `gatsby-plugin-preact`,
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
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `projects`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`400`, `500`, `600`, `700`],
          },
          {
            family: `Pridi`,
            variants: [`400`, `700`],
          },
          {
            family: `Space Mono`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
  ],
}
