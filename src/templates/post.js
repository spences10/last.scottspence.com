import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React, { useRef } from 'react'
import SEO from 'react-seo-component'
// import { down } from 'styled-breakpoints'
// import styled from 'styled-components'
import { BackToTop } from '../components/back-to-top'
// import { A, H1, Small } from '../components/page-elements'
import { PopularPosts } from '../components/popular-posts'
// import {
//   focusOutline,
//   negMargin,
//   PostInfo,
//   rainbowAnimation,
//   Toc,
// } from '../components/shared-styles'
import { Share } from '../components/social-share'
import { useAnalytics } from '../contexts/event-tracking'
import { useOnScreen } from '../hooks/use-on-screen'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { ogImageUrl } from '../util/build-og-image-url'

// const PostWrapper = styled.article`
//   padding-bottom: ${({ theme }) => theme.spacing[20]};
//   h1 {
//   }
//   small {
//   }
// `

// const TagsWrapper = styled.section`
//   display: grid;
//   grid-auto-flow: column;
//   grid-gap: ${({ theme }) => theme.spacing[3]};
//   grid-auto-columns: max-content;
//   margin-top: ${({ theme }) => theme.spacing[2]};
//   letter-spacing: 2px;
//   :after {
//     content: ' ';
//   }
//   a {
//     text-decoration: none;
//     :hover {
//       text-decoration: underline;
//     }
//     ${focusOutline}
//   }
//   small {
//     font-weight: ${({ theme }) => theme.fontWeight.bold};
//     ${rainbowAnimation}
//   }
// `

// const Private = styled.div`
//   background-color: var(
//     --colour-warn,
//     ${({ theme }) => theme.colors.red[500]}
//   );
//   color: var(--colour-on-warn);
//   font-size: ${({ theme }) => theme.fontSize.lg};
//   font-family: ${({ theme }) => theme.fontFamily.mono};
//   border-radius: ${({ theme }) => theme.borderRadius.default};
//   padding: ${({ theme }) => theme.spacing[3]};
//   margin: ${({ theme }) => theme.spacing[3]};
//   text-align: center;
//   font-style: italic;
//   ${negMargin}
//   span {
//     font-style: normal;
//     padding: 0 ${({ theme }) => theme.spacing[5]};
//     ${down('sm')} {
//       padding: 0;
//       &:before {
//         content: ' ';
//       }
//       &:after {
//         content: ' ';
//       }
//     }
//   }
// `

export default ({ data }) => {
  const fa = useAnalytics()
  const {
    title: siteTitle,
    siteUrl,
    authorName,
    twitterUsername,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()
  const {
    frontmatter: { title, private: isPrivate, date, tags },
    fields: { editLink, slug },
    timeToRead,
    body,
    tableOfContents,
    excerpt,
  } = data.mdx
  const ref = useRef()
  const onScreen = useOnScreen(ref)

  return (
    <>
      <SEO
        title={title}
        titleTemplate={siteTitle}
        description={excerpt}
        image={ogImageUrl(authorName, 'scottspence.com', title)}
        pathname={`${siteUrl}${slug}`}
        article={true}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <article>
        {isPrivate && (
          <div>
            <span role="img" aria-label="shushing face">
              🤫
            </span>
            This is a private post
            <span role="img" aria-label="eyes">
              👀
            </span>
          </div>
        )}
        {typeof tableOfContents.items === 'undefined' ? null : (
          <div>
            <h3>Table of contents</h3>
            <ul>
              {tableOfContents.items.map(i => (
                <li key={i.url}>
                  <a href={i.url} key={i.url}>
                    {i.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <section ref={ref}>
          <h1>{title}</h1>
        </section>
        <div>
          <span className="postTimeToRead">
            {timeToRead * 2} minutes to read
          </span>
          <span className="postEditOnGitHub">
            <a
              onClick={() => fa('8C4MCGZM')}
              href={editLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Edit on GitHub
            </a>
          </span>
        </div>
        <section>
          {tags.map(t => (
            <small>
              <Link to={`/tags/${t}`}>{t}</Link>
            </small>
          ))}
        </section>
        <MDXRenderer>{body}</MDXRenderer>
        <BackToTop visible={onScreen} />
      </article>
      <Share
        url={`${siteUrl}${slug}`}
        title={title}
        twitterHandle={twitterUsername}
      />
      <PopularPosts />
    </>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        private
        tags
      }
      fields {
        slug
        editLink
      }
    }
  }
`
