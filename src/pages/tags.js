import { graphql, Link } from 'gatsby'
import React from 'react'
import { H2, Li, Ul } from '../components/page-elements'

export default ({
  data: {
    allMdx: { group },
  },
}) => (
  <>
    <H2>Tags</H2>
    <Ul>
      {group.map(({ fieldValue, totalCount }) => (
        <Li key={fieldValue}>
          <Link to={`/tags/${fieldValue}/`}>
            {fieldValue} ({totalCount})
          </Link>
        </Li>
      ))}
    </Ul>
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
