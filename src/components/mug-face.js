import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { H1 } from './page-elements'

export const MugFace = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        // fadeIn={false}
        // loading="eager"
        alt="mug face image"
      />
      <H1>
        Hello World!
        <span role="img" aria-label="waving hand emoji">
          👋
        </span>
      </H1>
    </>
  )
}
