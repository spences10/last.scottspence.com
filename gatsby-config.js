const siteMetadata = {
  title: `Scott Spence`,
  description: `Scott Spence's digital Garden.`,
}

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
  ],
}
