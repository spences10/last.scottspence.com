import { Link } from 'gatsby'
import React from 'react'

export default ({ pageContext }) => {
  const { posts, tag } = pageContext
  return (
    <>
      <h2>Posts about {tag}</h2>
      <ul>
        {posts.map(
          ({ id, frontmatter: { title }, fields: { slug } }) => {
            return (
              <li key={id}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          }
        )}
      </ul>
    </>
  )
}
