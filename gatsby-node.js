const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

const createTagPage = (createPage, posts) => {
  const tagTemplate = path.resolve(`src/templates/tag.js`)

  const postsByTag = {}

  posts.forEach(post => {
    const {
      node: {
        frontmatter: { tags, private },
      },
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

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)
  const projectTemplate = path.resolve(`src/templates/project.js`)
  const { data, errors } = await graphql(`
    {
      posts: allMdx(
        filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      ) {
        edges {
          node {
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
      projects: allMdx(
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              repo
              demo
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (errors) throw errors

  const posts = data.posts.edges
  const projects = data.projects.edges

  createTagPage(createPage, posts)
  // createProjectPages(createPage, posts)

  // create page for each mdx file
  posts.forEach(post => {
    createPage({
      path: post.node.fields.slug,
      component: postTemplate,
      context: {
        slug: post.node.fields.slug,
      },
    })
  })

  projects.forEach(post => {
    createPage({
      path: post.node.fields.slug,
      component: projectTemplate,
      context: {
        slug: post.node.fields.slug,
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
