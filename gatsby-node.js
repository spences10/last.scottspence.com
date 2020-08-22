const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

const createTagPage = (createPage, posts) => {
  const tagTemplate = path.resolve(`src/templates/tag.js`)

  const postsByTag = {}

  posts.forEach(post => {
    const {
      frontmatter: { tags, private },
    } = post
    if (tags && !private) {
      tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }
        postsByTag[tag].push(post)
      })
    }
  })

  const tags = Object.keys(postsByTag)

  tags.forEach(tag => {
    const posts = postsByTag[tag]

    createPage({
      path: `tags/${tag}`,
      component: tagTemplate,
      context: {
        posts,
        tag,
      },
    })
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)
  const result = await graphql(`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      ) {
        nodes {
          id
          frontmatter {
            tags
            title
            private
          }
          fields {
            slug
            editLink
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(
      `Error loading posts`,
      JSON.stringify(result.errors)
    )
  }

  const posts = result.data.allMdx.nodes

  createTagPage(createPage, posts)

  // create page for each mdx file
  posts.forEach(post => {
    createPage({
      path: post.fields.slug,
      component: postTemplate,
      context: {
        slug: post.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    createNodeField({
      name: `editLink`,
      node,
      value: `https://github.com/spences10/scottspence.com/edit/authoring${node.fileAbsolutePath.replace(
        __dirname,
        ''
      )}`,
    })
  }
}
