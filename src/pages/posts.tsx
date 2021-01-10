import Fuse from 'fuse.js'
import { graphql } from 'gatsby'
import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react'
import Highlighter from 'react-highlight-words'
import SEO from 'react-seo-component'
import { Box, Container, Input, Label } from 'theme-ui'
import { InternalLink } from '../components/internal-link'
import { useSiteMetadata } from '../hooks/site-metadata'
import { ogImageUrl } from '../util/get-og-image'

interface IndexPost {
  id: string
  slug: string
  excerpt: string
  frontmatter: {
    date: string
    title: string
    tags: []
  }
}

interface IndexPageProps {
  data: {
    allMdx: {
      // I've abstracted the keys within "nodes" so we can use the IndexPost interface elsewhere, the [] after IndexPost denote its an array of this shape
      nodes: IndexPost[]
      // You could also type it like this
      // nodes: {
      //   id: string
      //   slug: string
      //   excerpt: string
      //   frontmatter: {
      //     date: string
      //     title: string
      //   }
      // }[]
    }
  }
}

// IndexPage is of type FunctionComponent which accets a generic. <T>
// A generica can be of any shape but in your case its the shape of the data object which you define in the page query below
const GardenIndex: FunctionComponent<IndexPageProps> = ({ data }) => {
  const {
    title,
    description,
    siteUrl,
    twitterUsername,
    authorName,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()
  const { nodes } = data.allMdx
  const [query, updateQuery] = useState('')

  const options = {
    includeScore: true,
    keys: ['frontmatter.title', 'excerpt', 'frontmatter.tags'],
    includeMatches: true,
    threshold: 0.2,
  }
  const fuse = new Fuse(nodes, options)
  const results = fuse.search(query)
  const searchRef = useRef<HTMLInputElement>(null)
  const searchResults = query
    ? results.map(result => result.item)
    : nodes

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    updateQuery(event.currentTarget?.value)
  }

  useEffect(() => {
    if (searchRef.current != null) searchRef.current.focus()
  }, [])

  return (
    <>
      <SEO
        title={`Index of posts!`}
        titleTemplate={title}
        description={description}
        image={ogImageUrl(
          authorName,
          'scottspence.com',
          `Scott's knowledge pamphlet!`
        )}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Box as="form">
        <Label
          htmlFor="search"
          sx={{ fontSize: 'xl', fontFamily: 'body' }}
        >
          Search:
        </Label>
        <Input
          name="search"
          id="search"
          type="text"
          placeholder="Search posts!"
          value={query}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onSearch(event)
          }
          ref={searchRef}
          sx={{ fontSize: 'xl', fontFamily: 'body' }}
        />
      </Box>
      <Box as="ul" role="list" variant="styles.postsUl">
        {searchResults.map(post => {
          const {
            id,
            slug,
            frontmatter: { title },
            excerpt,
          } = post
          return (
            <Box
              as="li"
              key={id}
              role="listitem"
              variant="styles.postsLi"
            >
              <InternalLink to={`/${slug}`}>
                <Container m="0">
                  <Box as="h2" variant="styles.h2">
                    <Highlighter
                      searchWords={[query]}
                      autoEscape={true}
                      textToHighlight={title}
                      highlightClassName="highlight"
                    >
                      {title}
                    </Highlighter>
                  </Box>
                  <Box
                    as="p"
                    sx={{
                      fontSize: 'xl',
                    }}
                  >
                    <Highlighter
                      searchWords={[query]}
                      autoEscape={true}
                      textToHighlight={excerpt}
                      highlightClassName="highlight"
                    >
                      {excerpt}
                    </Highlighter>
                  </Box>
                </Container>
              </InternalLink>
            </Box>
          )
        })}
      </Box>
    </>
  )
}

export default GardenIndex

// This shape is up to you, it has nothing to do with Gatsby or MDX. You define the query shape however you want
// A Gatsby page query return it inside a "data" object
// It the data object you need to type. As seen above in IndexPageProps
export const query = graphql`
  {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { private: { eq: false } } }
    ) {
      nodes {
        id
        slug
        excerpt
        frontmatter {
          date
          title
          tags
        }
      }
    }
  }
`
