const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

const siteMetadata = {
  title: `Scott Spence`,
  description: `A detailed account of what Scott Spence is about.
Posts on TypeScript, Unit testing, with React testing library and Jest. End to end testing with Cypress.`,
  lastBuildDate: new Date(Date.now()).toISOString(),
  siteUrl: `https://scottspence.com`,
  authorName: `Scott Spence`,
  twitterUsername: `@spences10`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
}
module.exports = {
  siteMetadata,
  plugins: [
    `babel-preset-gatsby`,
    `gatsby-plugin-mdx-embed`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-use-dark-mode`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener`,
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
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Work Sans',
            variable: true,
            weights: ['200..800'],
          },
          {
            family: 'Hepta Slab',
            variable: true,
            weights: ['400..900'],
          },
          {
            family: 'Inconsolata',
            variable: true,
            weights: ['200..900'],
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
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [`/2020/*`, `/2021/*`],
    //   },
    // },
    `gatsby-plugin-remove-serviceworker`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: siteMetadata.title,
    //     short_name: siteMetadata.title,
    //     start_url: `/`,
    //     background_color: `#336699`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `static/favicon.png`, // This path is relative to the root of the site.
    //   },
    // },
  ],
}
