import { graphql, Link } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'
import { H2, P } from '../components/page-elements'

const Wrapper = styled.main`
  article {
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.colors.gray[900]};
    padding: ${({ theme }) => theme.spacing[4]};
    h2 {
      margin-top: 20px;
    }
  }
`

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
    <Wrapper>
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
          frontmatter: { title },
        } = post

        return (
          <article key={id}>
            <Link to={slug}>
              <H2>{title}</H2>
              <P>{excerpt}</P>
            </Link>
          </article>
        )
      })}
    </Wrapper>
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
        excerpt(pruneLength: 100)
        frontmatter {
          title
        }
        timeToRead
        fields {
          slug
        }
      }
    }
  }
`
