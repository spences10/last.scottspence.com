import { Link } from 'gatsby'
import React from 'react'
import { H2, Li, Ul } from '../components/page-elements'

export default ({ pageContext }) => {
  const { posts, tag } = pageContext
  return (
    <>
      <H2>Posts about {tag}</H2>
      <Ul>
        {posts.map(
          ({ id, frontmatter: { title }, fields: { slug } }) => {
            return (
              <Li key={id}>
                <Link to={slug}>{title}</Link>
              </Li>
            )
          }
        )}
      </Ul>
    </>
  )
}
