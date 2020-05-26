import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import { H1 } from './page-elements'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  justify-content: center;
  padding-bottom: 200px;
  div {
    margin: 0 auto;
    position: relative;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    ${down('sm')} {
      height: 150px;
      width: 150px;
    }
  }
  h1 {
    position: absolute;
    bottom: 30%;
  }
`

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
    <Wrapper>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="mug face image"
      />
      <H1>
        Hello World!
        <span role="img" aria-label="waving hand emoji">
          👋
        </span>
      </H1>
    </Wrapper>
  )
}
