import { graphql, Link } from 'gatsby'
import React from 'react'

export default ({ data }) => {
  return (
    <>
      <>
        {data.allMdx.nodes.map(
          ({ id, excerpt, frontmatter, fields }) => (
            <article key={id}>
              <Link to={fields.slug}>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <p>{excerpt}</p>
              </Link>
            </article>
          )
        )}
      </>
    </>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { private: { eq: false } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`
