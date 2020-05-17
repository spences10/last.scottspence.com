import { graphql, Link } from 'gatsby'
import React, { useState } from 'react'

export default ({ data }) => {
  // https://www.aboutmonica.com/blog/create-gatsby-blog-search-tutorial
  const allPosts = data.allMdx.nodes

  const emptyQuery = ''

  const [state, stateSet] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = e => {
    const query = e.target.value
    const posts = data.allMdx.nodes || []

    const filteredData = posts.filter(post => {
      const { title, tags } = post.frontmatter
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags.join('').toLowerCase().includes(query.toLowerCase()))
      )
    })

    stateSet({ query, filteredData })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <>
      <>
        <input
          type="text"
          aria-label="Search"
          placeholder="Type to filter posts..."
          onChange={handleInputChange}
        />
        <span>{Object.keys(posts).length}</span>
        {posts.map(post => {
          const {
            id,
            excerpt,
            fields: { slug },
            frontmatter: { title, date },
          } = post

          return (
            <article key={id}>
              <Link to={slug}>
                <h1>{title}</h1>
                <p>{date}</p>
                <p>{excerpt}</p>
              </Link>
            </article>
          )
        })}
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
