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
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            layout: CONSTRAINED
          )
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
            src="https://res.cloudinary.com/defkmsrpw/image/upload/q_auto,f_auto,w_60/v1614959623/wave.gif"
          />
        </Wavy>
      </H1>
    </>
  )
}
