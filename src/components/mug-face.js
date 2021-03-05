import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { H1 } from './page-elements'

const Wavy = styled.span`
  img {
    height: 40px;
    width: 40px;
  }
`

export const MugFace = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED)
        }
      }
    }
  `)

  return (
    <>
      <GatsbyImage
        image={data.placeholderImage.childImageSharp.gatsbyImageData}
        alt="mug face"
      />
      <H1>
        Hello World!
        <Wavy>
          <img
            alt="waving hand emoji"
            src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
          />
        </Wavy>
      </H1>
    </>
  )
}
