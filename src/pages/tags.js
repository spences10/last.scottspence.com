import { graphql, Link } from 'gatsby'
import React from 'react'

export default ({
  data: {
    allMdx: { group },
  },
}) => (
  <>
    <h2>Tags</h2>
    <ul>
      {group.map(({ fieldValue, totalCount }) => (
        <li key={fieldValue}>
          <Link to={`/tags/${fieldValue}/`}>
            {fieldValue} ({totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </>
)

export const query = graphql`
  query SITE_TAGS_QUERY {
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      nodes {
        id
        fields {
          slug
        }
      }
    }
  }
`
