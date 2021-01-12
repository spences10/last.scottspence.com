import React from 'react'
import styled from 'styled-components'
import 'victormono'
import { P } from './page-elements'
import { Link, rainbowAnimation } from './shared-styles'

const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing[8]};
  a {
    font-family: 'Vicror Mono', 'Courier New', Courier, monospace;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-top: ${({ theme }) => theme.spacing[8]};
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    display: block;
    text-align: center;
    ${rainbowAnimation}
  }
`
export const Newsletter = () => {
  return (
    <Wrapper>
      <P>
        If you're interested in occasional update from me about what
        I'm working on and sharing helpful information you can sign up
        to my newsletter
      </P>

      <P>
        I'm giving away sticker packs every Monday, Wednesday and
        Friday over January and February, to random newsletter
        subscribers.
      </P>

      <P>
        The important dev related content, directly to your inbox (for
        free).
      </P>
      <Link to="/newsletter">Newsletter signup...</Link>
    </Wrapper>
  )
}
