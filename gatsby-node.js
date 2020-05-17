const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

const createTagPage = (createPage, posts) => {
  const tagTemplate = path.resolve(`src/templates/tag.js`)

  const postsByTag = {}

  posts.forEach(post => {
    if (post.frontmatter.tags) {
      post.frontmatter.tags.forEach(tag => {
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

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)
  return graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            tags
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
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
      value: `https://github.com/spences10/thelocalhost/edit/authoring${node.fileAbsolutePath.replace(
        __dirname,
        ''
      )}`,
    })
  }
}
